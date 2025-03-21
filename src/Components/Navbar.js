// src/Navbar.js
import React from 'react';
import './Navbar.css'; // Optional, to add styles
import imclogo  from '../assets/imclogo.jpg'
import wapp  from '../assets/whatsapplogo.png'
import { NavLink } from 'react-router-dom';
// import { useState } from 'react';

const Navbar = () => {

  // const [clicked, setClicked] = useState('home');

  // const handleClick = (item) => {
  //   setClicked(item);
  // };

  return (
    <nav className="navbar">
      <div>
        <img src={imclogo} alt='' width='70' height='70'/>
      </div>
      <ul>
        <NavLink to="/"><li>Home</li></NavLink>
     
        <NavLink to="/ourservices"><li>OurServices</li></NavLink>
        <NavLink to="/aboutus"><li>AboutUs</li></NavLink>
        <NavLink to="/contactus"><li>ContactUs</li></NavLink>
      </ul>
      <a
          href="https://wa.me/919937190927"
          target="_blank"
          rel="noopener noreferrer"
          style={{ textDecoration: 'none' }}
        >
          <img
            src={wapp} // WhatsApp Icon (from CDN)
            alt="WhatsApp"
            style={{
              width: '70px', // Adjust the size as needed
              height: '70px',
              cursor: 'pointer'
            }}
          />
        </a>
      {/* <button>Log in</button> */}
      <button class="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
      </button>
        <div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
            <div class="offcanvas-header">
              {/* <h2 class="offcanvas-title" id="offcanvasNavbarLabel">Flourish Counseling Space</h2> */}
              <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
            </div>
            <div class="offcanvas-body">
              <ul class="navbar-nav justify-content-end flex-grow-1 pe-3">
              <li>
                 <NavLink class="nav-link" aria-current="page" to="/">Home</NavLink>
               </li>
             
               <li>
                 <NavLink class="nav-link" to="/ourservices">Our Services</NavLink>
               </li>
               <li>
                 <NavLink class="nav-link" to="/aboutus">About Us</NavLink>
               </li>
               <li>
                 <NavLink class="nav-link" to="/contactus">Contact Us</NavLink>
               </li>
              </ul>
            </div>
          </div>
    </nav>
  );
};

export default Navbar;
