import React from 'react';
import '../styles/Schedule.css';

const Schedule: React.FC = () => {
  return (
    <div id="schedule" className="schedule">
      <div className="container">
        <h1 className="section-title">Wedding Day Schedule</h1>

        <div className="venue-info">
          <div className="venue-details">
            <h2>Ceremony & Reception</h2>
            <p className="venue-name">MAINSPACE | Canmore Wedding Venue + Event Space</p>
            <p className="venue-address">102-709 Main Street, Canmore, AB T1W 2B2</p>
            <p className="venue-phone">(403) 675-0333</p>
            <p className="venue-website"><a href="https://www.mainspacecanmore.com" target="_blank" rel="noopener noreferrer">www.mainspacecanmore.com</a></p>
          </div>
          <div className="venue-map">
            <iframe
              src="https://maps.google.com/maps?width=600&amp;height=400&amp;hl=en&amp;q=Mainspace, Canmore&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
              width="100%"
              height="250"
              style={{ border: 0, borderRadius: '8px' }}
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="MAINSPACE Canmore Map"
            ></iframe>
          </div>
        </div>

        <div className="schedule-timeline">
          <div className="schedule-item">
            <div className="schedule-time">3:00 PM</div>
            <div className="schedule-content">
              <h3>Guest Arrival</h3>
              <p>Please arrive at MAINSPACE and be seated</p>
            </div>
          </div>

          <div className="schedule-item">
            <div className="schedule-time">3:30 PM</div>
            <div className="schedule-content">
              <h3>Ceremony Begins</h3>
              <p>The wedding ceremony will take place in the main hall</p>
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
              <p>Dinner, speeches, and celebration at MAINSPACE</p>
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
              <p>Parking is available at nearby public lots and on Main Street</p>
            </div>

            <div className="info-card">
              <h3>Accommodations</h3>
              <p>We've reserved a block of rooms at the nearby Malcolm Hotel</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Schedule;
