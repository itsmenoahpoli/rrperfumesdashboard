import React from "react";
import { useNavigate } from "react-router-dom";
import {
  Container,
  Card,
  Form,
  FloatingLabel,
  Button,
  Spinner,
} from "react-bootstrap";
import toast from "react-hot-toast";

import { AuthLayout } from "components/layouts";
import { AuthService } from "lib/services/modules";

const _authService = new AuthService();

export const LoginPage = () => {
  const navigate = useNavigate();

  const [credentials, setCredentials] = React.useState({
    email: "",
    password: "",
  });
  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState(false);

  const handleLogin = (e) => {
    e.preventDefault();

    resetError();
    setLoading(true);

    setTimeout(async () => {
      await _authService
        .login(credentials)
        .then((response) => {
          const { user, accessToken } = response.data;

          localStorage.setItem("user", user);
          localStorage.setItem("accessToken", accessToken);

          navigate("/", {
            replace: true,
          });
        })
        .catch((err) => {
          setError(true);
          setLoading(false);
          toast.error("Invalid credentials provided");
        });
    }, 1500);
  };

  const resetError = () => {
    setLoading(false);
    setError(false);
  };

  return (
    <AuthLayout>
      <Container fluid className="form-container">
        <Card className="col-xs-10 col-sm-8 col-md-4 col-lg-3 col-xl-2 mx-auto">
          <Card.Body>
            <h4 className="text-center mb-3">RR PERFUMES & COLLECTION</h4>
            <h6 className="text-center text-danger mb-3">
              INVENTORY DASHBOARD
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

              <Button type="submit" className="py-2 w-100" disabled={loading}>
                {loading ? <Spinner animation="border" size="sm" /> : "LOG IN"}
              </Button>
            </Form>
          </Card.Body>
        </Card>
      </Container>
    </AuthLayout>
  );
};
