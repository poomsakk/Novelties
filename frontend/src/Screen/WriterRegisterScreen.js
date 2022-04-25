import { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';
import { api } from '../api';

export default function WriterRegisterScreen() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmpassword] = useState("");
    const navigate = useNavigate();

    async function handleSubmit(e) {
        e.preventDefault();
        if (password !== confirmPassword) {
            setPassword("");
            setConfirmpassword("");
            Swal.fire('Password not match!!', "Enter password and confirm it again", "warning")
            return;
        }
        const { data } = await api.post("/api/writer/register", { name, email, password });
        if (data.message === "OK") {
            Swal.fire('Success', 'account has been created', 'success')
            navigate('/writer/login');
        } else {
            Swal.fire('FAIL!!', data.message, "warning")
        }
    }

    return (
        <>
            <div className='form-layout'>
                <h1>Writer Reigister</h1>
                <br></br>
                <Form onSubmit={handleSubmit}>
                    <Form.Group className="mb-3" controlId="DisplayName">
                        <Form.Label>Display Name</Form.Label>
                        <Form.Control value={name} type="text" placeholder="Display Name" onChange={(e) => setName(e.target.value)} />
                        <Form.Text className="text-muted">
                            This is just a display name, You can change this after.
                        </Form.Text>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control value={email} type="email" placeholder="Enter email" onChange={(e) => setEmail(e.target.value)} />

                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control value={password} type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} />
                        <Form.Text className="text-muted">
                            Your password must be 8-20 characters long, contain letters and numbers, and must not contain spaces, special characters, or emoji.
                        </Form.Text>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formConfirmPassword">
                        <Form.Label>  Confirm Password</Form.Label>
                        <Form.Control value={confirmPassword} type="password" placeholder="Confirm Password" onChange={(e) => setConfirmpassword(e.target.value)} />
                    </Form.Group>
                    <Button variant="primary" type="submit">
                        Submit
                    </Button>
                </Form>
            </div>
        </>
    )
}