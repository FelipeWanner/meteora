import React, { useContext } from 'react';
import { Card, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { CartContext } from '../components/CartContext';

const ProductCard = ({ id, imageUrl, title, description, price }) => {
  const { addToCart } = useContext(CartContext); // Access addToCart from CartContext

  const handleAddToCart = () => {
    const product = {
      id, 
      title,
      description,
      price,
      imageUrl,
    };
    console.log("Product added to cart:", product);
    addToCart(product); // Add product to cart
  };

  return (
    <Card className="h-100">
      <img src={imageUrl} alt={title} className="card-img-top img-fluid" />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>{description}</Card.Text>
        <p>{price}</p>
        <Button variant="primary" className="border-0 color-purple rounded-0" onClick={handleAddToCart}>
          Add to Cart
        </Button>
      </Card.Body>
    </Card>
  );
};

export default ProductCard;
