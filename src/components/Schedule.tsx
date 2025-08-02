import React from 'react';
import '../styles/Schedule.css';

const Schedule: React.FC = () => {
  return (
    <div className="schedule">
      <div className="container">
        <h1 className="section-title">Wedding Day Schedule</h1>

        <div className="venue-info">
          <div className="venue-details">
            <h2>Ceremony & Reception</h2>
            <p className="venue-name">The Grand Ballroom</p>
            <p className="venue-address">123 Wedding Lane, Celebration City</p>
            <p className="venue-phone">(555) 123-4567</p>
          </div>
          <div className="venue-map">
            {/* Placeholder for map */}
            <div className="map-placeholder">Map will be displayed here</div>
          </div>
        </div>

        <div className="schedule-timeline">
          <div className="schedule-item">
            <div className="schedule-time">3:00 PM</div>
            <div className="schedule-content">
              <h3>Guest Arrival</h3>
              <p>Please arrive at the venue and be seated</p>
            </div>
          </div>

          <div className="schedule-item">
            <div className="schedule-time">3:30 PM</div>
            <div className="schedule-content">
              <h3>Ceremony Begins</h3>
              <p>The wedding ceremony will take place in the garden</p>
            </div>
          </div>

          <div className="schedule-item">
            <div className="schedule-time">4:30 PM</div>
            <div className="schedule-content">
              <h3>Cocktail Hour</h3>
              <p>Enjoy drinks and appetizers while we take photos</p>
            </div>
          </div>

          <div className="schedule-item">
            <div className="schedule-time">5:30 PM</div>
            <div className="schedule-content">
              <h3>Reception</h3>
              <p>Dinner, speeches, and celebration in the Grand Ballroom</p>
            </div>
          </div>

          <div className="schedule-item">
            <div className="schedule-time">7:00 PM</div>
            <div className="schedule-content">
              <h3>First Dance</h3>
              <p>The newlyweds will share their first dance as a married couple</p>
            </div>
          </div>

          <div className="schedule-item">
            <div className="schedule-time">7:30 PM</div>
            <div className="schedule-content">
              <h3>Cake Cutting</h3>
              <p>The couple will cut the wedding cake</p>
            </div>
          </div>

          <div className="schedule-item">
            <div className="schedule-time">8:00 PM - 12:00 AM</div>
            <div className="schedule-content">
              <h3>Dancing & Celebration</h3>
              <p>Dance the night away with us!</p>
            </div>
          </div>
        </div>

        <div className="additional-info">
          <h2>Additional Information</h2>
          <div className="info-cards">
            <div className="info-card">
              <h3>Dress Code</h3>
              <p>Semi-formal / Cocktail attire</p>
            </div>

            <div className="info-card">
              <h3>Parking</h3>
              <p>Complimentary valet parking is available at the venue</p>
            </div>

            <div className="info-card">
              <h3>Accommodations</h3>
              <p>We've reserved a block of rooms at the nearby Luxury Hotel</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Schedule;
