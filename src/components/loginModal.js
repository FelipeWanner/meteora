import React, { useState } from 'react';
import { Modal, Button, Alert } from 'react-bootstrap';
import LoginForm from './LoginForm';
import { authenticateUser } from '../data/mockApi';

const LoginModal = ({ onLoginSuccess }) => {
  const [show, setShow] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleLogin = async (email, password) => {
    try {
      const user = await authenticateUser(email, password); // CHAMADA DO mock API PARA AUTENTICAR O USUARIO
      setErrorMessage('');
      onLoginSuccess(user); // Pass user data to UserSection after successful login
      handleClose();
    } catch (err) {
      setErrorMessage(err); // Display error message in case of failed login
    }
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
        </Modal.Body>
      </Modal>
    </>
  );
};

export default LoginModal;
