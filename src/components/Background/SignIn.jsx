import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Swal from 'sweetalert2'
import CloseButton from 'react-bootstrap/CloseButton';

const SignIn = ({ toggleView }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error] = useState('');
  const navigate = useNavigate();

  const handleLogin = () => {

    const correctEmail = 'ranil@gmail.com';
    const correctPassword = '123';

    if (email === correctEmail && password === correctPassword) {

      Swal.fire({
        title: "Good job!",
        text: "Login Successful",
        icon: "success",
      });

    } else {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Invalid email or password",
        footer: '<a href="/Forgot_password">Forgot password</a>'
      });
    }

  };

  return (
    <div className="animate__animated animate__zoomInDown" style={{ backgroundColor: "rgba(0, 0, 0, 0.5)", width: "100%", maxWidth: "500px", padding: "20px", borderRadius: "10px", margin: "0 auto" }}>
      <Col sm={1}>
      <CloseButton onClick={() => navigate(-1)} style={{ backgroundColor: "white" }} aria-label="Hide" />
      </Col>
      <h1>Welcome</h1>
      <Form>
      
        <Form.Group as={Row} className="mb-3" controlId="formHorizontalEmail">
          <Form.Label column sm={2}>Email</Form.Label>
          <Col sm={10}>
            <Form.Control
              type="email"
              placeholder="Enter email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              style={{ backgroundColor: "rgba(0, 0, 0, 0.5)", color: "white" }}
            />
          </Col>
        </Form.Group>

        <Form.Group as={Row} className="mb-3" controlId="formHorizontalPassword">
          <Form.Label column sm={2}>Password</Form.Label>
          <Col sm={10}>
            <Form.Control
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              style={{ backgroundColor: "rgba(0, 0, 0, 0.5)", color: "white" }}
            />
          </Col>
        </Form.Group>

        <Form.Group as={Row} className="mb-3" controlId="formHorizontalCheck">
          <Col sm={{ span: 10, offset: 2 }}>
            <Form.Check label="Remember me" />
          </Col>
        </Form.Group>

        {error && (
          <Form.Group as={Row} className="mb-3">
            <Col sm={{ span: 10, offset: 2 }}>
              <p style={{ color: 'red' }}>{error}</p>
            </Col>
          </Form.Group>
        )}

        <Form.Group as={Row} className="mb-3">
          <Col sm={{ span: 10, offset: 2 }} className="text-center">
            <Button
              style={{ width: "100%", marginBottom: "10px" }}
              type="button"
              onClick={handleLogin}
            >
              Sign in
            </Button>
          </Col>
        </Form.Group>

        <Form.Group as={Row} className="mb-3">
          <Col sm={{ span: 10, offset: 2 }}>
            <Button
              onClick={toggleView}
            
              style={{ width: "100%", marginBottom: "10px", backgroundColor: "green" }} type="button">
              Don't have an account? Sign Up
            </Button>
          </Col>
        </Form.Group>
      </Form>
    </div>
  );
};

export default SignIn;
