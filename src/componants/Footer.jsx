import React from 'react';
import './Footer.css';
import CIBLogo from '../Assets/Image.png'; 
import PlayStoreBadge from '../Assets/google.png'; 
import AppStoreBadge from '../Assets/app.png'; 
import FacebookIcon from '../Assets/facebook.png'; 
import InstagramIcon from '../Assets/instagra,.png'; 
import LinkedInIcon from '../Assets/linkin.png'; 
import TwitterIcon from '../Assets/x.png'; 
import WhatsAppIcon from '../Assets/whats.png'; 


const Footer = () => {
  const socialMedia = [
    { icon: FacebookIcon, alt: 'Facebook' },
    { icon: InstagramIcon, alt: 'Instagram' },
    { icon: LinkedInIcon, alt: 'LinkedIn' },
    { icon: TwitterIcon, alt: 'Twitter/X' },
    { icon: WhatsAppIcon, alt: 'WhatsApp' },
  ];

  return (
    <footer className="main-footer">
      <div className="footer-top">
        
        <div className="footer-left">
          <div className="logo-and-badges">
            <img src={CIBLogo} alt="CIB 50 Years" className="cib-logo" />
            
            <div className="app-badges">
              <a href="#"><img src={PlayStoreBadge} alt="Get it on Google Play" /></a>
              <a href="#"><img src={AppStoreBadge} alt="Download on the App Store" /></a>
            </div>
          </div>
        </div>

        <div className="footer-links">
          <ul className="footer-link-column">
            <li><a href="#">FAQs</a></li>
            <li><a href="#">Learning Center</a></li>
            <li><a href="#">Fees & Charges</a></li>
            <li><a href="#">Terms & Conditions</a></li>
          </ul>
          
          <ul className="footer-link-column">
            <li><a href="#">Local</a></li>
            <li><a href="#">Abroad</a></li>
            <li><a href="#">Business</a></li>
            <li><a href="#">Corporate</a></li>
          </ul>

          <ul className="footer-link-column">
            <li><a href="#">Careers</a></li>
            <li><a href="#">Why CIB</a></li>
            <li><a href="#">Email us</a></li>
            <li><a href="#">System Status</a></li>
          </ul>
        </div>
        
      </div>

      <hr className="footer-divider" />

      <div className="footer-bottom">
        <div className="footer-legal-section">
          <div className="footer-graphic">
          </div>
          <div className="footer-legal-links">
            <a href="#">CBE Approvals</a>
            <a href="#">Cookie Policy</a>
            <a href="#">Privacy Policy</a>
            <a href="#">User Agreements</a>
          </div>
        </div>
        
        <div className="footer-social-section">
          <div className="footer-social-icons">
            {socialMedia.map((item, index) => (
              <a href="#" key={index} aria-label={item.alt}>
                <img src={item.icon} alt={item.alt} />
              </a>
            ))}
          </div>
        </div>
      </div>
      
      <div className="footer-copyright-bar">
        <p>Copyright © 2025 Commercial International Bank</p>
      </div>
    </footer>
  );
};

export default Footer;