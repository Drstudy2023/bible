import React from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function NavbarExample() {
  return (
    <Navbar
      expand="lg"
      className="mb-3"
      style={{
        position: 'absolute',
        backgroundColor: 'rgba(0, 0, 0, 0.5)', // Set the desired background color here
        top: 0,
        left: 0,
        width: '100%',
        zIndex: 1030 // Ensure it stays on top
      }}
    >
      <Container fluid>
        <Navbar.Brand style={{color:"white"}} href="#">HolyScript</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbar-nav" />
        <Navbar.Collapse id="navbar-nav">
          <Nav className="me-auto">
            <Nav.Link style={{ color: "white" }} href="#action1">coming soon...</Nav.Link>
            <Nav.Link style={{ color: "white" }} href="#action2">coming soon...</Nav.Link>
            <Nav.Link style={{ color: "white" }} href="#action3">coming soon...</Nav.Link>
            <Nav.Link style={{ color: "white" }} href="#action4">coming soon...</Nav.Link>
          </Nav>

          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-light">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavbarExample;
