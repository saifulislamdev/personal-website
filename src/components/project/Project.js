import * as React from 'react';
import Alert from 'react-bootstrap/Alert';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faTriangleExclamation,
  faUser,
  faUsers,
  faUserGroup,
} from '@fortawesome/free-solid-svg-icons';
import { getColor, getMatchingIcon } from './icons';

const Project = ({ project, order }) => {
  const getTeamSizeInfo = (teamSize) => {
    if (teamSize == 1) {
      return {
        icon: faUser,
        msg: 'Only me',
      };
    } else if (teamSize == 2) {
      return {
        icon: faUsers,
        msg: 'I had a partner',
      };
    } else {
      return {
        icon: faUserGroup,
        msg: `Team of ${teamSize}`,
      };
    }
  };

  let { name, description, links, mainStack, otherStack, teamSize, note } =
    project;
  const { icon: teamIcon, msg: teamMsg } = getTeamSizeInfo(teamSize);
  description = Array.isArray(description) ? description : [description]; // convert to array

  return name && description ? (
    <Row className='py-3 d-flex'>
      <Col lg>
        {/* <Col lg={{ order: order % 2 ? 'last' : 'first' }}> */}
        {/* <StaticImage
                src={`../../images/${project.img}`}
                placeholder='blurred'
                formats={['auto', 'webp', 'avif']}
                alt={`${project.name} logo`}
              /> */}
        <h3>{name}</h3>
      </Col>
      <Col className='text-start' lg>
        {mainStack && (
          <Row>
            {otherStack && (
              <Col xs={2}>
                <p className='m-0'>Main Stack</p>
              </Col>
            )}
            <Col>
              {mainStack.map((technology) => {
                return (
                  <div
                    className='mb-1 me-1 badge rounded-pill'
                    style={{
                      backgroundColor: getColor(technology, '#0D6EFD'),
                    }}
                  >
                    {technology}
                  </div>
                );
              })}
            </Col>
          </Row>
        )}
        {otherStack && (
          <Row className='pb-2'>
            <Col xs={2}>
              <p className='m-0'>Other</p>
            </Col>
            <Col>
              {otherStack &&
                otherStack.map((technology) => {
                  return (
                    <div
                      className='mb-1 me-1 badge rounded-pill'
                      style={{
                        backgroundColor: getColor(technology, '#0D6EFD'),
                      }}
                    >
                      {technology}
                    </div>
                  );
                })}
            </Col>
          </Row>
        )}
        {/* <div className='pb-1 d-flex align-items-center'>
          <div>
            <FontAwesomeIcon
              icon={teamIcon}
              className='pe-2'
              style={{ color: 'gray' }}
            />
          </div>
          <div>
            <p className='m-0' style={{ color: 'gray' }}>
              {teamMsg}
            </p>
          </div>
        </div> */}
        {description.map((descriptionLine) => {
          return <p>{descriptionLine}</p>;
        })}
        {note && (
          <Alert variant='warning' className='d-flex align-items-center'>
            <FontAwesomeIcon className='pe-3' icon={faTriangleExclamation} />
            <p className='m-0'>{note}</p>
          </Alert>
        )}
        {links &&
          links.map((link) => {
            const { name: linkName, url: linkUrl, type: linkType } = link;
            const bgColor = getColor(linkType);

            return linkName ? (
              <div className='pb-2'>
                <Button
                  href={linkUrl}
                  style={{ border: 0, backgroundColor: bgColor }}
                >
                  <FontAwesomeIcon
                    icon={getMatchingIcon(linkType).img}
                    className='pe-2'
                    fixedWidth
                  />
                  Visit {teamSize && teamSize > 1 ? 'our' : 'my'} {linkName}
                </Button>
              </div>
            ) : (
              <></>
            );
          })}
      </Col>
    </Row>
  ) : (
    <></>
  );
};

export default Project;
