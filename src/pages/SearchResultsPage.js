import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import axios from 'axios';
import ProductCard from '../components/ProductCard';
import { Container, Row, Col } from 'react-bootstrap';

const SearchResultsPage = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const query = new URLSearchParams(useLocation().search).get('query');

  useEffect(() => {
    if (query) {
      // Fetch products from the backend that match the search term
      axios.get(`/api/products/search?query=${encodeURIComponent(query)}`)
        .then((response) => {
          setProducts(response.data);
          setLoading(false);
        })
        .catch((error) => {
          console.error('Error fetching search results:', error);
          setError('Failed to load search results');
          setLoading(false);
        });
    }
  }, [query]);

  return (
    <Container className="my-5">
      <h2 className="text-center my-3">Search Results for "{query}"</h2>
      {loading ? (
        <p>Loading search results...</p>
      ) : error ? (
        <p>{error}</p>
      ) : (
        <Row className="g-4">
          {products.length > 0 ? (
            products.map((product) => (
              <Col key={product.id} xs={12} md={6} xl={4}>
                <ProductCard
                  imageUrl={product.image_urls[0]}  // Assuming product has image_urls
                  title={product.name}
                  description={product.description}
                  price={product.price}
                />
              </Col>
            ))
          ) : (
            <p className="text-center">No products found for "{query}"</p>
          )}
        </Row>
      )}
    </Container>
  );
};

export default SearchResultsPage;
