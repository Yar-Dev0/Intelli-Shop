import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import LoginForm from './LoginForm';

const Navbar = () => {
  const [isLoginOpen, setIsLoginOpen] = useState(false);

  const openLoginForm = () => {
    setIsLoginOpen(true);
  };

  const closeLoginForm = () => {
    setIsLoginOpen(false);
  };

  return (
    <>
      <nav className="navbar">
        <div className="navbar-logo">IntelliShop</div>
        <ul className="navbar-links">
          <li><Link to="/home">Home</Link></li>
          <li><Link to="/upload">Upload</Link></li>
          <li><Link to="/generate">Generate</Link></li>
          <li><Link to="/wishlist">Wishlist</Link></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
        <div className="navbar-actions">
          {/* Wrap the wishlist button with Link */}
          <Link to="/wishlist" className="wishlist-button">
            <i className="fas fa-shopping-bag"></i>
          </Link>
          <button className="login-button" onClick={openLoginForm}>Login</button>
        </div>
      </nav>
      
      {isLoginOpen && <LoginForm onClose={closeLoginForm} />}
    </>
  );
};

export default Navbar;
