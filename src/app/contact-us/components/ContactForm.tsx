'use client';
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import '../contact.css'

const ContactSection = () => {
  useEffect(() => {
    AOS.init({ once: true });
  }, []);

  return (
    <section className="contact-section">
      <div className="container">
        <div className="contact-card" data-aos="fade-up" data-aos-duration="1000">
          <div className="form-container">
            <form className="contact-form">
              <div className="form-row">
                <div className="form-group">
                  <label>First Name</label>
                  <input type="text" placeholder="First Name" />
                </div>
                <div className="form-group">
                  <label>Last Name</label>
                  <input type="text" placeholder="Last Name" />
                </div>
              </div>
              <div className="form-row">
                <div className="form-group">
                  <label>Email</label>
                  <input type="email" placeholder="example@email.com" />
                </div>
                <div className="form-group">
                  <label>Phone</label>
                  <input type="tel" placeholder="+971 12 345 6789" />
                </div>
              </div>
              <div className="form-group full">
                <label>Message</label>
                <textarea placeholder="Provide details of your enquiry..." />
              </div>
              <div className="form-button text-center">
                <button type="submit" className="submit-button">Send Message</button>
              </div>
            </form>
          </div>

          <div className="contact-image" />
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
