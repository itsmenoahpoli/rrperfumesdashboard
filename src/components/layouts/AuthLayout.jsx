import React from "react";
import { Container } from "react-bootstrap";

export const AuthLayout = (props) => {
  const { children } = props;

  return (
    <Container fluid className="auth-container">
      {children}
    </Container>
  );
};
