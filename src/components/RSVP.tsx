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
  console.log(formData)

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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real application, you would send this data to a server
    console.log('Form submitted:', formData);
    alert('Thank you for your RSVP! We look forward to celebrating with you.');
    // Reset form
    const data = {
      name: formData.name,
      email: formData.email,
      attending: formData.attending,
      dietaryRestrictions: formData.dietaryRestrictions,
      additionalEvents: Array.from(formData.additionalEvents).join(","),
      message: formData.message
    };
    fetch(WEB_APP_RSVP_URL, {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
        'Content-Type': "text/plain;charset=utf-8"
      }
    })
    .then(res => console.log(res));
    setFormData(initialFormData);
  };

  return (
    <div id="rsvp" className="rsvp">
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
                  <div className="additional-events-wrapper">
                    <select
                      id="additionalEvents"
                      name="additionalEvents"
                      multiple={true}
                      value={formData.additionalEvents}
                      onChange={handleMultiSelectChange}
                      >
                      <option value="W"><p>Wednesday</p><p>Jun 17, 2026</p></option>
                      <option value="Th">Thursday, Jun 18</option>
                      <option value="F">Friday, Jun 19</option>
                      <option disabled value="Sa">Saturday, Jun 20</option>
                      <option value="S">Sunday, Jun 21</option>
                    </select>
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
            <a href="mailto:susanandgeorgewedding2026@gmail.com">susanandgeorgewedding2026@gmail.com</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default RSVP;
