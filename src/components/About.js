import React from "react";
import HeaderBar from "./Header";
import Footer from "./Footer";
import Bio from "./Bio";
import { Image } from "semantic-ui-react";

const About = () => (
  <>
    <HeaderBar></HeaderBar>
    <h2 style={{ marginLeft: "4%" }}>About me</h2>
    <Image
      src="/images/Donita.png"
      alt="Donaji Velazquez's profile picture"
      style={{
        borderRadius: "8px",
        maxWidth: "300px",
        margin: "0px auto 12px auto",
      }}
    ></Image>
    <Bio></Bio>
    <Footer></Footer>
  </>
);

export default About;
