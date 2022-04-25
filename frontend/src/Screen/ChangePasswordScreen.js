import { useState } from 'react';
import { Form } from 'react-bootstrap';

export default function ChangePasswordScreen() {
    const [password, setPassword] = useState("")
    const [newpassword, setNewPassword] = useState("")
    const [confirmpassword, setConfirmPassword] = useState("")

    async function handleSubmit(e) {
        e.preventDefault();
    }

    return (
        <>
            <div className='form-layout'>
                <h1>Change your password</h1>
                <br></br>
                <Form onSubmit={handleSubmit}>
                    <Form.Group className="mb-3" controlId="formBasicpassword">
                        <Form.Label>password</Form.Label>
                        <Form.Control value={password} type="password" placeholder="Enter password" onChange={(e) => setPassword(e.target.value)} />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicNewfirmpasswordPassword">
                        <Form.Label>New password</Form.Label>
                        <Form.Control value={newpassword} type="newpassword" placeholder="Enter new password" onChange={(e) => setNewPassword(e.target.value)} />
                        <Form.Text className="text-muted">
                        </Form.Text>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicConfirmpasswordPassword">
                        <Form.Label>Confirm new password</Form.Label>
                        <Form.Control value={confirmpassword} type="confirmpassword" placeholder="Confirm new password" onChange={(e) => setConfirmPassword(e.target.value)} />
                        <Form.Text className="text-muted">
                        </Form.Text>
                    </Form.Group>
                    <Form.Group className="d-grid gap-2 d-md-flex justify-content-md-end" controlId="formBasicPassword">
                        <p><a href='/forgetpassword'>Forgot password?</a></p>
                    </Form.Group>
                    <div className="d-grid gap-2">
                        <button class="btn btn-primary" type="Submit">CONFIRM</button>
                    </div>

                </Form>
            </div>
        </>
    )
}