import React from "react";
import { Icon, Segment } from "semantic-ui-react";

// import Icon from "@bit/semantic-org.semantic-ui-react.icon";
// import StyleLinks from "@bit/semantic-org.semantic-ui-react.internal.style-links";

const Footer = () => (
  <Segment style={{ backgroundColor: "rgb(107, 4, 4)", borderRadius: "0px" }}>
    <div class="links">
      <a href="https://github.com/Xunaxidonita">
        <Icon name="github" size="big" />
      </a>
      <a href="https://www.linkedin.com/in/maria-donaji-velazquez-orduna-9347581a2/">
        <Icon name="linkedin square" size="big" />
      </a>
      <a href="https://stackoverflow.com">
        <Icon name="stack overflow" size="big" />
      </a>
    </div>
  </Segment>
);
export default Footer;
