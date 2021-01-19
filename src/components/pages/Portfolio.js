import React, { useState, useEffect } from 'react';
import ProjectImage from '../projects/ProjectImage';
import ProjectFilter from '../projects/ProjectFilter';
import projects from '../projects/projects.json';

import ScrollAnimation from 'react-animate-on-scroll';
import { AnimateSharedLayout } from 'framer-motion';

const Portfolio = () => {
  const [projectState, setProjectState] = useState({
    projectList: projects,
    filteredProjectList: projects
  });
  const [filterState, setFilterState] = useState('');

  const projectListArray = projectState.projectList;

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

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [filterState]);

  return (
    <AnimateSharedLayout>
      <h1>Recent Projects</h1>
      <hr />
      <ProjectFilter filter={setFilterState} />

      <hr />
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
export default Portfolio;
