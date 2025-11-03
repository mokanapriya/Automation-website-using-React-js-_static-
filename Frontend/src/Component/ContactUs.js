import React from 'react';
import '../App.css';

const ContactUs = () => {
  return (
    <section className="contact-section">
      <h2 className="contact-section-title">Get in Touch</h2>
      <div className="contact-grid">

        {/* Contact Form */}
        <form className="contact-form">
          <div className="form-row">
            <label htmlFor="name">Name</label>
            <input type="text" id="name" placeholder="Your Name" />
          </div>

          <div className="form-row">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" placeholder="Your Email" />
          </div>

          <div className="form-row">
            <label htmlFor="message">Message</label>
            <textarea id="message" rows="5" placeholder="Type your message here..."></textarea>
          </div>

          <div className="form-button">
            <button type="submit">Send</button>
          </div>
        </form>


        {/* Contact Info */}
        <div className="contact-info">
          <div className="contact-info-card">
            <h3>Address</h3>
            <p><span>📍</span>No: 7/25, Ramasamy Nagar, Karuparayanpalayam, Mylampatti Post,<br />
                    Coimbatore, Tamil Nadu 641062, INDIA<br /></p>
          </div>
          <div className="contact-info-card">
            <h3>Phone</h3>
            <p><span>📞</span> 9655821758, 9843036020</p>
          </div>
          <div className="contact-info-card">
            <h3>Email</h3>
            <p><span>📧</span> microautomation@aol.in</p>
          </div>
        </div>
      </div>

      {/* Optional Map */}
      <div style={{ marginTop: '2rem' }}>
        <iframe
          className="contact-map"
          title="Google Map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3916.472771052145!2d76.99660411480032!3d11.007451792163807!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba857dbfbf6466b%3A0xdcc1e92df36a45e5!2sMicroform%20Automation!5e0!3m2!1sen!2sin!4v1683612345678!5m2!1sen!2sin"
          loading="lazy"
        ></iframe>
      </div>
    </section>
  );
};

export default ContactUs;