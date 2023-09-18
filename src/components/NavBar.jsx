import React from 'react';
import { Link } from 'react-router-dom';

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';



export default function NavBar() {
  return (
    <Navbar expand="lg" className="bg-danger">
      <Container>
        
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
          <Link to="/" className="text-white ms-3 text-decoration-none">
            🏠 Home
          </Link>
          <Link to="/Contacto" className="text-white ms-3 text-decoration-none">
            🟩 Contacto
          </Link>
            
          </Nav>
        </Navbar.Collapse>
        <Navbar.Brand href="#home">Happy Cake 🎂</Navbar.Brand> 
      </Container>
    </Navbar>
  );
}

