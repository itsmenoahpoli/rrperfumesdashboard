import React from "react";
import { Container } from "react-bootstrap";

export const AuthLayout = (props) => {
  const { children } = props;

  return (
    <Container fluid className="auth-container">
      <Container fluid className="auth-wrapper">
        {children}
      </Container>
    </Container>
  );
};
