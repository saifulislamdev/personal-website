import * as React from 'react';
import { Link } from 'gatsby';
import { StaticImage } from 'gatsby-plugin-image';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

import Header from '../components/layout/HomeNavbar';
import HeroIcons from '../components/home/HeroIcons';
import Skills from '../components/home/Skills';
import Projects from '../components/project/Projects';
import Wrapper from '../components/layout/Wrapper';

import '../styles/app.css';

const Section = ({ id, className, children }) => {
  return (
    <div data-aos='fade-up'>
      <section className={`${className ?? ''} py-4`} id={id}>
        <Container>{children}</Container>
      </section>
    </div>
  );
};

const IndexPage = () => {
  return (
    <Wrapper>
      <div className='app-wrapper vh-100'>
        <StaticImage
          className='app-intro-bg'
          layout='fullWidth'
          alt=''
          src='../../static/hero.jpg'
          formats={['auto', 'webp', 'avif']}
        />
        <div className='app-header'>
          <Header />
        </div>
        <div className='app-intro'>
          {/* Any content here will be centered in the component */}
          <div className='align-self-center text-center'>
            <h1 className='display-1'>Saiful Islam</h1>
            <p className='lead fs-3 shine'>
              {'Software Engineer'.split('').map((char, i) => {
                return <span key={`headline-char-${i}`}>{char}</span>;
              })}
            </p>
            <HeroIcons />
          </div>
        </div>
      </div>
      <Section className='section-color-secondary' id='about-me'>
        <Row className='justify-content-center align-items-center'>
          <Col lg>
            <div className='d-flex justify-content-center align-items-center'>
              <div>
                <h2 className='mx-2 text-end'>Hi, I'm Saiful</h2>
              </div>
              <div className='mx-2 col-md-3 text-start'>
                <StaticImage
                  src='../../static/me.jpg'
                  className='rounded-circle img-fluid'
                  placeholder='blurred'
                  alt='A photo of Saiful'
                />
              </div>
            </div>
          </Col>
          <Col lg>
            <div className='section-body'>
              <p className='mb-0 fs-5'>
                I graduated from The City College of New York in Fall 2022 with
                a B.S. in Computer Science. I have a great passion for software
                development as I love problem-solving and bringing to life new
                ideas. Furthermore, I have software engineering experience
                through my current position, internships, fellowship, and
                personal projects. With my strong communication and
                problem-solving skills, I have what it takes to succeed.
              </p>
            </div>
          </Col>
        </Row>
      </Section>
      <Section className='section-color-primary' id='skills'>
        <div className='text-center'>
          <h2>I am skilled 👨🏽‍💻</h2>
          <div className='section-body'>
            <Skills />
          </div>
        </div>
      </Section>
      <Section className='section-color-secondary' id='projects'>
        <div className='mb-5 text-center'>
          <h2>Some projects I worked on 💼</h2>
          <div className='section-body'>
            <Projects count={2} />
          </div>
          <Link to='/projects'>
            <Button variant='light' style={{ border: 0 }}>
              View all my projects
            </Button>
          </Link>
        </div>
      </Section>
    </Wrapper>
  );
};

export default IndexPage;
