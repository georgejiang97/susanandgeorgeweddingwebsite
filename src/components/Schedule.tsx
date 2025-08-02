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
            <div className="schedule-time">2:30 PM</div>
            <div className="schedule-content">
              <h3>Guest Arrival</h3>
              <p>Please arrive at Mainspace, if you require a shuttle to get to the ceremony site.
                The ceremony will take place at Banff Gate Mountain (https://maps.app.goo.gl/wotoQSr3x6Xiwizu6)
              </p>
            </div>
          </div>

          <div className="schedule-item">
            <div className="schedule-time">3:00 PM</div>
            <div className="schedule-content">
              <h3>Ceremony Begins</h3>
              <p>Please arrive at Banff Gate Mountain by 3:00 PM and be seated for the ceremony.</p>
            </div>
          </div>

          <div className="schedule-item">
            <div className="schedule-time">5:00 PM to 10:00 PM</div>
            <div className="schedule-content">
              <h3>Reception</h3>
              <p>Dinner, speeches, and celebration at Mainspace!</p>
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
