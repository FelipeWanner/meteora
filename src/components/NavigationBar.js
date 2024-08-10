import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

// Styled-component for custom styles
const StyledNavbar = styled(Navbar)`
  background-color: #000000; // Black background
  .navbar-brand img {
    height: 40px; // Adjust logo size
  }
  .nav-link {
    color: #ffffff !important; // White text
    &:hover {
      color: #9353FF !important; // Purple on hover
    }
  }
`;

const NavigationBar = () => {
  return (
    <StyledNavbar expand="lg" variant="dark">
      <Container>
        <Navbar.Brand as={Link} to="/">
          <img
            src="/assets/logo-meteora.png"
            alt="Meteora Logo"
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            <Nav.Link as={Link} to="/">Home</Nav.Link>
            <Nav.Link as={Link} to="/our-stores">Our Stores</Nav.Link>
            <Nav.Link as={Link} to="/whats-new">What's New</Nav.Link>
          </Nav>
          <form className="d-flex ms-auto">
            <input
              className="form-control me-2 rounded-0"
              type="search"
              placeholder="Search for a product"
              aria-label="Search"
            />
            <button
              className="btn btn-outline-light rounded-0"
              type="submit"
            >
              Search
            </button>
          </form>
        </Navbar.Collapse>
      </Container>
    </StyledNavbar>
  );
};

export default NavigationBar;
