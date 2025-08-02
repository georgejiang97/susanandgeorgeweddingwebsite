import React, { useState } from 'react';
import { GALLERY_IMAGES } from '../constants';
import '../styles/Gallery.css';

const Gallery: React.FC = () => {
  // State to track which image is selected for the modal
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  // Function to open the modal with the selected image
  const openModal = (imageId: number) => {
    setSelectedImage(imageId);
    // Prevent scrolling when modal is open
    document.body.style.overflow = 'hidden';
  };

  // Function to close the modal
  const closeModal = () => {
    setSelectedImage(null);
    // Re-enable scrolling when modal is closed
    document.body.style.overflow = 'auto';
  };

  // Get the selected image data
  const getSelectedImage = () => {
    return GALLERY_IMAGES.find(image => image.id === selectedImage);
  };

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
            <div
              key={image.id}
              className="gallery-item"
              onClick={() => openModal(image.id)}
            >
              <img src={image.src} alt={image.alt} />
              <div className="gallery-item-overlay">
                <span>View</span>
              </div>
            </div>
          ))}
        </div>

        {/* Image Modal */}
        {selectedImage !== null && (
          <div className="modal-overlay" onClick={closeModal}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
              <button className="modal-close" onClick={closeModal}>&times;</button>
              <img
                src={getSelectedImage()?.src}
                alt={getSelectedImage()?.alt}
                className="modal-image"
              />
              <div className="modal-caption">
                {getSelectedImage()?.alt}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Gallery;
