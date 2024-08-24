import React, { useContext } from 'react';
import { Modal, Button } from 'react-bootstrap';
import { CartContext } from './CartContext';
import { Link } from 'react-router-dom';

const CartModal = ({ show, handleClose }) => {
  const { cartItems } = useContext(CartContext); 

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
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
        <Button variant="primary" as={Link} to="/cart">
          View Cart
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default CartModal;
