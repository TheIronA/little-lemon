import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
import logo from '../assets/logo.svg';

const Header = () => {
  return (
    <header className="header">
      <div className="logo-container">
        <Link to="/">
          <img src={logo} alt="Little Lemon logo" className="header-logo" />
        </Link>
      </div>
      <nav className="nav-menu">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/menu">Menu</Link>
          </li>
          <li>
            <Link to="/reservations">Book a Table</Link>
          </li>
          <li>
            <Link to="/cancel">Cancel Reservation</Link>
          </li>
          <li>
            <Link to="/feedback">Leave Feedback</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header; 