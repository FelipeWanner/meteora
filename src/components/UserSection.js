import React, { useState } from 'react';
import { Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import defaultUserPic from "../assets/default-user.png";
import LoginModal from './LoginModal'; // Importing the LoginModal

const UserSection = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState('User Name'); // Simulated username
  const [showLoginModal, setShowLoginModal] = useState(false); // Control modal visibility

  const handleUserClick = () => {
    if (!isLoggedIn) {
      setShowLoginModal(true); // Show modal when user is not logged in
    }
  };

  const handleLoginSuccess = (user) => {
    setIsLoggedIn(true);
    setUsername(user.username); // Update username after successful login
    setShowLoginModal(false); // Hide modal after login
  };

  return (
    <div className="user-section d-flex align-items-center ms-3" style={{marginRight: '20px'}}>
      <div className="me-2 text-white" onClick={handleUserClick} style={{ cursor: 'pointer' }}>
        <img
          src={defaultUserPic} 
          alt="User"
          style={{ width: '30px', height: '30px', borderRadius: '50%' }}
        />
        <span className="ms-2">
            {isLoggedIn ? username : <LoginModal  show={showLoginModal} onHide={() => setShowLoginModal(false)} onLoginSuccess={handleLoginSuccess}/>}
        </span> {/* mostra o 'Log In' modal if not logged in */}
      </div>
      <Nav.Link as={Link} to="/cart" className="ms-2">
        <i className="bi bi-cart" style={{ fontSize: '1.5rem', color: '#fff' }}></i>
      </Nav.Link>
    </div>
  );
};

export default UserSection;
