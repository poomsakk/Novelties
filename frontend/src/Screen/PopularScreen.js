import { Card,Container,ListGroup,Badge,Col,Row } from 'react-bootstrap';
import data from "../sampleData.js";
import React from 'react';



export default function PopularScreen() {
    const novels = data.Novel
    const handle = (e) => {
        console.log(novels)
    }
    return (
        <>
            <h1>Popular</h1>
            {/* <Button variant="danger" onClick={handle}>del</Button> */}
            <br></br>
        <Container>
            <Row xs={1} md={5} className="g-4">
                {novels.map((novel) => {
                    // novel.allViewers.sort()
                    return <Col>
                        <Card>
                            <Card.Img variant="top" src={novel.image} />
                            <Card.Body>
                                <Card.Title>{novel.name}</Card.Title>
                                <Card.Text>เรื่องย่อ...</Card.Text>
                                <ListGroup variant="flush">
                                    <ListGroup.Item><Badge bg="primary">{novel.allViewers}</Badge> views</ListGroup.Item>
                                    <ListGroup.Item>Rating <Badge bg="warning">{novel.rating.allScore / novel.rating.count}</Badge></ListGroup.Item>
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
    )
};

// {/* <div>
//                 <img src = {data.Novel[1].image} height={200} width={200}/>
//                 <p>views = {user.allViewers}</p>
//                 <p>chapters = {novel}</p>
//                 <p>{data.Novel[1].image}</p>
//             </div> */}