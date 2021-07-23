import React from "react";
import { Card, Icon, Image } from "semantic-ui-react";
import "semantic-ui-css/semantic.min.css";

const ProjectCard = ({ project }) => (
  <Card>
    <Image src={project.image} wrapped ui={false} />
    <Card.Content>
      <Card.Header>{project.title}</Card.Header>
      <Card.Meta>
        <a href={project.code}>GitHub</a>
      </Card.Meta>
    </Card.Content>
    <Card.Content extra>
      <a href={project.deployed}>Run Buddy</a>
    </Card.Content>
  </Card>
);

export default ProjectCard;
