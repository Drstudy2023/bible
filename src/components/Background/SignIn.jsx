import React from 'react';
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const SignIn = ({ toggleView }) => {
  return (
    <div class="animate__animated animate__zoomInDown" style={{ backgroundColor: "rgba(0, 0, 0, 0.5)", width: "100%", maxWidth: "500px", padding: "20px", borderRadius: "10px", margin: "0 auto" }}>
      <h1>Welcome</h1>
      <Form>
        <Form.Group as={Row} className="mb-3" controlId="formHorizontalEmail">
          <Form.Label column sm={2}>Email</Form.Label>
          <Col sm={10}>
            <Form.Control type="email" placeholder="Enter email" style={{ backgroundColor: "rgba(0, 0, 0, 0.5)", color: "white" }} />
          </Col>
        </Form.Group>

        <Form.Group as={Row} className="mb-3" controlId="formHorizontalPassword">
          <Form.Label column sm={2}>Password</Form.Label>
          <Col sm={10}>
            <Form.Control type="password" placeholder="Password" style={{ backgroundColor: "rgba(0, 0, 0, 0.5)", color: "white" }} />
          </Col>
        </Form.Group>

        <Form.Group as={Row} className="mb-3" controlId="formHorizontalCheck">
          <Col sm={{ span: 10, offset: 2 }}>
            <Form.Check label="Remember me" />
          </Col>
        </Form.Group>

        <Form.Group as={Row} className="mb-3">
          <Col sm={{ span: 10, offset: 2 }} className="text-center">
            <Button style={{ width: "100%", marginBottom: "10px" }} type="button">Sign in</Button>
          </Col>
        </Form.Group>

        <Form.Group as={Row} className="mb-3">
          <Col sm={{ span: 10, offset: 2 }}>
            <Button onClick={toggleView} style={{ width: "100%", marginBottom: "10px",backgroundColor:"green" }} type="button">Don't have an account? Sign Up</Button>
          </Col>
        </Form.Group>
      </Form>
    </div>
  );
};

export default SignIn;
