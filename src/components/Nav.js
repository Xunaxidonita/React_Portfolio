import React from "react";
// import { Menu } from "semantic-ui-react";
import { Link } from "react-router-dom";
import { Menu } from "semantic-ui-react";

const Nav = () => (
  <Menu style={{ background: "none", border: "none", boxShadow: "none" }}>
    <Link to="/about" id="aboutme-link">
      About me
    </Link>
    <Link to="/portfolio" id="portfolio-link">
      Portfolio
    </Link>
    <Link to="/contact" id="contact-link">
      Contact
    </Link>
    <Link to="/resume" id="resume-link">
      Resume
    </Link>
  </Menu>
);

export default Nav;
