import { Container, Row, Col } from 'react-bootstrap';

export default function NotFoundScreen() {
    return (
        <>
            <Container>
                <br /><br /><br /><br />
                <Row className="justify-content-md-center">
                    <Col md="auto"><h1>PAGE NOT FOUND</h1></Col>
                </Row>
            </Container>
        </>
    )
}