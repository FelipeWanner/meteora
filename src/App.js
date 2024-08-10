import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import GlobalStyle from './styles/GlobalStyle';
import NavigationBar from './components/NavigationBar';
import FooterComponent from './components/FooterComponent';
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
      <FooterComponent />
    </Router>
  );
}

export default App;
