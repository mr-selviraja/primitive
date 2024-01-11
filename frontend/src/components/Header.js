import React from 'react';
import { Button, Navbar, Container, Nav, NavDropdown } from 'react-bootstrap';

const Header = () => {
  return (
    <header>
      <h1 className='font-accent'>Welcome to Primitive</h1>
      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Porro
        consectetur eos maxime quam sequi! Quaerat, nemo. Exercitationem ipsum
        dicta iusto veniam numquam sed, deserunt eius recusandae culpa beatae
        nam excepturi aspernatur eum facilis, dolorem quisquam sapiente corrupti
        laborum facere sequi? Veritatis velit placeat obcaecati officia. Nostrum
        veritatis nam voluptatibus porro qui illum eligendi dicta sit commodi
        quis, incidunt praesentium perspiciatis cupiditate ducimus, quibusdam
        culpa impedit delectus quasi ullam quos! Laboriosam hic maiores, unde
        doloribus fugit assumenda nostrum rem amet nihil explicabo, aperiam
        distinctio est. Quam error voluptates labore, debitis temporibus
        incidunt eveniet aut, molestiae cum minima asperiores tenetur porro
        repellat!
      </p>
      <Button>Sample Button</Button>

      <br />
      <br />

      <Navbar expand='lg' bg='primary'>
        <Container>
          <Navbar.Brand href='#home'>React-Bootstrap</Navbar.Brand>
          <Navbar.Toggle aria-controls='basic-navbar-nav' />
          <Navbar.Collapse id='basic-navbar-nav'>
            <Nav className='me-auto'>
              <Nav.Link href='#home'>Home</Nav.Link>
              <Nav.Link href='#link'>Link</Nav.Link>
              <NavDropdown title='Dropdown' id='basic-nav-dropdown'>
                <NavDropdown.Item href='#action/3.1'>Action</NavDropdown.Item>
                <NavDropdown.Item href='#action/3.2'>
                  Another action
                </NavDropdown.Item>
                <NavDropdown.Item href='#action/3.3'>
                  Something
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href='#action/3.4'>
                  Separated link
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;
