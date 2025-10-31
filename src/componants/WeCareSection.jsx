import React from 'react';
import './WeCareSection.css';

import GlobeIcon from '../Assets/ic.png'; 
import PhoneIcon from '../Assets/io.png'; 
import BranchIcon from '../Assets/in.png'; 

const services = [
  {
    icon: GlobeIcon,
    title: 'Online',
    description: "Chat with 'Zaki' our digital assistant to guide you through our products and services, or reach out on social media.",
  },
  {
    icon: PhoneIcon,
    title: 'On the phone',
    description: "For support, including emergencies such as cards closure or immediate critical feedback.",
  },
  {
    icon: BranchIcon,
    title: 'In branch',
    description: "Our trained team of tellers and relationship managers are here to help you get the service you need.",
  },
];

const WeCareSection = () => {
  return (
    <section className="we-care-section">
      <p className="we-care-preheader">WE CARE</p>
      <h2 className="we-care-header">
        Our dedicated team is committed to meeting your needs
      </h2>

      <div className="we-care-services">
        {services.map((service, index) => (
          <div className="service-item" key={index}>
            <div className="service-icon-wrapper">
              <img src={service.icon} alt={`${service.title} Icon`} className="service-icon" />
            </div>
            <h3 className="service-title">{service.title}</h3>
            <p className="service-description">{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WeCareSection;