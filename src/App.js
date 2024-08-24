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
import AdminLoginPage from './pages/AdminLoginPage'; 
import AdminDashboardPage from './pages/AdminDashboardPage'; // Import admin pages
import { CartProvider } from './components/CartContext';

// Layout for normal users (with Navbar and Footer)
const MainLayout = ({ children }) => (
  <>
    <NavigationBar />
    {children}
    <FooterComponent />
  </>
);

// Layout for admin pages (without Navbar and Footer)
const AdminLayout = ({ children }) => (
  <>
    {children}
  </>
);

const App = () => {
  return (
    <CartProvider>
      <Router>
        <GlobalStyle />
        <Routes>
          {/* Routes for normal users (wrapped in MainLayout) */}
          <Route path="/" element={<MainLayout><HomePage /></MainLayout>} />
          <Route path="/our-stores" element={<MainLayout><OurStoresPage /></MainLayout>} />
          <Route path="/careers" element={<MainLayout><CareersPage /></MainLayout>} />
          <Route path="/category/:categoryName" element={<MainLayout><CategoryPage /></MainLayout>} />
          <Route path="/cart" element={<MainLayout><CartPage /></MainLayout>} />
          
          {/* Routes for admin pages (without Navbar and Footer) */}
          <Route path="/admin-login" element={<AdminLayout><AdminLoginPage /></AdminLayout>} />
          <Route path="/admin-dashboard" element={<AdminLayout><AdminDashboardPage /></AdminLayout>} />
        </Routes>
      </Router>
    </CartProvider>
  );
};

export default App;
