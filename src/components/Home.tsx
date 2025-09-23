import React, { useState, useEffect } from 'react';
import { WEDDING_DATE, CAROUSEL_IMAGES } from '../constants';
import '../styles/Home.css';

const Home: React.FC = () => {
  // Initialize countdown state
  const [countdown, setCountdown] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  // Carousel state
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Update carousel image every 5 seconds
  useEffect(() => {
    const carouselInterval = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === CAROUSEL_IMAGES.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000);

    return () => clearInterval(carouselInterval);
  }, []);

  // Update countdown every second
  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date().getTime();
      const timeRemaining = WEDDING_DATE.getTime() - now;

      if (timeRemaining > 0) {
        // Calculate days, hours, minutes, and seconds
        const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
        const hours = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);

        setCountdown({ days, hours, minutes, seconds });
      } else {
        // Wedding day has arrived!
        setCountdown({ days: 0, hours: 0, minutes: 0, seconds: 0 });
        clearInterval(interval);
      }
    }, 1000);

    // Clean up interval on component unmount
    return () => clearInterval(interval);
  }, []);

  // Format numbers to always have two digits
  const formatNumber = (num: number): string => {
    return num < 10 ? `0${num}` : `${num}`;
  };

  // Format the wedding date for display
  const formattedWeddingDate = new Intl.DateTimeFormat('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    timeZone: 'America/Denver',
  }).format(WEDDING_DATE);

  const navigateToRSVP = () => {
    // Logic to navigate to RSVP section
    // This could be a link or a scroll to the RSVP section
    const rsvpSection = document.getElementById('rsvp');
    if (rsvpSection) {
      rsvpSection.scrollIntoView({ behavior: 'smooth' });
    }
  }

  return (
    <div id="home" className="home">
      <div className="hero">
        <div className="carousel-container">
          {CAROUSEL_IMAGES.map((image, index) => (
            <div
              key={index}
              className={`carousel-slide ${index === currentImageIndex ? 'active' : ''}`}
              style={{
                backgroundImage: `url(${image})`,
                opacity: index === currentImageIndex ? 1 : 0
              }}
            />
          ))}
        </div>
        <div className="hero-content">
          <h1>George & Susan</h1>
          <h2>We're Getting Married</h2>
          <p className="wedding-date">{formattedWeddingDate}</p>
          <button className="rsvp-button" onClick={navigateToRSVP}>RSVP</button>
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
                <span className="count">{formatNumber(countdown.days)}</span>
                <span className="label">Days</span>
              </div>
              <div className="countdown-item">
                <span className="count">{formatNumber(countdown.hours)}</span>
                <span className="label">Hours</span>
              </div>
              <div className="countdown-item">
                <span className="count">{formatNumber(countdown.minutes)}</span>
                <span className="label">Minutes</span>
              </div>
              <div className="countdown-item">
                <span className="count">{formatNumber(countdown.seconds)}</span>
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
