import React, { useEffect, useState } from 'react';
import ProductCard from './ProductCard';
import 'bootstrap/dist/css/bootstrap.min.css';
import { getProducts } from '../data/mockApi';

const FeaturedProductsGrid = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getProducts().then((data) => {
      setProducts(data);
    });
  }, []);

  return (
    <div className="container row mx-auto g-4 mt-3">
      {products.map((product, index) => (
        <div key={index} className="col-12 col-md-6 col-xxl-4">
          <ProductCard
            imgSrcMobile={product.imgSrcMobile}
            imgSrcTablet={product.imgSrcTablet}
            imgSrcDesktop={product.imgSrcDesktop}
            title={product.title}
            description={product.description}
            price={product.price}
          />
        </div>
      ))}
    </div>
  );
};

export default FeaturedProductsGrid;
