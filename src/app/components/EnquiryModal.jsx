"use client";

import { useEffect, useState } from 'react';
import styles from '../styles/EnquiryModal.module.css';

const EnquiryModal = ({ isOpen, onClose }) => {
  const [result, setResult] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      setResult("");
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

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setResult("");
    
    const formData = new FormData(e.target);
    formData.append("access_key", "651058f9-f1e2-4e94-968a-8bab901fc82d");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });

      const data = await response.json();
      
      if (data.success) {
        setResult("Thank you! We'll get back to you soon.");
        e.target.reset();
        setTimeout(() => {
          onClose();
          setResult("");
        }, 2000);
      } else {
        setResult("Something went wrong. Please try again.");
      }
    } catch (error) {
      setResult("Network error. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
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
                placeholder="+91 9899936388"
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
              <option value="Bridal">Bridal</option>
              <option value="Reception">Reception</option>
              <option value="Haldi">Haldi</option>
              <option value="Mehendi">Mehendi</option>
              <option value="Sangeet">Sangeet</option>
              <option value="Cocktail">Cocktail</option>
              <option value="Party">Party</option>
              <option value="Other">Other</option>
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

          <input type="checkbox" name="botcheck" className="hidden" style={{ display: 'none' }} />
          
          <div className={styles.formFooter}>
            <label className={styles.checkbox}>
              <input type="checkbox" name="newsletter" />
              <span>Keep me updated on exclusive workshops and new services</span>
            </label>
            <button type="submit" className={styles.submitButton} disabled={isSubmitting}>
              {isSubmitting ? 'Submitting...' : 'Submit Enquiry'}
            </button>
          </div>

          {result && (
            <p style={{ 
              marginTop: '12px', 
              textAlign: 'center', 
              color: result.includes('Thank') ? '#10b981' : '#ef4444',
              fontWeight: '500'
            }}>
              {result}
            </p>
          )}

          <p className={styles.formNote}>
            * Required fields. We respect your privacy and will never share your information.
          </p>
        </form>
      </div>
    </div>
  );
};

export default EnquiryModal;
