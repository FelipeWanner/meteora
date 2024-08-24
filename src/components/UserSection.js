import React, { useState } from 'react';
import { Nav } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import defaultUserPic from "../assets/default-user.png";
import LoginModal from './LoginModal';
import CartModal from './CartModal';

const UserSection = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userData, setUserData] = useState({
    fullName: 'User Name',
    profilePic: defaultUserPic // Default picture before login
  });

  const handleLoginSuccess = (user) => {
    setIsLoggedIn(true);
    setUserData({
      fullName: user.fullName, // User's full name
      profilePic: user.profilePic // User's profile picture (from mock API)
    });
  };

  const [showCartModal, setShowCartModal] = useState(false);

  const handleCartClick = () => {
    setShowCartModal(true);
  };

  return (
    <div className="user-section d-flex align-items-center ms-3" style={{ marginRight: '20px' }}>
      <div className="me-2 text-white" style={{ cursor: 'pointer' }}>
        <img
          src={isLoggedIn ? userData.profilePic : defaultUserPic} // Atualiza a img depois do login
          alt="User profile"
          style={{ width: '30px', height: '30px', borderRadius: '50%' }}
        />
        <span className="ms-2">
          {isLoggedIn ? userData.fullName : <LoginModal onLoginSuccess={handleLoginSuccess} />} 
        </span>
      </div>
      <Nav.Link onClick={handleCartClick} className="ms-2">
        <i className="bi bi-cart" style={{ fontSize: '1.5rem', color: '#fff' }}></i>
      </Nav.Link>

      <CartModal show={showCartModal} handleClose={() => setShowCartModal(false)} />
    </div>
  );
};

export default UserSection;
