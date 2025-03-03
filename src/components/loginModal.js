import React, { useState } from 'react';
import { Modal, Button, Alert } from 'react-bootstrap';
import LoginForm from './LoginForm';
import { authenticateUser } from '../data/mockApi';
import { useNavigate } from 'react-router-dom';

const LoginModal = ({ onLoginSuccess }) => {
  const [show, setShow] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate();

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleLogin = async (email, password) => {
    try {
      const user = await authenticateUser(email, password); // Call mock API to authenticate the user
      setErrorMessage('');
      onLoginSuccess(user); // Pass user data to UserSection after successful login
      handleClose();
    } catch (err) {
      setErrorMessage(err); // Display error message in case of failed login
    }
  };

  const handleRegisterClick = () => {
    sessionStorage.setItem('previousPage', window.location.pathname); // Store the current page for redirect after registration
    navigate('/register'); // Redirect to the registration page
  };

  return (
    <>
      <Button variant="outline-light" onClick={handleShow}>
        Log In
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Log In</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {errorMessage && <Alert variant="danger">{errorMessage}</Alert>}
          <LoginForm onLogin={handleLogin} />
          <p>Don't have an account? <Button variant="link" onClick={handleRegisterClick}>Register here</Button></p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default LoginModal;
