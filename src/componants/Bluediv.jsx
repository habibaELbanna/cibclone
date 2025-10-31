import React from 'react';
import blue from '../Assets/blue.png';
import './Blue.css';
import InternationalPresenceCard from './InternationalPresenceCard';
import './InternationalPresenceCard.css';
const Blue = () => {
  return (  

    <div className="backgroundd">
        <InternationalPresenceCard />
      <img src={blue} alt="blue" className="imgo" />
    </div>
  );
}

export default Blue;
