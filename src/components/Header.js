import React from "react";
import Nav from "./Nav";
import { Header, Segment } from "semantic-ui-react";

const HeaderBar = () => (
  <Segment
    style={{
      backgroundImage: `url('${process.env.PUBLIC_URL}/images/background.png')`,
      backgroundPosition: "bottom",
      backgroundSize: "cover",
      borderRadius: "0px",
    }}
  >
    <Header
      as="h1"
      style={{
        fontWeight: "bolder",
        color: "indigo",
        background: "none",
      }}
    >
      Xunaxidonita
      <Nav
        style={{ background: "none", border: "none", boxShadow: "none" }}
      ></Nav>
    </Header>
  </Segment>
);

export default HeaderBar;
