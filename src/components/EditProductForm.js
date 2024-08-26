import React, { useState, useEffect } from 'react';
import { Row, Col, Form, Button, Accordion } from 'react-bootstrap';
import axios from 'axios';

const EditProductForm = () => {
  const [productList, setProductList] = useState([]);
  const [productToEdit, setProductToEdit] = useState({
    id: '',
    description: '',
  });

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
    const productId = e.target.value;
    setSelectedProductId(productId);

    const selectedProduct = productList.find((product) => product.id === parseInt(productId));

    if (selectedProduct) {
      setProductToEdit({
        id: selectedProduct.id,
        description: selectedProduct.description,
      });
    }
  };

  const handleInputChange = (e) => {
    setProductToEdit({
      ...productToEdit,
      description: e.target.value,
    });
  };

  const handleEditProduct = async () => {
    try {
      const updatedProduct = {
        description: productToEdit.description,
      };

      await axios.put(`/api/products/${productToEdit.id}`, updatedProduct);
      alert('Product description updated successfully!');
    } catch (error) {
      console.error('Error updating product:', error);
    }
  };

  return (
    <Accordion.Item eventKey="1">
      <Accordion.Header>Edit Product Description</Accordion.Header>
      <Accordion.Body>
        <Form>
          <Row>
            <Col md={12}>
              <Form.Group controlId="selectProduct">
                <Form.Label>Select Product</Form.Label>
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
            <>
              <Row>
                <Col md={12}>
                  <Form.Group controlId="editProductDescription">
                    <Form.Label>Product Description</Form.Label>
                    <Form.Control
                      type="text"
                      name="description"
                      value={productToEdit.description}
                      onChange={handleInputChange}
                      placeholder="Enter product description"
                    />
                  </Form.Group>
                </Col>
              </Row>

              <Button variant="primary" className="mt-3" onClick={handleEditProduct}>
                Update Product Description
              </Button>
            </>
          )}
        </Form>
      </Accordion.Body>
    </Accordion.Item>
  );
};

export default EditProductForm;
