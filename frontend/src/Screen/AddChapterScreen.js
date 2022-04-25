import { useState } from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import { useNavigate, useParams } from 'react-router-dom';
import { api } from '../api';
import Swal from 'sweetalert2';

export default function AddChapterScreen() {
    const { id } = useParams()
    const [name, setName] = useState("")
    const [price, setPrice] = useState(20)
    const [detail, setDetail] = useState("")
    const navigate = useNavigate()

    async function handleSubmit(e) {
        e.preventDefault();
        const { data } = await api.post(`/api/novels/${id}/addChapter`, { name, detail, price });
        if (data.message === "OK") {
            Swal.fire('Create Successful', '', 'success')
        } else {
            Swal.fire('Create Fail', '', 'error')
        }
        navigate("/writer/dashboard")
    }

    return (
        <>
            <Container>
                <br /><br /><br />
                <h1>Add new chapter</h1>
                <br />
                <h3>Detail</h3>
                <Form onSubmit={handleSubmit}>
                    <Row className="mb-3">
                        <Form.Group as={Col} controlId="formGridEmail">
                            <Form.Label>Chapter name</Form.Label>
                            <Form.Control value={name} onChange={(e) => setName(e.target.value)} type="text" placeholder="Enter chapter name" />
                        </Form.Group>
                        <Form.Group as={Col} controlId="formGridPassword">
                            <Form.Label>Price (coin)</Form.Label>
                            <Form.Control type="text" placeholder="20" disabled />
                        </Form.Group>
                    </Row>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                        <Form.Label>Chapter detail</Form.Label>
                        <Form.Control value={detail} onChange={(e) => setDetail(e.target.value)} as="textarea" rows={3} />
                    </Form.Group>
                    <Button type="submit">Submit</Button>
                </Form>
            </Container>
        </>
    )
};