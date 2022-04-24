import { Navbar, Container, Nav, NavDropdown } from 'react-bootstrap';
import { useSelector, useDispatch } from "react-redux"
import { useNavigate } from 'react-router-dom';
import { changeUserInfo } from '../action/userAction';
import { isWriter } from '../auth';
export default function NavbarScreen() {
    const { userInfo } = useSelector(state => state.userInfo)
    const dispatch = useDispatch();
    const navigate = useNavigate();


    const handleSelect = (eventKey) => {
        if (eventKey === "logout") {
            dispatch(changeUserInfo(0))
            localStorage.clear()
            navigate('/')
        }
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
                </Nav>
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