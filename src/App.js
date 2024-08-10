import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import GlobalStyle from './styles/GlobalStyle';
import NavigationBar from './components/NavigationBar';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import OurStoresPage from './pages/OurStoresPage';
import WhatsNewPage from './pages/WhatsNewPage';

const App = () => {
  return (
    <Router>
      <GlobalStyle />
      <NavigationBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/our-stores" element={<OurStoresPage />} />
        <Route path="/whats-new" element={<WhatsNewPage />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
