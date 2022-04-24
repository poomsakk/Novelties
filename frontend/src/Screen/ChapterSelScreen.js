import { Container, ToggleButton, Row, Col, ListGroup, Badge } from 'react-bootstrap';
import { useCallback, useState } from 'react';
import data from "../sampleData.js";
import BookCover from '../images/bookCover.jpg';

export default function ChapterSelScreen() {
    const novel = data.Novel[0]
    const [favChecked, setFavChecked] = useState(false);

    const handleSelChap = useCallback(
        (val) => () => {
            console.log(val)// val = string
            // navigate to "/novel/:novelId/:chapId"
            window.location.href = "/novel/:novelId/paychapter/:"+val
        },
        [],
    )

    return (
        <>
            <br /><br />
            <Container fluid="md">
                <Row>
                    <h1 className="text-center">{novel.name}</h1>
                </Row>
                <Row>
                    <Col></Col>
                    <Col>
                        <br />
                        <img src={BookCover} fluid alt={novel.name} />
                    </Col>
                    <Col></Col>
                </Row>
                <br />
                <Row>
                    <Col md={{ span: 3, offset: 3 }}></Col>
                    <Col md={{ span: 3, offset: 3 }}>
                        <ToggleButton
                            className="mb-2"
                            id="toggle-check"
                            type="checkbox"
                            variant="outline-success"
                            checked={favChecked}
                            value="1"
                            onChange={(e) => setFavChecked(e.currentTarget.checked)}
                        >
                            {favChecked ? "Remove from my favorite" : "add to my favorite"}
                        </ToggleButton>
                    </Col>
                </Row>
                <Row>
                    <h3>เรื่องย่อ</h3>
                    <Col >
                        <div className='content-summary'>xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxcdddxxx</div>
                    </Col>

                </Row>
                <br />
                <Row>
                    <Col></Col>
                    <Col sm={9}>
                        <ListGroup defaultActiveKey="#link1">
                            {novel.allChapter.map((chap) => {
                                return <ListGroup.Item action onClick={handleSelChap(chap.chapter)} className="d-flex justify-content-between align-items-start">
                                    <div className="ms-2 me-auto">{chap.chapter}. {chap.name}</div>
                                    <Badge bg="primary" pill>{chap.viewers} views</Badge>
                                </ListGroup.Item>
                            })}
                        </ListGroup>
                    </Col>
                    <Col></Col>
                </Row>
            </Container>
            <br /><br />
        </>
    )
};