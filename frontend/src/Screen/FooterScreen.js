import { Container, Col, Row, Navbar } from 'react-bootstrap';
export default function FooterScreen() {
    return <>
        <Navbar expand="lg" className='bg-color' variant="light" >
            <Container>
                <br /><br /><br />
                <Row>
                    <Col sm={5} style={{ fontSize: 50 }} className='logo-font'>
                        Novelties<br />
                        <p style={{ fontSize: 24 }}>เว็บอ่านนิยายราคาเป็นมิตร อ่านแล้วจะติดใจ</p>
                    </Col>
                    <Col sm={4} style={{ fontSize: 20 }}>
                        <p style={{ fontSize: 24 }} className='logo-font'>How to read Novelties</p>
                        1. เติม coin<br />
                        2. เลือกนิยายที่ต้องการ<br />
                        3. เลือกว่าจะเช่าหรือจะซื้อ<br />
                        4. จ่ายเงิน<br />
                        5. เพลิดเพลินกับนิยายมากมาย
                    </Col>
                    <Col sm={3} style={{ fontSize: 18 }}>
                        <p style={{ fontSize: 24 }} className='logo-font'>About us</p>
                        1. ภูมิศักดิ์  แก้วสี<br />
                        2. ยูนุส  ดีหมัด<br />
                        3. วรวิชญ์  ธรรมารักษ์วัฒนะ<br />
                        4. สุรพัศ  วงศ์ประไพพักตร์<br />
                        5. เอกภพ  อ่อนสำอางค์
                    </Col>
                </Row>
                <br /><br /><br />
            </Container>
        </Navbar>
    </>
}