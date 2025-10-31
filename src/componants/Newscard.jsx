import React from 'react';
import './Newscard.css';

const Newscard = (props) => {
  return (
    <div className="news-card">
      <div className="news-card-content">
        <div className="news-card-image">
          <img src={props.image} alt={props.title} />
        </div>
        
        <div className="news-card-text">
          <p className="news-card-date">{props.date}</p>
          <h3 className="news-card-title">{props.title}</h3>
          <p className="news-card-description">{props.description}</p>
        </div>
      </div>
      <hr className="news-card-divider" />
    </div>
  );
};

export default Newscard;