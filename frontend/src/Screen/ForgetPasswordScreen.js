import { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';
import data from "../sampleData.js";

export default function ForgetPasswordScreen(){
    /*const [password, ForgetPassword] = useState("")*/
    const [email, setEmail] = useState("")
    const navigate = useNavigate();

    async function handleSubmit(e) {
        e.preventDefault();
        
    }
    
    return(
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
                        <button class="btn btn-primary" type="Submit">Reset password</button>
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