import React from 'react';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

const Header = () => {
  return (
    <Navbar>
      <Container>
        <Navbar.Brand href='/'>Saiful Islam</Navbar.Brand>
        {/* <Navbar.Toggle aria-controls='basic-navbar-nav' />
        <Navbar.Collapse className='justify-content-end'>
          <Nav variant='pills' activeKey={pageName}>
            <Nav.Item>
              <Nav.Link eventKey='projects' href='/projects'>
                Projects
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey='contact' href='/contact'>
                Contact
              </Nav.Link>
            </Nav.Item>
          </Nav>
        </Navbar.Collapse> */}
      </Container>
    </Navbar>
  );
};

export default Header;
