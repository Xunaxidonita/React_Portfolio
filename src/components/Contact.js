import React from "react";
import HeaderBar from "./Header";
import Footer from "./Footer";
import ContactForm from "./ContactForm";
import { Container } from "semantic-ui-react";

const Contact = () => (
  <>
    <HeaderBar></HeaderBar>
    <h2 style={{ marginLeft: "4%" }}>Contact me</h2>
    <Container>
      <ContactForm></ContactForm>
    </Container>
    <Footer></Footer>
  </>
);

export default Contact;
