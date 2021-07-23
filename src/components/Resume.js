import React from "react";
import HeaderBar from "./Header";
import Footer from "./Footer";
import { Image } from "semantic-ui-react";

const Resume = () => (
  <>
    <HeaderBar></HeaderBar>
    <h2 style={{ marginLeft: "4%" }}>Resume</h2>
    <Image src="/images/Resume.png"></Image>
    <Footer></Footer>
  </>
);

export default Resume;
