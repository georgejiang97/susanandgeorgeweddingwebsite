import React from 'react';
import { WEDDING_DATE } from '../constants';
import '../styles/About.css';

const About: React.FC = () => {
  // Format the wedding date for display
  const formattedWeddingDate = new Intl.DateTimeFormat('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  }).format(WEDDING_DATE);

  return (
    <div className="about">
      <div className="container">
        <h1 className="section-title">Our Story</h1>

        <div className="couple-intro">
          <div className="couple-photo">
            {/* Placeholder for couple photo */}
            <div className="photo-placeholder">Photo</div>
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
              <p>We met at a friend's birthday party and instantly connected.</p>
            </div>
          </div>

          <div className="timeline-item">
            <div className="timeline-date">Fall 2018</div>
            <div className="timeline-content">
              <h3>First Date</h3>
              <p>Our first official date at Luigi's Italian Restaurant.</p>
            </div>
          </div>

          <div className="timeline-item">
            <div className="timeline-date">Spring 2019</div>
            <div className="timeline-content">
              <h3>Moving In Together</h3>
              <p>We took the big step of moving in together and adopted our cat, Whiskers.</p>
            </div>
          </div>

          <div className="timeline-item">
            <div className="timeline-date">Summer 2022</div>
            <div className="timeline-content">
              <h3>The Proposal</h3>
              <p>George proposed during our hiking trip to the mountains at sunset.</p>
            </div>
          </div>

          <div className="timeline-item">
            <div className="timeline-date">{formattedWeddingDate}</div>
            <div className="timeline-content">
              <h3>Wedding Day</h3>
              <p>The day we officially become husband and wife!</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
