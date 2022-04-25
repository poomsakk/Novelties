import { Container, Col, Row, Button, Modal, Figure } from "react-bootstrap";
import { useEffect, useState } from "react";
import BookCover from '../images/bookCover.jpg';
import { useNavigate, useParams } from "react-router-dom";
import { isLogin } from "../auth.js";
import Swal from 'sweetalert2';
import { api } from "../api.js";
import { useDispatch, useSelector } from "react-redux";
import { changeUserInfo } from "../action/userAction.js";

export default function PayChapterScreen() {
    const { id } = useParams()
    const { chapid } = useParams()
    const [novel, setNovel] = useState({})
    const navigate = useNavigate()
    const { userInfo } = useSelector(state => state.userInfo)
    const dispatch = useDispatch();

    //modals
    const [show, setShow] = useState(false);
    const [show2, setShow2] = useState(false);
    const handleClose = () => setShow(false);
    const handleClose2 = () => setShow2(false);
    const handleShow = () => setShow(true);
    const handleShow2 = () => setShow2(true);

    const userid = userInfo._id
    var buytype = null
    var price = 20
    const novelid = id

    async function handleRent() {
        buytype = "RENT"
        price = novel.allChapter?.find(x => x._id === chapid).price
        if (userInfo.coin < price) {
            navigate("/topup")
            Swal.fire('เงินของคุณไม่เพียงพอ', "", "warning")
            return
        }
        const { data } = await api.post("/api/order/buychapter", { userid, chapid, buytype, price, novelid });
        if (data.message === "OK") {
            localStorage.clear()
            localStorage.setItem("userInfo", JSON.stringify(data))
            dispatch(changeUserInfo(data))
            navigate("/novel/" + id)
            Swal.fire('การชำระเงินเสร็จสิ้น', `เช่า/ซื้อตอนเรียบร้อย`, 'success')
        } else {
            Swal.fire('การชำระล้มเหลว', data.message, "warning")
        }
    }

    async function handleBuy() {
        buytype = "BUY"
        price = novel.allChapter?.find(x => x._id === chapid).price
        if (userInfo.coin < price) {
            navigate("/topup")
            Swal.fire('เงินของคุณไม่เพียงพอ', "", "warning")
            return
        }
        const { data } = await api.post("/api/order/buychapter", { userid, chapid, buytype, price, novelid });
        if (data.message === "OK") {
            localStorage.clear()
            localStorage.setItem("userInfo", JSON.stringify(data))
            dispatch(changeUserInfo(data))
            navigate("/novel/" + id)
            Swal.fire('การชำระเงินเสร็จสิ้น', `เช่า/ซื้อตอนเรียบร้อย`, 'success')
        } else {
            Swal.fire('การชำระล้มเหลว', data.message, "warning")
        }
    }

    async function getNovel() {
        await api.get(`/api/novels/${id}`).then((response) => setNovel(response.data));
    }

    useEffect(() => {
        if (!isLogin()) {
            Swal.fire('Need to login first', '', 'info')
            navigate("/login")
        }
        setNovel({})
        getNovel()
    }, [navigate])

    return (
        <Container>
            <Row className="mt-5 text-center">
                <Col></Col>
                <Col>
                    <Figure.Image
                        width={307}
                        height={462}
                        alt="307x462"
                        src={BookCover}
                    />
                </Col>
                <Col></Col>
            </Row>
            <Col >
                <h1 className="mt-3 text-left">{novel.name + " - " + novel.allChapter?.find(x => x._id === chapid).name}</h1>
            </Col>
            <br></br>
            <Row>
                <h4>เรื่องย่อ</h4>
                <body className="content-summary">
                    {novel.title}
                </body>
            </Row>
            <br></br>
            <Row className="text-center">
                <Col>
                    <h4>{'คุณสามารถอ่าน ' + novel.name + " - " + novel.allChapter?.find(x => x._id === chapid).name + ' ได้ด้วยการจ่ายเหรียญ'}</h4>

                </Col>
                <Col>
                    <Button variant="success" className="me-2" onClick={handleShow}>เช่า</Button>
                    <Button variant="success" className="me-2" onClick={handleShow2}>ซื้อถาวร</Button>
                    <Modal
                        show={show}
                        onHide={handleClose}
                        backdrop="static"
                        keyboard={false}
                    >
                        <Modal.Header closeButton>
                            <Modal.Title>แลกซื้อตอนเช่า</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            <p>สามารถอ่านได้ภายใน 30 วันสำหรับการเช่า</p>
                            <p>ยอดชำระ 20 coin</p>
                        </Modal.Body>
                        <Modal.Footer>
                            <Button variant="secondary" onClick={handleClose}>
                                ปิด
                            </Button>
                            <Button variant="primary" onClick={handleRent}>เช่า</Button>
                        </Modal.Footer>
                    </Modal>
                    <Modal
                        show={show2}
                        onHide={handleClose2}
                        backdrop="static"
                        keyboard={false}
                    >
                        <Modal.Header closeButton>
                            <Modal.Title>ซื้อตอนถาวร</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            <p>เป็นการซื้อแบบถาวร</p>
                            <p>ยอดชำระ 20 coin</p>
                        </Modal.Body>
                        <Modal.Footer>
                            <Button variant="secondary" onClick={handleClose2}>
                                ปิด
                            </Button>
                            <Button variant="primary" onClick={handleBuy}>ซื้อถาวร</Button>
                        </Modal.Footer>
                    </Modal>
                </Col>
            </Row>
            <br></br>
            <h4>เช่า 20 coin สามารถอ่านได้ 30 วัน</h4>
            <h4>ซื้อ 20 coin ถาวร</h4>
        </Container>


    );
}
//novel.allChapter.find(({ _id }) => _id === chapid).name

{/* <Button variant="secondary" onClick={handleClose2}>
ปิด
</Button>
<Button variant="primary" onClick={handleBuy}>ซื้อถาวร</Button> */}