import { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import './App.css';

// Component Imports
import Nav from './components/Nav';
import Footer from './components/Footer';

// Page Imports
import Home from './pages/Home';
import ProductPage from './pages/ProductPage';
import Shop from './pages/Shop';
import Cart from './components/Cart';
import Overlay from './components/Overlay';

function App() {

  return (
    <>
      <Overlay />
      <Router>
        <Cart />
        <Caliborator />
        <Nav />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/shop' element={<Shop />} />
          <Route path='/product/'>
            <Route path=':productId' element={<ProductPage />} />
          </Route>
        </Routes>
      </Router>
      <Footer />
    </>
  )
}

const Caliborator = () => {
  const location = useLocation();

  useEffect(()=>{
    window.scrollTo(0, 0)
  }, [location.pathname])
}

export default App
