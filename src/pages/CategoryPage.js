import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ProductCard from '../components/ProductCard';
import { getCategoryProducts } from '../data/mockApi';
import { Container, Row, Col } from 'react-bootstrap';

const CategoryPage = () => {
  const { categoryName } = useParams();
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getCategoryProducts(categoryName).then((data) => {
      setProducts(data);
    });
  }, [categoryName]);

  return (
    <Container className="my-5">
      <h2 className="text-center my-3">{categoryName}</h2>
      <Row className="g-4">
        {products.length > 0 ? (
          products.map((product, index) => (
            <Col key={index} xs={12} md={6} xl={4}>
              <ProductCard
                imgSrcMobile={product.imgSrcMobile}
                imgSrcTablet={product.imgSrcTablet}
                imgSrcDesktop={product.imgSrcDesktop}
                title={product.title}
                description={product.description}
                price={product.price}
              />
            </Col>
          ))
        ) : (
          <p className="text-center">No products found for {categoryName}</p>
        )}
      </Row>
    </Container>
  );
};

export default CategoryPage;
