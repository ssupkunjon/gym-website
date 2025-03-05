import React from 'react';
import "./Navbar.css";
import logo from '../../assets/Logo1.png';
function Navbar() {
  return (
    <div>
      <div className="navbar-bg">
      <nav >
          <img id='logo' src={logo} alt="" />
        <ul>
          <li><a href="/">Home</a></li>
          <li><a href="/about">About US</a></li>
          <li><a href="/services">Services</a></li>
          <li><a href="/contact">Contact</a></li>
        </ul>
      </nav>
       
        <div className='content1'>
           <p>SHAPE YOUR BODY</p>
           <h1>BE <span>STRONG</span><br />
            TRAINING HAR</h1>

            <button className="btn-start">GET START</button>

        </div>
      </div>
    </div>
  );
}

export default Navbar;
