import { Container, ToggleButton, Row, Col, ListGroup, Badge } from 'react-bootstrap';
import BookCover from '../images/bookCover.jpg'
import { useCallback, useEffect, useState } from 'react';
import { api } from '../api';
import { isLogin } from '../auth';
import { useNavigate, useParams } from 'react-router-dom';
import Swal from 'sweetalert2';

export default function NovelScreen() {
    const [novel, setNovel] = useState({});
    const { id } = useParams()
    const [favChecked, setFavChecked] = useState(false);
    const navigate = useNavigate()
    const handleSelChap = useCallback(
        (val) => () => {
            console.log(val)// val = string
            // navigate to "/novel/:novelId/:chapId"
        },
        [],
    )

    function handleFav(e) {
        setFavChecked(e.currentTarget.checked)
    }

    const getNovel = () => {
        api.get(`/api/novels/${id}`).then((response) => setNovel(response.data));
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
                        <img src={BookCover} fluid alt={novel.name} />
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
                        <div className='content-summary'>xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxcdddxxx</div>
                    </Col>

                </Row>
                <br />
                <Row>
                    <Col></Col>
                    <Col sm={9}>
                        <ListGroup defaultActiveKey="#link1">
                            {novel.allChapter?.map((chap, index) => {
                                return <ListGroup.Item action onClick={handleSelChap(chap.chapter)} className="d-flex justify-content-between align-items-start">
                                    <div className="ms-2 me-auto">{index + 1}. {chap.name}</div>
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