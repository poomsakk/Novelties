import { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import Swal from 'sweetalert2';

export default function EditProfileScreen() {
    const [displayname, setDisplayname] = useState("")
    const [newpassword, setNewPassword] = useState("")
    const [confirmPassword, setConfirmPassword] = useState("")
    const [oldpass, setOldpass] = useState("")

    function handleSubmit(e) {
        e.preventDefault()
        Swal.fire('Updated Successful', '', 'success')
        setDisplayname("")
        setNewPassword("")
        setConfirmPassword("")
        setOldpass("")
    }

    return <>
        <div className='form-layout'>
            <h1>Edit profile</h1>
            <br></br>
            <h3>Display name</h3>
            <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>new displayname</Form.Label>
                    <Form.Control value={displayname} type="text" placeholder="Enter new display name" onChange={(e) => setDisplayname(e.target.value)} />
                </Form.Group>
                <div className="d-grid gap-2">
                    <Button class="btn btn-primary" type="Submit">update name</Button>
                </div>
            </Form>
            <br /><br /><br />
            <h3>Change password</h3>
            <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control value={newpassword} type="password" placeholder="New password" onChange={(e) => setNewPassword(e.target.value)} />
                        <Form.Text className="text-muted">
                            Your password must be 8-20 characters long, contain letters and numbers, and must not contain spaces, special characters, or emoji.
                        </Form.Text>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formConfirmPassword">
                        <Form.Label>  Confirm new password</Form.Label>
                        <Form.Control value={confirmPassword} type="password" placeholder="Confirm new Password" onChange={(e) => setConfirmPassword(e.target.value)} />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formConfirmPassword">
                        <Form.Label>Current password</Form.Label>
                        <Form.Control value={oldpass} type="password" placeholder="Current password" onChange={(e) => setOldpass(e.target.value)} />
                    </Form.Group>
                </Form.Group>
                <div className="d-grid gap-2">
                    <Button class="btn btn-primary" type="Submit">update new password</Button>
                </div>
            </Form>
        </div>
    </>
}