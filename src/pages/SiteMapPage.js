import React, { useEffect, useState } from "react";
import { Container, Row, Col, ListGroup, Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import { getCategories } from "../data/mockApi"; 

const SitemapPage = () => {
  const [categories, setCategories] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    getCategories().then((data) => {
      setCategories(data.map((cat) => ({ path: `/category/${cat.title}`, name: cat.title })));
    });
  }, []);

  const routes = [
    { path: "/", name: "Home" },
    { path: "/our-stores", name: "Our Stores" },
    { path: "/careers", name: "Careers" },
    { path: "/cart", name: "Cart" },
    { path: "/search", name: "Search Results" },
    { path: "/admin-login", name: "Admin Login" },
    { path: "/admin-dashboard", name: "Admin Dashboard" },
  ];

  const filteredRoutes = routes.filter((route) => route.name.toLowerCase().includes(searchTerm.toLowerCase()));
  const filteredCategories = categories.filter((category) => category.name.toLowerCase().includes(searchTerm.toLowerCase()));

  return (
    <Container className="my-5">
      <h1 className="mb-4">Sitemap</h1>

      {/* Search Bar */}
      <Form className="mb-4">
        <Form.Control
          type="text"
          placeholder="Search for a page or category..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </Form>

      <Row>
        {/* Pages Section */}
        <Col md={6}>
          <h2 className="mb-3">Pages</h2>
          <ListGroup variant="flush">
            {filteredRoutes.length > 0 ? (
              filteredRoutes.map((route, index) => (
                <ListGroup.Item key={index}>
                  <Link to={route.path} className="text-decoration-none">{route.name}</Link>
                </ListGroup.Item>
              ))
            ) : (
              <p>No pages found.</p>
            )}
          </ListGroup>
        </Col>

        {/* Categories Section */}
        <Col md={6}>
          <h2 className="mb-3">Categories</h2>
          <ListGroup variant="flush">
            {filteredCategories.length > 0 ? (
              filteredCategories.map((category, index) => (
                <ListGroup.Item key={index}>
                  <Link to={category.path} className="text-decoration-none">{category.name}</Link>
                </ListGroup.Item>
              ))
            ) : (
              <p>No categories found.</p>
            )}
          </ListGroup>
        </Col>
      </Row>
    </Container>
  );
};

export default SitemapPage;
