import React, { useState } from 'react';
import { Row, Col, Form, Button, Accordion, Alert } from 'react-bootstrap';

const ProductForm = ({ newProduct, handleInputChange, handlePriceChange, handleAddProduct, categories }) => {
  const [errors, setErrors] = useState({});

  const validateForm = () => {
    let formErrors = {};

    // Check if each field is filled
    if (!newProduct.name.trim()) formErrors.name = 'Product name is required';
    if (!newProduct.description.trim()) formErrors.description = 'Product description is required';
    if (!newProduct.price.trim()) formErrors.price = 'Product price is required';
    if (!newProduct.stock_quantity.trim()) formErrors.stock_quantity = 'Stock quantity is required';
    if (!newProduct.image_urls.length) formErrors.image_urls = 'At least one image URL is required';

    setErrors(formErrors);

    // Return true if no errors
    return Object.keys(formErrors).length === 0;
  };

  const handleSubmit = () => {
    if (validateForm()) {
      handleAddProduct();  // Proceed if validation passes
    }
  };

  return (
    <Accordion.Item eventKey="0">
      <Accordion.Header>Add New Product</Accordion.Header>
      <Accordion.Body>
        <Form>
          <Row>
            <Col md={6}>
              <Form.Group controlId="productName">
                <Form.Label>Product Name</Form.Label>
                <Form.Control
                  type="text"
                  name="name"
                  value={newProduct.name}
                  onChange={handleInputChange}
                  placeholder="Enter product name"
                />
                {errors.name && <Alert variant="danger">{errors.name}</Alert>}
              </Form.Group>
            </Col>
            <Col md={6}>
              <Form.Group controlId="productPrice">
                <Form.Label>Price</Form.Label>
                <Form.Control
                  type="text"
                  name="price"
                  value={newProduct.price}
                  onChange={handlePriceChange}
                  placeholder="0.00"
                />
                {errors.price && <Alert variant="danger">{errors.price}</Alert>}
              </Form.Group>
            </Col>
          </Row>
          <Row>
            <Col md={12}>
              <Form.Group controlId="productDescription">
                <Form.Label>Description</Form.Label>
                <Form.Control
                  type="text"
                  name="description"
                  value={newProduct.description}
                  onChange={handleInputChange}
                  placeholder="Enter product description"
                />
                {errors.description && <Alert variant="danger">{errors.description}</Alert>}
              </Form.Group>
            </Col>
          </Row>
          <Row>
            <Col md={6}>
              <Form.Group controlId="productStock">
                <Form.Label>Stock Quantity</Form.Label>
                <Form.Control
                  type="text"
                  name="stock_quantity"
                  value={newProduct.stock_quantity}
                  onChange={handleInputChange}
                  placeholder="Enter stock quantity"
                />
                {errors.stock_quantity && <Alert variant="danger">{errors.stock_quantity}</Alert>}
              </Form.Group>
            </Col>
            <Col md={6}>
              <Form.Group controlId="productCategory">
                <Form.Label>Category</Form.Label>
                <Form.Control
                  as="select"
                  name="category"
                  value={newProduct.category}
                  onChange={handleInputChange}
                >
                  {categories.map((category, idx) => (
                    <option key={idx} value={category}>
                      {category}
                    </option>
                  ))}
                </Form.Control>
              </Form.Group>
            </Col>
          </Row>
          <Row>
            <Col md={12}>
              <Form.Group controlId="productImageUrls">
                <Form.Label>Image URLs</Form.Label>
                <Form.Control
                  type="text"
                  name="image_urls"
                  value={newProduct.image_urls}
                  onChange={handleInputChange}
                  placeholder="Enter image URLs"
                />
                {errors.image_urls && <Alert variant="danger">{errors.image_urls}</Alert>}
              </Form.Group>
            </Col>
          </Row>
          <Button variant="primary" className="mt-3" onClick={handleSubmit}>
            Add Product
          </Button>
        </Form>
      </Accordion.Body>
    </Accordion.Item>
  );
};

export default ProductForm;
