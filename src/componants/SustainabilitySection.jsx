import React from 'react';
import './SustainabilitySection.css';
import SAndPEgx from '../Assets/Icon-1.png'; // Assuming these paths
import BloombergLogo from '../Assets/Icon-2.png';
import FTSE4GoodLogo from '../Assets/Icon.png';

const SustainabilitySection = () => {
  return (
    <section className="sustainability-section">
      <p className="sustainability-preheader">SUSTAINABLE FINANCE</p>
      <h2 className="sustainability-header">
        Sustainability is an integral part of the way we work
      </h2>

      <div className="sustainability-logos">
        <div className="logo-item">
          <img src={SAndPEgx} alt="S&P EGX ESG Index" />
          <p>S&P/EGX ESG Index</p>
        </div>
        <div className="logo-item">
          <img src={BloombergLogo} alt="Bloomberg Gender Equality Index" />
          <p>Bloomberg Gender Equality Index</p>
        </div>
        <div className="logo-item">
          <img src={FTSE4GoodLogo} alt="FTSE4Good Index" />
          <p>FTSE4Good Index</p>
        </div>
      </div>

      <button className="sustainability-button">Learn more</button>
    </section>
  );
};

export default SustainabilitySection;