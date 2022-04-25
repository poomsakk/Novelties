import { useEffect, useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { useNavigate, useParams } from 'react-router-dom';
import Swal from 'sweetalert2';
import { api } from '../api';
import { isLogin, isOwnThisChap } from '../auth';

export default function ReadScreen() {
    const { id } = useParams()
    const { chapid } = useParams()
    const navigate = useNavigate()
    const [chapter, setChapter] = useState({})
    //http://localhost:5000/api/novels/62665bc2e566635f8c6647fc/getchapter/62665bcbe566635f8c664804

    async function getChapter() {
        await api.post(`/api/novels/${id}/getchapter/${chapid}`).then((response) => setChapter(response.data));
    }

    useEffect(() => {
        if (!isLogin()) {
            Swal.fire('Need to login first', '', 'info')
            navigate("/login")
        }
        if (!isOwnThisChap(chapid)) {
            Swal.fire('Need buy/rent to read this', '', 'info')
            navigate(`/novel/${id}`)
        }
        setChapter({})
        getChapter()
    }, [navigate])
    return (
        <>
            <Container>
                <br /><br /><br /><br />
                <Row className="justify-content-md-center">
                    <Col md="auto"><h1>READ PAGE</h1></Col>
                </Row>
                <h1>{chapter.name}</h1>
                <Row>
                    <Col>{chapter.detail}</Col>
                </Row>
            </Container>
        </>
    )
}