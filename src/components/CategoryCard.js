import React from 'react';
import Card from 'react-bootstrap/Card';
import 'bootstrap/dist/css/bootstrap.min.css';

const CategoryCard = ({ imgSrcMobile, imgSrcTablet, imgSrcDesktop, title, altText }) => {
  return (
    <Card className="h-100">
      <picture>
        <source media="(min-width: 1200px)" srcSet={imgSrcDesktop} />
        <source media="(min-width: 768px)" srcSet={imgSrcTablet} />
        <Card.Img src={imgSrcMobile} alt={altText} className="card-img-top img-fluid" />
      </picture>
      <Card.Header className="bg-dark text-white text-center">
        <p className="m-0">{title}</p>
      </Card.Header>
    </Card>
  );
};

export default CategoryCard;

