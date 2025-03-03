import React from 'react';
import styled from 'styled-components';
import FacilitiesSection from './FacilitiesSection';
import NewsletterForm from './NewsletterForm';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from "react-router-dom";


const MainContent = styled.div`
  padding-top: 3rem;  
`; //cria espaço entre o topo do footer e o conteudo da pagina

const FooterContainer = styled.footer`
  background-color: #000000;
  color: #ffffff;
  text-align: center;
  padding: 2rem 0; // Adjusted padding to add the gap above
`;

const Footer = () => {
  return (
    <MainContent>  
      <FacilitiesSection />
      <NewsletterForm />
      <FooterContainer>
        <p>&copy; {new Date().getFullYear()} Felipe & Matheus / Fictional Meteora Store project</p>
        {/* <p>2024 &copy; Felipe Rafael Wanner / Fictional Meteora Store project</p> */}
        <p>
          <Link to="/sitemap" className="text-white text-decoration-none">Sitemap</Link>
        </p>
      </FooterContainer>
    </MainContent>

  );
};

export default Footer;
