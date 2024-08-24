import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import GlobalStyle from './styles/GlobalStyle';
import NavigationBar from './components/NavigationBar';
import FooterComponent from './components/FooterComponent';
import HomePage from './pages/HomePage';
import OurStoresPage from './pages/OurStoresPage';
import CareersPage from './pages/CareersPage';
import CategoryPage from './pages/CategoryPage';
import CartPage from './pages/CartPage'; 
import { CartProvider } from './components/CartContext';

const App = () => {
  return (
    <CartProvider>
      <Router>
        <GlobalStyle />
        <NavigationBar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/our-stores" element={<OurStoresPage />} />
          <Route path="/careers" element={<CareersPage />} />
          <Route path="/category/:categoryName" element={<CategoryPage />} />
          <Route path="/cart" element={<CartPage />} />
        </Routes>
        <FooterComponent />
      </Router>
    </CartProvider>
  );
}

export default App;
