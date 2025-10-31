import React from 'react';
import './AwardsSection.css';
// Assuming you have SVG icons for these, replace with actual paths
import AwardIcon1 from '../Assets/award-icon-1.svg';
import AwardIcon2 from '../Assets/award-icon-2.svg';
import AwardIcon3 from '../Assets/award-icon-3.svg';

const awards = [
  {
    icon: AwardIcon1,
    title: 'Best Private Bank in Egypt',
    awarder: 'Global Finance - 2023',
  },
  {
    icon: AwardIcon2,
    title: 'Best Mergers & Acquisitions Deal in MENA',
    awarder: 'EMEA Finance - 2023',
  },
  {
    icon: AwardIcon3,
    title: 'Best Bank in Egypt',
    awarder: 'Euromoney - 2023',
  },
];

const AwardsSection = () => {
  return (
    <section className="awards-section">
      <p className="awards-preheader">AWARDS</p>
      <h2 className="awards-header">
        CIB's integrity and quality are recognized internationally
      </h2>

      <div className="awards-list">
        {awards.map((award, index) => (
          <div className="award-item" key={index}>
            <img src={award.icon} alt="Award Icon" className="award-icon" />
            <h3 className="award-title">{award.title}</h3>
            <p className="award-awarder">{award.awarder}</p>
          </div>
        ))}
      </div>

      <button className="awards-button">See all our awards</button>
    </section>
  );
};

export default AwardsSection;