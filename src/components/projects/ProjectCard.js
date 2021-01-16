import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

function ProjectCard({ name, image, description, repo, app }) {
  return (
    <Card>
      <Card.Img variant='top' alt={name} src={image} />
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Text>{description}</Card.Text>
        <Button variant='secondary'>
          <a href={repo} target='_blank' rel='noreferrer noopener'>
            See the Code
          </a>
        </Button>
        <Button variant='secondary'>
          {' '}
          <a href={app} target='_blank' rel='noreferrer noopener'>
            See it Live
          </a>
        </Button>
      </Card.Body>
    </Card>
  );
}

export default ProjectCard;
