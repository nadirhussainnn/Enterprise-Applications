import React, { useEffect, useState } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { NavLink, Link } from 'react-router-dom';

function Header() {

  const [user,setUser]=useState(null)
  
  useEffect(()=>{

    const data=localStorage.getItem('user')
    if (data) {
      const u = JSON.parse(data);
      setUser(u)
  }
  },[])

  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand>
          <Link to="/">React-Bootstrap</Link>
          </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
          </Nav>
          {
                user?
                <Nav>
                <Nav.Link>
                <NavLink to="/cart">
                  Cart
                </NavLink>
                </Nav.Link>
  
                <Nav.Link>
                <NavLink>
                  Logout
                </NavLink>
                </Nav.Link>
                </Nav>
                :
                <Nav>
                <Nav.Link>
                <NavLink to="/login">
                  Login
                </NavLink>
                </Nav.Link>
  
                <Nav.Link>
                <NavLink to="/register">
                  Register
                </NavLink>
                </Nav.Link>
                </Nav>
                
          }
          
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;