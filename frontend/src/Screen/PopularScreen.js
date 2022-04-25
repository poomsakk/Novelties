import { Card, Container, ListGroup, Badge, Col, CardGroup, Button } from 'react-bootstrap';
import data from "../sampleData.js";
import React from 'react';
import novelpic from "../images/bookCover.jpg"

export default function PopularScreen() {
    const novels = data.Novel
    novels.sort((a, b) => (a.allViewers < b.allViewers) ? 1 : -1)
    console.log(novels)

    return (
        <>
            <h1>Popular Novels</h1>
            {/* <Button variant="danger" onClick={handle}>del</Button> */}
            <br></br>

            <Container>
                {novels?.map((novel) => {
                    // novel.allViewers.sort()
                    return <CardGroup>
                        <Card>
                            <Card.Body>
                                <Card.Img variant="top" src={novelpic} />
                            </Card.Body>
                        </Card>
                        <Card>
                            <Card.Body>
                                <Card.Title style={{ fontSize: 24 }}>{novel.name}</Card.Title>
                                <Card.Text style={{ fontSize: 15 }}>{novel.detail}</Card.Text>
                                <Card.Text style={{ fontSize: 15 }}>Writer : </Card.Text>
                                <Col>
                                    {novel.category?.map((categories) => {
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
                    </CardGroup>
                })}


                <br /><br /><br /><br />

            </Container>
        </>
    )
};