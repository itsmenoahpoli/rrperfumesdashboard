import React from "react";
import { Container, Card, Form, FloatingLabel, Button } from "react-bootstrap";
import toast from "react-hot-toast";

import { AuthLayout } from "components/layouts";

export const LoginPage = () => {
  const [credentials, setCredentials] = React.useState({
    email: "",
    password: "",
  });
  const [error, setError] = React.useState(false);

  const handleLogin = async (e) => {
    e.preventDefault();

    setError(true);
    toast.error("ERROR: Failed connection to server");
  };

  const resetError = () => {
    setError(false);
  };

  return (
    <AuthLayout>
      <Container fluid className="form-container">
        <Card className="col-md-2 border-0 mx-auto p-2">
          <Card.Body>
            <h6 className="text-center text-muted mb-3">
              RR Perfumes & Collection Dashboard Panel
            </h6>

            <Form onSubmit={handleLogin}>
              <Form.Group className="form-group">
                <FloatingLabel label="Email">
                  <Form.Control
                    type="email"
                    placeholder="Email"
                    className={`${error ? "border-danger" : ""}`}
                    onChange={(e) => {
                      resetError();
                      setCredentials({ ...credentials, email: e.target.value });
                    }}
                    required
                  />
                </FloatingLabel>
              </Form.Group>

              <Form.Group className="form-group">
                <FloatingLabel label="Password">
                  <Form.Control
                    type="password"
                    placeholder="Password"
                    className={`${error ? "border-danger" : ""}`}
                    onChange={(e) => {
                      resetError();
                      setCredentials({
                        ...credentials,
                        password: e.target.value,
                      });
                    }}
                    required
                  />
                </FloatingLabel>
              </Form.Group>

              <Button type="submit" className="py-2 w-100">
                LOG IN
              </Button>
            </Form>
          </Card.Body>
        </Card>
      </Container>
    </AuthLayout>
  );
};
