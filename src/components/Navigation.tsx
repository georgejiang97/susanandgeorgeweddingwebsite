import React from 'react';
import '../styles/Navigation.css';

const Navigation: React.FC = () => {
  const navigateToSection = (section: string) => {
    // Logic to navigate to a specific section
    const targetSection = document.getElementById(section);
    if (targetSection) {
      targetSection.scrollIntoView({ behavior: 'smooth' });
    }
  }
  return (
    <nav className="navigation">
      <div className="nav-container">
        <div className="nav-logo">
          <a href="/">G & S</a>
        </div>
        <div className="nav-links">
          <div onClick={() => navigateToSection("home")} className="nav-link">Home</div>
          <div onClick={() => navigateToSection("about")} className="nav-link">Our Story</div>
          <div onClick={() => navigateToSection("schedule")} className="nav-link">Schedule</div>
          <div onClick={() => navigateToSection("gallery")} className="nav-link">Gallery</div>
          <div onClick={() => navigateToSection("rsvp")} className="nav-link">RSVP</div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
