import React from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import handshakeImage from '../assets/WhatsNew/Work-with-us.jpg';
import employeeImage from '../assets/WhatsNew/employee.jpeg';
import { jobApplicationFormText, expectationsFromYou, expectationsFromUs } from '../content/careersContent';

const CareersPage = () => {
  return (
    <Container className="my-5">
      <h1 className="text-center">Want to work with Meteora?</h1>
      <img
        className="img-fluid w-100 my-3"
        src={handshakeImage}
        alt="Two hands doing a handshake with the world map in the background"
      />
      <h2 className="text-center">Join us</h2>
      <Form className="my-5 p-3 border border-black">
        <Row className="g-3">
          {jobApplicationFormText.map((field, index) => (
            <Col key={index} md={field.col}>
              <Form.Group controlId={`form${field.label.replace(" ", "")}`}>
                <Form.Label>{field.label}</Form.Label>
                <Form.Control
                  type={field.type}
                  placeholder={field.placeholder}
                  className="rounded-0"
                />
              </Form.Group>
            </Col>
          ))}
          <Col md={12}>
            <Form.Group controlId="formFile" className="mb-3">
              <Form.Label>Upload resume</Form.Label>
              <Form.Control type="file" className="rounded-0" />
            </Form.Group>
          </Col>
          <Col md={12}>
            <Button type="submit" className="btn color-purple text-white rounded-0">
              Send application
            </Button>
          </Col>
        </Row>
      </Form>

      <Row className="align-items-center">
        <Col lg={6}>
          <img
            className="img-fluid w-100"
            src={employeeImage}
            alt="Two women and a man inside of a clothes factory talking."
          />
        </Col>
        <Col lg={6}>
          <h2 className="my-4">What we expect from you:</h2>
          <p>{expectationsFromYou}</p>
          <h2 className="my-4">What you can expect from us:</h2>
          <p>{expectationsFromUs}</p>
        </Col>
      </Row>
    </Container>
  );
};

export default CareersPage;
