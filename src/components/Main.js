import React from "react";
import { Card, Container } from "semantic-ui-react";
import ProjectCard from "./ProjectCard";

const Main = () => {
  const projects = [
    {
      key: "rb",
      title: "Run Budy",
      image: "/images/run-buddy.png",
      deployed: "https://lernantino.github.io/run-buddy/",
      code: "https://github.com/Xunaxidonita/run-buddy",
    },
    {
      key: "ad",
      title: "segundo",
      image: "/images/calc.jpg",
      deployed: "facebook.com",
      code: "github.com",
    },
  ];

  return (
    <Container>
      <Card.Group>
        {projects.map((project) => (
          <ProjectCard project={project}></ProjectCard>
        ))}
      </Card.Group>
    </Container>
  );
};

export default Main;
