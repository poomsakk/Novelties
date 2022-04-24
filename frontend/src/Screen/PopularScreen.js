import { Card,Container,ListGroup,Badge,Col,Row, CardGroup,Button } from 'react-bootstrap';
import data from "../sampleData.js";
import React from 'react';
import bookCover from "../images/bookCover.jpg"


export default function PopularScreen() {
    const novels = data.Novel
    novels.sort((a,b) => (a.allViewers < b.allViewers) ? 1 : -1)
    console.log(novels)
    
    return (
        <>
        <Container>    
        <h1>Popular Novels</h1>
            {/* <Button variant="danger" onClick={handle}>del</Button> */}
            <br></br>
                {novels.map((novel) => {
                    // novel.allViewers.sort()
                    return <Row>
                    <CardGroup>
                    <Col sm={2}>
                    <Card>
                        <Card.Body>
                            <Card.Img variant="top" src={bookCover}/>
                        </Card.Body>
                    </Card>
                    </Col>
                    <Col>
                    <Card>
                        <Card.Body>
                        <Card.Title style={{fontSize : 24}}>{novel.name}</Card.Title>
                        <Card.Text style={{fontSize : 15}}>{novel.detail}</Card.Text>
                        <Card.Text style={{fontSize : 15}}>Writer : </Card.Text>
                        <Col>
                        {novel.category.map((categories) => {
                            return <Button variant="outline-danger" style={{fontSize : 10}}>{categories.name}</Button>
                        })}
                        </Col>
                        <ListGroup variant="flush">
                            <ListGroup.Item style={{fontSize : 15}}><Badge bg="primary">{novel.allViewers}</Badge> views</ListGroup.Item>
                            <ListGroup.Item style={{fontSize : 15}}>Rating <Badge bg="warning">{novel.rating.allScore / novel.rating.count}</Badge></ListGroup.Item>
                            <ListGroup.Item style={{fontSize : 15}}> Chapter : {novel.allChapter.length}</ListGroup.Item>
                        </ListGroup>
                        </Card.Body>
                    </Card>
                    </Col>
                    </CardGroup>
                    </Row>
                    
                // {/* </Card> */}
                })}
        </Container>    
        </>
    )
};

{/* <Card.Img variant="top" src={novel.image} />
                            <Card.Body>
                            <Col>
                                <Card.Title>{novel.name}</Card.Title>
                                <Card.Text>เรื่องย่อ...</Card.Text>
                            </Col>
                            <Col>
                                <ListGroup variant="flush">
                                    <ListGroup.Item><Badge bg="primary">{novel.allViewers}</Badge> views</ListGroup.Item>
                                    <ListGroup.Item>Rating <Badge bg="warning">{novel.rating.allScore / novel.rating.count}</Badge></ListGroup.Item>
                                    <ListGroup.Item> Chapter : {novel.allChapter.length}</ListGroup.Item>
                                </ListGroup>
                            </Col>
                            </Card.Body> */}