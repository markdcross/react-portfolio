import React, { useState, useEffect } from 'react';
import ProjectImage from './ProjectImage';
import projects from './projects.json';

import ScrollAnimation from 'react-animate-on-scroll';
import { AnimateSharedLayout } from 'framer-motion';

const Projects = () => {
  const [projectState, setProjectState] = useState({
    projectList: projects,
    filteredProjectList: projects
  });
  const [filterState, setFilterState] = useState('');

  const projectListArray = projectState.projectList;
  const filteredProjectListArray = projectState.filteredProjectList;

  // Whenever searchState (representing the input in the search bar) changes, filter the employee list
  useEffect(() => {
    setProjectState({
      ...projectState,
      filteredProjectList: projectListArray.filter(project => {
        return (
          // allow users to search for first/last name or phone
          project.tech.toString().toLowerCase().indexOf(filterState) !== -1
        );
      })
    });
    console.log({ filterState });
    console.log({ filteredProjectListArray });

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [filterState]);

  return (
    <AnimateSharedLayout>
      <h1>Recent Projects</h1>
      <h3>Select a technology below to filter the list</h3>

      <img
        src='https://cdn.svgporn.com/logos/react.svg'
        alt='React'
        onClick={() => setFilterState('react')}
        style={{ cursor: 'pointer', height: '3rem', marginRight: '2rem' }}
      />
      <img
        src='https://cdn.svgporn.com/logos/javascript.svg'
        alt='JavaScript'
        onClick={() => setFilterState('javascript')}
        style={{ cursor: 'pointer', height: '3rem', marginRight: '2rem' }}
      />
      <img
        src='https://cdn.svgporn.com/logos/nodejs.svg'
        alt='Nodejs'
        onClick={() => setFilterState('node')}
        style={{ cursor: 'pointer', height: '3rem', marginRight: '2rem' }}
      />
      <img
        src='https://cdn.svgporn.com/logos/mongodb.svg'
        alt='MongoDB'
        onClick={() => setFilterState('mongodb')}
        style={{ cursor: 'pointer', height: '3rem', marginRight: '2rem' }}
      />
      <img
        src='https://cdn.svgporn.com/logos/mysql.svg'
        alt='MySQL'
        onClick={() => setFilterState('mysql')}
        style={{ cursor: 'pointer', height: '3rem', marginRight: '2rem' }}
      />
      <i
        class='far fa-times-circle'
        onClick={() => setFilterState('')}
        style={{
          display: 'inline-block',
          cursor: 'pointer',
          fontSize: '2rem',
          marginRight: '2rem',
          justifyContent: 'center'
        }}
      />

      <ScrollAnimation animateIn='fadeIn' animateOut='fadeOut'>
        {projectState.filteredProjectList.map(
          ({ id, img, name, description, repo, app }, i) => (
            <ProjectImage
              layout
              image={img}
              name={name}
              description={description}
              repo={repo}
              app={app}
              key={id}
              id={id}
              layoutId='projects'
            />
          )
        )}
      </ScrollAnimation>
    </AnimateSharedLayout>
  );
};
export default Projects;
