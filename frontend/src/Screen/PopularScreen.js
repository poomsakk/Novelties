import { Card, Container, ListGroup, Badge, Col, Row, CardGroup, Button } from 'react-bootstrap';
import React, { useCallback, useEffect, useState } from 'react';
import { api } from '../api.js';
import { isWriter } from '../auth.js';
import { useNavigate } from 'react-router-dom';

export default function PopularScreen() {
    //const novels = data.Novel
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
        novels.sort((a, b) => (a.allViewers < b.allViewers) ? 1 : -1)
    }, [navigate])

    return (
        <>
            <Container>
                <h1>Popular Novels</h1>
                {/* <Button variant="danger" onClick={handle}>del</Button> */}
                <br></br>
                {novels.map((novel) => {
                    // novel.allViewers.sort()
                    return <Row onClick={handleSelNovel(novel._id)} style={{ cursor: "pointer" }}>
                        <CardGroup>
                            <Col sm={2}>
                                <Card>
                                    <Card.Body>
                                        <Card.Img variant="top" src={novel.image} />
                                    </Card.Body>
                                </Card>
                            </Col>
                            <Col>
                                <Card >
                                    <Card.Body>
                                        <Card.Title style={{ fontSize: 24 }}>{novel.name}</Card.Title>
                                        <Card.Text style={{ fontSize: 15 }}>{novel.detail}</Card.Text>
                                        <Col>
                                            {novel.category.map((categories) => {
                                                return <Button variant="outline-danger" style={{ fontSize: 10 }}>{categories.name}</Button>
                                            })}
                                        </Col>
                                        <ListGroup variant="flush">
                                            <ListGroup.Item style={{ fontSize: 15 }}><Badge bg="primary">{novel.allViewers}</Badge> views</ListGroup.Item>
                                            <ListGroup.Item style={{ fontSize: 15 }}>Rating <Badge bg="warning">{novel.rating.allScore / novel.rating.count}</Badge></ListGroup.Item>
                                            <ListGroup.Item style={{ fontSize: 15 }}> Chapter : {novel.allChapter.length}</ListGroup.Item>
                                        </ListGroup>
                                    </Card.Body>
                                </Card>
                            </Col>
                        </CardGroup>
                    </Row>
                    // {/* </Card> */}
                })}
            </Container>
            <br /><br /><br /><br />
        </>

    )
};