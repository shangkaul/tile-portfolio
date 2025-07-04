import React from 'react';
import "./footer.css";

const Footer = () => {
  return (
    <footer className='color_footer'>
      <div className="footer-content">
        <p className="footer-text">
          © 2024 Shivang Kaul. Built with React & Bootstrap.
        </p>
        <div className="footer-links">
          <a href="https://shangkaul.in" target="_blank" rel="noopener noreferrer">
            shangkaul.in
          </a>
          <span className="separator">|</span>
          <a href="mailto:shivang@shangkaul.in">
            shivang@shangkaul.in
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;