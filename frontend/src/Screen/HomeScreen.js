import { Carousel, Card, Row, Col, Container, ListGroup, Badge } from 'react-bootstrap';
import Gray from '../images/gray.png'
import e1 from '../images/event1.png'
import e2 from '../images/event2.png'
import e3 from '../images/event3.png'
import { useCallback, useEffect, useState } from 'react';
import { api } from '../api';
import { useNavigate } from 'react-router-dom';
import { isWriter } from '../auth';
import FooterScreen from './FooterScreen';

export default function HomeScreenContent() {
    const [novels, setNovels] = useState([]);
    const navigate = useNavigate();

    const getNovel = () => {
        return api.get("/api/novels")
            .then((response) => setNovels(response.data));
    }

    const handleSelNovel = useCallback(
        (novelId) => () => {
            // novelId is string
            navigate("/novel/" + novelId);
        },
        [navigate],
    )

    useEffect(() => {
        if (isWriter()) {
            navigate("/writer/dashboard")
        }
        setNovels([])
        getNovel()
    }, [navigate])

    return (<>
        <Carousel>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={e1}
                    alt="First slide"
                />
                <Carousel.Caption>

                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={e2}
                    alt="Second slide"
                />
                <Carousel.Caption>

                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={e3}
                    alt="Third slide"
                />
                <Carousel.Caption>

                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
        <br></br>
        <Container>
            <h2>
                All novels
            </h2>
        </Container>
        <br></br>
        <Container>
            <Row xs={1} md={5} className="g-4">
                {novels.map((novel) => {
                    return <Col>
                        <Card tag="a" onClick={handleSelNovel(novel._id)} style={{ cursor: "pointer" }}>
                            <Card.Img variant="top" src={novel.image} alt={novel.name} />
                            <Card.Body>
                                <Card.Title>{novel.name}</Card.Title>
                                <ListGroup variant="flush">
                                    <ListGroup.Item><Badge bg="primary">{novel.allViewers}</Badge> views</ListGroup.Item>
                                    <ListGroup.Item>Rating <Badge bg="warning">{parseInt(novel.rating.allScore / novel.rating.count)}</Badge></ListGroup.Item>
                                    < ListGroup.Item > Chapter : {novel.allChapter.length}</ListGroup.Item>
                                </ListGroup>
                            </Card.Body>
                        </Card>
                    </Col>
                })}

            </Row>
            <br /><br /><br /><br />
        </Container>
        <FooterScreen></FooterScreen>
    </>)
};

// {Array.from({ length: 15 }).map((_, idx) => (
//     <Col>
//         <Card>
//             <Card.Img variant="top" src={BookCover} />
//             <Card.Body>
//                 <Card.Title>Card title</Card.Title>
//                 <Card.Text>
//                     This is a longer card with supporting text below as a natural
//                     lead-in to additional content. This content is a little bit longer.
//                 </Card.Text>
//             </Card.Body>
//         </Card>
//     </Col>
// ))}