import React, { useState } from "react";
import { Eye, EyeOff, TrendingUp } from "lucide-react";
import { Button, Card, Container, Form } from "react-bootstrap";
import { auth } from "../../../firebaseConfig.js";
import { sendPasswordResetEmail } from "firebase/auth";
import { useNavigate } from "react-router-dom";

const PasswordReset = () => {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handlePasswordReset = async (e) => {
    e.preventDefault();
    setError("");
    setSuccess("");
    try {
      await sendPasswordResetEmail(auth, email);
      setSuccess("Check your email for the reset link.");
      setEmail("");
    } catch (error) {
      setError("Error: " + error.message);
    }
  };

  return (
    <>
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
              <h2 className="display-6 fw-bolder mb-0">Recover Account</h2>
            </div>
            <Form onSubmit={handlePasswordReset}>
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
              {error && <p style={{ color: "red" }}>{error}</p>}
              {success && <p style={{ color: "green" }}>{success}</p>}
              <Button
                variant="success"
                type="submit"
                className="w-100 py-2 mb-3"
              >
                Send Reset Link
              </Button>
            </Form>
          </Card.Body>
          <Card.Footer className="text-center bg-light border-top-0 py-3">
            <p className="text-muted small mb-0">
              Remembered your password?
              <Button
                variant="link"
                href="/"
                className="p-0 text-success small fw-bold"
              >
                Sign in now
              </Button>
            </p>
          </Card.Footer>
        </Card>
      </Container>
    </>
  );
};

export default PasswordReset;
