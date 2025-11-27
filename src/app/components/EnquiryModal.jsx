"use client";

import { useEffect } from 'react';
import styles from '../styles/EnquiryModal.module.css';

const EnquiryModal = ({ isOpen, onClose }) => {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }

    const handleEscape = (e) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };

    document.addEventListener('keydown', handleEscape);
    return () => {
      document.body.style.overflow = '';
      document.removeEventListener('keydown', handleEscape);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    alert('Thank you for your enquiry! We will get back to you soon.');
    onClose();
  };

  return (
    <div className={styles.modalOverlay} onClick={onClose}>
      <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
        <button
          type="button"
          className={styles.closeButton}
          onClick={onClose}
          aria-label="Close enquiry form"
        >
          ×
        </button>

        <div className={styles.modalHeader}>
          <h2>Book Your Experience</h2>
          <p>Let's create something unforgettable together</p>
        </div>

        <form className={styles.enquiryForm} onSubmit={handleSubmit}>
          <div className={styles.formRow}>
            <label>
              <span>Full Name *</span>
              <input
                type="text"
                name="name"
                placeholder="Enter your full name"
                required
              />
            </label>
            <label>
              <span>Email Address *</span>
              <input
                type="email"
                name="email"
                placeholder="your.email@example.com"
                required
              />
            </label>
          </div>

          <div className={styles.formRow}>
            <label>
              <span>Phone Number *</span>
              <input
                type="tel"
                name="phone"
                placeholder="+91 98765 43210"
                required
              />
            </label>
            <label>
              <span>Event Date</span>
              <input type="date" name="date" />
            </label>
          </div>

          <label className={styles.fullWidth}>
            <span>Event Type</span>
            <select name="eventType">
              <option value="">Select event type</option>
              <option value="wedding">Wedding</option>
              <option value="reception">Reception</option>
              <option value="haldi">Haldi & Mehendi</option>
              <option value="sangeet">Sangeet</option>
              <option value="fashion">Fashion Shoot</option>
              <option value="editorial">Editorial</option>
              <option value="celebrity">Celebrity Event</option>
              <option value="other">Other</option>
            </select>
          </label>

          <label className={styles.fullWidth}>
            <span>Your Message</span>
            <textarea
              name="message"
              rows={4}
              placeholder="Tell us about your event, venue, inspiration, and any special requirements..."
            />
          </label>

          <div className={styles.formFooter}>
            <label className={styles.checkbox}>
              <input type="checkbox" name="newsletter" />
              <span>Keep me updated on exclusive workshops and new services</span>
            </label>
            <button type="submit" className={styles.submitButton}>
              Submit Enquiry
            </button>
          </div>

          <p className={styles.formNote}>
            * Required fields. We respect your privacy and will never share your information.
          </p>
        </form>
      </div>
    </div>
  );
};

export default EnquiryModal;
