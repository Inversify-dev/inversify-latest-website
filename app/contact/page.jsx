'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import PageTitle from '@/components/PageTitle';

function ContactPageContent() {
  const searchParams = useSearchParams();
  const serviceAliases = {
    ecommerce: 'E-Commerce & PayHere',
    web: 'Custom Next.js Website',
    website: 'Custom Next.js Website',
    portal: 'Custom Business Software & Portal',
    branding: 'Logo & Brand Identity',
    seo: 'Google SEO & Rankings',
  };
  const rawService = searchParams.get('service');
  const initialService = serviceAliases[rawService] || rawService || 'Custom Next.js Website';
  const rawBudget = searchParams.get('budget');
  const budgetLabels = [
    'Under $1,000 (Starter Package)',
    '$1,000 - $3,000 (Growth Package)',
    '$3,000 - $10,000 (Enterprise Portal)',
    'Custom / Flexible Scope',
  ];
  const getBudgetOption = (value) => {
    if (!value) return budgetLabels[1];
    if (budgetLabels.includes(value)) return value;
    const amount = Number(String(value).replace(/[^\d]/g, ''));
    if (!Number.isFinite(amount) || amount === 0) return budgetLabels[3];
    if (amount < 1000) return budgetLabels[0];
    if (amount <= 3000) return budgetLabels[1];
    if (amount <= 10000) return budgetLabels[2];
    return budgetLabels[3];
  };
  const initialBudget = getBudgetOption(rawBudget);
  const rawEstimate = Number(searchParams.get('estimate'));
  const initialEstimate = Number.isFinite(rawEstimate) && rawEstimate > 0 ? rawEstimate.toLocaleString('en-US') : '';

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: initialService,
    budget: initialBudget,
    timeline: 'Within 2–4 Weeks',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [estimatedRange, setEstimatedRange] = useState(initialEstimate);
  const [errorMessage, setErrorMessage] = useState('');

  useEffect(() => {
    const s = searchParams.get('service');
    const b = searchParams.get('budget');
    if (s || b) {
      setFormData((prev) => ({
        ...prev,
        ...(s ? { service: serviceAliases[s] || s } : {}),
        ...(b ? { budget: getBudgetOption(b) } : {}),
      }));
    }
    const estimate = Number(searchParams.get('estimate'));
    setEstimatedRange(Number.isFinite(estimate) && estimate > 0 ? estimate.toLocaleString('en-US') : '');
  }, [searchParams]);

  const serviceOptions = [
    { label: 'E-Commerce & PayHere', icon: 'fa-cart-shopping' },
    { label: 'Custom Next.js Website', icon: 'fa-globe' },
    { label: 'Website Redesign & Speed', icon: 'fa-bolt' },
    { label: 'Custom Business Software & Portal', icon: 'fa-server' },
    { label: 'Logo & Brand Identity', icon: 'fa-pen-nib' },
    { label: 'Google SEO & Rankings', icon: 'fa-magnifying-glass-chart' },
  ];

  const budgetOptions = [
    'Under $1,000 (Starter Package)',
    '$1,000 - $3,000 (Growth Package)',
    '$3,000 - $10,000 (Enterprise Portal)',
    'Custom / Flexible Scope',
  ];

  const timelineOptions = [
    'Immediate (Urgent / Fast-Track)',
    'Within 2–4 Weeks (Standard)',
    'Within 1–2 Months',
    'Flexible / Just Exploring Ideas',
  ];

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    if (errorMessage) setErrorMessage('');
  };

  const handleSelectService = (service) => {
    setFormData({ ...formData, service });
  };

  const handleSelectBudget = (budget) => {
    setFormData({ ...formData, budget });
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
    const subject = `Project enquiry — ${formData.service}`;
    const body = [
      `Name: ${formData.name}`,
      `Email: ${formData.email}`,
      `Phone / WhatsApp: ${formData.phone || 'Not provided'}`,
      `Service: ${formData.service}`,
      `Budget: ${formData.budget}`,
      `Estimator reference: ${estimatedRange ? `$${estimatedRange} (planning estimate)` : 'Not used'}`,
      `Timeline: ${formData.timeline}`,
      '',
      'Project details:',
      formData.message,
    ].join('\n');
    window.location.href = `mailto:hello@inversify.lk?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    setSubmitted(true);
  };

  const handleReset = () => {
    setSubmitted(false);
    setFormData({
      name: '',
      email: '',
      phone: '',
      service: 'E-Commerce & PayHere',
      budget: '$1,000 - $3,000 (Growth Package)',
      timeline: 'Within 2–4 Weeks',
      message: '',
    });
    setEstimatedRange('');
  };

  return (
    <main className="contact-page-root">
      <Header />
      <PageTitle
        tag="START YOUR PROJECT"
        title="Let’s make your next move count."
        description="Tell us what you’re trying to change. We’ll help you shape a clear next step—with a real person on the other end."
        ctaLabel="Tell us about the project"
        ctaHref="#contact-intake"
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'Contact Us' },
        ]}
      />

      {/* =========================================================================
          INTERACTIVE STUDIO TERMINAL & DISCOVERY INTAKE
          ========================================================================= */}
      <section className="contact-main-section pt-90 pb-120 position-relative">
        <div className="container">
          <div className="row g-5 align-items-start">
            {/* Left Column: Studio Information & Direct Communication Channels */}
            <div className="col-lg-5">
              <div
                className="contact-info-panel p-4 p-md-5 rounded-4 position-relative overflow-hidden mb-4"
              >
                {/* Live Availability Status */}
                <div className="mb-4 d-inline-block">
                  <div
                    className="d-flex align-items-center gap-2 px-3 py-1 rounded-pill"
                    style={{
                      background: 'rgba(118, 246, 245, 0.1)',
                      border: '1px solid rgba(118, 246, 245, 0.34)',
                      color: '#76F6F5',
                      fontFamily: 'var(--font-mono)',
                      fontSize: '12px',
                      fontWeight: 700,
                    }}
                  >
                    <span className="beacon-dot" style={{ background: '#76F6F5' }}></span>
                    <span>Project enquiries · Colombo studio</span>
                  </div>
                </div>

                <h2
                  className="text-white mb-3"
                  style={{
                    fontFamily: 'var(--font-display)',
                    fontSize: 'clamp(1.8rem, 2.8vw, 2.4rem)',
                    fontWeight: 800,
                    letterSpacing: '-0.02em',
                  }}
                >
                  What would you like to make happen?
                </h2>

                <p style={{ color: '#c5c5d8', fontSize: '15.5px', lineHeight: 1.75, marginBottom: '24px' }}>
                  Start with a goal, not a perfect brief. Tell us what you want to improve, and we’ll talk through a useful next step.
                </p>

                {/* 1-Click WhatsApp Direct Action */}
                <a
                  href={`https://wa.me/94771234567?text=${encodeURIComponent("Hi Inversify, I'd like to discuss a digital project.")}`}
                  target="_blank"
                  rel="noreferrer"
                  className="w-100 d-flex align-items-center justify-content-center gap-2 p-3 rounded-3 mb-4 text-decoration-none"
                  style={{
                    background: 'rgba(37, 211, 102, 0.15)',
                    border: '1.5px solid rgba(37, 211, 102, 0.5)',
                    color: '#25D366',
                    fontFamily: 'var(--font-mono)',
                    fontSize: '14.5px',
                    fontWeight: 700,
                    transition: 'all 0.3s ease',
                  }}
                >
                  <i className="fa-brands fa-whatsapp" style={{ fontSize: '20px' }}></i>
                  <span>Chat on WhatsApp (+94 77 123 4567)</span>
                </a>

                {/* Direct Studio Channels */}
                <div className="d-flex flex-column gap-3 mb-4">
                  {/* Studio Office */}
                  <div className="d-flex align-items-start gap-3 p-3 rounded-3" style={{ background: 'rgba(255, 255, 255, 0.03)', border: '1px solid rgba(255, 255, 255, 0.06)' }}>
                    <div className="text-cyan mt-1">
                      <i className="fa-solid fa-location-dot" style={{ fontSize: '18px' }}></i>
                    </div>
                    <div>
                      <span className="font-mono text-cyan d-block mb-1" style={{ fontSize: '11px', textTransform: 'uppercase', letterSpacing: '1px' }}>
                        COLOMBO STUDIO
                      </span>
                      <p style={{ color: '#E6E6F5', fontSize: '14px', lineHeight: 1.5, margin: 0 }}>
                        Level 14, World Trade Center, Echelon Square, Colombo 00100, Sri Lanka
                      </p>
                    </div>
                  </div>

                  {/* Email */}
                  <div className="d-flex align-items-start gap-3 p-3 rounded-3" style={{ background: 'rgba(255, 255, 255, 0.03)', border: '1px solid rgba(255, 255, 255, 0.06)' }}>
                    <div className="text-cyan mt-1">
                      <i className="fa-solid fa-envelope" style={{ fontSize: '18px' }}></i>
                    </div>
                    <div>
                      <span className="font-mono text-cyan d-block mb-1" style={{ fontSize: '11px', textTransform: 'uppercase', letterSpacing: '1px' }}>
                        DIRECT EMAIL
                      </span>
                      <a href="mailto:hello@inversify.lk" className="text-white hover-cyan font-mono" style={{ fontSize: '14.5px', fontWeight: 600 }}>
                        hello@inversify.lk
                      </a>
                    </div>
                  </div>

                  {/* Phone */}
                  <div className="d-flex align-items-start gap-3 p-3 rounded-3" style={{ background: 'rgba(255, 255, 255, 0.03)', border: '1px solid rgba(255, 255, 255, 0.06)' }}>
                    <div className="text-cyan mt-1">
                      <i className="fa-solid fa-phone" style={{ fontSize: '18px' }}></i>
                    </div>
                    <div>
                      <span className="font-mono text-cyan d-block mb-1" style={{ fontSize: '11px', textTransform: 'uppercase', letterSpacing: '1px' }}>
                        DIRECT HOTLINE
                      </span>
                      <a href="tel:+94112345678" className="text-white hover-cyan font-mono" style={{ fontSize: '14.5px', fontWeight: 600 }}>
                        +94 (011) 234 - 5678
                      </a>
                    </div>
                  </div>
                </div>

                {/* Response Guarantee Note */}
                <div className="pt-3 border-top border-secondary-subtle">
                  <div className="d-flex align-items-center gap-2" style={{ fontSize: '13px', color: '#c5c5d8' }}>
                    <i className="fa-solid fa-clock-rotate-left text-cyan"></i>
                    <span>A short conversation is a good place to start. No polished brief required.</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: Interactive 3-Step Project Intake Form */}
            <div className="col-lg-7">
              <div
                id="contact-intake"
                className="contact-form-panel p-4 p-md-5 rounded-4"
              >
                <div className="mb-4">
                  <span className="font-mono text-cyan d-block mb-1" style={{ fontSize: '12px', textTransform: 'uppercase', letterSpacing: '1px' }}>
                    DISCOVERY QUESTIONNAIRE
                  </span>
                  <h3 className="text-white mb-2" style={{ fontFamily: 'var(--font-display)', fontSize: '24px', fontWeight: 800 }}>
                    Tell Us About Your Project
                  </h3>
                  <p style={{ color: '#c5c5d8', fontSize: '14.5px', margin: 0 }}>
                    Share a few notes, choose your scope, then review the email draft in your mail app before it’s sent.
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
                    <h3 className="text-white mb-2" style={{ fontFamily: 'var(--font-display)', fontSize: '24px', fontWeight: 800 }}>
                      Your email draft is ready.
                    </h3>
                    <p style={{ color: '#c5c5d8', fontSize: '15.5px', maxWidth: '480px', margin: '0 auto 24px auto', lineHeight: 1.7 }}>
                      Check your mail app, review the project brief, then press Send. If it didn’t open, email us directly at <a href="mailto:hello@inversify.lk">hello@inversify.lk</a>.
                    </p>
                    <button onClick={handleReset} className="theme-btn-three hero-cta-pill">
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

                    {/* Step 1: Select Service */}
                    <div className="mb-4" role="group" aria-labelledby="contact-service-label">
                      <p id="contact-service-label" className="text-white d-block mb-2 font-mono" style={{ fontSize: '15px', fontWeight: 700 }}>
                        1. What service do you need? *
                      </p>
                      <div className="d-flex flex-wrap gap-2">
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

                    {/* Step 2: Select Budget */}
                    <div className="mb-4" role="group" aria-labelledby="contact-budget-label">
                      <p id="contact-budget-label" className="text-white d-block mb-2 font-mono" style={{ fontSize: '15px', fontWeight: 700 }}>
                        2. Estimated Budget Range *
                      </p>
                      <div className="d-flex flex-wrap gap-2">
                        {budgetOptions.map((b) => (
                          <button
                            key={b}
                            type="button"
                            onClick={() => handleSelectBudget(b)}
                            aria-pressed={formData.budget === b}
                            className={`choice-chip-btn ${formData.budget === b ? 'active' : ''}`}
                          >
                            {b}
                          </button>
                        ))}
                      </div>
                      {estimatedRange && <p className="contact-estimate-note">Estimator reference: <strong>${estimatedRange}</strong> — a planning guide, not a fixed quote.</p>}
                    </div>

                    {/* Step 3: Contact Inputs */}
                    <div className="row g-3 mb-4">
                      <div className="col-sm-6">
                        <label htmlFor="contact-name" className="text-secondary font-mono d-block mb-1" style={{ fontSize: '12px' }}>
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

                      <div className="col-sm-6">
                        <label htmlFor="contact-email" className="text-secondary font-mono d-block mb-1" style={{ fontSize: '12px' }}>
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

                      <div className="col-sm-6">
                        <label htmlFor="contact-phone" className="text-secondary font-mono d-block mb-1" style={{ fontSize: '12px' }}>
                          Phone / WhatsApp Number
                        </label>
                        <input
                          type="tel"
                          id="contact-phone"
                          name="phone"
                          placeholder="+94 77 123 4567"
                          value={formData.phone}
                          onChange={handleChange}
                          className="custom-input-box w-100"
                        />
                      </div>

                      <div className="col-sm-6">
                        <label htmlFor="contact-timeline" className="text-secondary font-mono d-block mb-1" style={{ fontSize: '12px' }}>
                          Target Launch Timeline
                        </label>
                        <select
                          id="contact-timeline"
                          name="timeline"
                          value={formData.timeline}
                          onChange={handleChange}
                          className="custom-input-box w-100"
                          style={{ background: 'rgba(9, 6, 26, 0.8)', color: '#fff' }}
                        >
                          {timelineOptions.map((t) => (
                            <option key={t} value={t} style={{ background: '#09061A', color: '#fff' }}>
                              {t}
                            </option>
                          ))}
                        </select>
                      </div>

                      <div className="col-12">
                        <label htmlFor="contact-message" className="text-secondary font-mono d-block mb-1" style={{ fontSize: '12px' }}>
                          Project Details &amp; Specific Requirements *
                        </label>
                        <textarea
                          id="contact-message"
                          name="message"
                          rows="4"
                          placeholder="Tell us what kind of website you need, any special features (e.g. PayHere card payments, booking forms, stock sync), or your current website link..."
                          value={formData.message}
                          onChange={handleChange}
                          className="custom-input-box w-100"
                          required
                        ></textarea>
                      </div>
                    </div>

                    {/* Submit Action */}
                    <button
                      type="submit"
                      className="theme-btn-one hero-cta-pill w-100 justify-content-center py-3"
                    >
                      <span className="btn-label">Prepare my project email</span>
                      <span className="btn-arrow-circle">
                        <svg width="13" height="13" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M1.5 12.5L12.5 1.5M12.5 1.5H3.5M12.5 1.5V10.5" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      </span>
                    </button>
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

export default function ContactPage() {
  return (
    <React.Suspense fallback={<main className="contact-page-root" aria-busy="true" />}>
      <ContactPageContent />
    </React.Suspense>
  );
}
