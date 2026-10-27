'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import PageTitle from '@/components/PageTitle';

const serviceAliases = {
  ecommerce: 'E-Commerce & Online Stores',
  'ecommerce-payhere': 'E-Commerce & Online Stores',
  web: 'Website Design & Development',
  website: 'Website Design & Development',
  'web-development': 'Website Design & Development',
  static: 'Website Design & Development',
  automation: 'AI Automation',
  'ai-automation': 'AI Automation',
  ai: 'AI Automation',
};

const serviceOptions = [
  { label: 'Website Design & Development', icon: 'fa-globe' },
  { label: 'E-Commerce & Online Stores', icon: 'fa-cart-shopping' },
  { label: 'AI Automation', icon: 'fa-robot' },
  { label: 'Free Consultation / Other', icon: 'fa-comments' },
];

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: 'Website Design & Development',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  useEffect(() => {
    if (typeof window === 'undefined') return;
    try {
      const params = new URLSearchParams(window.location.search);
      const s = params.get('service');
      if (s) {
        setFormData((prev) => ({
          ...prev,
          service: serviceAliases[s] || s,
        }));
      }
    } catch {
      // Safe fallback
    }
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    if (errorMessage) setErrorMessage('');
  };

  const handleSelectService = (service) => {
    setFormData({ ...formData, service });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      setErrorMessage('Please fill in your Name, Work Email, and a brief description of your project.');
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setErrorMessage('Please enter a valid email address.');
      return;
    }

    setErrorMessage('');
    const subject = `Project enquiry - ${formData.service}`;
    const body = [
      `Name: ${formData.name}`,
      `Email: ${formData.email}`,
      `Phone / WhatsApp: ${formData.phone || 'Not provided'}`,
      `Service: ${formData.service}`,
      '',
      'Project details:',
      formData.message,
    ].join('\n');
    window.location.href = `mailto:invert@inversify.lk?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    setSubmitted(true);
  };

  const handleReset = () => {
    setSubmitted(false);
    setFormData({
      name: '',
      email: '',
      phone: '',
      service: 'Website Design & Development',
      message: '',
    });
  };

  return (
    <main className="contact-page-root">
      <Header />

      {/* =========================================================================
          ELEVATED SIGNATURE HERO (MATCHING /SERVICES & /PROJECTS)
          ========================================================================= */}
      <PageTitle
        tag="START A PROJECT / DIRECT STUDIO ACCESS"
        title="Let’s make your next move count."
        description="Tell us what you want to build or change. A short message is enough—we’ll talk through practical next steps with direct engineering access."
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'Contact' },
        ]}
      />

      {/* =========================================================================
          SIGNATURE EDITORIAL CHAPTER INTRO
          ========================================================================= */}
      <section className="index-chapter index-chapter-contact" aria-label="Contact introduction">
        <div>
          <span className="index-chapter-kicker">04 / THE NEXT STEP</span>
          <h2>Direct access. <em>Real momentum.</em></h2>
        </div>
        <p>
          Every inquiry is reviewed directly by our Colombo engineering leads. Tell us where you are today and what you want to achieve, and we’ll outline clear, practical options within 24 hours.
        </p>
        <a href="#contact-intake" className="index-chapter-jump">
          Jump to project inquiry form <span aria-hidden="true">↓</span>
        </a>
      </section>

      {/* =========================================================================
          STUDIO INFORMATION & CLEAN PROJECT INTAKE FORM
          ========================================================================= */}
      <section id="contact-intake" className="contact-main-section pb-120 position-relative">
        <div className="container">
          <div className="contact-page-layout">
            
            {/* Left Column: Studio Channels */}
            <div className="contact-info-col h-100 d-flex flex-column">
              <div className="contact-info-panel rounded-4 position-relative overflow-hidden h-100 d-flex flex-column justify-content-between">
                <div>
                  <div className="mb-4">
                    <span className="studio-kicker-badge d-inline-block mb-2">
                      STUDIO DIRECT CHANNELS
                    </span>
                    <h2 className="contact-panel-title text-white mb-2">
                      Speak directly with our team.
                    </h2>
                    <p className="contact-panel-desc">
                      We answer all enquiries directly from our Colombo studio. No call centers, no gatekeepers.
                    </p>
                  </div>

                  {/* 1-Click WhatsApp Direct Action */}
                  <a
                    href={`https://wa.me/94704621228?text=${encodeURIComponent("Hi Inversify, I'd like to discuss a project.")}`}
                    target="_blank"
                    rel="noreferrer"
                    className="whatsapp-direct-pill w-100 d-flex align-items-center justify-content-center gap-2 p-3 rounded-3 mb-4 text-decoration-none"
                  >
                    <i className="fa-brands fa-whatsapp" style={{ fontSize: '20px' }}></i>
                    <span>Chat on WhatsApp (+94 70 462 1228)</span>
                  </a>

                  {/* Direct Studio Channels */}
                  <div className="studio-channel-list d-flex flex-column gap-3 mb-4">
                    {/* Studio Office */}
                    <div className="studio-channel-card d-flex align-items-start gap-3 p-3 rounded-3">
                      <div className="channel-icon-wrap mt-1">
                        <i className="fa-solid fa-location-dot"></i>
                      </div>
                      <div>
                        <span className="channel-card-label d-block mb-1">
                          COLOMBO STUDIO
                        </span>
                        <p className="channel-card-text m-0">
                          Colombo, Sri Lanka
                        </p>
                      </div>
                    </div>

                    {/* Email */}
                    <div className="studio-channel-card d-flex align-items-start gap-3 p-3 rounded-3">
                      <div className="channel-icon-wrap mt-1">
                        <i className="fa-solid fa-envelope"></i>
                      </div>
                      <div>
                        <span className="channel-card-label d-block mb-1">
                          DIRECT EMAIL
                        </span>
                        <a href="mailto:invert@inversify.lk" className="channel-card-link">
                          invert@inversify.lk
                        </a>
                      </div>
                    </div>

                    {/* Phone */}
                    <div className="studio-channel-card d-flex align-items-start gap-3 p-3 rounded-3">
                      <div className="channel-icon-wrap mt-1">
                        <i className="fa-solid fa-phone"></i>
                      </div>
                      <div>
                        <span className="channel-card-label d-block mb-1">
                          DIRECT HOTLINE &amp; WHATSAPP
                        </span>
                        <a href="tel:+94704621228" className="channel-card-link">
                          +94 70 462 1228
                        </a>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="pt-3 border-top border-secondary-subtle mt-auto contact-info-bottom-status">
                  <div className="d-flex align-items-center gap-2" style={{ fontSize: '13.5px', color: '#c5c5d8' }}>
                    <span className="beacon-dot" style={{ background: '#00ffb2' }}></span>
                    <span>Quick response time · Same-day follow-up guaranteed.</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: Clean Project Intake Form (ONLY NEEDED DETAILS) */}
            <div className="contact-form-col h-100 d-flex flex-column">
              <div className="contact-form-panel rounded-4 h-100 d-flex flex-column justify-content-between">
                <div className="mb-4">
                  <span className="studio-kicker-badge d-inline-block mb-2">
                    PROJECT INQUIRY
                  </span>
                  <h3 className="contact-panel-title text-white mb-2">
                    Tell Us About Your Project
                  </h3>
                  <p className="contact-panel-desc">
                    Fill out the key details below. We’ll review your requirements and respond promptly.
                  </p>
                </div>

                {submitted ? (
                  <div className="text-center py-5">
                    <div
                      className="d-inline-flex align-items-center justify-content-center mb-4"
                      style={{
                        width: '72px',
                        height: '72px',
                        borderRadius: '50%',
                        background: 'rgba(118, 246, 245, 0.15)',
                        border: '2px solid #76F6F5',
                        color: '#76F6F5',
                        fontSize: '32px',
                      }}
                    >
                      <i className="fa-solid fa-check"></i>
                    </div>
                    <h3 className="text-white mb-2" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: '24px', fontWeight: 700 }}>
                      Your email draft is ready.
                    </h3>
                    <p style={{ color: '#c5c5d8', fontSize: '15.5px', maxWidth: '480px', margin: '0 auto 24px auto', lineHeight: 1.7 }}>
                      Check your email app to send the project brief, or write to us directly at <a href="mailto:invert@inversify.lk" className="text-cyan">invert@inversify.lk</a>.
                    </p>
                    <button onClick={handleReset} type="button" className="theme-btn-three hero-cta-pill">
                      <span>Submit Another Inquiry</span>
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} noValidate>
                    {errorMessage && (
                      <div role="alert" aria-live="assertive" className="p-3 rounded-3 mb-4" style={{ background: 'rgba(255, 75, 75, 0.15)', border: '1px solid #ff4b4b', color: '#ffb3b3', fontSize: '14px' }}>
                        <i className="fa-solid fa-triangle-exclamation me-2"></i> {errorMessage}
                      </div>
                    )}

                    {/* What service do you need? */}
                    <div className="mb-4" role="group" aria-labelledby="contact-service-label">
                      <label id="contact-service-label" className="field-label-clean d-block mb-2">
                        What service do you need? *
                      </label>
                      <div className="choice-chip-group d-flex flex-wrap gap-2">
                        {serviceOptions.map((opt) => (
                          <button
                            key={opt.label}
                            type="button"
                            onClick={() => handleSelectService(opt.label)}
                            aria-pressed={formData.service === opt.label}
                            className={`choice-chip-btn ${formData.service === opt.label ? 'active' : ''}`}
                          >
                            <i className={`fa-solid ${opt.icon} me-2`}></i>
                            {opt.label}
                          </button>
                        ))}
                      </div>
                    </div>

                    {/* Dedicated 2-Column Responsive Form Grid */}
                    <div className="intake-form-grid mb-4">
                      {/* Name */}
                      <div className="intake-field-half">
                        <label htmlFor="contact-name" className="field-label-clean d-block mb-1">
                          Your Full Name *
                        </label>
                        <input
                          type="text"
                          id="contact-name"
                          name="name"
                          placeholder="e.g. Kasun Perera"
                          value={formData.name}
                          onChange={handleChange}
                          className="custom-input-box w-100"
                          required
                        />
                      </div>

                      {/* Email */}
                      <div className="intake-field-half">
                        <label htmlFor="contact-email" className="field-label-clean d-block mb-1">
                          Work Email Address *
                        </label>
                        <input
                          type="email"
                          id="contact-email"
                          name="email"
                          placeholder="kasun@company.com"
                          value={formData.email}
                          onChange={handleChange}
                          className="custom-input-box w-100"
                          required
                        />
                      </div>

                      {/* Phone */}
                      <div className="intake-field-full">
                        <label htmlFor="contact-phone" className="field-label-clean d-block mb-1">
                          Phone / WhatsApp Number
                        </label>
                        <input
                          type="tel"
                          id="contact-phone"
                          name="phone"
                          placeholder="+94 70 462 1228"
                          value={formData.phone}
                          onChange={handleChange}
                          className="custom-input-box w-100"
                        />
                      </div>

                      {/* Message */}
                      <div className="intake-field-full">
                        <label htmlFor="contact-message" className="field-label-clean d-block mb-1">
                          Project Details &amp; What You Want to Build *
                        </label>
                        <textarea
                          id="contact-message"
                          name="message"
                          rows="4"
                          placeholder="Tell us what kind of website or system you need, any specific features you would like, or your current website address..."
                          value={formData.message}
                          onChange={handleChange}
                          className="custom-input-box w-100"
                          required
                        ></textarea>
                      </div>

                      {/* Submit CTA */}
                      <div className="intake-field-full mt-2">
                        <button
                          type="submit"
                          className="contact-submit-btn w-100 d-flex align-items-center justify-content-center gap-2"
                        >
                          <span>Prepare My Project Email</span>
                          <span className="submit-btn-arrow" aria-hidden="true">
                            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path d="M1.5 12.5L12.5 1.5M12.5 1.5H3.5M12.5 1.5V10.5" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                          </span>
                        </button>
                        <p className="submit-footnote text-center mt-3 mb-0">
                          ✦ Opens an email draft ready to review and send. Direct email: <a href="mailto:invert@inversify.lk" className="text-cyan text-decoration-none">invert@inversify.lk</a>
                        </p>
                      </div>
                    </div>

                  </form>
                )}
              </div>
            </div>

          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
