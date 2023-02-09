import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

const Header = () => {
  return (
    <Navbar>
      <Container>
        <Navbar.Toggle aria-controls='basic-navbar-nav' />
        <Navbar.Collapse className='justify-content-end'>
          <Nav activeKey='home'>
            <Nav.Item>
              <Nav.Link eventKey='about-me' href='#about-me'>
                About Me
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey='skills' href='#skills'>
                Skills
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey='projects' href='#projects'>
                Projects
              </Nav.Link>
            </Nav.Item>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
