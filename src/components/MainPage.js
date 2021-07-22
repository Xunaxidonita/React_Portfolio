import React from "react";
import Header from "./Header";
import Footer from "./Footer";

const projects = [
    {key:"", value:"", }
]

export default MainPage;
const MainPage = (projects) => (
      <>
        <Header></Header>
        <ProjectViewer projects>
          <ProjectCard project></ProjectCard>
        </ProjectViewer>
        <Footer></Footer>
      </>

);

export default MainPage;
