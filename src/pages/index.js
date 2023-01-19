import * as React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import { StaticImage } from 'gatsby-plugin-image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import {
  faCss3Alt,
  faGithub,
  faHtml5,
  faJava,
  faJs,
  faLinkedinIn,
  faNode,
  faPython,
  faReact,
} from '@fortawesome/free-brands-svg-icons';

import Header from '../components/layout/Header';

import 'bootstrap/dist/css/bootstrap.min.css';

import { siteMetadata } from '../../gatsby-config';

const IndexPage = () => {
  const heroIcons = [
    {
      href: `mailto:${siteMetadata.email}`,
      img: faEnvelope,
    },
    {
      href: 'https://www.linkedin.com/in/saiful-i/',
      img: faLinkedinIn,
    },
    {
      href: 'https://github.com/saifulislamdev',
      img: faGithub,
    },
  ];

  const skillsIcons = [
    {
      skill: 'Javascript',
      img: faJs,
      color: '#ffde00',
    },
    {
      skill: 'Python',
      img: faPython,
      color: '#306998',
    },
    {
      skill: 'Java',
      img: faJava,
      color: 'orange',
    },
    {
      skill: 'React',
      img: faReact,
      color: '#00ddff',
    },
    {
      skill: 'Node',
      img: faNode,
      color: '#59a953',
    },
    {
      skill: 'HTML',
      img: faHtml5,
      color: '#ff4400',
    },
    {
      skill: 'CSS',
      img: faCss3Alt,
      color: '#0074bc',
    },
  ];

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
            {/* <Col> */}
            {heroIcons.map((icon) => {
              return (
                <a
                  href={icon.href}
                  target='_blank'
                  style={{ color: 'inherit' }}
                >
                  <FontAwesomeIcon
                    className='fa-2x px-2'
                    icon={icon.img}
                  ></FontAwesomeIcon>
                </a>
              );
            })}
          </div>
        </div>
      </div>
      <Container>
        <Row className='mt-5'>
          <div className='d-flex justify-content-center align-items-center'>
            <div>
              <h2 className='mx-2 text-end'>Hi, I'm Saiful</h2>
            </div>
            <div className='mx-2 col-md-1 text-start'>
              <StaticImage
                src='../images/me.jpg'
                className='rounded-circle img-fluid'
                placeholder='blurred'
                alt='A photo of Saiful'
              />
            </div>
          </div>
          <p className='mt-3'>
            I graduated from The City College of New York in Fall 2022 with a
            B.S. in Computer Science. I have a great passion for software
            development as I love problem-solving and bringing to life new
            ideas. Furthermore, I have software engineering experience through
            my current position, internships, fellowship, and personal projects.
            With my strong communication and problem-solving skills, I have what
            it takes to succeed.
          </p>
        </Row>
        <Row className='mt-5 text-center'>
          <h2>I am skilled 👨🏽‍💻</h2>
          <div className='mt-3'>
            {skillsIcons.map((skill) => {
              return (
                <FontAwesomeIcon
                  className='fa-3x px-3'
                  icon={skill.img}
                  style={{ color: skill.color }}
                ></FontAwesomeIcon>
              );
            })}
          </div>
        </Row>
      </Container>
      {/* Express, C/C++, and SQL.  */}
    </>
  );
};

export default IndexPage;

export const Head = () => <title>Saiful Islam</title>;
