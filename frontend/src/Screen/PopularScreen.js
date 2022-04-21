import { Button,Form,Col,Row } from 'react-bootstrap';
import data from "../sampleData.js";
import React from 'react';


export default function PopularScreen() {
    const user = data.Novel[1]
    const novel = data.Novel[1].allChapter.length
    const handle = (e) => {
        console.log(user)
    }
    return (
        <>
            <h1>Popular</h1>
            <Button variant="danger" onClick={handle}>del</Button>
            <p>views = {user.allViewers}</p>
            <p>chapters = {novel}</p>
            <p>{data.Novel[1].image}</p>
            <Form>
                <Row>
                    <Col xs={7}>
                    <Form.Control placeholder="City" />
                    </Col>
                    <Col>
                    <Form.Control placeholder="State" />
                    </Col>
                    <Col>
                    <Form.Control placeholder="Zip" />
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