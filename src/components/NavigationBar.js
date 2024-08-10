import React from 'react';
import { Navbar, Nav, Form, FormControl, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import meteoraLogo from '../assets/logo-meteora.png';
import 'bootstrap/dist/css/bootstrap.min.css';

const StyledNavbar = styled(Navbar)`
  background-color: #000000;
`;

const NavigationBar = () => {
  return (
    <StyledNavbar expand="md" variant="dark">
      <div className="container-fluid">
        <Navbar.Brand as={Link} to="/">
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
            <Nav.Link as={Link} to="/" className="nav-link active">
              Home
            </Nav.Link>
            <Nav.Link as={Link} to="/our-stores" className="nav-link">
              Our Stores
            </Nav.Link>
            <Nav.Link as={Link} to="/whats-new" className="nav-link">
              What's New
            </Nav.Link>
          </Nav>
          <Form className="d-flex">
            <FormControl
              type="search"
              placeholder="Search for a product"
              className="me-2 rounded-0"
              aria-label="Search"
            />
            <Button
              variant="outline-light"
              className="rounded-0"
              onClick={() =>
                window.location.href =
                  'https://yv45m72jfaycdkfq7becpqtflm0xinkh.lambda-url.ap-southeast-2.on.aws/'
              }
            >
              Search
            </Button>
          </Form>
        </Navbar.Collapse>
      </div>
    </StyledNavbar>
  );
};

export default NavigationBar;
