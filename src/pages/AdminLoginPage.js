import React, { useState } from 'react';
import { Form, Button, Alert } from 'react-bootstrap';
import { authenticateManager } from '../data/mockApi';  // Import the mock API
import { useNavigate } from 'react-router-dom';

const AdminLoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate();  // For navigation after successful login

  const handleLogin = (e) => {
    e.preventDefault();
    authenticateManager(email, password)
      .then((manager) => {
        // Save manager details in sessionStorage for now (can be expanded later)
        sessionStorage.setItem('manager', JSON.stringify(manager));
        navigate('/admin-dashboard');  // Navigate to admin dashboard after successful login
      })
      .catch((err) => setErrorMessage(err));
  };

  return (
    <div className="admin-login-page container my-5">
      <h2 className="text-center">Manager Login</h2>
      {errorMessage && <Alert variant="danger">{errorMessage}</Alert>}
      <Form onSubmit={handleLogin}>
        <Form.Group controlId="formEmail">
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </Form.Group>
        <Form.Group controlId="formPassword" className="mt-3">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Enter password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </Form.Group>
        <Button variant="primary" type="submit" className="mt-3">Log In</Button>
      </Form>
    </div>
  );
};

export default AdminLoginPage;
