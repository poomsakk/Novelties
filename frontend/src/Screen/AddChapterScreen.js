import { useState } from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import { useNavigate, useParams } from 'react-router-dom';
import { api } from '../api';
import Swal from 'sweetalert2';

export default function AddChapterScreen() {
    const { id } = useParams()
    const [name, setName] = useState("")
    const [price, setPrice] = useState(0)
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
                <h1>เพิ่มตอนใหม่</h1>
                <br />
                <Form onSubmit={handleSubmit}>
                    <Row className="mb-3">
                        <Col xs={6}>
                            <Form.Group as={Col} controlId="formGridEmail">
                                <Form.Label>ชื่อตอน</Form.Label>
                                <Form.Control value={name} onChange={(e) => setName(e.target.value)} type="text" placeholder="ใส่ชื่อตอน" />
                            </Form.Group>
                        </Col>
                        <Col>
                            <Form.Group as={Col} controlId="formGridState">
                                <Form.Label>ราคาซื้อถาวร</Form.Label>
                                <Form.Select
                                    value={price}
                                    onChange={e => {
                                        setPrice(e.target.value)
                                        console.log(e.target.value);
                                    }}>
                                    <option value={0}>ฟรี</option>
                                    <option value={5}>5 coin</option>
                                </Form.Select>
                            </Form.Group>
                        </Col>
                        <Col>
                            <Form.Group as={Col} controlId="formGridPassword">
                                <Form.Label>ราคาเช่าต่อตอน (20% ของราคาซื้อ)</Form.Label>
                                <Form.Control type="text" placeholder={price !== 0 ? price / 5 + " coin" : "ฟรี"} disabled />
                            </Form.Group>
                        </Col>
                    </Row>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                        <Form.Label>เนื้อหา</Form.Label>
                        <Form.Control value={detail} onChange={(e) => setDetail(e.target.value)} as="textarea" rows={3} />
                    </Form.Group>
                    <Button type="submit">Submit</Button>
                </Form>
            </Container>
        </>
    )
};