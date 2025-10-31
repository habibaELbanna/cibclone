import React from 'react';
import './Navbar.css';
import logo from '../Assets/Image.png';
import Nboutusnav from './Navnames'
function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-container">
  <img src={logo} alt="" />
        <div className="navbar-menu">
         <Nboutusnav title = "about us" />
         <Nboutusnav title = " Investor Relations " />
         <Nboutusnav title = "Responsible Banking" />
         <Nboutusnav title = "Newsroom" />
         <Nboutusnav title = "Learning Center" />
          <Nboutusnav title = "Careers" />
             <Nboutusnav title = "Others" />
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
