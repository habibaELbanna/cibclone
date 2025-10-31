import React from 'react';
import Navbar from '../componants/Navbar';
import Header from '../componants/Header';
import './Home.css';
import Middlenav from '../componants/Middlenav';

function Home() {
  return (
    <div className="Home">
     <Navbar />
     <Header />
     <Middlenav />
    </div>
  );
}

export default Home;