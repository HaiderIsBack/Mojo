import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';

// Component Imports
import Nav from './components/Nav';
import Footer from './components/Footer';

// Page Imports
import Home from './pages/Home';
import Shop from './pages/Shop';

function App() {

  return (
    <>
      <Nav />
      <Router>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/shop' element={<Shop />} />
        </Routes>
      </Router>
      <Footer />
    </>
  )
}

export default App
