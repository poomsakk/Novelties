import { useState } from 'react';
import { Navbar, Container, Nav, NavDropdown, Form, FormControl, Button } from 'react-bootstrap';
import { useSelector, useDispatch } from "react-redux"
import { Link, useNavigate } from 'react-router-dom';
import { changeUserInfo } from '../action/userAction';
import { isWriter } from '../auth';
export default function NavbarScreen() {
    const { userInfo } = useSelector(state => state.userInfo)
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [searchText, setSearchText] = useState("")


    const handleSelect = (eventKey) => {
        if (eventKey === "logout") {
            dispatch(changeUserInfo(0))
            localStorage.clear()
            navigate('/')
        }
        if (eventKey === "topup") {
            navigate("/topuphistory")
        }
        if (eventKey === "edit") {
            navigate("/editprofile")
        }
        if (eventKey === "novel") {
            navigate("/novelhistory")
        }
    }

    function handleSearchSubmit(e) {
        console.log(searchText)
        navigate("/search/" + searchText)
    }

    return (<>
        <Navbar expand="lg" className='bg-color' variant="light" >
            <Container>
                <Navbar.Brand href="/"><h1 className='logo-font'>NOVELTIES</h1></Navbar.Brand>
                <Nav className="me-auto">
                    {
                        isWriter() ? null :
                            (<>
                                <Nav.Link href="/">Home</Nav.Link>
                                <Nav.Link href="/Popular">Popular</Nav.Link>
                                <Nav.Link href="/Favorite">Favorite</Nav.Link>
                            </>)
                    }
                    {userInfo && !isWriter() ? (<Nav.Link href="/topup"> Coin: {userInfo.coin}</Nav.Link>) : null}
                    {!userInfo && !isWriter() ? <Nav.Link href="/writer/login">Creater?</Nav.Link> : null}
                </Nav>
                <div className='span2'>
                    <Form className="d-flex me-2" onSubmit={handleSearchSubmit}>
                        <FormControl
                            type="search"
                            placeholder="Search"
                            className="me-2"
                            aria-label="Search"
                            onChange={e => { setSearchText(e.target.value) }}
                        />
                        <Button variant="outline-success" type='submit'>Search</Button>
                    </Form>
                </div>
                <Navbar.Toggle />
                <Nav onSelect={handleSelect}>
                    <Navbar.Collapse className="justify-content-end">
                        {
                            userInfo.name ?
                                (
                                    <Navbar.Collapse className="justify-content-end">
                                        <Navbar.Text>
                                            Signed in as:
                                        </Navbar.Text>
                                        <NavDropdown title={userInfo.name} id="nav-dropdown">
                                            <NavDropdown.Item eventKey="edit">Edit profile</NavDropdown.Item>
                                            {
                                                isWriter() ? null :
                                                    <>
                                                        <NavDropdown.Item eventKey="topup">Topup history</NavDropdown.Item>
                                                        <NavDropdown.Item eventKey="novel">Novel history</NavDropdown.Item>
                                                    </>
                                            }
                                            <NavDropdown.Divider />
                                            <NavDropdown.Item eventKey="logout">Logout</NavDropdown.Item>
                                        </NavDropdown>
                                    </Navbar.Collapse>
                                ) :
                                (<>
                                    <Navbar.Text>
                                        <Link to="/login">Log in</Link>
                                    </Navbar.Text>
                                </>
                                )
                        }

                    </Navbar.Collapse>
                </Nav>
            </Container>
        </Navbar>
    </>)
};