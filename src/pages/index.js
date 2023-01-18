import * as React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { StaticImage } from 'gatsby-plugin-image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';

import Layout from '../components/layout/Layout';

import 'bootstrap/dist/css/bootstrap.min.css';

import { siteMetadata } from '../../gatsby-config';

const IndexPage = () => {
  const icons = [
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

  return (
    <>
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
          <Row>
            <Col className='align-self-center'>
              <h1 className='display-1 text-end'>Saiful Islam</h1>
              <p className='lead fs-3 text-end'>Software Engineer</p>
              <Col className='text-end'>
                {icons.map((icon) => {
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
              </Col>
            </Col>
            <Col>
              <div className='col-md-6'>
                <StaticImage
                  src='../images/me.jpg'
                  className='rounded-circle img-fluid'
                  placeholder='blurred'
                  alt='A photo of Saiful'
                />
              </div>
            </Col>
          </Row>
        </div>
      </div>
      {/* <div>
        <p className='mb-5'>
          Hi, I'm Saiful. I am currently a Software Engineer at JPMorgan Chase &
          Co. I graduated from The City College of New York in Fall 2022 with a
          B.S. in Computer Science. I have a great passion for software
          development as I love problem-solving and bringing to life new ideas.
          Furthermore, I have software engineering experience through my current
          position, internships, fellowship, and personal projects. With my
          strong communication and problem-solving skills, I have what it takes
          to succeed.
        </p>
      </div> */}
      {/* JavaScript (React, Node, Express), Python, HTML, CSS/SCSS, Java, C/C++, and SQL.  */}
      {/* </Layout> */}
    </>
  );
};

export default IndexPage;

export const Head = () => <title>Saiful Islam</title>;
