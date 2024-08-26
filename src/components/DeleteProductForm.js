import React, { useState, useEffect } from 'react';
import { Row, Col, Form, Button, Accordion } from 'react-bootstrap';
import axios from 'axios';

const DeleteProductForm = () => {
  const [productList, setProductList] = useState([]);
  const [selectedProductId, setSelectedProductId] = useState('');

  useEffect(() => {
    // Fetch the list of products
    const fetchProducts = async () => {
      try {
        const response = await axios.get('/api/products');
        setProductList(response.data);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };

    fetchProducts();
  }, []);

  const handleSelectChange = (e) => {
    setSelectedProductId(e.target.value);
  };

  const handleDeleteProduct = async () => {
    try {
      await axios.delete(`/api/products/${selectedProductId}`);
      alert('Product deleted successfully!');
      // Optionally refresh the product list after deletion
      setProductList(productList.filter(product => product.id !== parseInt(selectedProductId)));
      setSelectedProductId('');
    } catch (error) {
      console.error('Error deleting product:', error);
    }
  };

  return (
    <Accordion.Item eventKey="2">
      <Accordion.Header>Delete a Product</Accordion.Header>
      <Accordion.Body>
        <Form>
          <Row>
            <Col md={12}>
              <Form.Group controlId="selectProductToDelete">
                <Form.Label>Select Product to Delete</Form.Label>
                <Form.Control as="select" onChange={handleSelectChange} value={selectedProductId}>
                  <option value="">Select a product...</option>
                  {productList.map((product) => (
                    <option key={product.id} value={product.id}>
                      {product.name}
                    </option>
                  ))}
                </Form.Control>
              </Form.Group>
            </Col>
          </Row>

          {selectedProductId && (
            <Button variant="danger" className="mt-3" onClick={handleDeleteProduct}>
              Delete Product
            </Button>
          )}
        </Form>
      </Accordion.Body>
    </Accordion.Item>
  );
};

export default DeleteProductForm;
