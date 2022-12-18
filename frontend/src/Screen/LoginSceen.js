import { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import { changeUserInfo } from '../action/userAction';
import { useDispatch } from "react-redux"

export default function LoginScreen() {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const navigate = useNavigate();
    const dispatch = useDispatch();

    async function handleSubmit(e) {
        e.preventDefault();
        const response = await fetch('https://noveltiesbackend.poomsakk.com/api/users/login', {
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
            localStorage.setItem("userInfo", JSON.stringify(data))
            //console.log(JSON.parse(localStorage.getItem("userInfo")))
            //localStorage.setItem('userName', data.name)
            // dispatch(changeUserName(data.name))
            dispatch(changeUserInfo(data))
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
                    <Form.Group className="d-grid gap-2 d-md-flex justify-content-md-end" controlId="formBasicPassword">
                        <p><a href='/forgetpassword'>Forgot password?</a></p>
                    </Form.Group>
                    <div className="d-grid gap-2">
                        <Button class="btn btn-primary" type="Submit">Login</Button>
                    </div>
                    <br></br>
                    <br></br>
                    <Form.Group className="d-grid gap-2 d-md-flex justify-content-center" controlId="formBasicPassword">
                        <p>Don't have an account <a href='/register'>Create account</a></p>
                    </Form.Group>
                </Form>
            </div>
        </>
    )
}