import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Dashboard from './pages/Dashboard';
import BankDetails from './pages/BankDetails';
import BankSystemView from './pages/BankSystemView';

import './App.css'

function App() {
  return (
    <div className="wrapper">
    
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/bankdetails" element={<BankDetails />} />
        <Route path="/banksystemview" element={<BankSystemView />} />
      </Routes>
      <Footer />
      
      </div>
    
  );
}

export default App;
