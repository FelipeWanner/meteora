import React from 'react';
import styled from 'styled-components';
import FacilitiesSection from './FacilitiesSection';
import NewsletterForm from './NewsletterForm';
import 'bootstrap/dist/css/bootstrap.min.css';

const FooterContainer = styled.footer`
  background-color: #000000;
  color: #ffffff;
  text-align: center;
  padding: 2rem 0; // Adjusted padding to add the gap above
`;

const Footer = () => {
  return (
    <>  
      <FacilitiesSection />
      <NewsletterForm />
      <FooterContainer>
        <p>2023 &copy; Felipe Rafael Wanner / Fictional Meteora Store project</p>
      </FooterContainer>
    </>

  );
};

export default Footer;