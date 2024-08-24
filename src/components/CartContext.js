import React, { createContext, useState, useEffect } from 'react';

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  // UseEffect to log updated cart items
  useEffect(() => {
    console.log("Updated cart items:", cartItems);
  }, [cartItems]);

  const addToCart = (product) => {
    console.log("Adding product to cart (cartContext):", product);

    setCartItems((prevItems) => {
      const existingProduct = prevItems.find(item => item.id === product.id);

      if (existingProduct) {
        console.log("Updated product quantity:", product.id);
        return prevItems.map(item =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      } else {
        console.log("Added new product to cart:", product.id); 
        return [...prevItems, { ...product, quantity: 1 }];
      }
    });
  };

  const removeFromCart = (productId) => {
    console.log("Removing product from cart:", productId);

    setCartItems((prevItems) =>
      prevItems.filter(item => item.id !== productId)
    );
  };

  return (
    <CartContext.Provider value={{ cartItems, addToCart, removeFromCart }}>
      {children}
    </CartContext.Provider>
  );
};
