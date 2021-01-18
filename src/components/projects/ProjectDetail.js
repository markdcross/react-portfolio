import React, { Fragment } from 'react';
import Card from 'react-bootstrap/Card';
import CardButton from './CardButton';

const ProjectDetail = ({ projName, description, repo, app }) => {
  return (
    <div
      style={{
        backgroundColor: 'rgba(191, 178, 163, 1)',
        borderRadius: '1rem',
        padding: '2rem'
      }}
    >
      <Card.Title
        style={{
          color: '#143840',

          fontWeight: 'bold'
        }}
      >
        {projName}
      </Card.Title>
      <Card.Text
        style={{
          color: '#143840',
          fontWeight: 'bold'
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
