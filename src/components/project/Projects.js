import * as React from 'react';
// import { graphql } from 'gatsby';
// import { GatsbyImage } from 'gatsby-plugin-image';
import Project from './Project';
import { projects } from './projects.json';

const Projects = ({ count }) => {
  const numProjectsDisplayed = count || projects.length;
  const projectsToDisplay = projects.slice(0, numProjectsDisplayed);

  return (
    <>
      {projectsToDisplay.map((project, i) => {
        return (
          <div data-aos='fade-up'>
            <Project project={project} order={i} />
          </div>
        );
      })}
    </>
  );
};

export default Projects;

// export const pageQuery = graphql`
//   query {
//     allImageSharp {
//       edges {
//         node {
//           ... on ImageSharp {
//             resize(width: 125, height: 125, rotate: 180) {
//               src
//             }
//           }
//         }
//       }
//     }
//   }
// `;
