import React from 'react';
import ProjectCard from './ProjectCard';
// import ProjectImage from './ProjectImage';
import projects from './projects.json';
import Container from 'react-bootstrap/Container';

const Projects = () => {
  return (
    <Container fluid className='projectContainer'>
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
    </Container>
  );
};

export default Projects;
