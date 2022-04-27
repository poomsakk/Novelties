import { Container, ToggleButton, Row, Col, ListGroup, Badge, Figure } from 'react-bootstrap';
import { useCallback, useEffect, useState } from 'react';
import { api } from '../api';
import { isLogin } from '../auth';
import { useNavigate, useParams } from 'react-router-dom';
import Swal from 'sweetalert2';
import { useSelector } from 'react-redux';


export default function NovelScreen() {
    const [novel, setNovel] = useState({});
    const { id } = useParams()
    const [favChecked, setFavChecked] = useState(false);
    const navigate = useNavigate()
    const { userInfo } = useSelector(state => state.userInfo)

    const handleSelChap = useCallback(
        (chapid) => () => {
            // console.log(val)// val = string
            // navigate to "/novel/:novelId/:chapId"
            if (ownedChap(chapid) <= 0) {
                navigate(`/novel/${id}/paychapter/${chapid}`)
            }
            else {
                navigate(`/novel/${id}/read/${chapid}`)
            }
        },
        [navigate, id]
    )

    function handleFav(e) {
        setFavChecked(e.currentTarget.checked)
    }

    // function amIhaveThisChapter(novelid) {
    //     var item = userInfo.ownChap.find(nov => nov.chapId === novelid)
    //     return item ? item : false
    // }

    function renderChapterStatus(diffTime) {
        if (diffTime < 0) {
            return (<Badge bg="warning" pill>หมดอายุการเช่า</Badge>)
        } else if (diffTime === 0) {
            return (<Badge bg="danger" pill>ยังไม่เป็นเจ้าของ</Badge>)
        } else if (diffTime === 999999999) {
            return (<Badge bg="success" pill>คุณเป็นเจ้าของตอนนี้แล้ว</Badge>)
        }
        else {
            const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
            return <Badge bg="secondary" pill>เช่าแล้ว เวลาที่เหลือ {diffDays} วัน</Badge>
        }
    }

    function ownedChap(chapterID) {
        if (userInfo.ownChap.find(({ chapId }) => chapId === chapterID) === undefined) {
            return 0
        } else {
            const exp = userInfo.ownChap.find(({ chapId }) => chapId === chapterID).expDate
            var strexp = exp.split("T")[0]
            strexp = strexp.split("-")
            const truthexpdate = new Date(`${strexp[1]}/${strexp[2]}/${strexp[0]}`);
            const timenow = Date.now()
            const time1970 = new Date(0)
            if (truthexpdate - time1970 + 25200000 === 0) {
                return 999999999
            }
            const diffTime = (truthexpdate - timenow);
            return diffTime
        }
    }

    async function getNovel() {
        await api.get(`/api/novels/${id}`).then((response) => setNovel(response.data));
    }

    useEffect(() => {
        if (!isLogin()) {
            Swal.fire('Need to login first', '', 'info')
            navigate("/login")
        }
        setNovel({})
        getNovel()
    }, [navigate])

    return (
        <>
            <br /><br />
            <Container fluid="md">
                <Row>
                    <h1 className="text-center">{novel.name}</h1>
                </Row>
                <Row>
                    <Col></Col>
                    <Col>
                        <br />
                        <Figure.Image
                            width={307}
                            height={462}
                            alt={novel.name}
                            src={novel.image}
                        />
                    </Col>
                    <Col></Col>
                </Row>
                <br />
                <Row>
                    <Col md={{ span: 3, offset: 3 }}></Col>
                    <Col md={{ span: 3, offset: 3 }}>
                        <ToggleButton
                            className="mb-2"
                            id="toggle-check"
                            type="checkbox"
                            variant="outline-success"
                            checked={favChecked}
                            value="1"
                            onChange={handleFav}
                        >
                            {favChecked ? "Remove from my favorite" : "add to my favorite"}
                        </ToggleButton>
                    </Col>
                </Row>
                <Row>
                    <h3>เรื่องย่อ</h3>
                    <Col >
                        <div className='content-summary'>
                            {novel.title}
                        </div>
                    </Col>

                </Row>
                <br />
                <Row>
                    <Col></Col>
                    <Col sm={9}>
                        <ListGroup defaultActiveKey="#link1">
                            {novel.allChapter?.map((chap, index) => {
                                return <ListGroup.Item action onClick={handleSelChap(chap._id)} className="d-flex justify-content-between align-items-start" key={index}>

                                    <div className="ms-2 me-auto">{index + 1}. {chap.name}</div>
                                    {
                                        chap.price === 0 && ownedChap(chap._id) === 0 ? <Badge bg="info" pill>อ่านฟรี</Badge> : null
                                    }
                                    {
                                        renderChapterStatus(ownedChap(chap._id))
                                    }
                                    <Badge bg="primary" pill>{chap.viewers} views</Badge>
                                </ListGroup.Item>
                            })}
                        </ListGroup>
                    </Col>
                    <Col></Col>
                </Row>
            </Container>
            <br /><br />
        </>
    )
};