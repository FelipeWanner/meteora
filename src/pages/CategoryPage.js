import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ProductCard from '../components/ProductCard';
import { Container, Row, Col } from 'react-bootstrap';
import axios from 'axios';

// funcao para "consertar" o nome para a URL da foto (na url, nao temos espaço, e é tudo lowercase)
const formatImageUrl = (name) => {
  return `http://localhost:5000/uploads/${name.toLowerCase().replace(/ /g, '-')}.jpg`;
};

const CategoryPage = () => {
  const { categoryName } = useParams();
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Fetch products from the backend
    axios.get(`/api/products/category/${categoryName}`)
      .then((response) => {
        setProducts(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error fetching products:', error);
        setError('Failed to load products');
        setLoading(false);
      });
  }, [categoryName]);

  return (
    <Container className="my-5">
      <h2 className="text-center my-3">{categoryName}</h2>
      {loading ? (
        <p>Loading products...</p>
      ) : error ? (
        <p>{error}</p>
      ) : (
        <Row className="g-4">
          {products.length > 0 ? (
            products.map((product, index) => (
              <Col key={index} xs={12} md={6} xl={4}>
                <ProductCard
                  imageUrl={formatImageUrl(product.name)}  // usando URL da imagem formatada
                  title={product.name}
                  description={product.description}
                  price={product.price}
                />
              </Col>
            ))
          ) : (
            <p className="text-center">No products found for {categoryName}</p>
          )}
        </Row>
      )}
    </Container>
  );
};

export default CategoryPage;
