import React from "react";
import { Card, Icon, Image } from "semantic-ui-react";
import "semantic-ui-css/semantic.min.css";

const ProjectCard = ({ project }) => (
  <Card>
    <Image src="../assets/images/" wrapped ui={false} />
    <Card.Content>
      <Card.Header>Titulo</Card.Header>
      <Card.Meta>Joined in 2016</Card.Meta>
      <Card.Description>
        Daniel is a comedian living in Nashville.
      </Card.Description>
    </Card.Content>
    <Card.Content extra>
      <a>
        <Icon name="projectname" />
        ProjectName
      </a>
    </Card.Content>
  </Card>
);

export default ProjectCard;
