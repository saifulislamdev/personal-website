import * as React from 'react';
import Alert from 'react-bootstrap/Alert';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTriangleExclamation } from '@fortawesome/free-solid-svg-icons';
import { getColor, getMatchingIcon } from '../../utils/icons';

const Project = ({ project, order }) => {
  let {
    name,
    description,
    descriptionLines,
    img,
    links,
    mainStack,
    otherStack,
    teamSize,
    note,
  } = project;
  const displayedDescriptionLines = description
    ? [description]
    : descriptionLines;

  return name && displayedDescriptionLines ? (
    <Row className='py-3 justify-content-center align-items-center'>
      <Col lg className='text-center'>
        <img src={`../../${img}`} className='img-fluid' alt={`${name} logo`} />
      </Col>
      <Col className='text-start' lg>
        <Row>
          <h3 className='text-start'>{name}</h3>
        </Row>
        {mainStack && (
          <Row>
            {otherStack && (
              <Col xs={2}>
                <p className='m-0'>Main</p>
              </Col>
            )}
            <Col>
              {mainStack.map((tech, i) => {
                return (
                  <div
                    className='mb-1 me-1 badge rounded-pill'
                    style={{
                      backgroundColor: getColor(tech, '#0D6EFD'),
                    }}
                    key={`project-main-stack-${i}`}
                  >
                    {tech}
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
                otherStack.map((tech) => {
                  return (
                    <div
                      className='mb-1 me-1 badge rounded-pill'
                      style={{
                        backgroundColor: getColor(tech, '#0D6EFD'),
                      }}
                      key={`project-other-stack-${tech}`}
                    >
                      {tech}
                    </div>
                  );
                })}
            </Col>
          </Row>
        )}
        {displayedDescriptionLines.map((descriptionLine, i) => {
          return <p key={`description-line-${i}`}>{descriptionLine}</p>;
        })}
        {note && (
          <Alert variant='warning' className='d-flex align-items-center'>
            <FontAwesomeIcon className='pe-3' icon={faTriangleExclamation} />
            <p className='m-0'>{note}</p>
          </Alert>
        )}
        {links &&
          links?.map((link, i) => {
            const {
              name: linkName,
              url: linkUrl,
              type: linkType,
            } = typeof link === 'object' && !Array.isArray(link) ? link : {};
            const matchingIcon = getMatchingIcon(linkType);
            const bgColor = getColor(linkType);

            return linkName ? (
              <div className='pb-2' key={`project-link-${i}`}>
                <Button
                  href={linkUrl}
                  style={{
                    border: 0,
                    backgroundColor: bgColor,
                    textAlign: 'left',
                  }}
                >
                  <FontAwesomeIcon
                    icon={matchingIcon?.img}
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
