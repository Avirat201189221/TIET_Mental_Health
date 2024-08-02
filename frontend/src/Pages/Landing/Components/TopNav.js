import React from 'react'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Translate from '../../Translate';
export default function TopNav() {
  return (
    <div>
    <Navbar expand="lg" className="bg-body-tertiary" data-bs-theme="dark" sticky="top" >
      <Container style={{ marginLeft:'1rem' }}>
        <Navbar.Brand href="#home">Home</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />

        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="http://127.0.0.1:5000/">Chat</Nav.Link>
            <Nav.Link href="#link">Take An Interview</Nav.Link>
            <Nav.Link href="#link">Seek Help</Nav.Link>

            {/* <NavDropdown title="Dropdown" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown> */}

          </Nav>
        </Navbar.Collapse>


        <Form className="d-flex" style={{marginLeft:'5rem'}}>
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Search</Button>
          </Form>

          <Button variant="success" style={{marginLeft:'3rem'}}><a href="/login">Log In</a></Button>

      </Container>
      <Translate/>
    </Navbar>
    </div>
  )
}
