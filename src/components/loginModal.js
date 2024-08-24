import React, { useState } from 'react';
import { Modal, Button } from 'react-bootstrap';
import LoginForm from './LoginForm';

const LoginModal = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleLogin = (email, password) => {
    // Mock login logic
    console.log(`Logging in with email: ${email} and password: ${password}`);
    handleClose();
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
          <LoginForm onLogin={handleLogin} />
        </Modal.Body>
      </Modal>
    </>
  );
};

export default LoginModal;
