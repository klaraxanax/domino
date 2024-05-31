// Footer.js
import React from 'react';
import '../../src/App.css';
function Footer() {
  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="footer-top-left">
          {/* <img src="/images/zalando-logo.png" alt="Zalando" className="footer-logo" /> */}
          <p>&copy; 2024 Domino. All rights reserved.</p>
        </div>
        <div className="footer-top-right">
          <ul className="footer-links">
            <li><a href="#">Terms & Conditions</a></li>
            <li><a href="#">Privacy Policy</a></li>
            <li><a href="#">Cookie Settings</a></li>
            <li><a href="#">Imprint</a></li>
            <li><a href="#">Modern Slavery Statement</a></li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <p>Designed and developed by Your Company</p>
      </div>
    </footer>
  );
}

export default Footer;