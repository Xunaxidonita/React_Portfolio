import React from "react";
import { Card, Container } from "semantic-ui-react";
import ProjectCard from "./ProjectCard";

const Main = () => {
  const projects = [
    {
      key: "rb",
      title: "Run Budy",
      image: "/images/run-buddy.png",
      deployed: "https://xunaxidonita.github.io/run-buddy/",
      code: "https://github.com/Xunaxidonita/run-buddy",
    },
    {
      key: "ho",
      title: "Horiseon Refactor",
      image: "/images/horiseon.png",
      deployed: "https://xunaxidonita.github.io/codeRefactorHoriseon/",
      code: "https://github.com/Xunaxidonita/codeRefactorHoriseon",
    },
    {
      key: "pg",
      title: "Passwor Generator",
      image: "/images/pass-gen.jpg",
      deployed: "https://xunaxidonita.github.io/Password-Generator/",
      code: "https://github.com/Xunaxidonita/Password-Generator/",
    },
    {
      key: "cq",
      title: "Code Quiz",
      image: "/images/code-quiz.png",
      deployed: "https://xunaxidonita.github.io/Work-day-scheduler/",
      code: "https://github.com/Xunaxidonita/Work-day-scheduler/",
    },
    {
      key: "ws",
      title: "Work Scheduler",
      image: "/images/scheduler.png",
      deployed: "https://xunaxidonita.github.io/Code-quiz/",
      code: "https://github.com/Xunaxidonita/Code-quiz/",
    },
    {
      key: "wh",
      title: "Word Search",
      image: "/images/word-search_bg.png",
      deployed: "https://xunaxidonita.github.io/word-search/",
      code: "https://github.com/Xunaxidonita/word-search/",
    },
    {
      key: "wh",
      title: "What's for dinner",
      image: "/images/WFDinner.png",
      deployed: "https://infinite-citadel-40199.herokuapp.com",
      code: "https://github.com/Xunaxidonita/Whats_for_dinner",
    },
    // {
    //   key: "wh",
    //   title: "What's for dinner",
    //   image: "/images/WFDinner.png",
    //   deployed: "https://infinite-citadel-40199.herokuapp.com",
    //   code: "https://github.com/Xunaxidonita/Whats_for_dinner",
    // },
  ];

  return (
    <Container style={{ justifyContent: "center" }}>
      <Card.Group>
        {projects.map((project) => (
          <ProjectCard project={project}></ProjectCard>
        ))}
      </Card.Group>
    </Container>
  );
};

export default Main;
