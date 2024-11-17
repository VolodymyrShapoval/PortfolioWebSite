import React from 'react';

const ContactForm = () => {
  return (
    <div className="contact-form-block">
      <form id="contact-form">
        <input id="name" type="text" placeholder="Name: " required />
        <input id="email" type="email" placeholder="Email: " required />
        <input id="comment" type="text" placeholder="Your question: " />
        <a className="details-btn" href="#" id="advanced-settings-btn">
          Show advanced settings:
        </a>
        <div className="additional-info-container" id="additional-info-container">
          <textarea id="details" rows="5" cols="40" placeholder="Details: "></textarea>
        </div>
        <div className="checking">
          <input id="consent" type="checkbox" />
          <p>I give my consent to data processing</p>
        </div>
        <button type="submit">Send Message</button>
      </form>
    </div>
  );
};

export default ContactForm;
