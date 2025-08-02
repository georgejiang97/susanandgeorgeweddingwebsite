import React from 'react';
import '../styles/Home.css';

const Home: React.FC = () => {
  return (
    <div className="home">
      <div className="hero">
        <div className="hero-content">
          <h1>John & Sarah</h1>
          <h2>We're Getting Married</h2>
          <p className="wedding-date">June 15, 2024</p>
          <button className="rsvp-button">RSVP Now</button>
        </div>
      </div>

      <div className="welcome-section">
        <div className="container">
          <h2>Welcome to Our Wedding Website</h2>
          <p>
            We're so excited to celebrate our special day with you! Here you'll find all the details
            about our wedding day, our story, and how you can join us in the celebration.
          </p>
          <div className="countdown">
            <h3>Countdown to Our Big Day</h3>
            <div className="countdown-timer">
              <div className="countdown-item">
                <span className="count">00</span>
                <span className="label">Days</span>
              </div>
              <div className="countdown-item">
                <span className="count">00</span>
                <span className="label">Hours</span>
              </div>
              <div className="countdown-item">
                <span className="count">00</span>
                <span className="label">Minutes</span>
              </div>
              <div className="countdown-item">
                <span className="count">00</span>
                <span className="label">Seconds</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
