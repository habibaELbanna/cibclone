import React from 'react';
import ApplyLabel from './Applylabel';
import ApplyTitle from './Applytitle';
import ApplyCard from './ApplyCard';
import './ApplicationSection.css';


const ApplicationSection = () => {
  return (
    <div className="application-section">
 <ApplyLabel text="APPLY ONLINE" />   
    <ApplyTitle text=" Apply online now for cards and loans with ease!" />  
      <div className="apply-cards-container">
        <ApplyCard icon="🏦" title="Apply for a New Account" />
        <ApplyCard icon="💳" title="Apply for a card" />
        <ApplyCard icon="📄" title="Apply for a loan or overdraft" />
      </div>
    </div>
  );
};

export default ApplicationSection;