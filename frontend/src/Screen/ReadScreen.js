import { useEffect, useState, useCallback } from 'react';
import { Container, Row, Col, Button, Offcanvas, ListGroup, Badge } from 'react-bootstrap';
import { useNavigate, useParams } from 'react-router-dom';
import Swal from 'sweetalert2';
import { api } from '../api';
import { isLogin, isOwnThisChap } from '../auth';
import { useSelector } from 'react-redux';

export default function ReadScreen() {
    const [novel, setNovel] = useState({});
    const { id } = useParams()
    const { chapid } = useParams()
    const navigate = useNavigate()
    const [chapter, setChapter] = useState({})
    const { userInfo } = useSelector(state => state.userInfo)
    //http://localhost:5000/api/novels/62665bc2e566635f8c6647fc/getchapter/62665bcbe566635f8c664804

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

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

    async function getChapter() {
        await api.post(`/api/novels/${id}/getchapter/${chapid}`).then((response) => setChapter(response.data));
    }

    useEffect(() => {
        if (!isLogin()) {
            Swal.fire('Need to login first', '', 'info')
            navigate("/login")
        }
        if (!isOwnThisChap(chapid)) {
            Swal.fire('Need buy/rent to read this', '', 'info')
            navigate(`/novel/${id}`)
        }
        setChapter({})
        getChapter()
    }, [navigate])

    return (
        <>
            <Container>
                <br /><br /><br /><br />
                <Row className="justify-content-md-center">
                    <Col md="auto"><h1>READ PAGE</h1></Col>
                </Row>
                <h1>{chapter.name}</h1>
                <Row>
                    <Col>
                        <pre>
                            {chapter.detail}
                        </pre>
                    </Col>
                </Row>
                <br /><br /><br /><br />
                <Row>
                    <Col></Col>
                    <Col md="auto" classname="mt-3">
                        <Button className='me-2' onClick={handleShow}>All Chapter</Button>

                        <Offcanvas show={show} onHide={handleClose}>
                          <Offcanvas.Header closeButton>
                            <Offcanvas.Title>All Chapters</Offcanvas.Title>
                          </Offcanvas.Header>
                          <ListGroup defaultActiveKey="#link1">
                            {novel.allChapter?.map((chap, index) => {
                                  return <ListGroup.Item action onClick={handleSelChap(chap._id)} className="d-flex justify-content-between align-items-start" key={index}>
                                    <div className="ms-2 me-auto">{index + 1}. {chap.name}</div>
                                    {
                                        renderChapterStatus(ownedChap(chap._id))
                                    }
                                </ListGroup.Item>
                            })}
                          </ListGroup>
                          <Offcanvas.Body>
                            Some text as placeholder. In real life you can have the elements you
                            have chosen. Like, text, images, lists, etc.
                          </Offcanvas.Body>
                        </Offcanvas>
                    </Col>
                    <Col></Col>
                </Row>
                <br /><br /><br /><br />
            </Container>
        </>
    )
}