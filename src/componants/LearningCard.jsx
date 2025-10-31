import React from 'react';
import './LearningCard.css'; 

const LearningCard = (props) => {
  return (
    <div className="learning-card">
      <div className="learning-card-image">
        <img src={props.image} alt={props.title} />
      </div>
      <h3 className="learning-card-title">{props.title}</h3>
      <p className="learning-card-description">{props.description}</p>
      <a href="#" className="learning-card-link">Read more</a>
    </div>
  );
};

export default LearningCard;