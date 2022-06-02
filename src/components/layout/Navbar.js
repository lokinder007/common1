import React from "react";
import { Navbar, Nav, Container, NavDropdown } from 'react-bootstrap'
import { Link } from "react-router-dom";
import pic from "../assets/b.png"

// import Login from "../pages/Login";

const Navbarp = () => {
    // const [show, setShow] = useState(false);

    return (
        <header>
            <Navbar fixed="top" bg="primary" variant="dark">
                <Container>
                    <Navbar.Brand as={Link} to="/">
                        <img
                            alt=""
                            src={pic}
                            width="30"
                            height="30"
                            className="d-inline-block align-top"
                        />{' '}
                        Navbar
                    </Navbar.Brand>
                    <Nav className="mx-auto">
                        <Nav.Link as={Link} to="/tasks">Tasks</Nav.Link>
                        <Nav.Link as={Link} to="/profile">Profile</Nav.Link>
                        <Nav.Link as={Link} to="/about">About</Nav.Link>
                        <Nav.Link as={Link} to="/contact">Contact</Nav.Link>
                        <NavDropdown title="API" id="collasible-nav-dropdown">
                            <NavDropdown.Item as={Link} to="/users">Users</NavDropdown.Item>
                            <NavDropdown.Item as={Link} to="/jokes">Jokes</NavDropdown.Item>
                            <NavDropdown.Item as={Link} to="/news">News</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item as={Link} to="/blo">Separated link</NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                    <Nav className="ml-auto">
                        <Nav.Link as={Link} to="/cart">
                            <i className='fas fa-shopping-cart'></i> Cart</Nav.Link>
                        <Nav.Link as={Link} to="/login">
                            <i className='fas fa-user'></i> Login</Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
        </header>
    );
};

export default Navbarp