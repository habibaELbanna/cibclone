import React from 'react';
import './Header.css';
import Btn from './Btn';
import headerimg from '../Assets/header.png';

const Header = () => {
    return ( 
         <header className="header" style={{
  backgroundImage: `url(${headerimg})`
}}>
      <h1 className="header-title">CIB</h1>
      <p className="header-description">
        Delivering value to our clients, the community and our shareholders
      </p>
      <button className="header-button">
        Explore more
      </button>
    </header>
    );
}
 


export default Header;