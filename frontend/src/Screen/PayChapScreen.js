import { Container, Col, Row, Button, Modal, Figure } from "react-bootstrap";
import { useState } from "react";
import data from "../sampleData.js";
import BookCover from '../images/bookCover.jpg';

export default function PayChapScreen() {
  const novel = data.Novel[0]
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

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
        <h1 className="mt-3 text-left">{'Teaser-'+novel.name+'-'+novel.allChapter[0].name}</h1>
      </Col>
      <br></br>
      <Row>
        <body className="content-summary">
        xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
        xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
        xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx

        </body>
      </Row>
      <br></br>
      <Row className="text-center">
        <Col>
          <body>{'คุณสามารถอ่าน '+novel.name+'-'+novel.allChapter[0].name+' ได้ด้วยการจ่ายเหรียญ'}</body>
        </Col>
        <Col>
          <Button variant="success" className="me-2" onClick={handleShow}>เช่า</Button>
          <Button variant="success" className="me-2">ถาวร</Button>
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
          สามารถอ่านได้ภายใน 30 วันสำหรับการเช่า
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary">Understood</Button>
        </Modal.Footer>
        </Modal>
        </Col>
      </Row>
    </Container>
    
    
  );
}