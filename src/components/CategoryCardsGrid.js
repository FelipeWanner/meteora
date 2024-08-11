import React, { useEffect, useState } from 'react';
import CategoryCard from './CategoryCard';
import 'bootstrap/dist/css/bootstrap.min.css';
import { getCategories } from '../data/mockApi';

const CategoryCardsGrid = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    getCategories().then((data) => {
      setCategories(data);
    });
  }, []);

  return (
    <div className="container">
      <div className="row g-4 mt-3 mx-auto">
        {categories.map((category, index) => (
          <div key={index} className="col-6 col-md-4 col-xxl-2">
            <CategoryCard
              imgSrcMobile={category.imgSrcMobile}
              imgSrcTablet={category.imgSrcTablet}
              imgSrcDesktop={category.imgSrcDesktop}
              title={category.title}
              altText={category.altText}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default CategoryCardsGrid;
