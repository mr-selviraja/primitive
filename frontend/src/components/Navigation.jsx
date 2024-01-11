import React from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap';

const Navigation = () => {
  return (
    <Navbar
      bg='white'
      expand='lg'
      className='p-4 shadow-sm position-sticky top-0'
    >
      <Container>
        <Navbar.Brand>
          <img
            width={90}
            src='/assets/primitive-logo.svg'
            alt='primitive logo'
          />
        </Navbar.Brand>

        <Navbar.Toggle aria-controls='navbar-nav' />

        <Navbar.Collapse className='mt-4 mt-lg-0' id='navbar-nav'>
          <Nav className='ms-auto  d-flex gap-lg-5'>
            <Nav.Link to='/'>ABOUT</Nav.Link>

            <Nav.Link to='/features'>CONTACT</Nav.Link>

            <Nav.Link to='/pricing'>LOGIN</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Navigation;
