import { useState } from 'react';
import { Button, Row, Col, Container, Form, Modal } from 'react-bootstrap';
import coin1 from "../images/coin4.png"
import Swal from 'sweetalert2';
import { api } from '../api';
import { useDispatch, useSelector } from 'react-redux';
import { changeUserInfo } from '../action/userAction';

export default function TopupScreen() {
    const [show, setShow] = useState(false);
    const [error_alert, setError_alert] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => { setShow(true); alertClose() };
    const alertClose = () => setError_alert(true);
    const alertShow = () => setError_alert(false);

    const [name, setName] = useState("");
    const [cardNumber, setCardNumber] = useState("");
    const [expMonth, setExpMonth] = useState("");
    const [expYear, setExpYear] = useState("");
    const [cvv, setCVV] = useState("");
    const [price, setPrice] = useState(0);
    const [coinRecieve, setCoinrecieve] = useState(0);

    const dispatch = useDispatch();
    const { userInfo } = useSelector(state => state.userInfo)
    const userid = userInfo._id
    const money = price
    const creditCartNumber = cardNumber

    async function handleSubmit(e) {
        e.preventDefault();
        if (name !== "") {
            console.log({ userid, money, coinRecieve, creditCartNumber })
            const { data } = await api.post("/api/order/buycoin", { userid, money, coinRecieve, creditCartNumber });
            setName("");
            setCardNumber("");
            setCVV("")
            setExpMonth("")
            setExpYear("")
            alertClose()
            if (data.message === "OK") {
                localStorage.clear()
                localStorage.setItem("userInfo", JSON.stringify(data))
                dispatch(changeUserInfo(data))
                Swal.fire('การชำระเงินเสร็จสิ้น', `ท่านได้รับเหรียญจำนวน ${coinRecieve} เหรียญ`, 'success')
            } else {
                Swal.fire('การชำระล้มเหลว', data.message, "warning")
            }
            handleClose()
        } else {
            alertShow()
        }
    }

    return (
        <>
            <Container>
                <br></br>
                <h1 style={{ fontSize: 60 }}>ระบบเติมเงิน
                    <img src={coin1} height={100} width={100} alt="coin" />
                </h1>
                <br></br>
                <br></br>
                <Row>

                    <Col sm={8} style={{ fontSize: 32 }}><img src={coin1} height={40} width={40} alt="coin" /> 40</Col>
                    <Col sm={4}>
                        <Button variant="primary" style={{ fontSize: 32 }} onClick={(e) => { handleShow(); setPrice(35); setCoinrecieve(40); }}>35 บาท</Button>
                    </Col>

                </Row>
                <br></br>
                <br></br>

                <Row>
                    <Col sm={8} style={{ fontSize: 32 }}><img src={coin1} height={40} width={40} alt="coin" /> 90</Col>
                    <Col sm={4}>
                        <Button variant="primary" style={{ fontSize: 32 }} onClick={(e) => { handleShow(); setPrice(70); setCoinrecieve(90); }}>70 บาท</Button>
                    </Col>
                </Row>
                <br></br>
                <br></br>

                <Row>
                    <Col sm={8} style={{ fontSize: 32 }}><img src={coin1} height={40} width={40} alt="coin" /> 135</Col>
                    <Col sm={4}>
                        <Button variant="primary" style={{ fontSize: 32 }} onClick={(e) => { handleShow(); setPrice(105); setCoinrecieve(135); }}>105 บาท</Button>
                    </Col>
                </Row>
                <br></br>
                <br></br>

                <Row>
                    <Col sm={8} style={{ fontSize: 32 }}><img src={coin1} height={40} width={40} alt="coin" /> 230</Col>
                    <Col sm={4}>
                        <Button variant="primary" style={{ fontSize: 32 }} onClick={(e) => { handleShow(); setPrice(140); setCoinrecieve(230); }}>140 บาท</Button>
                    </Col>
                </Row>
                <br></br>
                <br></br>

                <Row>
                    <Col sm={8} style={{ fontSize: 32 }}><img src={coin1} height={40} width={40} alt="coin" /> 700</Col>
                    <Col sm={4}>
                        <Button variant="primary" style={{ fontSize: 32 }} onClick={(e) => { handleShow(); setPrice(300); setCoinrecieve(700); }}>300    บาท</Button>
                    </Col>
                </Row>
            </Container>

            <Modal show={show} onHide={handleClose} >
                <Modal.Header closeButton>
                    <Modal.Title>รายละเอียดการชำระเงิน</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div class="text-center">
                        <div hidden={error_alert} class="alert alert-danger" role="alert" >กรุณากรอกข้อมูลให้ถูกต้อง</div>
                    </div>
                    <Form onSubmit={handleSubmit}>
                        <Form.Group className="mb-3" controlId="cardNum">
                            <Form.Label>หมายเลขบัตรเครดิต/เดบิต (Card Number) :</Form.Label>
                            <Form.Control value={cardNumber} type="text" maxlength="16" onChange={(e) => setCardNumber(e.target.value)} />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="cardName">
                            <Form.Label>ชื่อผู้ถือบัตร (Card Name) :</Form.Label>
                            <Form.Control value={name} type="text" maxlength="30" onChange={(e) => setName(e.target.value)} />
                        </Form.Group>

                        <div className="form-group row">
                            <label class="col-md-12">Card Exp. Date</label>
                            <div class="col-md-4">
                                <select value={expMonth} class="form-control" name="cc_exp_mo" size="0" onChange={(e) => setExpMonth(e.target.value)}>
                                    <option value="01">01</option>
                                    <option value="02">02</option>
                                    <option value="03">03</option>
                                    <option value="04">04</option>
                                    <option value="05">05</option>
                                    <option value="06">06</option>
                                    <option value="07">07</option>
                                    <option value="08">08</option>
                                    <option value="09">09</option>
                                    <option value="10">10</option>
                                    <option value="11">11</option>
                                    <option value="12">12</option>
                                </select>
                            </div>
                            <div class="col-md-4">
                                <select value={expYear} class="form-control" name="cc_exp_yr" size="0" onChange={(e) => setExpYear(e.target.value)}>
                                    <option value="2022">2022</option>
                                    <option value="2023">2023</option>
                                    <option value="2024">2024</option>
                                    <option value="2025">2025</option>
                                    <option value="2026">2026</option>
                                </select>
                            </div>
                            <div class="col-md-4">
                                <input value={cvv} type="text" class="form-control" autocomplete="off" maxlength="3" pattern="\d{3}" title="Three digits at back of your card" required="" placeholder="CVC" onChange={(e) => setCVV(e.target.value)}></input>
                            </div>
                        </div>

                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Container>
                        <Row>
                            <Col>
                                <h6 className='mt-2'>ยอดชำระ : {price} บาท</h6>
                            </Col>
                            <Col md="auto">
                                <Button variant="secondary" onClick={handleClose}> ปิด</Button>
                            </Col>
                            <Col md="auto">
                                <Button variant="primary" onClick={handleSubmit} type="submit">จ่ายเงิน</Button>
                            </Col>
                        </Row>
                    </Container>
                </Modal.Footer>
            </Modal>

        </>
    )
};