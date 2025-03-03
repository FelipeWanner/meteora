import React, { useState, useEffect } from 'react';
import { Navbar, Nav, NavDropdown, Form, FormControl, Button } from 'react-bootstrap';
import { NavLink, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import meteoraLogo from '../assets/logo-meteora.png';
import 'bootstrap/dist/css/bootstrap.min.css';
import UserSection from './UserSection';
import { getCategories } from '../data/mockApi';

const StyledNavbar = styled(Navbar)`
  background-color: #000000;
`;

const NavigationBar = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [categories, setCategories] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    getCategories().then((data) => {
      setCategories(data);
    });
  }, []);

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchTerm.trim()) {
      navigate(`/search?query=${encodeURIComponent(searchTerm)}`);
    }
  };

  return (
    <StyledNavbar expand="md" variant="dark">
      <div className="container-fluid">
        <Navbar.Brand as={NavLink} to="/">
          <img
            src={meteoraLogo}
            alt="Meteora Logo"
            height="40"
            className="d-inline-block align-top"
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarSupportedContent" />
        <Navbar.Collapse id="navbarSupportedContent">
          <Nav className="me-auto">
            <Nav.Link as={NavLink} to="/">Home</Nav.Link>
            <NavDropdown title="Categories" id="nav-dropdown-categories">
              {categories.map((category, index) => (
                <NavDropdown.Item
                  key={index}
                  onClick={() => navigate(`/category/${encodeURIComponent(category.title)}`)}
                  style={{ cursor: 'pointer' }} 
                >
                  {category.title}
                </NavDropdown.Item>
              ))}
            </NavDropdown>
            <Nav.Link as={NavLink} to="/our-stores">Our Stores</Nav.Link>
            <Nav.Link as={NavLink} to="/careers">Careers</Nav.Link>
          </Nav>
          <UserSection />
          <Form className="d-flex" onSubmit={handleSearch}>
            <FormControl
              type="search"
              placeholder="Search for a product"
              className="me-2 rounded-0"
              aria-label="Search"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <Button variant="outline-light" className="rounded-0" type="submit">
              Search
            </Button>
          </Form>
        </Navbar.Collapse>
      </div>
    </StyledNavbar>
  );
};

export default NavigationBar;
