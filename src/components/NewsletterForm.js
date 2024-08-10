import React from 'react';
import { Form, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import styled from 'styled-components';

const EmailFormContainer = styled(Form)`
  max-width: 50%;
  margin: 2rem auto;
  padding: 1rem;
  border: 1px solid #6c757d;
  text-align: center;

  @media (max-width: 576px) {
    max-width: 80%;
  }
`;

const SendButton = styled(Button)`
  background-color: #9353FF;
  border: none;
  border-radius: 0;
  padding: 0.5rem 1rem;
  color: #ffffff;

  &:hover {
    background-color: #9353FF;
    color: #ffffff;
  }
`;

const NewsletterForm = () => {
  return (
    <EmailFormContainer>
      <h5>
        Do you want to receive our updates, exclusive promotions, and 10% OFF on your first purchase? Sign up now!
      </h5>
      <div className="input-group my-3">
        <Form.Control
          type="email"
          placeholder="Please enter your email"
          aria-label="Please enter your email"
          aria-describedby="button-addon2"
          className="rounded-0"
        />
        <SendButton id="button-addon2">
          Send
        </SendButton>
      </div>
    </EmailFormContainer>
  );
};

export default NewsletterForm;
