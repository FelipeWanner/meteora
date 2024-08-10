import React from 'react';
import Carousel from '../components/Carousel';
import CategoryCardsGrid from '../components/CategoryCardsGrid';
import FeaturedProductsGrid from '../components/FeaturedProductsGrid';
import styled from 'styled-components';

const MainContent = styled.div`
  padding-bottom: 3rem;  
`; //cria espaço entre o grid e o footer


const HomePage = () => {
  return (
    <MainContent>
      <Carousel />
      <h2 className="text-center my-3 my-xl-5">Search for categories:</h2>
      <CategoryCardsGrid />
      <h2 className="text-center my-3 my-xl-5">Products everybody is looking for!</h2>
      <FeaturedProductsGrid />
    </MainContent>
  );
};

export default HomePage;
