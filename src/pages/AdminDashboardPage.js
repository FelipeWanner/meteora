import React, { useEffect, useState } from 'react';
import { Container, Accordion  } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import ManagerProfile from '../components/ManagerProfile';
import ProductForm from '../components/ProductForm';
import EditProductForm from '../components/EditProductForm';
import DeleteProductForm from '../components/DeleteProductForm';

const AdminDashboardPage = () => {
  const [manager, setManager] = useState(null);
  const [newProduct, setNewProduct] = useState({
    name: '',
    description: '',
    price: '',
    stock_quantity: '',
    category: 'T-Shirts',
    image_urls: []
  });

  const categories = ["T-Shirts", "Purses", "Sneakers", "Pants", "Sunglasses", "Jackets"];
  const navigate = useNavigate();

  useEffect(() => {
    const storedManager = sessionStorage.getItem('manager');
    if (storedManager) {
      setManager(JSON.parse(storedManager));
    } else {
      navigate('/admin-login');
    }
  }, [navigate]);

  const handleLogout = () => {
    sessionStorage.removeItem('manager');
    navigate('/admin-login');
  };

  const handleInputChange = (e) => {
    setNewProduct({
      ...newProduct,
      [e.target.name]: e.target.value,
    });
  };

  const handlePriceChange = (e) => {
    const inputValue = e.target.value.replace(',', '.');
    setNewProduct({
      ...newProduct,
      price: inputValue,
    });
  };

  const handleAddProduct = async () => {
    try {
      const formattedProduct = {
        ...newProduct,
        image_urls: [newProduct.image_urls],
      };
      await axios.post('/api/products', formattedProduct);
      setNewProduct({
        name: '',
        description: '',
        price: '',
        stock_quantity: '',
        category: 'T-Shirts',
        image_urls: []
      });
    } catch (error) {
      console.error('Error adding product:', error);
    }
  };

  return (
    <Container className="my-5">
      <h2 className="text-center">Admin Dashboard</h2>
      {manager && (
        <>
          <ManagerProfile manager={manager} handleLogout={handleLogout} />
          <hr className="my-5" />
          
          {/* Wrap all sections in the Accordion */}
          <Accordion defaultActiveKey="0">
            {/* Add New Product Section */}
            <ProductForm
              newProduct={newProduct}
              handleInputChange={handleInputChange}
              handlePriceChange={handlePriceChange}
              handleAddProduct={handleAddProduct}
              categories={categories}
            />

            {/* Edit Product Section */}
            <EditProductForm categories={categories} />

            {/* Delete Product Section */}
            <DeleteProductForm /> {/* Add Delete Product form */}
          </Accordion>
        </>
      )}
    </Container>
  );
};

export default AdminDashboardPage;
