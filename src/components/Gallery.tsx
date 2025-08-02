import React from 'react';
import '../styles/Gallery.css';

const Gallery: React.FC = () => {
  // In a real application, these would be actual image paths
  const images = [
    { id: 1, src: '/images/gallery/photo1.jpg', alt: 'Engagement Photo 1' },
    { id: 2, src: '/images/gallery/photo2.jpg', alt: 'Engagement Photo 2' },
    { id: 3, src: '/images/gallery/photo3.jpg', alt: 'Engagement Photo 3' },
    { id: 4, src: '/images/gallery/photo4.jpg', alt: 'Engagement Photo 4' },
    { id: 5, src: '/images/gallery/photo5.jpg', alt: 'Engagement Photo 5' },
    { id: 6, src: '/images/gallery/photo6.jpg', alt: 'Engagement Photo 6' },
    { id: 7, src: '/images/gallery/photo7.jpg', alt: 'Engagement Photo 7' },
    { id: 8, src: '/images/gallery/photo8.jpg', alt: 'Engagement Photo 8' },
  ];

  return (
    <div className="gallery">
      <div className="container">
        <h1 className="section-title">Our Gallery</h1>

        <div className="gallery-intro">
          <p>
            Here are some of our favorite moments together. We can't wait to add more memories
            from our wedding day!
          </p>
        </div>

        <div className="gallery-grid">
          {images.map((image) => (
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
            <span className="hashtag"> #JohnAndSarah2024</span> when posting on social media.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Gallery;
