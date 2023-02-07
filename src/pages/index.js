import * as React from 'react';
import { Link } from 'gatsby';
import { StaticImage } from 'gatsby-plugin-image';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

import Header from '../components/layout/Header';
import HeroIcons from '../components/home/HeroIcons';
import Skills from '../components/home/Skills';
import Projects from '../components/project/Projects';
import Wrapper from '../components/layout/Wrapper';

// import { ParallaxProvider } from 'react-scroll-parallax';
// import { Parallax } from 'react-scroll-parallax';

const Section = ({ id, children, style }) => {
  return (
    <section id={id} className='py-4' style={style}>
      {/* <Parallax> */}
      <Container>
        <div data-aos='fade-up'>{children}</div>
      </Container>
      {/* </Parallax> */}
    </section>
  );
};

const IndexPage = () => {
  const sectionBodyClasses = ['py-3'].join(' ');

  return (
    <Wrapper>
      <div className='vh-100' style={{ display: 'grid' }}>
        <StaticImage
          style={{
            gridArea: '1/1',
            opacity: '0.15',
          }}
          layout='fullWidth'
          alt=''
          src='../../static/hero.jpg'
          formats={['auto', 'webp', 'avif']}
        />
        <div
          style={{
            zIndex: 1,
            position: 'absolute',
            top: '5px',
            right: '10px',
          }}
        >
          <Header />
        </div>
        <div
          style={{
            // By using the same grid area for both, they are stacked on top of each other
            gridArea: '1/1',
            position: 'relative',
            // This centers the other elements inside the hero component
            placeItems: 'center',
            display: 'grid',
            // backgroundColor: '#faf8f7',
          }}
        >
          {/* Any content here will be centered in the component */}
          <div className='align-self-center text-center'>
            <h1 className='display-1'>Saiful Islam</h1>
            <p className='lead fs-3 shine'>
              {'Software Engineer'.split('').map((char) => {
                return <span>{char}</span>;
              })}
            </p>
            <HeroIcons />
          </div>
        </div>
      </div>
      <Section id='about-me' style={{ backgroundColor: 'white' }}>
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
            <div className={sectionBodyClasses}>
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
      <Section id='skills' style={{ backgroundColor: '#efecec' }}>
        <div className='text-center'>
          <h2>I am skilled 👨🏽‍💻</h2>
          <div className={sectionBodyClasses}>
            <Skills />
          </div>
        </div>
      </Section>
      <Section id='projects' style={{ backgroundColor: 'white' }}>
        <div className='mb-5 text-center'>
          <h2>Some projects I worked on 💼</h2>
          <div className={sectionBodyClasses}>
            <Projects count={2} />
          </div>
          <Link to='/projects'>
            <Button variant='light' style={{ border: 0 }}>
              view all my projects
            </Button>
          </Link>
        </div>
      </Section>
    </Wrapper>
  );
};

export default IndexPage;

export const Head = () => <title>Saiful Islam</title>;
