import React from 'react';
import Header from './header/Header';
import { Routes, Route, Link } from "react-router-dom";
import Home from './components/Home';
import Login from './Authentication/Login';
import Register from './Authentication/Register';
import VendorDashboard from './vendor/VendorDashboard';
import CustomerDashboard from './customer/CustomerDashboard';

function App() {
  return (
    <div>
      <Header />
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/login' element={<Login />} />
      <Route path='/register' element={<Register />} />
      <Route path='/vendor' element={<VendorDashboard />} />
      <Route path='/customer' element={<CustomerDashboard />} />
    </Routes>
    </div>
    
  );
}

export default App;