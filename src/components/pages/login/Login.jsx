import React, { useContext, useEffect, useState } from "react";
import { Eye, EyeOff, TrendingUp } from "lucide-react";
import { Button, Card, Container, Form } from "react-bootstrap";
import { auth } from "../../../firebaseConfig.js";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../../context/AuthContext.jsx";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const { currentUser } = useContext(AuthContext);

  useEffect(() => {
    if (currentUser) {
      navigate("/Dashboard");
    }
  }, [currentUser, navigate]);

  const loginUser = async (e) => {
    e.preventDefault();
    setError("");
    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );
      navigate("/Dashboard");
    } catch (error) {
      setError("Login error:" + error.message);
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
              <h2 className="display-6 fw-bolder mb-0">CashFlowPro</h2>
            </div>
            <Form onSubmit={loginUser}>
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
              <div className="d-flex justify-content-between align-items-center mb-3">
                <Form.Check
                  type="checkbox"
                  id="rememberMe"
                  label="Remember me"
                  className="text-muted small"
                />
                <Button
                  variant="link"
                  href="/PasswordReset"
                  className="p-0 text-success small"
                >
                  Forgot password?
                </Button>
              </div>
              <Button
                variant="success"
                type="submit"
                className="w-100 py-2 mb-3"
              >
                Sign in
              </Button>
            </Form>
          </Card.Body>
          <Card.Footer className="text-center bg-light border-top-0 py-3">
            <p className="text-muted small mb-0">
              Don't have an account?{" "}
              <Button
                variant="link"
                href="/Signup"
                className="p-0 text-success small fw-bold"
              >
                Sign up now
              </Button>
            </p>
          </Card.Footer>
        </Card>
      </Container>
    </>
  );
};

export default Login;
