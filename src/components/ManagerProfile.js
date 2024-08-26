import React from 'react';
import { Row, Col, Button } from 'react-bootstrap';

const ManagerProfile = ({ manager, handleLogout }) => {
  return (
    <Row className="mt-4">
      <Col md={4}>
        <img
          src={manager.profilePic}
          alt={manager.fullName}
          className="img-fluid rounded-circle"
          style={{ width: '150px', height: '150px' }}
        />
      </Col>
      <Col md={8}>
        <h4>{manager.fullName}</h4>
        <p><strong>Role:</strong> {manager.role}</p>
        <Button variant="danger" onClick={handleLogout}>Log Out</Button>
      </Col>
    </Row>
  );
};

export default ManagerProfile;
