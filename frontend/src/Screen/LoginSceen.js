import { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import { changeUserName } from '../action/userAction';
import { useDispatch } from "react-redux"

export default function LoginScreen() {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const navigate = useNavigate();
    const dispatch = useDispatch();

    async function handleSubmit(e) {
        e.preventDefault();
        const response = await fetch('http://localhost:5000/api/users/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                email,
                password,
            }),
        })
        const data = await response.json()
        if (data.message === "OK") {
            localStorage.setItem('userName', data.name)
            dispatch(changeUserName(data.name))
            Swal.fire('Login Successful', '', 'success')
            navigate('/');
        } else {
            Swal.fire('Login Fail!!', data.message, "warning")
        }
    }

    return (
        <>
            <div className='form-layout'>
                <h1>Log in</h1>
                <br></br>
                <Form onSubmit={handleSubmit}>

                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email</Form.Label>
                        <Form.Control value={email} type="email" placeholder="Enter email" onChange={(e) => setEmail(e.target.value)} />

                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control value={password} type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} />
                        <Form.Text className="text-muted">
                        </Form.Text>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <p>Don't have an account <a href='/register'>Create account</a></p>
                    </Form.Group>

                    <Button variant="primary" type="submit">
                        Submit
                    </Button>
                </Form>
            </div>
        </>
    )
}