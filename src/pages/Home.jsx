import React from 'react';
import Navbar from '../componants/Navbar';
import Header from '../componants/Header';
import Middlenav from '../componants/Middlenav';
import ApplicationSection from '../componants/ApplicationSection';  
import './Home.css';
import LearningSection from '../componants/LearningSection';

const Home = () => { 
  return (
    <div className="Home">
      <Navbar />
      <Header />
      <Middlenav />
      <ApplicationSection />  
      <LearningSection />
    </div>
  );
};

export default Home;