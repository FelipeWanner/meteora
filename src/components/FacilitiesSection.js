import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import styled from 'styled-components';

const FacilitiesSectionContainer = styled.section`
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

const FacilitiesSection = () => {
  return (
    <FacilitiesSectionContainer>
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
    </FacilitiesSectionContainer>
  );
};

export default FacilitiesSection;
