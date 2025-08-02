import React from 'react';
import { WEDDING_DATE, COUPLE_PHOTO } from '../constants';
import '../styles/About.css';

const About: React.FC = () => {
  // Format the wedding date for display
  const formattedWeddingDate = new Intl.DateTimeFormat('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  }).format(WEDDING_DATE);

  return (
    <div id="about" className="about">
      <div className="container">
        <h1 className="section-title">Our Story</h1>

        <div className="couple-intro">
          <div className="couple-photo">
            {/* Use the couple photo from constants */}
            <img
              src={COUPLE_PHOTO}
              alt="George and Susan"
              onError={(e) => {
                // If image fails to load, show placeholder
                e.currentTarget.style.display = 'none';
              }}
            />
            {/* Placeholder as fallback */}
            <div className="photo-placeholder" style={{ display: 'none' }}>Photo</div>
          </div>
          <div className="couple-text">
            <h2>How We Met</h2>
            <p>
              We first met during internship at a group intern event back in 2018. Susan was acting all
              edgy, with a bright yellow leather biking jacket, walking in front of everyone else, while
              George was playing hard to get. Naturally we ended up together.
            </p>
          </div>
        </div>

        <div className="timeline">
          <h2>Our Journey Together</h2>

          <div className="timeline-item">
            <div className="timeline-date">Summer 2018</div>
            <div className="timeline-content">
              <h3>First Meeting</h3>
              <p>We met during an intern event, and became friends through DDR and trauma from working at Meta.</p>
            </div>
          </div>

          <div className="timeline-item">
            <div className="timeline-date">Fall 2018</div>
            <div className="timeline-content">
              <h3>COVID</h3>
              <p>COVID era and going back to our regular school schedule meant we couldn't hang out much :(</p>
            </div>
          </div>

          <div className="timeline-item">
            <div className="timeline-date">Summer 2021</div>
            <div className="timeline-content">
              <h3>Susan ✈️ Seattle</h3>
              <p>Susan and Taro took the big step of moving to Seattle, where George asked both of them on a date.
                We became official on June 2nd, 2021!
              </p>
            </div>
          </div>

          <div className="timeline-item">
            <div className="timeline-date">Fall 2024</div>
            <div className="timeline-content">
              <h3>The Proposal</h3>
              <p>During our trip to China, George proposed in his hometown Qingdao! When he pulled out the ring, Susan said
                "What is this." and said yes!!!
              </p>
            </div>
          </div>

          <div className="timeline-item">
            <div className="timeline-date">January 13th, 2025</div>
            <div className="timeline-content">
              <h3>The Wedding</h3>
              <p>The day we officially became husband and wife!
              </p>
            </div>
          </div>

          <div className="timeline-item">
            <div className="timeline-date">{formattedWeddingDate}</div>
            <div className="timeline-content">
              <h3>The Wedding...Again!</h3>
              <p>The day we officially will become husband and wife...again!</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
