import React from 'react';
import Container from 'react-bootstrap/Container';
import Header from './RegularNavbar';
import Footer from './Footer';

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <main>
        <Container>
          <div>{children}</div>
        </Container>
      </main>
      <Footer />
    </>
  );
};

export default Layout;
