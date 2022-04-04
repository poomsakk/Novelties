import { Card, Row, Col, Container } from 'react-bootstrap'
import BookCover from '../images/bookCover.jpg'

export default function ProductScreen() {
    return (<>
        <br></br>
        <Container>
            <h2>
                All novels
            </h2>
        </Container>
        <br></br>
        <Container>
            <Row xs={1} md={6} className="g-4">
                {Array.from({ length: 10 }).map((_, idx) => (
                    <Col>
                        <Card>
                            <Card.Img variant="top" src={BookCover} />
                            <Card.Body>
                                <Card.Title>Card title</Card.Title>
                                <Card.Text>
                                    This is a longer card with supporting text below as a natural
                                    lead-in to additional content. This content is a little bit longer.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>
        </Container>

    </>)
};