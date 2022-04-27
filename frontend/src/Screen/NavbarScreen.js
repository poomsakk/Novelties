import { useState, useEffect } from 'react';
import { Navbar, Container, Nav, NavDropdown } from 'react-bootstrap';
import { useSelector, useDispatch } from "react-redux"
import { useNavigate } from 'react-router-dom';
import { changeUserName } from '../action/userAction';
export default function NavbarScreen() {
    const [userdata, setUserdata] = useState()
    const { username } = useSelector(state => state.user)
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleSelect = (eventKey) => {
        if (eventKey === "logout") {
            dispatch(changeUserName(null))
            localStorage.removeItem("userName")
            setUserdata(null)
            navigate('/')
        }
    }

    useEffect(() => {
        setUserdata(localStorage.getItem("userName"))
    }, []);

    return (<>
        <Navbar expand="lg" className='bg-color' variant="light" >
            <Container>
                <Navbar.Brand href="/"><h1 className='logo-font'>NOVELTIES</h1></Navbar.Brand>
                <Nav className="me-auto">
                    <Nav.Link href="/">Home</Nav.Link>
<<<<<<< HEAD
                    <Nav.Link href="#Popular">Popular</Nav.Link>
                    <Nav.Link href="#Favorite">Favorite</Nav.Link>
                    
=======
                    <Nav.Link href="/Popular">Popular</Nav.Link>
                    <Nav.Link href="/Favorite">Favorite</Nav.Link>
>>>>>>> c7cd2a2e92597c0c693a52010461ccfea1655310
                </Nav>
                
                <form action="" class="d-flex w-10 p-3" >
                    <div class="input-group mb-30" >
                        <input type="text" class="form-control mr-sm-2" placeholder="ค้นหานิยาย"></input>
                            <button type="submit" class="input-group-text btn-default"><i class="bi bi-search me-30"></i> 
                                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/0b/Search_Icon.svg/1024px-Search_Icon.svg.png" width="20" />
                            </button>
                    </div>
                </form>
                <Navbar.Toggle />
                
                <Nav onSelect={handleSelect}>
                    <Navbar.Collapse className="justify-content-end">
                        {
                            username ?
                                (
                                    <Navbar.Collapse className="justify-content-end">
                                        <Navbar.Text>
                                            Signed in as:
                                        </Navbar.Text>
                                        <NavDropdown title={username} id="nav-dropdown">
                                            <NavDropdown.Item eventKey="logout">Logout</NavDropdown.Item>
                                        </NavDropdown>
                                    </Navbar.Collapse>
                                ) : userdata ?
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