import React from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap'


function Header(props) {
    return (
        <div>
            <Navbar bg="light" variant="light">
                <Container>
                    <Navbar.Brand href="/">Home</Navbar.Brand>
                    <Nav className="me-auto">
                        <Nav.Link href="/category">Categories</Nav.Link>
                        <Nav.Link href="/makers">Makers</Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
        </div>
    );
}

export default Header;