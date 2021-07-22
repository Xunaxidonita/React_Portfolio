import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import { Image } from "react-router-dom";

const About = () => (
  <>
    <Header></Header>
    <h2>About me</h2>
    <Image
      src="./assets/images/Donita.png"
      alt="Donaji Velazquez's profile picture"
    ></Image>
    <h4>Maria Donaji Velazquez Orduna</h4>
    <h5>Graphic Designer/Programer</h5>

    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
      veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
      commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
      velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
      cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
      est laborum.
    </p>

    <Footer></Footer>
  </>
);

export default About;
