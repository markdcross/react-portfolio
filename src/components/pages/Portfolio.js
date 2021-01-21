import React, { useState, useEffect } from 'react';
import ProjectImage from '../projects/ProjectImage';
import ProjectFilter from '../projects/ProjectFilter';
import projects from '../projects/projects.json';

import Container from 'react-bootstrap/Container';
import ScrollAnimation from 'react-animate-on-scroll';
import { AnimateSharedLayout } from 'framer-motion';

const Portfolio = () => {
  const [projectState, setProjectState] = useState({
    projectList: projects,
    filteredProjectList: projects
  });
  const [filterState, setFilterState] = useState('');

  const projectListArray = projectState.projectList;

  // Whenever searchState (representing the input in the search bar) changes, filter the project list
  useEffect(() => {
    setProjectState({
      ...projectState,
      filteredProjectList: projectListArray.filter(project => {
        return (
          // allow users to search by tech
          project.tech.toString().toLowerCase().indexOf(filterState) !== -1
        );
      })
    });

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [filterState]);

  return (
    <AnimateSharedLayout>
      <h1>Recent Projects</h1>
      <hr />

      <ProjectFilter filter={setFilterState} />

      <hr />
      <Container className='projectContainer'>
        <ScrollAnimation animateIn='fadeIn' animateOut='fadeOut'>
          {projectState.filteredProjectList.map(projectInfo => (
            <ProjectImage
              layout
              projectInfo={projectInfo}
              key={projectInfo.id}
              layoutId='projects'
            />
          ))}
        </ScrollAnimation>
      </Container>
    </AnimateSharedLayout>
  );
};
export default Portfolio;
