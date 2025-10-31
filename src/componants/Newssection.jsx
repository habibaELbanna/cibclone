import React from 'react';
import Newscard from './Newscard';
import Btn from './Btn';
import './Newssection.css';
import cibBuilding from '../Assets/cib-building.jpg';

const Newssection = () => {
  return (
    <div className="news-section">
      <h2 className="news-main-title">News</h2>
      
      <div className="news-cards-container">
        <Newscard 
          image={cibBuilding}
          date="08/10/2025 - Commercial International Bank (CIB) Has Partnered with CI Capital to Successfully Closes the Seventh Securitization Bond Issuance for Halan Consumer Finance, Worth EGP 3.4 Billion"
          title="Commercial International Bank (CIB) Has Partnered with CI Capital to Successfully Closes the Seventh Securitization Bond Issuance for Halan Consumer Finance, Worth EGP 3.4 Billion"
          description="CIB, Egypt's leading and largest private sector bank, has successfully partnered with CI Capital to complete the seventh issuance for Halan Consumer Finance, valued at EGP 3.4 billion."
        />
        
        <Newscard 
          image={cibBuilding}
          date="08/09/2025 - Commercial International Bank (CIB) Successfully Closes EGP 2.3 Billion Securitization Bond Issuance for GlobalCorp Financial Services"
          title="Commercial International Bank (CIB) Successfully Closes EGP 2.3 Billion Securitization Bond Issuance for GlobalCorp Financial Services"
          description="CIB, Egypt's leading and largest private-sector bank, has successfully completed its seventh securitization bond issuance for GlobalCorp Financial Services, worth EGP 2.3 billion."
        />
        
        <Newscard 
          image={cibBuilding}
          date="21/08/2025 - Commercial International Finance Company (CIFC) Records EGP 4.1 billion in Its First Year of Operations"
          title="Commercial International Finance Company (CIFC) Records EGP 4.1 billion in Its First Year of Operations"
          description="CIB, Egypt's leading and largest private-sector bank is pleased to announce that its subsidiary, CIFC, has delivered remarkable results since its inception in April 2024."
        />
      </div>
      
        <button className="header-button">
        Explore more
      </button>
    </div>
  );
};

export default Newssection;