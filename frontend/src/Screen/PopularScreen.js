import { Button,Form,Col,Row } from 'react-bootstrap';
import data from "../sampleData.js";
import React from 'react';


export default function PopularScreen() {
    const user = data.Novel[0]
    const novel = data.Novel[0].allChapter.length
    const handle = (e) => {
        console.log(user)
    }
    return (
        <>
            <h1>Popular</h1>
            {/* <Button variant="danger" onClick={handle}>del</Button> */}
            <Form>
                <Row>
                    <Col>
                        <img src = {data.Novel[0].image} height={200} width={200}/>
                    </Col>
                    <Col>
                        <Row>
                            <p>
                                {' '}
                                name = {data.Novel[0].name}


                                {' '}
                            </p>
                        </Row>
                        <Row>
                            <p>views = {user.allViewers}</p>
                        </Row>
                    </Col>
                    <Col>
                    <p>chapters = {novel}</p>
                    </Col>
                </Row>
                <Row>
                    <Col>
                    
                    </Col>
                </Row>
            </Form>
        </>
    )
};

{/* <div>
                <img src = {data.Novel[1].image} height={200} width={200}/>
                <p>views = {user.allViewers}</p>
                <p>chapters = {novel}</p>
                <p>{data.Novel[1].image}</p>
            </div> */}