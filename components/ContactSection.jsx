'use client';

import { useState } from 'react';

const GOOGLE_SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbxzdC0o7AHRqluoUM8DAmoCKH-wRh-8WHkQhdf2P1TbER9jSCG_lQ21HWaWxjhXiTdi/exec';

const serviceOptions = [
  'Website Design & Development',
  'E-Commerce & Online Stores',
  'Custom Software & Systems',
  'AI Automation',
  'Not sure yet (Free Consultation)',
];

export default function ContactSection() {
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    service: serviceOptions[0],
    message: '',
  });

  const updateField = (event) => {
    setFormData((current) => ({ ...current, [event.target.name]: event.target.value }));
    if (errorMessage) setErrorMessage('');
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      setErrorMessage('Please fill in your name, work email, and project message.');
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setErrorMessage('Please enter a valid work email address.');
      return;
    }

    setErrorMessage('');
    setIsSubmitting(true);

    const payload = {
      name: formData.name.trim(),
      email: formData.email.trim(),
      phone: 'Not provided (Homepage intake)',
      subject: `Project inquiry - ${formData.service}`,
      service: formData.service,
      message: formData.message.trim(),
    };

    try {
      // 1. Primary: Server-side Next.js API route
      let delivered = false;
      try {
        const res = await fetch('/api/contact', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(payload),
        });
        if (res.ok) {
          delivered = true;
        }
      } catch (apiErr) {
        console.warn('API route error, falling back to direct Google Script submission:', apiErr);
      }

      // 2. Direct client fallback (identical to previous site architecture)
      if (!delivered) {
        await fetch(GOOGLE_SCRIPT_URL, {
          method: 'POST',
          mode: 'no-cors',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(payload),
        });
      }

      setSubmitted(true);
    } catch (err) {
      console.error('Submission error:', err);
      setErrorMessage('Could not send message. Please write directly to invert@inversify.lk or WhatsApp +94 70 462 1228.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="studio-contact studio-section" aria-labelledby="home-contact-title">
      <div className="studio-section-topline">
        <span>07 / LET’S TALK</span>{/* 08 when Journal is enabled */}
        <span>Real people. One useful next step.</span>
      </div>

      <div className="studio-contact-layout">
        <div className="studio-contact-copy">
          <span className="studio-kicker">A GOOD PLACE TO START</span>
          <h2 id="home-contact-title">What would you like to <em>make happen?</em></h2>
          <p>Tell us what you want to achieve, and we’ll map out the clearest digital path forward.</p>
          <a href="mailto:invert@inversify.lk" className="studio-contact-email">
            invert@inversify.lk <span aria-hidden="true">↗</span>
          </a>
          <div className="home-contact-actions">
            <a href="https://wa.me/94704621228" target="_blank" rel="noreferrer">Talk on WhatsApp <span aria-hidden="true">↗</span></a>
            <a href="https://www.instagram.com/building.inversify/" target="_blank" rel="noreferrer">Instagram</a>
            <a href="https://www.tiktok.com/@building.inversify" target="_blank" rel="noreferrer">TikTok</a>
          </div>
          <div className="studio-contact-location">Direct engineer consultation · Rapid response</div>
        </div>

        <div className="studio-contact-form-wrap">
          {submitted ? (
            <div className="studio-form-success" role="status" aria-live="polite">
              <span style={{ color: '#76F6F5', fontWeight: 600 }}>INQUIRY RECEIVED</span>
              <h3>Message <em>delivered.</em></h3>
              <p>Thank you, {formData.name || 'there'}. Your project brief has been delivered directly to our Colombo engineering team at <a href="mailto:invert@inversify.lk" style={{ color: '#76F6F5', textDecoration: 'none' }}>invert@inversify.lk</a> and logged in our system. We will follow up within 24 hours.</p>
              <div style={{ display: 'flex', gap: '14px', alignItems: 'center', flexWrap: 'wrap', marginTop: '14px' }}>
                <button
                  type="button"
                  className="studio-contact-reset"
                  onClick={() => {
                    setSubmitted(false);
                    setFormData({ name: '', email: '', service: serviceOptions[0], message: '' });
                  }}
                >
                  Send another inquiry
                </button>
                <a
                  href="https://wa.me/94704621228"
                  target="_blank"
                  rel="noreferrer"
                  style={{ color: '#76F6F5', fontSize: '13.5px', textDecoration: 'none', fontWeight: 600 }}
                >
                  Chat on WhatsApp ↗
                </a>
              </div>
            </div>
          ) : (
            <form className="studio-contact-form" onSubmit={handleSubmit}>
              <div className="studio-form-top"><span>START A PROJECT</span><span>01 - 04</span></div>
              <p className="studio-form-intro">No heavy brief needed. A few clear details are plenty.</p>

              {errorMessage && (
                <div role="alert" style={{ background: 'rgba(255, 75, 75, 0.15)', border: '1px solid #ff4b4b', color: '#ffb3b3', fontSize: '13px', padding: '10px 14px', borderRadius: '8px', marginBottom: '14px' }}>
                  {errorMessage}
                </div>
              )}

              <label htmlFor="home-contact-name">Your name<input id="home-contact-name" name="name" autoComplete="name" value={formData.name} onChange={updateField} placeholder="How should we address you?" required /></label>
              <div className="studio-form-row">
                <label htmlFor="home-contact-email">Work email<input id="home-contact-email" name="email" type="email" autoComplete="email" value={formData.email} onChange={updateField} placeholder="you@company.com" required /></label>
                <label htmlFor="home-contact-service">What do you need?<select id="home-contact-service" name="service" value={formData.service} onChange={updateField}>{serviceOptions.map((service) => <option key={service}>{service}</option>)}</select></label>
              </div>
              <label htmlFor="home-contact-message">What would you like to build?<textarea id="home-contact-message" name="message" rows="3" value={formData.message} onChange={updateField} placeholder="The objective, roadblock, or system you want to build…" required /></label>
              <div className="studio-form-submit">
                <span>Directly delivered to invert@inversify.lk &amp; team tracker. Same-day response.</span>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  style={{ opacity: isSubmitting ? 0.75 : 1, cursor: isSubmitting ? 'not-allowed' : 'pointer' }}
                >
                  {isSubmitting ? (
                    <>
                      <span>Sending inquiry...</span>
                      <span aria-hidden="true" style={{ fontSize: '14px' }}>⏳</span>
                    </>
                  ) : (
                    <>
                      <span>Send project inquiry</span>
                      <span aria-hidden="true">↗</span>
                    </>
                  )}
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}

