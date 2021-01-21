import React from 'react';
import Card from 'react-bootstrap/Card';
import CardButton from './CardButton';

const ProjectDetail = ({ name, description, repo, app }) => {
  return (
    <div className='projectDetail mediaQuery'>
      <Card.Title
        style={{
          color: '#143840',
          fontWeight: '800',
          fontFamily: `'Montserrat', sans-serif`
        }}
      >
        {name}
      </Card.Title>
      <Card.Text
        style={{
          color: '#143840',
          fontWeight: '600',
          fontFamily: `'Montserrat', sans-serif`
        }}
      >
        {description}
      </Card.Text>

      <CardButton text='See the Code' href={repo} />
      <CardButton text='See it Live' href={app} />
    </div>
  );
};

export default ProjectDetail;
