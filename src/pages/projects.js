import * as React from 'react';
import Row from 'react-bootstrap/Row';
import Projects from '../components/project/Projects';
import Layout from '../components/layout/Layout';
import { projects } from '../components/project/projects.json';
import { getColor } from '../components/project/icons';

const ProjectsPage = () => {
  const getUniqueTechnologiesSorted = () => {
    const technologies = projects.flatMap((project) => {
      let techStack = [];
      if ('mainStack' in project) {
        techStack = techStack.concat(project['mainStack']);
      }
      if ('otherStack' in project) {
        techStack = techStack.concat(project['otherStack']);
      }
      return techStack;
    });

    const uniqueTechnologies = [...new Set(technologies)];
    const uniqueTechnologiesSorted = uniqueTechnologies.sort();

    return uniqueTechnologiesSorted;
  };

  const uniqueTechnologiesSorted = getUniqueTechnologiesSorted();

  return (
    <Layout>
      <h1 className='text-center'>My Projects</h1>
      <div>
        {uniqueTechnologiesSorted &&
          uniqueTechnologiesSorted.map((technology) => {
            return (
              <div
                className='mb-1 me-1 badge rounded-pill'
                style={{ backgroundColor: getColor(technology, '#0D6EFD') }}
              >
                {technology}
              </div>
            );
          })}
      </div>
      <Projects />
    </Layout>
  );
};

export default ProjectsPage;
