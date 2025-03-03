import React, { useContext } from 'react';
import { Modal, Button } from 'react-bootstrap';
import { CartContext } from './CartContext';
import { useNavigate } from 'react-router-dom';

const CartModal = ({ show, handleClose, isLoggedIn }) => {
  const { cartItems } = useContext(CartContext);
  const navigate = useNavigate();

  const handleCheckout = () => {
    handleClose(); // Close modal before navigating

    if (!isLoggedIn) {
      sessionStorage.setItem('previousPage', '/cart');
      navigate('/login'); // Redirect to login page
    } else {
      navigate('/cart'); // Redirect to CartPage 
    }
  };

  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Your Cart</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {cartItems.length > 0 ? (
          cartItems.map((item, index) => (
            <div key={index} className="cart-item">
              <p>{item.title} - {item.price}</p>
              <p>Quantity: {item.quantity}</p>
            </div>
          ))
        ) : (
          <p>Your cart is empty.</p>
        )}
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>Close</Button>
        <Button variant="primary" onClick={handleCheckout}>Checkout</Button>
      </Modal.Footer>
    </Modal>
  );
};

export default CartModal;
