import React, { useEffect, useState, useContext } from 'react';
import { useParams, useLocation } from 'react-router-dom';
import { Container, Card, Button, Toast, ToastContainer } from 'react-bootstrap';
import axios from 'axios';
import { CartContext } from '../components/CartContext';

const ProductPage = () => {
  const { id } = useParams(); // Get product ID from URL
  const location = useLocation(); // Get state from navigation
  const { addToCart } = useContext(CartContext); // Access addToCart function
  const [product, setProduct] = useState(location.state || null); // Use state if available
  const [loading, setLoading] = useState(!location.state);
  const [error, setError] = useState(null);
  const [showToast, setShowToast] = useState(false); // Controls toast visibility

  useEffect(() => {
    if (!product) {
      axios.get(`/api/products/${id}`)
        .then((response) => {
          setProduct(response.data);
          setLoading(false);
        })
        .catch((error) => {
          console.error('Error fetching product:', error);
          setError('Failed to load product');
          setLoading(false);
        });
    }
  }, [id, product]);

  const handleAddToCart = () => {
    if (!product) return;

    const productToAdd = {
      id: product.id,
      title: product.title,
      description: product.description,
      price: product.price,
      imageUrl: product.imageUrl,
    };

    console.log("Product added to cart:", productToAdd);
    addToCart(productToAdd); 
    setShowToast(true);
    setTimeout(() => setShowToast(false), 3000);
  };

  if (loading) return <p>Loading product...</p>;
  if (error) return <p>{error}</p>;
  if (!product) return <p>Product not found</p>;

  return (
    <Container className="mt-5 d-flex flex-column align-items-center">
      <Card className="w-50">
        <Card.Img variant="top" src={product.imageUrl} alt={product.title} />
        <Card.Body>
          <Card.Title>{product.title}</Card.Title>
          <Card.Text>{product.description}</Card.Text>
          <h4>{product.price}</h4>
          <Button variant="primary" className="rounded-0" onClick={handleAddToCart}>
            Add to Cart
          </Button>
        </Card.Body>
      </Card>

      {/* Toast Notification */}
      <ToastContainer position="bottom-end" className="p-3">
        <Toast show={showToast} onClose={() => setShowToast(false)} bg="success">
          <Toast.Header>
            <strong className="me-auto">Cart</strong>
            <small>Just now</small>
          </Toast.Header>
          <Toast.Body>✅ {product.title} added to cart!</Toast.Body>
        </Toast>
      </ToastContainer>
    </Container>
  );
};

export default ProductPage;
