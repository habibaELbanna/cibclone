import React from 'react';
import './ApplyCard.css';

const ApplyCard = (props) => {
  return (
    <div className="apply-card">
      <div className="apply-card-icon-circle">
        <span className="apply-card-icon">{props.icon}</span>
      </div>
      <h3 className="apply-card-title">{props.title}</h3>
    </div>
  );
};

export default ApplyCard;