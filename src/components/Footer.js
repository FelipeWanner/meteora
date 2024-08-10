import React from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import styled from 'styled-components';

const FacilitiesSection = styled.section`
  background-color: #000000;
  padding: 3rem 1rem;
`;

const FacilityItem = styled.div`
  display: flex;
  align-items: center;
  margin: 1.5rem;
  width: 100%;
  max-width: 325px;
  color: #ffffff;
`;

const FacilityText = styled.div`
  margin-left: 1rem;
`;

const FacilityIcon = styled.i`
  font-size: 2rem;
  color: #DAFF01;
`;

const Footer = styled.footer`
  background-color: #000000;
  color: #ffffff;
  text-align: center;
  padding: 1.5rem 0;
`;

const EmailForm = styled(Form)`
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

const FooterComponent = () => {
  return (
    <>
      <FacilitiesSection>
        <Container>
          <h2 className="text-center text-white">Explore all our facilities</h2>
          <Row className="justify-content-center">
            <Col xs={12} md={4}>
              <FacilityItem>
                <FacilityIcon className="bi bi-apple" />
                <FacilityText>
                  <div className="text-color-veryLightGreen">PAY WITH APPLE PAY</div>
                  <div className="text-small">get 5% off on payments using Apple Pay.</div>
                </FacilityText>
              </FacilityItem>
            </Col>
            <Col xs={12} md={4}>
              <FacilityItem>
                <FacilityIcon className="bi bi-arrow-repeat" />
                <FacilityText>
                  <div className="text-color-veryLightGreen">FREE EXCHANGES</div>
                  <div className="text-small">Feel free to exchange within 30 days.</div>
                </FacilityText>
              </FacilityItem>
            </Col>
            <Col xs={12} md={4}>
              <FacilityItem>
                <FacilityIcon className="bi bi-flower1" />
                <FacilityText>
                  <div className="text-color-veryLightGreen">SUSTAINABILITY</div>
                  <div className="text-small">Responsible fashion that respects the environment.</div>
                </FacilityText>
              </FacilityItem>
            </Col>
          </Row>
        </Container>
      </FacilitiesSection>

      <EmailForm>
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
      </EmailForm>

      <Footer>
        <p>2023 &copy; Felipe Rafael Wanner / Fictional Meteora Store project</p>
      </Footer>
    </>
  );
};

export default FooterComponent;
