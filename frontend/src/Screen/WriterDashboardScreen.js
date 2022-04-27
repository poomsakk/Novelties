import { useState } from 'react';
import { Table, Container, Button, Form, Modal, Col, Row } from 'react-bootstrap';
import { api } from "../api"
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { isWriter } from '../auth';
import { useCallback } from 'react';
import { useSelector } from 'react-redux';

export default function WriterDashboardScreen() {
    const navigate = useNavigate()
    const { userInfo } = useSelector(state => state.userInfo)

    const [show, setShow] = useState(false);
    const [error_alert, setError_alert] = useState(false);
    const [loading, setLoading] = useState(false)
    const [imageUrl, setImageUrl] = useState("")

    const handleClose = () => {
        setShow(false)
    }
    const handleShow = () => { setShow(true); alertClose() };
    const alertClose = () => setError_alert(true);
    const alertShow = () => setError_alert(false);

    const [novelName, setnovelName] = useState("");
    const [title, setTitle] = useState("");

    const [adventure, setAdventure] = useState(false)
    const [drama, setDrama] = useState(false)
    const [fantasy, setFantasy] = useState(false)

    async function handleSubmit(e) {
        e.preventDefault();
        if (novelName !== "") {
            const category = []
            if (adventure) category.push({ name: "adventure" })
            if (drama) category.push({ name: "drama" })
            if (fantasy) category.push({ name: "fantasy" })
            const image = imageUrl
            const user = JSON.parse(localStorage.getItem("userInfo"))
            const writerid = String(user._id)
            const { data } = await api.post("/api/novels/addnovel", { novelName, category, image, writerid, title });
            if (data.message === "OK") {
                Swal.fire('Create Successful', '', 'success')
            } else {
                Swal.fire('Create Fail', '', 'error')
            }
            getNovel()
            setnovelName("");
            setTitle("");
            alertClose()
            handleClose()
        } else {
            alertShow()
        }
    }

    const handleSelChap = useCallback(
        (novelId) => () => {
            navigate("/writer/addchapter/" + novelId)
        },
        [navigate],
    )

    async function uploadImage(e) {
        const files = e.target.files
        const data = new FormData()
        data.append('file', files[0])
        data.append('upload_preset', 'novelties')
        setLoading(true)
        const res = await fetch("https://api.cloudinary.com/v1_1/dhweyvzzp/image/upload",
            {
                method: 'POST',
                body: data
            })
        const file = await res.json()
        //store file.url or file.secure_url
        setImageUrl(file.url)
        setLoading(false)
    }

    //list novel
    const [novels, setNovels] = useState([]);

    async function getNovel() {
        const user = JSON.parse(localStorage.getItem("userInfo"))
        const writerid = String(user._id)
        const { data } = await api.post("/api/writer/getnovel", { writerid })
        setNovels(data.data)
    }

    useEffect(() => {
        if (!isWriter()) {
            Swal.fire('Cannot enter there', 'please login as writer', 'error')
            navigate("/")
        }
        setImageUrl("")
        setLoading(false)
        setNovels([])
        getNovel()
    }, [navigate])

    return (<>
        <Container>
            <br /><br />
            <h1>DASHBOARD</h1>
            <br /><br />
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Novel Name</th>
                        <th>All coin recieve</th>
                        <th>Rating</th>
                        <th>Comment</th>
                        <th>Latest Chapter</th>
                        <th>Add chapter/End</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        novels?.map((novel, idx) => {
                            return <tr key={idx}>
                                <td>{idx + 1}</td>
                                <td>{novel.name}</td>
                                <td>{novel.coinRecieve}</td>
                                <td>{novel.rating.allScore / novel.rating.allScore}</td>
                                <td>22222</td>
                                <td>{novel.allChapter.length}</td>
                                <td><Button variant="primary" size="sm" onClick={handleSelChap(novel._id)}>add Chapter</Button>{'       '}
                                    <Button variant="danger" size="sm">End</Button></td>
                            </tr>
                        })
                    }
                </tbody>
            </Table>
            <div className="container">
                <div className="d-grid gap-2 col-6 mx-auto mt-3">
                    <Button variant="primary" onClick={handleShow} className='pull-right'>
                        + เพิ่มเรื่องใหม่
                    </Button>
                </div>
            </div>

            <Modal show={show} onHide={handleClose} size="lg">
                <Modal.Header closeButton>
                    <Modal.Title>รายละเอียดนิยายเรื่องใหม่</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className="text-center">
                        <div hidden={error_alert} className="alert alert-danger" role="alert" >ต้องมีชื่อนิยาย!!</div>
                    </div>
                    <Form onSubmit={handleSubmit}>
                        <Form.Group className="mb-3" controlId="novelName">
                            <Form.Label>ชื่อนิยาย</Form.Label>
                            <Form.Control value={novelName} type="text" placeholder="ชื่อนิยาย" onChange={(e) => setnovelName(e.target.value)} />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="Category">
                            <Form.Label>ประเภทนิยาย</Form.Label>
                            <div key={`inline-checkbox`} className="mb-3">
                                <Form.Check
                                    inline
                                    label="adventure"
                                    name="group1"
                                    type="checkbox"
                                    id="inline-checkbox-1"
                                    checked={adventure}
                                    onChange={(e) => setAdventure(!adventure)}
                                />
                                <Form.Check
                                    inline
                                    label="drama"
                                    name="group1"
                                    type="checkbox"
                                    id="inline-checkbox-2"
                                    checked={drama}
                                    onChange={(e) => setDrama(!drama)}
                                />
                                <Form.Check
                                    inline
                                    label="fantasy"
                                    name="group1"
                                    type="checkbox"
                                    id="inline-checkbox-3"
                                    checked={fantasy}
                                    onChange={(e) => setFantasy(!fantasy)}
                                />
                            </div>
                        </Form.Group>
                        <Form.Group
                            className="mb-3"
                            controlId="title"
                        >
                            <Form.Label>เรื่องย่อ</Form.Label>
                            <Form.Control value={title} as="textarea" rows={3} onChange={(e) => setTitle(e.target.value)} />
                        </Form.Group>
                        <Form.Group controlId="formFile" className="mb-3">
                            <Form.Label>ภาพหน้าปก (400x600 px)</Form.Label>
                            <Form.Control type="file" name='file' onChange={uploadImage} />
                        </Form.Group>
                        <Form.Group>
                            <Container>
                                <Row>
                                    <Col></Col>
                                    <Col>
                                        {
                                            loading ? <h3>LOADING ...</h3> : (null)
                                        }
                                    </Col>
                                    <Col></Col>
                                </Row>
                            </Container>
                        </Form.Group>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose} setNovelName="">
                        ปิด
                    </Button>
                    <Button variant="primary" onClick={handleSubmit} type="submit" disabled={loading || imageUrl === ""}>เพิ่มเรื่องใหม่</Button>
                </Modal.Footer>
            </Modal>
            <br /><br />
            <p>เหรียญที่ได้ทั้งหมด : {userInfo.coinRecieved} coin</p>
            <Button>ถอนเงิน</Button>
            <br /><br />
            <p> *** 100 coin = 60 บาท ***</p>
        </Container>
    </>)
}