import { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import Swal from 'sweetalert2';

export default function ForgetPasswordScreen() {
    /*const [password, ForgetPassword] = useState("")*/
    const [email, setEmail] = useState("")

    async function handleSubmit(e) {
        e.preventDefault();
        Swal.fire('ส่งอีเมลไปแล้วนะ', '', 'success')
    }

    return (
        <>
            <div className='form-layout'>
                <h1>Reset your password</h1>
                <br></br>
                <Form onSubmit={handleSubmit}>

                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email</Form.Label>
                        <Form.Control value={email} type="email" placeholder="Enter email" onChange={(e) => setEmail(e.target.value)} />

                    </Form.Group>
                    <br></br>
                    <div className="d-grid gap-2">
                        <Button class="btn btn-primary" type="Submit">Reset password</Button>
                    </div>
                    <br></br>
                    <br></br>
                    <Form.Group className="d-grid gap-2 d-md-flex justify-content-center" controlId="formBasicPassword">
                        <p><a href='/login'>Return to login</a></p>
                    </Form.Group>
                </Form>
            </div>
        </>

    )
}