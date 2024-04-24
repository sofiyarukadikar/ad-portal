import React from 'react';
import Headers from '../Header/Headers';
import './stylecontact.css';

const ContactPages = () => {
  return (
    <div>

      <Headers />
      <div class="containercontact">

        <h1>Contact Us</h1>

        <div className="contact-form">

          <form action="" method="">

            <div className="form-group">
              <label for="name">Your Name:</label>
              <input type="text" id="name" name="name" required />
            </div>

            <div className="form-group">
              <label for="email">Your Email:</label>
              <input type="email" id="email" name="email" required />
            </div>

            <div className="form-group">
              <label for="subject">Subject:</label>
              <input type="text" id="subject" name="subject" required />
            </div>

            <div className="form-group">
              <label for="message">Message:</label>
              <textarea id="message" name="message" required></textarea>
            </div>

            <div className="form-group">
              <button type="submit">Send Message</button>
            </div>

          </form>


        </div>

      </div>


    </div>
  );
};

export default ContactPages;
