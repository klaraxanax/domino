import React from 'react';
import { Link } from 'react-router-dom';
import '../../src/App.css';
import distrikt2 from '../assets/images/distrikt2.png';

// Function to generate the full path for the SVG icon
const getIconPath = (iconName, style = 'light') => `${process.env.PUBLIC_URL}/fontawesome6/pro/svgs/${style}/${iconName}.svg`;

function Header() {
    return (
      <header className="header">
        <div className="header-container">
          <div className="logo-container">
            <Link to="/">
              <img src={distrikt2} alt="Logo" />
            </Link>
          </div>
          <nav className="nav">
            <ul className="nav-list">
              <li className="nav-item"><Link to="/women" className="nav-link">Women</Link></li>
              <li className="nav-item"><Link to="/men" className="nav-link">Men</Link></li>
              <li className="nav-item"><Link to="/kids" className="nav-link">Kids</Link></li>
              <li className="nav-item"><Link to="/brands" className="nav-link">Brands</Link></li>
            </ul>
          </nav>
          <div className="search-box">
            <input type="text" placeholder="Search" className="search-input" />
            <button className="search-btn">Search</button>
          </div>
          <div className="icons-container">
          <div className="icon-wrapper">
            <span className="translate-text">EN</span>
              <img src={getIconPath('globe')} alt="Translate" className="icon" />
              {/* <span className="icon-label">Account</span> */}
            </div>
            <div className="icon-wrapper">
              <img src={getIconPath('user')} alt="Account" className="icon" />
              {/* <span className="icon-label">Account</span> */}
            </div>
            <div className="icon-wrapper">
              <img src={getIconPath('heart')} alt="Wishlist" className="icon" />
              {/* <span className="icon-label">Wishlist</span> */}
            </div>
            <div className="icon-wrapper">
              <img src={getIconPath('bags-shopping')} alt="Cart" className="icon" />
              {/* <span className="icon-label">Cart</span> */}
            </div>
          </div>
        </div>
      </header>
    );
}

export default Header;
