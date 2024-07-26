// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import GlobalStyles from './styles/GlobalStyles';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Settings from './pages/Settings';

const App = () => (
  <Router>
    <GlobalStyles />
    <Header />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/settings" element={<Settings />} />
    </Routes>
    <Footer />
  </Router>
);

export default App;
