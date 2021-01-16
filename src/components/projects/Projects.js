import React from 'react';
import ProjectCard from './ProjectCard';
import projects from './projects.json';

const Projects = () => {
  return (
    <div style={userStyle}>
      {projects.map(({ id, img, name, description, repo, app }) => (
        <ProjectCard
          key={id}
          image={img}
          name={name}
          description={description}
          repo={repo}
          app={app}
        />
      ))}
    </div>
  );
};

const userStyle = {
  display: 'grid',
  gridTemplateColumns: 'repeat(3, 1fr)',
  gridGap: '1rem'
};

export default Projects;
