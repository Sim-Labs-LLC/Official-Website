import React, { useState } from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import Home from './pages'
// import Onboarding from './pages/onboarding';
import Footer from './components/Footer';

function App() {

  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
      setIsOpen(!isOpen)
  }

  return (
    <Router>
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Navbar toggle={toggle} /> 
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/onboarding" element={<Onboarding />} /> */}
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
