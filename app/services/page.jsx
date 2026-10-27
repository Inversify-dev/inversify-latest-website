'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import PageTitle from '@/components/PageTitle';

export default function ServicesPage() {
  const [openFaq, setOpenFaq] = useState(0);



  const servicesData = [
    {
      num: '01',
      slug: 'web-development',
      kicker: '01 / WEB ARCHITECTURE',
      statPill: 'Instant Speed',
      discipline: 'High-Speed Web Platforms',
      badge: 'Most Requested',
      title: 'Website Design & Development',
      summary: 'A custom-designed, fast-loading website that makes your business look world-class and helps new clients find you easily on Google.',
      image: '/images/service-details.webp',
      features: [
        'Bespoke visual design crafted specifically for your brand',
        'Instant sub-second page loading speed on all smartphones',
        'Built-in search engine readiness so customers find you',
        'Simple, clean dashboard to update text and photos anytime',
      ],
    },
    {
      num: '02',
      slug: 'ecommerce-payhere',
      kicker: '02 / DIGITAL STOREFRONTS',
      statPill: '1-Click Checkout',
      discipline: 'Digital Commerce & Payments',
      badge: 'High Conversion',
      title: 'E-Commerce & Online Stores',
      summary: 'A smooth online shop with secure payment integrations so your customers can browse and pay with their cards in seconds.',
      image: '/images/service4-1.webp',
      features: [
        'Secure payment integrations for credit/debit cards & wallets',
        'Instant automated SMS & WhatsApp order confirmations',
        'Simple product catalog, inventory tracking & coupons',
        'Frictionless 1-click mobile checkout for higher sales',
      ],
    },
    {
      num: '03',
      slug: 'ai-automation',
      kicker: '03 / SMART OPERATIONS',
      statPill: '24/7 Autopilot',
      discipline: 'Autonomous AI Workflows',
      badge: 'Hands-Free Ops',
      title: 'AI Automation',
      summary: 'Smart AI assistants for WhatsApp and your website that answer customer questions 24/7 and take care of repetitive manual tasks.',
      image: '/images/service7-1.webp',
      features: [
        '24/7 WhatsApp & web AI customer chat assistants',
        'Instant lead qualification, inquiry response & booking',
        'Connects directly to your spreadsheets, email & CRM',
        'Saves 100+ hours of repetitive manual work every month',
      ],
    },
  ];


  const faqs = [
    {
      q: 'Why choose a custom website over standard site builders like WordPress?',
      a: 'Custom-built websites load in a fraction of a second, have zero vulnerable plugins to maintain or get hacked, and do not slow down under traffic. Visitors get a smooth, professional experience on their phones, which Google rewards with higher search visibility and better customer inquiries.',
    },
    {
      q: 'How do online payment integrations work for e-commerce stores?',
      a: 'We connect your store with reliable payment gateways so your customers can pay quickly using Visa, Mastercard, or mobile wallets. Payments deposit directly into your business bank account, and customers receive automatic SMS and email confirmations right away.',
    },
    {
      q: 'How can AI automation help my day-to-day business operations?',
      a: 'AI automation connects with your WhatsApp, website, and business tools to answer customer questions around the clock, collect contact information from new leads, and organize your daily records automatically. This saves hours of manual work every week and ensures you never miss a customer inquiry.',
    },
    {
      q: 'How long does it take to design, build, and launch?',
      a: 'Most custom business websites and online stores launch within 2 to 4 weeks, depending on project complexity and timely client feedback. AI automation workflows are typically up and running within 1 to 2 weeks. We work with clear weekly milestones and provide live staging previews as we build.',
    },
    {
      q: 'Who owns the website and underlying source code?',
      a: 'Your business retains full operational ownership of your live website, registered domain name, branding, uploaded media, and customer database. In accordance with our standard service terms, proprietary source code and raw editable design files (AI, PSD, RAW) remain the property of Inversify unless specifically agreed in writing as a separate source-file buyout.',
    },
    {
      q: 'What are your payment terms and revision limits?',
      a: 'A 50% non-refundable advance is required to begin work, with the remaining 50% balance settled prior to final delivery and live handover. Each project includes a fixed number of revisions agreed in the initial project brief. Annual hosting, domains, and maintenance are billed separately on a yearly basis.',
    },
  ];

  return (
    <main className="services-page-root">
      <Header />
      <PageTitle
        tag="CAPABILITIES / BUILT AROUND YOUR NEXT MOVE"
        title="Digital, done with intent."
        description="Focused web, commerce, and automation disciplines designed to solve real business challenges and win customers."
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'Services' },
        ]}
      />
      <section className="index-chapter index-chapter-services" aria-label="Services introduction">
        <div><span className="index-chapter-kicker">02 / HOW WE HELP</span><h2>One studio.<br /><em>Three clear ways forward.</em></h2></div>
        <p>We do three things, and we do them exceptionally well. Explore our core disciplines below or use the project calculator to estimate scope.</p>
        <a href="#services-index" className="index-chapter-jump">Explore the 3 services <span aria-hidden="true">↓</span></a>
      </section>

      {/* =========================================================================
          3-SERVICE BESPOKE SHOWCASE CARDS (NEW ARCHITECTURE)
          ========================================================================= */}
      <section id="services-index" className="services-showcase-section pt-70 pb-120">
        <div className="container">
          {/* Section Kicker & Header */}
          <div className="text-center mb-5" style={{ maxWidth: '780px', margin: '0 auto' }}>
            <span className="badge-status-pill mb-3 d-inline-flex">
              <span className="beacon-dot"></span>
              <span>Our 3 Core Specializations</span>
            </span>
            <h2 className="text-white mb-3" style={{ fontSize: 'clamp(2rem, 3.2vw, 2.8rem)', fontWeight: 800 }}>
              Everything your business needs to grow online.
            </h2>
            <p style={{ color: '#c5c5dc', fontSize: '16px', lineHeight: 1.7 }}>
              No unnecessary fluff, no bloated retainers—just proven digital execution designed to build instant credibility and bring you real customers.
            </p>
          </div>

          {/* 3-Column Bespoke Showcase Grid */}
          <div className="services-trio-grid">
            {servicesData.map((svc) => (
              <div key={svc.slug} className="service-trio-card">
                <div className="service-trio-media-wrap">
                  <img src={svc.image} alt={svc.title} loading="lazy" decoding="async" />
                  <div className="service-trio-media-overlay" />
                  <span className="service-trio-badge">{svc.badge}</span>
                </div>
                <div className="service-trio-body">
                  <div className="service-trio-kicker-row">
                    <span className="service-trio-kicker">{svc.kicker}</span>
                    <span className="service-trio-stat-pill">{svc.statPill}</span>
                  </div>
                  <h3 className="service-trio-title">{svc.title}</h3>
                  <p className="service-trio-desc">{svc.summary}</p>
                  
                  <ul className="service-trio-features-list">
                    {svc.features.map((feat, idx) => (
                      <li key={idx} className="service-trio-feature-item">
                        <i className="fa-solid fa-circle-check" aria-hidden="true" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>

                  <Link href={`/services/${svc.slug}`} className="service-trio-action-btn">
                    <span>Explore this service</span>
                    <i className="fa-solid fa-arrow-right" aria-hidden="true" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>



      {/* =========================================================================
          FAQ ACCORDION
          ========================================================================= */}
      <section className="services-faq-section py-100" style={{ background: 'rgba(9, 6, 26, 0.6)' }}>
        <div className="container">
          <div className="row g-5 align-items-start">
            <div className="col-lg-5">
              <div className="badge-status-pill mb-3">
                <span className="beacon-dot"></span>
                <span>Common Questions</span>
              </div>
              <h2 className="text-white mb-3" style={{ fontSize: 'clamp(1.8rem, 3vw, 2.5rem)', fontWeight: 800 }}>
                Frequently Asked Questions
              </h2>
              <p style={{ color: '#c5c5d8', fontSize: '15.5px', lineHeight: 1.75, marginBottom: '24px' }}>
                Have questions about pricing, payment gateways, or timelines? We are always happy to chat and help you choose the best option for your budget.
              </p>
              <div className="d-flex flex-column gap-3">
                <Link href="/contact" className="theme-btn-one hero-cta-pill d-inline-flex justify-content-center">
                  <span className="btn-label">Get a Free Cost Estimate</span>
                  <span className="btn-arrow-circle">
                    <svg width="12" height="12" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M1.5 12.5L12.5 1.5H3.5M12.5 1.5V10.5" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </span>
                </Link>
                <a
                  href="https://wa.me/94704621228?text=Hi%20Inversify,%20I'd%20like%20to%20ask%20a%20question%20about%20your%20services."
                  target="_blank"
                  rel="noreferrer"
                  className="hero-cta-pill d-inline-flex align-items-center justify-content-center gap-2 p-3 rounded-3"
                  style={{
                    background: 'rgba(37, 211, 102, 0.12)',
                    border: '1px solid rgba(37, 211, 102, 0.4)',
                    color: '#25D366',
                    fontWeight: 600,
                  }}
                >
                  <i className="fa-brands fa-whatsapp" style={{ fontSize: '18px' }}></i>
                  <span>Chat on WhatsApp Instantly</span>
                </a>
              </div>
            </div>

            <div className="col-lg-7">
              <div className="faq-accordion-container">
                {faqs.map((faq, index) => {
                  const isOpen = openFaq === index;
                  return (
                    <div
                      key={index}
                      className={`faq-card-item mb-3 ${isOpen ? 'active' : ''}`}
                    >
                      <button
                        className="faq-question-btn w-100 d-flex justify-content-between align-items-center p-4 text-start"
                        onClick={() => setOpenFaq(isOpen ? -1 : index)}
                        aria-expanded={isOpen}
                      >
                        <span className="faq-question-text text-white">{faq.q}</span>
                        <span className="faq-toggle-icon ms-3">
                          <i className={`fa-solid fa-${isOpen ? 'minus' : 'plus'}`}></i>
                        </span>
                      </button>
                      {isOpen && (
                        <div className="faq-answer-body px-4 pb-4">
                          <p style={{ color: '#c5c5d8', fontSize: '15px', lineHeight: 1.75, margin: 0 }}>
                            {faq.a}
                          </p>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          CONVERSION CTA BANNER
          ========================================================================= */}
      <section
        className="services-bottom-cta py-90 cta-banner-spacer"
        style={{
          background: 'linear-gradient(180deg, #09061A 0%, #100B2B 100%)',
          borderTop: '1px solid rgba(181, 65, 250, 0.2)',
        }}
      >
        <div className="container text-center">
          <div className="max-w-700 mx-auto">
            <h2 className="text-white mb-3" style={{ fontSize: 'clamp(2rem, 3.5vw, 2.8rem)', fontWeight: 800 }}>
              Let's Build Your Dream Website
            </h2>
            <p style={{ color: '#c5c5d8', fontSize: '16.5px', lineHeight: 1.7, marginBottom: '24px' }}>
              Get in touch with our team today. We will review your requirements, recommend the best solution, and provide a clear quote within 24 hours.
            </p>
            <div className="d-flex justify-content-center gap-3 flex-wrap">
              <Link href="/contact" className="theme-btn-one hero-cta-pill">
                <span className="btn-label">Request Free Quote &amp; Proposal</span>
                <span className="btn-arrow-circle">
                  <svg width="12" height="12" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1.5 12.5L12.5 1.5M12.5 1.5H3.5M12.5 1.5V10.5" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </span>
              </Link>
              <Link href="/projects" className="theme-btn-three hero-cta-pill">
                <span>View Our Recent Projects</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
