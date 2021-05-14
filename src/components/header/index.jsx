import React from 'react';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

const Header = () => {
    return (
        <Navbar bg="primary" variant="dark" expand="lg">
            <Container>
            <Navbar.Brand href="#home">Trello Board</Navbar.Brand>
            </Container>
        </Navbar>
    )
};

export default Header;
