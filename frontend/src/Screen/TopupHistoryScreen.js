import { useState } from 'react';
import { Table, Container } from 'react-bootstrap';
import { api } from "../api"
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { isLogin } from '../auth';

export default function TopupHistoryScreen() {
    const navigate = useNavigate()
    const [history, setHistory] = useState([])
    var total = 0

    async function getHistory() {
        const user = JSON.parse(localStorage.getItem("userInfo"))
        const userid = String(user._id)
        const { data } = await api.get(`/api/order/coinhistory/${userid}`)
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

    return (<>
        <Container>
            <br /><br />
            <h1>Topup history</h1>
            <br /><br />
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>วัน/เวลาที่ซื้อ</th>
                        <th>จำนวนเงิน (บาท)</th>
                        <th>จำนวนเหรียญที่ได้รับ (coin)</th>
                        <th>หมายเลขบัตรเครดิต</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        history?.map((order, idx) => {
                            let len = order.creditCartNumber.length
                            let datef = new Date(order.date).toLocaleString('en-US', { timeZone: 'Asia/Bangkok' })
                            total += order.money
                            return <tr key={idx}>
                                <td>{idx + 1}</td>
                                <td>{datef}</td>
                                <td>{order.money}</td>
                                <td>{order.coinRecieve}</td>
                                <td>{"**** **** **** "}{order.creditCartNumber[len - 4]}{order.creditCartNumber[len - 3]}{order.creditCartNumber[len - 2]}{order.creditCartNumber[len - 1]}</td>
                            </tr>
                        })
                    }
                </tbody>
            </Table>
            <p>ยอดรวมทั้งหมด : {total} บาท</p>
        </Container>
    </>)
}