import React from 'react';
import Navbar from '../componants/Navbar';
import Header from '../componants/Header';
import './Home.css';
import Middlenav from '../componants/Middlenav';
import ApplyLabel from '../componants/Applylabel';
import ApplyTitle from '../componants/Applytitle';

function Home() {
  return (
    <div className="Home">
     <Navbar />
     <Header />
     <Middlenav />
     <ApplyLabel />
     <ApplyTitle />
    </div>
  );
}

export default Home;