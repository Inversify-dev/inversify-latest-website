'use client';

import { useState } from 'react';

const serviceOptions = [
  'Website Design & Development',
  'E-Commerce & Online Stores',
  'AI Automation',
  'Not sure yet (Free Consultation)',
];

function buildMailto(data) {
  const subject = `Project enquiry - ${data.service}`;
  const body = [
    `Name: ${data.name}`,
    `Email: ${data.email}`,
    `Service: ${data.service}`,
    '',
    'Project notes:',
    data.message,
  ].join('\n');
  return `mailto:invert@inversify.lk?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
}

export default function ContactSection() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    service: serviceOptions[0],
    message: '',
  });

  const updateField = (event) => {
    setFormData((current) => ({ ...current, [event.target.name]: event.target.value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    window.location.href = buildMailto(formData);
    setSubmitted(true);
  };

  return (
    <section id="contact" className="studio-contact studio-section" aria-labelledby="home-contact-title">
      <div className="studio-section-topline">
        <span>08 / LET’S TALK</span>
        <span>Real people. One useful next step.</span>
      </div>

      <div className="studio-contact-layout">
        <div className="studio-contact-copy">
          <span className="studio-kicker">A GOOD PLACE TO START</span>
          <h2 id="home-contact-title">What would you like to <em>make happen?</em></h2>
          <p>If there’s a business goal behind the idea, that’s enough. Tell us what you’re working toward and we’ll help make the digital part clear.</p>
          <a href="mailto:invert@inversify.lk" className="studio-contact-email">
            invert@inversify.lk <span aria-hidden="true">↗</span>
          </a>
          <div className="home-contact-actions">
            <a href="https://wa.me/94704621228" target="_blank" rel="noreferrer">Talk on WhatsApp <span aria-hidden="true">↗</span></a>
            <span>Colombo, Sri Lanka</span>
          </div>
          <div className="studio-contact-location"><span className="status-pip" /> Start with a goal, not a perfect brief</div>
        </div>

        <div className="studio-contact-form-wrap">
          {submitted ? (
            <div className="studio-form-success" role="status" aria-live="polite">
              <span>YOUR NEXT STEP IS READY</span>
              <h3>Your email draft is <em>ready.</em></h3>
              <p>Check your mail app, review the brief, then press Send. If it didn’t open, you can email us directly.</p>
              <a className="studio-arrow-link" href={buildMailto(formData)}>Open the project email <span aria-hidden="true">↗</span></a>
              <button type="button" className="studio-contact-reset" onClick={() => setSubmitted(false)}>Edit your brief</button>
            </div>
          ) : (
            <form className="studio-contact-form" onSubmit={handleSubmit}>
              <div className="studio-form-top"><span>START A PROJECT</span><span>01 - 04</span></div>
              <p className="studio-form-intro">No perfect brief required. A few good details are plenty.</p>
              <label htmlFor="home-contact-name">Your name<input id="home-contact-name" name="name" autoComplete="name" value={formData.name} onChange={updateField} placeholder="How should we address you?" required /></label>
              <div className="studio-form-row">
                <label htmlFor="home-contact-email">Work email<input id="home-contact-email" name="email" type="email" autoComplete="email" value={formData.email} onChange={updateField} placeholder="you@company.com" required /></label>
                <label htmlFor="home-contact-service">What do you need?<select id="home-contact-service" name="service" value={formData.service} onChange={updateField}>{serviceOptions.map((service) => <option key={service}>{service}</option>)}</select></label>
              </div>
              <label htmlFor="home-contact-message">What would you like to change?<textarea id="home-contact-message" name="message" rows="3" value={formData.message} onChange={updateField} placeholder="The goal, the roadblock, or the idea you keep coming back to…" required /></label>
              <div className="studio-form-submit">
                <span>Opens a ready-to-send email. Nothing is sent automatically.</span>
                <button type="submit">Prepare my email <span aria-hidden="true">↗</span></button>
              </div>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
