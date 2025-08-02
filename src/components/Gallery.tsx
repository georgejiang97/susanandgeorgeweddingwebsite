import React from 'react';
import { GALLERY_IMAGES } from '../constants';
import '../styles/Gallery.css';

const Gallery: React.FC = () => {
  return (
    <div id="gallery" className="gallery">
      <div className="container">
        <h1 className="section-title">Our Gallery</h1>

        <div className="gallery-intro">
          <p>
            Here are some of our favorite moments together. We can't wait to add more memories
            from our wedding day!
          </p>
        </div>

        <div className="gallery-grid">
          {GALLERY_IMAGES.map((image) => (
            <div key={image.id} className="gallery-item">
              {/* Using placeholders for demo purposes */}
              <div className="image-placeholder">
                {image.alt}
              </div>
              {/* In a real app, you would use: */}
              {/* <img src={image.src} alt={image.alt} /> */}
            </div>
          ))}
        </div>

        <div className="gallery-note">
          <h3>Share Your Photos</h3>
          <p>
            We'd love to see your photos from our special day! Please use our wedding hashtag
            <span className="hashtag"> #GeorgeAndSusan2026</span> when posting on social media.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Gallery;
