import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

function Header() {
  return (
    <div>
      <Navbar style={{backgroundColor:'#252B48'}} className='shadow' expand="lg" >
      <Container >
        <Navbar.Brand style={{fontFamily:'Kanit'}} className='text-white fw-bold fs-2' href="#home">Govind</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse  id="basic-navbar-nav">
          <Nav className='ms-auto' >
            <Nav.Link className='text-white me-5' href="#homesection">Home</Nav.Link>
            <Nav.Link className='text-white me-5' href="#about">About</Nav.Link>
            <Nav.Link className='text-white me-5' href="#portfolio">Portfolio</Nav.Link>
            <Nav.Link className='text-white me-5' href="#contact">Contact</Nav.Link>

          
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </div>
  )
}

export default Header