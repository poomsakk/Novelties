import { Card,Container,ListGroup,Badge,Col,Row, CardGroup,Button } from 'react-bootstrap';
import data from "../sampleData.js";
import React from 'react';



export default function PopularScreen() {
    const novels = data.Novel
    novels.sort((a,b) => (a.allViewers < b.allViewers) ? 1 : -1)
    console.log(novels)
    
    return (
        <>
            <h1>Popular</h1>
            {/* <Button variant="danger" onClick={handle}>del</Button> */}
            <br></br>
        
        <Container>    
                {novels.map((novel) => {
                    // novel.allViewers.sort()
                    return <CardGroup>
                    <Card>
                        <Card.Img variant="top" src={novel.image}/>
                    </Card>
                    <Card>
                        <Card.Title>{novel.name}</Card.Title>
                        <Card.Text>{novel.detail}</Card.Text>
                        <Row>
                        {novel.category.map((categories) => {
                            return <Col><Button variant="outline-danger" style={{fontSize : 15}}>{categories.name}</Button></Col>   
                        })}
                        </Row>
                        <ListGroup variant="flush">
                            <ListGroup.Item style={{fontSize : 15}}><Badge bg="primary">{novel.allViewers}</Badge> views</ListGroup.Item>
                            <ListGroup.Item style={{fontSize : 15}}>Rating <Badge bg="warning">{novel.rating.allScore / novel.rating.count}</Badge></ListGroup.Item>
                            <ListGroup.Item style={{fontSize : 15}}> Chapter : {novel.allChapter.length}</ListGroup.Item>
                        </ListGroup>
                    </Card>
                    </CardGroup>
                {/* </Card> */}
                })}

           
            <br /><br /><br /><br />
        
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