import { Carousel, Card, Row, Col, Container, ListGroup, Badge } from 'react-bootstrap';
import Gray from '../images/gray.png'
import BookCover from '../images/bookCover.jpg'
import { useCallback, useEffect, useState } from 'react';
import { api } from '../api';
import { useNavigate } from 'react-router-dom';

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
        setNovels([])
        getNovel()
    }, [])

    return (<>
        <Carousel>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={Gray}
                    alt="First slide"
                />
                <Carousel.Caption>
                    <h3>First slide label</h3>
                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={Gray}
                    alt="Second slide"
                />

                <Carousel.Caption>
                    <h3>Second slide label</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={Gray}
                    alt="Third slide"
                />

                <Carousel.Caption>
                    <h3>Third slide label</h3>
                    <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
        <br></br>
        
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