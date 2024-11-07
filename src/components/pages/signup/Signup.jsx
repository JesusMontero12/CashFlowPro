import React, { useState } from "react";
import { Container, Card, Form, Button } from "react-bootstrap";
import { Eye, EyeOff, TrendingUp } from "lucide-react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { auth } from "../../../firebaseConfig.js";

const Signup = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const registerUser = async (e) => {
    e.preventDefault();
    setError("");
    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      navigate("/dashboard"); // Redirige después de un registro exitoso
    } catch (error) {
      setError("Error registering user: " + error.message); // Muestra el mensaje de error
    }
  };

   

  return (
    <Container
      fluid
      className="min-vh-100 d-flex align-items-center justify-content-center bg-light"
    >
      <Card
        className="border-0 shadow-lg"
        style={{ maxWidth: "24rem", width: "100%", borderRadius: "1rem" }}
      >
        <Card.Body className="p-4">
          <div className="d-flex align-items-center justify-content-center mb-4">
            <TrendingUp size={40} className="text-success me-2" />
            <h2 className="display-6 fw-bolder mb-0">CashFlowPro</h2>
          </div>
          <Form onSubmit={registerUser}>
            <Form.Group className="mb-3" controlId="formBasicUsername">
              <Form.Label className="text-muted small">Username</Form.Label>
              <Form.Control
                type="text"
                placeholder="Your username"
                required
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="py-2 border-2"
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label className="text-muted small">
                Email Address
              </Form.Label>
              <Form.Control
                type="email"
                placeholder="you@example.com"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="py-2 border-2"
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label className="text-muted small">Password</Form.Label>
              <div className="position-relative">
                <Form.Control
                  type={showPassword ? "text" : "password"}
                  placeholder="Enter your password"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="py-2 border-2"
                  autoComplete="off"
                />
                <Button
                  variant="link"
                  className="position-absolute top-50 end-0 translate-middle-y text-muted"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                </Button>
              </div>
            </Form.Group>
            {error && <p style={{ color: "red" }}>{error}</p>}
            <Button variant="success" type="submit" className="w-100 py-2 mb-3">
              Sign up
            </Button>
          </Form>
        </Card.Body>
        <Card.Footer className="text-center bg-light border-top-0 py-3">
          <p className="text-muted small mb-0">
            Already have an account?
            <Button
              variant="link"
              href="/"
              className="p-0 text-success small fw-bold"
            >
              Sign in
            </Button>
          </p>
        </Card.Footer>
      </Card>
    </Container>
  );
};

export default Signup;
