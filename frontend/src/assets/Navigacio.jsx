import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

const Navigacio = () => {
  return (
    <>
    <Navbar className='navigal' collapseOnSelect expand="lg">
        <Container>
          <Navbar.Brand href="/">Főoldal</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="/foglalas">Időpont foglalás</Nav.Link>
              <Nav.Link href="/szolgaltatasok">Szolgáltatások</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      </>
  )
}

export default Navigacio