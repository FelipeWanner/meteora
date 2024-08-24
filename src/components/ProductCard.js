import React from 'react';
import { Card, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const ProductCard = ({ imgSrcMobile, imgSrcTablet, imgSrcDesktop, title, description, price }) => {
  return (
    <Card className="h-100">
      <picture>
        <source srcSet={imgSrcMobile} media="(max-width: 767px)" />
        <source srcSet={imgSrcTablet} media="(min-width: 768px) and (max-width: 1199px)" />
        <source srcSet={imgSrcDesktop} media="(min-width: 1200px)" />
        <img src={imgSrcDesktop} alt={title} className="card-img-top img-fluid" />
      </picture>
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>{description}</Card.Text>
        <p>{price}</p>
        <Button variant="primary" className="border-0 color-purple rounded-0">See more</Button>
      </Card.Body>
    </Card>
  );
};

export default ProductCard;

