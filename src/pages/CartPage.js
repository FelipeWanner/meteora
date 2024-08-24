import React, { useContext } from 'react';
import { CartContext } from '../components/CartContext';
import { Button, Container } from 'react-bootstrap';

const CartPage = () => {
  const { cartItems, removeFromCart } = useContext(CartContext);

  return (
    <Container className="my-5">
      <h2>Your Cart</h2>
      {cartItems.length > 0 ? (
        cartItems.map((item, index) => (
          <div key={index} className="cart-item d-flex justify-content-between align-items-center">
            <div>
              <p>{item.title} - {item.price}</p>
              <p>Quantity: {item.quantity}</p>
            </div>
            <Button variant="danger" onClick={() => removeFromCart(item.id)}>
              Remove
            </Button>
          </div>
        ))
      ) : (
        <p>Your cart is empty.</p>
      )}
      {cartItems.length > 0 && (
        <Button variant="success" className="mt-3">
          Proceed to Checkout
        </Button>
      )}
    </Container>
  );
};

export default CartPage;
