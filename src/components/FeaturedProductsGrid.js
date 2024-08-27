import React, { useEffect, useState } from 'react';
import ProductCard from './ProductCard';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';

const getImageUrl = (product) => {
  // If the image URL starts with "http", it's from an external source
  if (product.image_urls[0].startsWith('http')) {
    return product.image_urls[0];
  }

  // Otherwise, assume it's hosted locally
  return `http://localhost:5000/uploads/${product.name.toLowerCase().replace(/ /g, '-')}.jpg`;
};

const FeaturedProductsGrid = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // Fetch top 6 products with the most sales
    axios.get('/api/products/top-sales')
      .then((response) => {
        setProducts(response.data);
      })
      .catch((error) => {
        console.error('Error fetching top-selling products:', error);
      });
  }, []);

  return (
    <div className="container row mx-auto g-4 mt-3">
      {products.length > 0 ? (
        products.map((product) => (
          <div key={product.id} className="col-12 col-md-6 col-xxl-4">
            <ProductCard
              imageUrl={getImageUrl(product)}  // Use the formatted image URL
              title={product.name}
              description={product.description}
              price={product.price}
            />
          </div>
        ))
      ) : (
        <p>No featured products found.</p>
      )}
    </div>
  );
};

export default FeaturedProductsGrid;
