import { useState } from 'react';
import { Table, Container } from 'react-bootstrap';
import { api } from "../api"
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { isLogin } from '../auth';

export default function NovelHistoryScreen() {
    const navigate = useNavigate()
    const [history, setHistory] = useState([])

    async function getHistory() {
        const user = JSON.parse(localStorage.getItem("userInfo"))
        const userid = String(user._id)
        const { data } = await api.get(`/api/order/chapterhistory/${userid}`)
        setHistory(data)
    }

    useEffect(() => {
        if (!isLogin()) {
            Swal.fire('Need to login first', '', 'info')
            navigate("/login")
        }
        setHistory([])
        getHistory()
    }, [navigate])

    return <>
        <Container>
            <br /><br />
            <h1>Topup history</h1>
            <br /><br />
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>id novel</th>
                        <th>chapter id</th>
                        <th>วัน/เวลาที่ซื้อ</th>
                        <th>จำนวน (coin)</th>
                        <th>ประเภทการซื้อ</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        history?.map((order, idx) => {
                            let convertDate = new Date(order.date).toLocaleString('en-US', { timeZone: 'Asia/Bangkok' })
                            return <tr key={idx}>
                                <td>{idx + 1}</td>
                                <td>{order.novelId}</td>
                                <td>{order.chapterId}</td>
                                <td>{convertDate}</td>
                                <td>{order.price}</td>
                                <td>{order.buyType === "BUY" ? 'ซื้อ' : 'เช่า'}</td>
                            </tr>
                        })
                    }
                </tbody>
            </Table>
        </Container>
    </>
}
// chapterhistory