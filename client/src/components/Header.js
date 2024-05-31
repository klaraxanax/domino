
import React from 'react';
import { Link } from 'react-router-dom';
import '../../src/App.css';
import distrikt2 from '../assets/images/distrikt2.png'



function Header() {
    return (
      <header className="header">
        <div className="header-container">
          <div className="logo-container">
          <Link to="/">
              {/* <img src="../assets/images/distrikt.png" alt="Domino Logo" /> */}
              <img src={distrikt2} alt="Logo" />
             </Link>
            {/* <img src="/logo.png" alt="Domino" className="logo" /> */}
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
            <input type="text" placeholder="Search for products..." className="search-input" />
            <button className="search-btn">Search</button>
          </div>
          <div className="icons-container">
            <div className="icon-wrapper">
              <i className="fas fa-user"></i>
              <span className="icon-label">Account</span>
            </div>
            <div className="icon-wrapper">
              <i className="fas fa-heart"></i>
              <span className="icon-label">Wishlist</span>
            </div>
            <div className="icon-wrapper">
              <i className="fas fa-shopping-cart"></i>
              <span className="icon-label">Cart</span>
            </div>
          </div>
        </div>
      </header>
    );
  }
  
  export default Header;
