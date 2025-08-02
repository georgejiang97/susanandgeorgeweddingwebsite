import React from 'react';
import '../styles/Navigation.css';

const Navigation: React.FC = () => {
  return (
    <nav className="navigation">
      <div className="nav-container">
        <div className="nav-logo">
          <a href="/">G & S</a>
        </div>
        <div className="nav-links">
          <a href="/" className="nav-link">Home</a>
          <a href="/about" className="nav-link">Our Story</a>
          <a href="/schedule" className="nav-link">Schedule</a>
          <a href="/gallery" className="nav-link">Gallery</a>
          <a href="/rsvp" className="nav-link">RSVP</a>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
