import * as React from 'react';
import Col from 'react-bootstrap/Col';
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

const Skills = () => {
  const icons = [
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

  return (
    <>
      {icons.map((icon, i) => {
        return (
          <Row
            className='my-3 justify-content-center align-items-center'
            key={`skill-${i}`}
          >
            <Col className='text-end'>
              <FontAwesomeIcon
                className='fa-3x'
                icon={icon.img}
                style={{ color: icon.color }}
              />
            </Col>
            <Col className='text-start'>
              <p className='mb-0 fs-5'>{icon.name}</p>
            </Col>
          </Row>
        );
      })}
      {/* TODO: Express, C/C++, and SQL.  */}
    </>
  );
};

export default Skills;
