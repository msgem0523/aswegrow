import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Hair from './pages/Hair';
import Bridal from './pages/Bridal';
import HairCare from './pages/HairCare';
import Garden from './pages/Garden';
import Teas from './pages/Teas';
import Merch from './pages/Merch';
import React from 'react';
import Waiver from './components/gmsc/Waiver';
import NavBar from './components/NavBar';

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/hair" element={<Hair />} />
        <Route path="/bridal" element={<Bridal />} />
        <Route path="/hair-care-products" element={<HairCare />} />
        <Route path="/teas" element={<Teas />} />
        <Route path="/gmsc" element={<Garden />} />
        <Route path="/merch" element={<Merch />} />
        <Route path="/waiver" element={<Waiver />} />
      </Routes>
      <div className="App">
        {/* <RegistrationForm /> */}
        {/* <QRCodeDisplay url="https://aswegrow.vercel.app" /> */}
      </div>
    </>
  );
}

export default App;
