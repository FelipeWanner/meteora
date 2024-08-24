import React, { useEffect, useState } from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const AdminDashboardPage = () => {
  const [manager, setManager] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    // Retrieve the manager details from sessionStorage
    const storedManager = sessionStorage.getItem('manager');
    if (storedManager) {
      setManager(JSON.parse(storedManager));
    } else {
      // Redirect to login if manager is not authenticated
      navigate('/admin-login');
    }
  }, [navigate]);

  const handleLogout = () => {
    sessionStorage.removeItem('manager');
    navigate('/admin-login');  // Redirect to login page on logout
  };

  return (
    <Container className="my-5">
      <h2 className="text-center">Admin Dashboard</h2>
      {manager && (
        <>
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

          <hr className="my-5" />

          {/* Additional sections for managing products can be added later */}
          <h3>Manage Products</h3>
          <Button variant="primary">Add New Product</Button>
          <Button variant="secondary" className="ms-3">Update Product</Button>
          <Button variant="danger" className="ms-3">Remove Product</Button>
        </>
      )}
    </Container>
  );
};

export default AdminDashboardPage;
