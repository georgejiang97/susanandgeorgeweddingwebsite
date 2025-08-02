import React, { useState } from 'react';
import { WEDDING_DATE, RSVP_DEADLINE } from '../constants';
import '../styles/RSVP.css';

const RSVP: React.FC = () => {
  // Format the wedding date and RSVP deadline for display
  const formattedWeddingDate = new Intl.DateTimeFormat('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  }).format(WEDDING_DATE);

  const formattedRsvpDeadline = new Intl.DateTimeFormat('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  }).format(RSVP_DEADLINE);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    attending: 'yes',
    guests: '0',
    dietaryRestrictions: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real application, you would send this data to a server
    console.log('Form submitted:', formData);
    alert('Thank you for your RSVP! We look forward to celebrating with you.');
    // Reset form
    setFormData({
      name: '',
      email: '',
      attending: 'yes',
      guests: '0',
      dietaryRestrictions: '',
      message: ''
    });
  };

  return (
    <div className="rsvp">
      <div className="container">
        <h1 className="section-title">RSVP</h1>

        <div className="rsvp-intro">
          <p>
            Please let us know if you'll be able to join us on our special day ({formattedWeddingDate}).
            We kindly request your response by {formattedRsvpDeadline}.
          </p>
        </div>

        <div className="rsvp-form-container">
          <form className="rsvp-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Full Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                placeholder="Enter your full name"
              />
            </div>

            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                placeholder="Enter your email address"
              />
            </div>

            <div className="form-group">
              <label>Will you be attending?</label>
              <div className="radio-group">
                <label className="radio-label">
                  <input
                    type="radio"
                    name="attending"
                    value="yes"
                    checked={formData.attending === 'yes'}
                    onChange={handleChange}
                  />
                  Yes, I'll be there
                </label>
                <label className="radio-label">
                  <input
                    type="radio"
                    name="attending"
                    value="no"
                    checked={formData.attending === 'no'}
                    onChange={handleChange}
                  />
                  Sorry, I can't make it
                </label>
              </div>
            </div>

            {formData.attending === 'yes' && (
              <>
                <div className="form-group">
                  <label htmlFor="guests">Number of Additional Guests</label>
                  <select
                    id="guests"
                    name="guests"
                    value={formData.guests}
                    onChange={handleChange}
                  >
                    <option value="0">0</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                  </select>
                </div>

                <div className="form-group">
                  <label htmlFor="dietaryRestrictions">Dietary Restrictions</label>
                  <input
                    type="text"
                    id="dietaryRestrictions"
                    name="dietaryRestrictions"
                    value={formData.dietaryRestrictions}
                    onChange={handleChange}
                    placeholder="Please list any dietary restrictions"
                  />
                </div>
              </>
            )}

            <div className="form-group">
              <label htmlFor="message">Message to the Couple (Optional)</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Share your well wishes or any additional information"
                rows={4}
              ></textarea>
            </div>

            <button type="submit" className="submit-button">
              Submit RSVP
            </button>
          </form>
        </div>

        <div className="rsvp-contact">
          <h3>Questions?</h3>
          <p>
            If you have any questions about the wedding, please contact us at:
            <br />
            <a href="mailto:johnandsarah@example.com">johnandsarah@example.com</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default RSVP;
