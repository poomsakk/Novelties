import { useState, useEffect } from 'react';
import { Navbar, Container, Nav, NavDropdown } from 'react-bootstrap';
export default function NavbarScreen() {
    const [userdata, setUserdata] = useState()
    const handleSelect = (eventKey) => {
        if (eventKey === "logout") {
            localStorage.removeItem("userName")
            //window.location.reload()
        }
    }
    useEffect(() => {
        let userInfo = localStorage.getItem("userName")
        setUserdata(userInfo)
    }, []);
    return (<>
        <Navbar expand="lg" className='bg-color' variant="light" >
            <Container>
                <Navbar.Brand href="/"><h1 className='logo-font'>NOVELTIES</h1></Navbar.Brand>
                <Nav className="me-auto">
                    <Nav.Link href="/">Home</Nav.Link>
                    <Nav.Link href="#Popular">Popular</Nav.Link>
                    <Nav.Link href="#Favorite">Favorite</Nav.Link>
                </Nav>
                <Navbar.Toggle />
                <Nav onSelect={handleSelect}>
                    <Navbar.Collapse className="justify-content-end">
                        {
                            userdata ?
                                (
                                    <Navbar.Collapse className="justify-content-end">
                                        <Navbar.Text>
                                            Signed in as:
                                        </Navbar.Text>
                                        <NavDropdown title={userdata} id="nav-dropdown">
                                            <NavDropdown.Item eventKey="logout">Logout</NavDropdown.Item>
                                        </NavDropdown>
                                    </Navbar.Collapse>
                                ) :
                                (
                                    <Navbar.Text>
                                        <h5><a href="/login">Log in</a></h5>
                                    </Navbar.Text>
                                )
                        }

                    </Navbar.Collapse>
                </Nav>
            </Container>
        </Navbar>
    </>)
};