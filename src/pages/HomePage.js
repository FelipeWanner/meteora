import React from 'react';
import Carousel from '../components/Carousel';
import CategoryCardsGrid from '../components/CategoryCardsGrid';

const HomePage = () => {
  return (
    <div>
      <Carousel />
      <h2 className="text-center my-3 my-xl-5">Search for categories:</h2>
      <CategoryCardsGrid />
    </div>
  );
};

export default HomePage;

