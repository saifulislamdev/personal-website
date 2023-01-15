import React from 'react';
import Header from './Header';
import Footer from './Footer';
import Container from 'react-bootstrap/Container';

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
