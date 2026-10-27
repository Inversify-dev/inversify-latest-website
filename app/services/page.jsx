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
      statPill: 'Sub-Second Speed',
      discipline: 'High-Speed Web Platforms',
      badge: 'Most Requested',
      title: 'Website Design & Development',
      summary: 'Custom-engineered Next.js platforms built for instant loading, world-class aesthetics, and high conversion.',
      image: '/images/service-details.webp',
      chips: [
        'Bespoke Design System',
        'Next.js Instant Speed',
        'Built-in Search SEO',
        'Frictionless Mobile UX',
      ],
    },
    {
      num: '02',
      slug: 'ecommerce-payhere',
      kicker: '02 / DIGITAL COMMERCE',
      statPill: '1-Click Checkout',
      discipline: 'Digital Commerce & Payments',
      badge: 'High Conversion',
      title: 'E-Commerce & Online Stores',
      summary: 'Intuitive storefronts engineered for fast purchasing, secure card checkout, and automated buyer alerts.',
      image: '/images/service4-1.webp',
      chips: [
        'Card & Wallet Gateways',
        'Instant WhatsApp Alerts',
        'Live Inventory Sync',
        '1-Click Mobile Checkout',
      ],
    },
    {
      num: '03',
      slug: 'custom-software',
      kicker: '03 / SYSTEMS & SOFTWARE',
      statPill: '100% Bespoke',
      discipline: 'Custom Software & Enterprise Systems',
      badge: 'Engineered for Scale',
      title: 'Custom Software & Systems',
      summary: 'Bespoke business software, operational dashboards, order tracking hubs, and cloud workflow systems.',
      image: '/images/service-systems.jpg',
      chips: [
        'Custom Admin Portals',
        'Real-Time API Sync',
        'Bank-Grade Security',
        'Scalable Cloud Architecture',
      ],
    },
    {
      num: '04',
      slug: 'ai-automation',
      kicker: '04 / SMART OPERATIONS',
      statPill: '24/7 Autopilot',
      discipline: 'Autonomous AI Workflows',
      badge: 'Hands-Free Ops',
      title: 'AI Automation',
      summary: 'Autonomous AI assistants for WhatsApp and web that answer inquiries 24/7 and eliminate repetitive busywork.',
      image: '/images/service7-1.webp',
      chips: [
        '24/7 WhatsApp AI',
        'Lead Qualification',
        'Spreadsheet & CRM Sync',
        'Zero Manual Overhead',
      ],
    },
  ];

  const faqs = [
    {
      q: 'Why choose a custom website over standard site builders like WordPress?',
      a: 'Custom-engineered websites load instantly, have zero vulnerable plugins to maintain or patch, and deliver seamless mobile experiences that drive verified inquiries.',
    },
    {
      q: 'How do online payment integrations work for e-commerce stores?',
      a: 'We integrate certified payment gateways so customers pay quickly with Visa, Mastercard, and digital wallets, with instant WhatsApp and SMS order confirmation.',
    },
    {
      q: 'What types of custom software and business systems can you build?',
      a: 'We build internal operations platforms, order tracking engines, client portals, and custom ERP tools tailored exactly to your business rules and workflows.',
    },
    {
      q: 'How does AI automation streamline daily operations?',
      a: 'AI assistants handle WhatsApp inquiries around the clock, qualify incoming leads, and sync data directly to your CRM—saving over 100 hours of manual busywork each month.',
    },
    {
      q: 'What is the typical project timeline from start to launch?',
      a: 'Most custom websites and e-commerce stores launch within 2 to 4 weeks. Custom software and AI automation workflows typically go live in 2 to 4 weeks with weekly milestones.',
    },
    {
      q: 'What are your standard project payment terms?',
      a: 'A 50% advance begins the project, with the remaining balance due upon final delivery. Each engagement includes agreed revision rounds and live staging previews.',
    },
  ];

  return (
    <main className="services-page-root">
      <Header />
      <PageTitle
        tag="CAPABILITIES / BUILT AROUND YOUR NEXT MOVE"
        title="Digital, built to perform."
        description="Focused web, commerce, bespoke software, and automation disciplines designed to solve real business challenges and win customers."
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'Services' },
        ]}
      />

      {/* Intro Chapter */}
      <section className="index-chapter index-chapter-services" aria-label="Services introduction">
        <div>
          <span className="index-chapter-kicker">02 / HOW WE HELP</span>
          <h2>One studio.<br /><em>Four clear ways forward.</em></h2>
        </div>
        <p>We focus on four core disciplines, engineered with precision and built to deliver measurable business impact.</p>
        <a href="#services-index" className="index-chapter-jump">Explore the 4 services <span aria-hidden="true">↓</span></a>
      </section>

      {/* =========================================================================
          BESPOKE ARCHITECTURAL SHOWCASE (MODERN OUT-OF-THE-BOX GRID)
          ========================================================================= */}
      <section id="services-index" className="services-showcase-section pt-90 pb-120">
        <div className="container">
          {/* Header Strip with Negative Space */}
          <div className="services-header-strip mb-5">
            <div>
              <span className="badge-status-pill mb-2 d-inline-flex">
                <span className="beacon-dot"></span>
                <span>Four Disciplines</span>
              </span>
              <h2 className="text-white m-0" style={{ fontSize: 'clamp(2rem, 3.4vw, 3rem)', fontWeight: 800, letterSpacing: '-0.02em' }}>
                Engineered for speed, scale &amp; clarity.
              </h2>
            </div>
            <p className="services-lead-text m-0">
              Purpose-built digital systems that elevate your brand and drive genuine business revenue.
            </p>
          </div>

          {/* Sculpted 2x2 Architectural Grid */}
          <div className="services-architectural-grid">
            {servicesData.map((svc) => (
              <div key={svc.slug} className="service-sculpted-card">
                {/* Architectural Watermark Numeral */}
                <div className="service-sculpted-num" aria-hidden="true">{svc.num}</div>

                <div className="service-sculpted-inner">
                  {/* Top Meta Bar */}
                  <div className="service-sculpted-top">
                    <span className="service-sculpted-kicker">{svc.kicker}</span>
                    <span className="service-sculpted-stat">{svc.statPill}</span>
                  </div>

                  {/* Cinematic Visual Frame */}
                  <div className="service-sculpted-media">
                    <img src={svc.image} alt={svc.title} loading="lazy" decoding="async" />
                    <span className="service-sculpted-badge">{svc.badge}</span>
                  </div>

                  {/* Content & Typography */}
                  <div className="service-sculpted-body">
                    <h3 className="service-sculpted-title">{svc.title}</h3>
                    <p className="service-sculpted-summary">{svc.summary}</p>

                    {/* Clean Horizontal Feature Chips */}
                    <div className="service-sculpted-chips">
                      {svc.chips.map((chip, idx) => (
                        <span key={idx} className="service-sculpted-chip">
                          <span className="chip-dot"></span>
                          {chip}
                        </span>
                      ))}
                    </div>

                    {/* Interactive Action Link */}
                    <Link href={`/services/${svc.slug}`} className="service-sculpted-action">
                      <span>Explore {svc.title}</span>
                      <span className="action-arrow-bubble" aria-hidden="true">
                        <i className="fa-solid fa-arrow-right" />
                      </span>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================================
          FAQ ACCORDION (STREAMLINED & SPACIOUS)
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
              <p style={{ color: '#c5c5d8', fontSize: '15.5px', lineHeight: 1.75, marginBottom: '28px' }}>
                Clear answers on pricing, integrations, ownership, and timelines. We are always available to discuss your specific requirements.
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

      {/* Conversion Banner */}
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
              Let’s Build Something Remarkable
            </h2>
            <p style={{ color: '#c5c5d8', fontSize: '16.5px', lineHeight: 1.7, marginBottom: '24px' }}>
              Share your project vision. We’ll review your goals and provide a tailored plan within 24 hours.
            </p>
            <div className="d-flex justify-content-center gap-3 flex-wrap">
              <Link href="/contact" className="theme-btn-one hero-cta-pill">
                <span className="btn-label">Request Free Proposal</span>
                <span className="btn-arrow-circle">
                  <svg width="12" height="12" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1.5 12.5L12.5 1.5H3.5M12.5 1.5V10.5" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </span>
              </Link>
              <Link href="/projects" className="theme-btn-three hero-cta-pill">
                <span>View Recent Work</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
