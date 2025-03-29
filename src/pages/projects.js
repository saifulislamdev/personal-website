import * as React from 'react';
import Projects from '../components/project/Projects';
import Layout from '../components/layout/Layout';
import Wrapper from '../components/layout/Wrapper';
import { projects } from '../components/project/projects.json';
import { getColor } from '../utils/icons';

const ProjectsPage = () => {
  const getUniqueTechnologiesSorted = () => {
    const technologies = projects?.flatMap((project) => {
      let techStack = [];
      if ('mainStack' in project && Array.isArray(project['mainStack'])) {
        techStack = techStack.concat(project['mainStack']);
      }
      if ('otherStack' in project && Array.isArray(project['otherStack'])) {
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
    <Wrapper>
      <Layout>
        <h1 className='text-center'>My Projects</h1>
        <div>
          {uniqueTechnologiesSorted &&
            uniqueTechnologiesSorted.map((technology) => {
              return (
                <div
                  className='mb-1 me-1 badge rounded-pill'
                  style={{ backgroundColor: getColor(technology, '#0D6EFD') }}
                  key={`tech-${technology}`}
                >
                  {technology}
                </div>
              );
            })}
        </div>
        <Projects />
      </Layout>
    </Wrapper>
  );
};

export default ProjectsPage;
