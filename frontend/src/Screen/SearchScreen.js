import { Card, Row, Col, Container, ListGroup, Badge } from 'react-bootstrap';
import { useCallback, useEffect, useState } from 'react';
import { api } from '../api';
import { useNavigate, useParams } from 'react-router-dom';
import { isWriter } from '../auth';

export default function SearchScreen() {
    const [novels, setNovels] = useState([]);
    const navigate = useNavigate();
    const { searchtext } = useParams()

    const getNovel = () => {
        return api.get(`/api/novels/search/${searchtext}`).then((response) => setNovels(response.data));
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
    return <>
        <br></br>
        <Container>
            <h1>Search</h1>
            <br></br>
            {
                novels.length === 0 ? <h1>{searchtext} Not found</h1> : null
            }
            <Row xs={1} md={5} className="g-4">
                {novels?.map((novel) => {
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
    </>
}