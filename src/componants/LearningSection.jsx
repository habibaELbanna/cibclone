import React from 'react';
import LearningCard from './LearningCard';
import Btn from './Btn';  
import './Learningsection.css';
import grad from '../Assets/grad.png';
import home from '../Assets/home.png'; 
import work from '../Assets/work.png';  

const LearningSection = () => {
  return (
    <div className="learning-section">
      <h2 className="learning-main-title">Learning Center</h2>
      
      <p className="learning-subtitle">
        Learn more about banking and your finances
      </p>
      
      <div className="learning-cards-container">
        <LearningCard 
          image={grad}
          title="Buying and making a home"
          description="Buying a home can be an emotional process, but it's important to approach it logically"
        />
        
        <LearningCard 
          image={home}
          title="Traveling on a budget"
          description="So for all of you travelers, take a vacation without spending a fortune with these helpful tips and tricks:"
        />
        
        <LearningCard 
          image={work}
          title="University life tips"
          description="The impact of a good education can be transformative."
        />
      </div>
      
       <button className="header-button">
        Explore more
      </button>
    </div>
  );
};

export default LearningSection;