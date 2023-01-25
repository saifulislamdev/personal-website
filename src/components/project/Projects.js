import * as React from 'react';
// import { graphql } from 'gatsby';
// import { GatsbyImage } from 'gatsby-plugin-image';
import Project from './Project';
import { projects } from './projects.json';

const Projects = ({ count }) => {
  const numProjectsDisplayed = count || projects.length;

  return (
    <>
      {projects.slice(0, numProjectsDisplayed).map((project, i) => {
        return <Project project={project} order={i} />;
      })}
    </>
  );
};

// TODO: install sharp (and go over doc)
// TODO: try to open graphql locally and learn it
// TODO: go over code for importing img
// TODO: commit code
// TODO: work on projects page
// TODO: work on animations
// TODO: deploy
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
