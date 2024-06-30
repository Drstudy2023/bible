import React from 'react';
import { useNavigate } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import CloseButton from 'react-bootstrap/CloseButton';


const SignUp = ({ toggleView }) => {
const navigate = useNavigate();


  return (
    <div class="animate__animated animate__zoomInDown" style={{ backgroundColor: "rgba(0, 0, 0, 0.5)", width: "100%", maxWidth: "500px", padding: "20px", borderRadius: "10px", margin: "0 auto" }}>
      <Col sm={1}>
      <CloseButton onClick={() => navigate(-1)} style={{ backgroundColor: "white" }} aria-label="Hide" />
      </Col>
      <h1>Welcome</h1>
      <Form>

      <Form.Group as={Row} className="mb-3" controlId="formHorizontalEmail">
          <Form.Label column sm={3}>First Name</Form.Label>
          <Col sm={9}>
            <Form.Control type="First Name" placeholder="First Name" style={{ backgroundColor: "rgba(0, 0, 0, 0.5)", color: "white" }} />
          </Col>
        </Form.Group>

        <Form.Group as={Row} className="mb-3" controlId="formHorizontalEmail">
          <Form.Label column sm={3}>Last Name</Form.Label>
          <Col sm={9}>
            <Form.Control type="Last Name" placeholder="Last Name" style={{ backgroundColor: "rgba(0, 0, 0, 0.5)", color: "white" }} />
          </Col>
        </Form.Group>
        

        <Form.Group as={Row} className="mb-3" controlId="formHorizontalEmail">
          <Form.Label column sm={3}>Email</Form.Label>
          <Col sm={9}>
            <Form.Control type="email" placeholder="Email" style={{ backgroundColor: "rgba(0, 0, 0, 0.5)", color: "white" }} />
          </Col>
        </Form.Group>

        <Form.Group as={Row} className="mb-3" controlId="formHorizontalPassword">
          <Form.Label column sm={3}>Password</Form.Label>
          <Col sm={9}>
            <Form.Control type="password" placeholder="Password" style={{ backgroundColor: "rgba(0, 0, 0, 0.5)", color: "white" }} />
          </Col>
        </Form.Group>

        <Form.Group as={Row} className="mb-3" controlId="formHorizontalCheck">
          <Col sm={{ span: 10, offset: 2 }}>
            <Form.Check label="Remember me" />
          </Col>
        </Form.Group>

        <Form.Group as={Row} className="mb-3">
          <Col sm={{ span: 10, offset: 2 }}>
            <Button style={{ width: "100%" }} type="submit">Register</Button>
          </Col>
        </Form.Group>

        <Form.Group as={Row} className="mb-3">
          <Col sm={{ span: 10, offset: 2 }} className="text-center">
            <Button onClick={toggleView} style={{ width: "100%", marginBottom: "10px",backgroundColor:"green" }}  type="button">Already have an account? Sign In</Button>
          </Col>
        </Form.Group>

      </Form>
    </div>
  );
};

export default SignUp;
