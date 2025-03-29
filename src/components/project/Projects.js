import * as React from 'react';
import Project from './Project';
import { projects } from './projects.json';

const Projects = ({ count }) => {
  const numProjectsDisplayed = count ?? projects.length;
  const projectsToDisplay = projects.slice(0, numProjectsDisplayed);

  return (
    <>
      {projectsToDisplay.map((project, i) => {
        return (
          <div data-aos='fade-up' key={`project-${i}`}>
            <Project project={project} order={i} />
          </div>
        );
      })}
    </>
  );
};

export default Projects;