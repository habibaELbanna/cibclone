import React from 'react';
import Navbar from '../componants/Navbar';
import Header from '../componants/Header';
import Middlenav from '../componants/Middlenav';
import ApplicationSection from '../componants/ApplicationSection';  
import './Home.css';
import LearningSection from '../componants/LearningSection';
import Newssection from '../componants/Newssection';
import Work from '../componants/Work';
import Blue from './../componants/Bluediv';
import SustainabilitySection from '../componants/SustainabilitySection';
import AwardsSection from '../componants/AwardsSection';
import WeCareSection from '../componants/WeCareSection';
import Footer from '../componants/Footer';


const Home = () => { 
  return (
    <div className="Home">
      <Navbar />
      <Header />
      <Middlenav />
      <ApplicationSection />  
      <LearningSection />
      <Newssection />
      <Work />
   <Blue />
   <SustainabilitySection />
   <AwardsSection />
   <WeCareSection />
   <Footer />
  
    </div>
  );
};

export default Home;