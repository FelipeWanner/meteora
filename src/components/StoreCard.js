import React from 'react';
import { Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const StoreCard = ({ imageSrc, storeName, location }) => {
  return (
    <Col xs={12} lg={6} className="mb-4">
      <img
        className="img-fluid w-100"
        src={imageSrc}
        alt={`Picture of the ${storeName} store.`}
      />
      <h2 className="text-center">{storeName}</h2>
      <h3 className="text-center">{location}</h3>
      <h5 className="text-center text-color-black custom-border pb-3 mb-3">
        Explore Now
      </h5>
    </Col>
  );
};

export default StoreCard;
