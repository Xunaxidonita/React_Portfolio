import React, { useState } from "react";
import { Button, Form, Input, Container } from "semantic-ui-react";
import validator from "validator";
import isEmail from "validator/lib/isEmail";

const validateRequired = (name, value) => {
  if (!value || !value.toString().trim().length) {
    return {
      content: `Please enter a ${name}`,
    };
  }
};

const validateEmail = (value) => {
  const valido = validator.isEmail(value);
  if (!valido) {
    return {
      content: `Please enter a valid email`,
    };
  }
};

const validateLength = (value) => {
  if (value.toString().trim().length < 12) {
    return {
      content: "Please enter a message of at least 12 characters",
    };
  }
};

const ContactForm = () => {
  const [state, setState] = useState({});
  const handleChange = (e, { name, value }) => {
    var error;
    if (name === "email") {
      error = validateEmail(value);
      setState({ ...state, [name]: { value, error } });
      if (error) {
        return;
      }
    }
    if (name === "message") {
      error = validateLength(value);
      setState({ ...state, [name]: { value, error } });
      if (error) {
        return;
      }
    }
    error = validateRequired(name, value);
    setState({ ...state, [name]: { value, error } });
  };
  const handleSubmit = (e) => {
    const emailError = validateRequired("email", state.email?.value);
    const nameError = validateRequired("name", state.name?.value);
    const messageError = validateRequired("message", state.message?.value);
    let newState = state;

    if (emailError) {
      newState = {
        ...state,
        email: { value: state.email?.value, error: emailError },
      };
    }

    if (nameError) {
      newState = {
        ...newState,
        name: { value: state.name?.value, error: nameError },
      };
    }

    if (messageError) {
      newState = {
        ...newState,
        message: { value: state.message?.value, error: messageError },
      };
    }

    setState(newState);
  };

  return (
    <Container>
      <Form onSubmit={handleSubmit}>
        <Form.Field
          name="name"
          onChange={handleChange}
          id="form-input-control-error-name"
          label="Name"
          placeholder="Joe Schmoe"
          control={Input}
          error={state.name?.error}
        ></Form.Field>
        <Form.Field
          name="email"
          onChange={handleChange}
          id="form-input-control-error-email"
          control={Input}
          label="Email"
          placeholder="joe@schmoe.com"
          error={state.email?.error}
        ></Form.Field>
        <Form.Field
          name="message"
          onChange={handleChange}
          id="form-input-control-error-message"
          label="Message"
          control={Input}
          error={state.message?.error}
        ></Form.Field>
        <Button type="submit">Submit</Button>
      </Form>
    </Container>
  );
};

export default ContactForm;
