import React, { Component } from 'react';
import './Navbar.css';
import Middle from './Middlenavnames'
const Middlenav = () => {
    return ( 

<div className='navbar-container2'>
         <div className="navbar-menu2">
         <Middle title = "about us" />
         <Middle title = " Investor Relations " />
         <Middle title = "Responsible Banking" />
         <Middle title = "Newsroom" />
         <Middle title = "Learning Center" />
          <Middle title = "Careers" />
             <Middle title = "Others" />
        </div>
        </div>
     );
}
 
export default Middlenav ;