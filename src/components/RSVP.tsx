import React, { useState } from 'react';
import { WEDDING_DATE, RSVP_DEADLINE, WEB_APP_RSVP_URL } from '../constants';
import '../styles/RSVP.css';

type FormData = {
  name: string
  email: string
  phone: string
  attending: string
  dietaryRestrictions: string
  additionalEvents: Set<string>
  message: string
}

const initialFormData: FormData = {
  name: '',
  email: '',
  phone: '',
  attending: "yes",
  dietaryRestrictions: '',
  additionalEvents: new Set(),
  message: ''
}

const additionalEventsOptions: string[] = [
  "Wednesday, Jun 17 2026",
  "Thursday, Jun 18 2026",
  "Friday, Jun 19 2026",
  "Saturday, Jun 20 2026",
  "Sunday, Jun 21 2026",
]

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

  const [formData, setFormData] = useState(initialFormData) as any[];
  const [showModal, setShowModal] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleMultiSelectChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;

    let currValue: Set<string> = new Set(formData[name]);
    console.log(currValue)

    if (currValue.has(value)) {
      currValue.delete(value)
    } else {
      currValue.add(value)
    }

    setFormData({
      ...formData,
      [name]: currValue
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    const additionalEvents = additionalEventsOptions.filter(date => formData.additionalEvents.has(date))
    try {
      const data = {
        name: formData.name,
        email: formData.email,
        attending: formData.attending === "yes" ? "attending" : "not attending",
        dietaryRestrictions: formData.dietaryRestrictions,
        additionalEvents: additionalEvents.join(", "),
        message: formData.message,
        phone: formData.phone
      };

      await fetch(WEB_APP_RSVP_URL, {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
          'Content-Type': "text/plain;charset=utf-8"
        }
      });

      console.log('Form submitted:', formData);
      setShowModal(true);
      setFormData(initialFormData);
    } catch (error) {
      console.error('Error submitting RSVP:', error);
      // You could show an error modal here instead
      alert('There was an error submitting your RSVP. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div id="rsvp" className="rsvp">
      <div className="container">
        <h1 className="section-title">RSVP</h1>

        <div className="rsvp-intro">
          <p>
            Please let us know if you'll be able to join us on our special day ({formattedWeddingDate}).
            We kindly request your response ASAP or by {formattedRsvpDeadline}.
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
              <label htmlFor="phone">Phone Number</label>
              <input
                type="number"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                required
                placeholder="Enter your phone number"
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
                    checked={formData.attending === "yes"}
                    onChange={handleChange}
                  />
                  Yes, I'll be there!
                </label>
                <label className="radio-label">
                  <input
                    type="radio"
                    name="attending"
                    value="no"
                    checked={formData.attending === "no"}
                    onChange={handleChange}
                  />
                  Sorry, I can't make it
                </label>
              </div>
            </div>

            {formData.attending === "yes" && (
              <>
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
                <div className="form-group">
                  <label htmlFor="additionalEvents">Additional Events</label>
                  <p>Susan & George are eager to plan some pre and post wedding events for guests to enjoy the beauty of Banff National Park! If you're interested in attending, please select which dates you think you'd be able to attend.</p>
                  <p>We will reach out in the upcoming months for additional details and RSVPs to these events.</p>
                  <div className="additional-events-cards">
                    {additionalEventsOptions.map(eventDate => {
                      const [day, date] = eventDate.split(", ")
                      const isWeddingDate = day === "Saturday" && date === "Jun 20 2026"
                      return <div className={`event-card${isWeddingDate ? " wedding-day" : ""}`}>
                        <input
                          type="checkbox"
                          id={"event-" + eventDate}
                          name="additionalEvents"
                          value={eventDate}
                          disabled={isWeddingDate}
                          checked={formData.additionalEvents.has(eventDate)}
                          onChange={handleMultiSelectChange}
                        />
                        <label htmlFor={`event-${eventDate}`} className={`event-card-label${isWeddingDate ? " disabled" : ""}`}>
                          <div className="event-day">{day}</div>
                          <div className="event-date">{date}</div>
                          {isWeddingDate && <div className="wedding-indicator">Wedding Day</div>}
                        </label>
                      </div>
                    })}
                  </div>
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

            <button type="submit" className="submit-button" disabled={isSubmitting}>
              {isSubmitting ? 'Submitting...' : 'Submit RSVP'}
            </button>
          </form>
        </div>

        <div className="rsvp-contact">
          <h3>Questions?</h3>
          <p>
            If you have any questions about the wedding, please contact us at:
            <br />
            <a href="mailto:susanandgeorgewedding2026@gmail.com">susanandgeorgewedding2026@gmail.com</a>
          </p>
        </div>
      </div>

      {/* RSVP Success Modal */}
      {showModal && (
        <div className="modal-overlay" onClick={() => setShowModal(false)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <div className="modal-header">
              <h2>Thank You!</h2>
            </div>
            <div className="modal-body">
              <div className="modal-icon">
                🎉
              </div>
              <p>
                Thank you for your RSVP! We're so excited to celebrate with you on our special day.
              </p>
              <p>
                You should receive a confirmation email shortly. If you need to make any changes,
                please contact us at{' '}
                <a href="mailto:susanandgeorgewedding2026@gmail.com">
                  susanandgeorgewedding2026@gmail.com
                </a>
              </p>
            </div>
            <div className="modal-footer">
              <button className="modal-button" onClick={() => setShowModal(false)}>
                Perfect!
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default RSVP;
