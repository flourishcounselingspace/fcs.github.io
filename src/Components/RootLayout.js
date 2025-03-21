// src/Navbar.js
import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';

import { Outlet } from 'react-router-dom';
// import Header from './Header';
const RootLayout = () => {
  return (
    <div>
    <Navbar />
    <div className=''>
      <Outlet />
    </div>
    <Footer/>
    </div>


  );
};

export default RootLayout;
