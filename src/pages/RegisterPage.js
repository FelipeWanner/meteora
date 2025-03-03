import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const RegisterPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    street_address: '',
    city: '',
    state: '',
    postal_code: '',
    country: ''
  });

  const navigate = useNavigate();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('/api/clients', formData);
      alert('Registration successful!');
      const previousPage = sessionStorage.getItem('previousPage') || '/';
      navigate(previousPage);  // Redirect to the previous page after successful registration
    } catch (error) {
      console.error('Error during registration:', error);
      alert('Registration failed.');
    }
  };

  return (
    <div>
      <h2>Register</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" name="name" placeholder="Name" onChange={handleInputChange} required />
        <input type="email" name="email" placeholder="Email" onChange={handleInputChange} required />
        <input type="password" name="password" placeholder="Password" onChange={handleInputChange} required />
        <input type="text" name="street_address" placeholder="Street Address" onChange={handleInputChange} required />
        <input type="text" name="city" placeholder="City" onChange={handleInputChange} required />
        <input type="text" name="state" placeholder="State" onChange={handleInputChange} required />
        <input type="text" name="postal_code" placeholder="Postal Code" onChange={handleInputChange} required />
        <input type="text" name="country" placeholder="Country" onChange={handleInputChange} required />
        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default RegisterPage;
