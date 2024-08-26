import React from 'react';
import { Row, Col, Form, Button, Accordion } from 'react-bootstrap';

const ProductForm = ({ newProduct, handleInputChange, handlePriceChange, handleAddProduct, categories }) => {
  return (
    <Accordion defaultActiveKey="0">
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
                </Form.Group>
              </Col>
            </Row>
            <Button variant="primary" className="mt-3" onClick={handleAddProduct}>
              Add Product
            </Button>
          </Form>
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
  );
};

export default ProductForm;
