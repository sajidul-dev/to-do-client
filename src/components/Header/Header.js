import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

const Header = () => {
    return (
        <Navbar collapseOnSelect expand="lg" bg="white" variant="dark" className='shadow-lg '>
            <Container>
                <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        <NavLink to='/home' className={({ isActive }) => isActive ? "text-primary text-decoration-none m-3" : "text-dark text-decoration-none m-3"} >Home</NavLink>
                        <NavLink to='/login' className={({ isActive }) => isActive ? "text-primary text-decoration-none m-3" : "text-dark text-decoration-none m-3"} >Login</NavLink>
                    </Nav>
                    <Nav>
                        <Nav.Link href="#deets">More deets</Nav.Link>
                        <Nav.Link eventKey={2} href="#memes">
                            Dank memes
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;