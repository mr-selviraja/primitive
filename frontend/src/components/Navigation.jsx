import React from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap';

const Navigation = () => {
  return (
    <Navbar bg='white' expand='lg' className='p-4 shadow-sm'>
      <Container>
        <Navbar.Brand>
          <img
            width={90}
            src='/assets/primitive-logo-primary-dark.svg'
            alt='primitive logo'
          />
          <h1 className='d-none'>Primitive</h1>
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
