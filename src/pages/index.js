import * as React from 'react';
import { Link } from 'gatsby';
import { StaticImage } from 'gatsby-plugin-image';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faCss3Alt,
  faHtml5,
  faJava,
  faJs,
  faNode,
  faPython,
  faReact,
} from '@fortawesome/free-brands-svg-icons';

import Header from '../components/layout/Header';
import HeroIcons from '../components/home/HeroIcons';
import Projects from '../components/project/Projects';

// import { ParallaxProvider } from 'react-scroll-parallax';
// import { Parallax } from 'react-scroll-parallax';
import AOS from 'aos';
import 'aos/dist/aos.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const Section = ({ children, style }) => {
  return (
    <section className='py-4' style={style}>
      {/* <Parallax> */}
      <Container>
        <div data-aos='fade-up'>{children}</div>
      </Container>
      {/* </Parallax> */}
    </section>
  );
};

const IndexPage = () => {
  AOS.init();

  const skillsIcons = [
    {
      name: 'Javascript',
      img: faJs,
      color: '#ffde00',
    },
    {
      name: 'Python',
      img: faPython,
      color: '#306998',
    },
    {
      name: 'Java',
      img: faJava,
      color: 'orange',
    },
    {
      name: 'React',
      img: faReact,
      color: '#00ddff',
    },
    {
      name: 'Node',
      img: faNode,
      color: '#59a953',
    },
    {
      name: 'HTML',
      img: faHtml5,
      color: '#ff4400',
    },
    {
      name: 'CSS',
      img: faCss3Alt,
      color: '#0074bc',
    },
  ];

  const sectionBodyClasses = ['py-3'].join(' ');

  return (
    <>
      <Header />
      <div className='vh-100' style={{ display: 'grid' }}>
        <StaticImage
          style={{
            gridArea: '1/1',
            opacity: '0.2',
          }}
          layout='fullWidth'
          alt=''
          src='../images/hero.jpg'
          formats={['auto', 'webp', 'avif']}
        />
        <div
          style={{
            // By using the same grid area for both, they are stacked on top of each other
            gridArea: '1/1',
            position: 'relative',
            // This centers the other elements inside the hero component
            placeItems: 'center',
            display: 'grid',
          }}
        >
          {/* Any content here will be centered in the component */}
          <div className='align-self-center text-center'>
            <h1 className='display-1'>Saiful Islam</h1>
            <p className='lead fs-3'>Software Engineer</p>
            <HeroIcons />
          </div>
        </div>
      </div>
      <Section style={{ backgroundColor: 'white' }}>
        <Row className='justify-content-center align-items-center'>
          <Col>
            <div className='d-flex justify-content-center align-items-center'>
              <div>
                <h2 className='mx-2 text-end'>Hi, I'm Saiful</h2>
              </div>
              <div className='mx-2 col-md-2 text-start'>
                <StaticImage
                  src='../images/me.jpg'
                  className='rounded-circle img-fluid'
                  placeholder='blurred'
                  alt='A photo of Saiful'
                />
              </div>
            </div>
          </Col>
          <Col>
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
      <Section style={{ backgroundColor: '#faf8f7' }}>
        <div className='text-center'>
          <h2>I am skilled 👨🏽‍💻</h2>
          <div className={sectionBodyClasses}>
            {skillsIcons.map((skill) => {
              return (
                <Row
                  xs={6}
                  className='my-3 justify-content-center align-items-center'
                >
                  <Col xs={1} className='text-center'>
                    <FontAwesomeIcon
                      className='fa-3x'
                      icon={skill.img}
                      style={{ color: skill.color }}
                    />
                  </Col>
                  <Col xs={1} className='ps-0 text-start'>
                    <p className='mb-0 fs-5'>{skill.name}</p>
                  </Col>
                </Row>
              );
            })}
            {/* TODO: Express, C/C++, and SQL.  */}
          </div>
        </div>
      </Section>
      <Section style={{ backgroundColor: 'white' }}>
        <div className='mb-5 text-center'>
          <h2>Some projects I worked on 💼</h2>
          <div className={sectionBodyClasses}>
            <Projects count={2} />
          </div>
          <Link to='/projects'>
            <Button variant='light'>view all my projects</Button>
          </Link>
        </div>
      </Section>
    </>
  );
};

export default IndexPage;

export const Head = () => <title>Saiful Islam</title>;
