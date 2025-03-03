import React, { useContext, useState } from 'react';
import { Card, Button, Toast } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { CartContext } from '../components/CartContext';

const ProductCard = ({ id, imageUrl, title, description, price }) => {
  const { addToCart } = useContext(CartContext);
  const navigate = useNavigate();
  const [showToast, setShowToast] = useState(false);

  const handleAddToCart = () => {
    const product = { id, title, description, price, imageUrl };
    console.log("Product added to cart:", product);
    addToCart(product);
    setShowToast(true);
    setTimeout(() => setShowToast(false), 3000);
  };

  const handleProductClick = () => {
    navigate(`/product/${id}`, { state: { id, title, description, price, imageUrl } });
  };

  return (
    <Card className="h-100 position-relative"> {/* Make card position relative */}
      <div className="cursor-pointer" onClick={handleProductClick}>
        <img src={imageUrl} alt={title} className="card-img-top img-fluid" />
      </div>
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>{description}</Card.Text>
        <p>{price}</p>
        <Button variant="primary" className="border-0 color-purple rounded-0" onClick={handleAddToCart}>
          Add to Cart
        </Button>

        {/* Toast positioned next to the button */}
        <Toast
          show={showToast}
          onClose={() => setShowToast(false)}
          bg="success"
          className="position-absolute bottom-0 start-50 translate-middle-x"
        >
          <Toast.Header>
            <strong className="me-auto">Cart</strong>
            <small>Just now</small>
          </Toast.Header>
          <Toast.Body>✅ {title} added to cart!</Toast.Body>
        </Toast>
      </Card.Body>
    </Card>
  );
};

export default ProductCard;
