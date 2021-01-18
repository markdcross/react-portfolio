import React from 'react';
import ProjectImage from './ProjectImage';
import projects from './projects.json';

import { AnimateSharedLayout } from 'framer-motion';


const Projects = () => {
  return (
    <AnimateSharedLayout>
      {projects.map(({ id, img, projName, description, repo, app }, i) => (
        <ProjectImage
          layout
          image={img}
          name={projName}
          description={description}
          repo={repo}
          app={app}
          key={id}
          id={id}
          layoutId='projects'
        />
      ))}
    </AnimateSharedLayout>
  );
};
export default Projects;
