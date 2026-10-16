'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import PageTitle from '@/components/PageTitle';

export default function ServicesPage() {
  const [activeFilter, setActiveFilter] = useState('all');
  const [openFaq, setOpenFaq] = useState(0);

  // Interactive Project Cost Estimator state
  const [selectedType, setSelectedType] = useState('ecommerce');
  const [selectedTimeline, setSelectedTimeline] = useState('normal');
  const [selectedAddons, setSelectedAddons] = useState(['seo', 'payhere', 'sms']);

  const toggleAddon = (addon) => {
    if (selectedAddons.includes(addon)) {
      setSelectedAddons(selectedAddons.filter((a) => a !== addon));
    } else {
      setSelectedAddons([...selectedAddons, addon]);
    }
  };

  const calculateEstimate = () => {
    let base = 1200;
    if (selectedType === 'ecommerce') base = 2200;
    if (selectedType === 'portal') base = 3500;
    if (selectedType === 'branding') base = 900;
    if (selectedType === 'seo') base = 800;

    let addonTotal = selectedAddons.length * 350;
    let multiplier = selectedTimeline === 'urgent' ? 1.25 : 1.0;

    return Math.round((base + addonTotal) * multiplier);
  };

  const filterTabs = [
    { id: 'all', label: 'All' },
    { id: 'web', label: 'Websites' },
    { id: 'ecommerce', label: 'E-Commerce & PayHere' },
    { id: 'uiux', label: 'Digital Products & UI/UX' },
    { id: 'portal', label: 'Cloud Portals & ERP' },
    { id: 'branding', label: 'Branding & Identity' },
  ];

  const servicesData = [
    {
      num: '01',
      slug: 'ecommerce-payhere',
      category: 'ecommerce',
      discipline: 'E-Commerce & Online Payments',
      summary: 'A thoughtful storefront, streamlined checkout, and PayHere built into the path to purchase.',
      badge: 'Completed Work',
      title: 'Headless E-Commerce & Sri Lankan PayHere Integration',
      image: '/images/service4-1.webp',
    },
    {
      num: '02',
      slug: 'web-development',
      category: 'web',
      discipline: 'Website Project',
      summary: 'Fast, purpose-built websites with a clear story and a confident route to action.',
      badge: 'Core Flagship',
      title: 'Custom Next.js 16 Web Architecture & Design',
      image: '/images/service-details.webp',
    },
    {
      num: '03',
      slug: 'ui-ux-design',
      category: 'uiux',
      discipline: 'Digital Product / UI/UX',
      summary: 'Product flows and flexible design systems that help teams move with less friction.',
      badge: 'Figma Prototype',
      title: 'Human-Centered UI/UX & Scalable Design Systems',
      image: '/images/service3-1.webp',
    },
    {
      num: '04',
      slug: 'cloud-apps',
      category: 'portal',
      discipline: 'Cloud SaaS / In Development',
      summary: 'Purpose-built tools that simplify the work happening behind your business.',
      badge: 'Enterprise Software',
      title: 'Custom Cloud Portals, ERP & Workflow Automation',
      image: '/images/service7-1.webp',
    },
    {
      num: '05',
      slug: 'seo-growth',
      category: 'web',
      discipline: 'Search Growth',
      summary: 'Clear site structure and technical foundations that help the right people find you.',
      badge: 'Google Page 1',
      title: 'Google SEO Optimization & Search Traffic Strategy',
      image: '/images/service8-1.webp',
    },
    {
      num: '06',
      slug: 'branding-identity',
      category: 'branding',
      discipline: 'Creative & Identity',
      summary: 'A distinct visual system your customers can recognize across every touchpoint.',
      badge: 'Vector Suite',
      title: 'Brand Strategy, Logo Suites & Digital Identity',
      image: '/images/service5-1.webp',
    },
  ];

  const filteredServices =
    activeFilter === 'all'
      ? servicesData
      : servicesData.filter((s) => s.category === activeFilter);

  const estimatorTotal = calculateEstimate();
  const estimatorService = {
    ecommerce: 'E-Commerce & PayHere',
    website: 'Custom Next.js Website',
    portal: 'Custom Business Software & Portal',
    seo: 'Google SEO & Rankings',
    branding: 'Logo & Brand Identity',
  }[selectedType] || 'Custom Next.js Website';
  const estimatorBudget = estimatorTotal < 1000
    ? 'Under $1,000 (Starter Package)'
    : estimatorTotal <= 3000
      ? '$1,000 - $3,000 (Growth Package)'
      : estimatorTotal <= 10000
        ? '$3,000 - $10,000 (Enterprise Portal)'
        : 'Custom / Flexible Scope';
  const estimatorWhatsAppLink = `https://wa.me/94771234567?text=${encodeURIComponent(`Hi Inversify, I used the estimator and got a planning estimate around $${estimatorTotal} for ${estimatorService}. I'd like to discuss it.`)}`;

  const faqs = [
    {
      q: 'How long will it take to build and launch my website?',
      a: 'Most standard business websites and online stores are completed within 2 to 4 weeks. We work with transparent weekly milestones and give you a live preview link so you can follow progress in real time.',
    },
    {
      q: 'Can customers pay using credit and debit cards in Sri Lanka?',
      a: 'Yes! We are official integration partners for PayHere, Genie, Commercial Bank IPG, Sampath Bank IPG, and Stripe for international USD sales. Customers can pay you easily via Visa, Mastercard, and mobile wallets.',
    },
    {
      q: 'Will I be able to update text, photos, and products myself?',
      a: 'Absolutely. We set up an easy-to-use admin panel where you or your staff can add new products, update prices, change text, and upload photos in seconds with zero coding knowledge.',
    },
    {
      q: 'Do I get 100% ownership of my website and domain?',
      a: 'Yes, 100%. All design files, domain names, website code, and accounts belong entirely to your business with zero hidden lock-ins.',
    },
  ];

  return (
    <main className="services-page-root">
      <Header />
      <PageTitle
        tag="CAPABILITIES / BUILT AROUND YOUR NEXT MOVE"
        title="Digital, done with intent."
        description="Web, commerce, product, and brand work that starts with what your business needs next—not a one-size-fits-all package."
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'Services' },
        ]}
      />
      <section className="index-chapter index-chapter-services" aria-label="Services introduction">
        <div><span className="index-chapter-kicker">02 / HOW WE HELP</span><h2>One studio.<br /><em>More ways forward.</em></h2></div>
        <p>Choose one focused service or bring us the bigger challenge. We’ll help shape the scope, the sequence, and what matters most.</p>
        <a href="#services-index" className="index-chapter-jump">Find your starting point <span aria-hidden="true">↓</span></a>
      </section>

      {/* =========================================================================
          AIK GLOBAL STYLE CLEAN FILTER & 3-COLUMN SHOWCASE GRID
          ========================================================================= */}
      <section id="services-index" className="services-showcase-section pt-90 pb-120">
        <div className="container">
          {/* Subhead Kicker */}
          <div className="aik-hero-subhead">
            Browse verified capabilities by format and discipline.
          </div>

          {/* Pill Filter Bar */}
          <div className="aik-filter-bar" role="group" aria-label="Filter services by discipline">
            {filterTabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveFilter(tab.id)}
                aria-pressed={activeFilter === tab.id}
                className={`aik-filter-pill ${activeFilter === tab.id ? 'active' : ''}`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Counter Strip */}
          <div className="aik-counter-strip" role="status" aria-live="polite">
            <span>{filteredServices.length} CAPABILITIES</span>
            <span className="aik-counter-dot"></span>
          </div>

          {/* Clean 3-Column Visual Grid (AIK Global Style) */}
          <div className="service-index-list">
            {filteredServices.map((svc) => (
              <div key={svc.slug} className="service-index-entry">
                <Link href={`/services/${svc.slug}`} className="service-index-link">
                  <div className="service-index-media">
                    <img src={svc.image} alt={svc.title} loading="lazy" decoding="async" />
                    <span className="service-index-badge">{svc.badge}</span>
                  </div>
                  <div className="service-index-copy">
                    <div className="service-index-heading"><div><span className="service-index-discipline">{svc.discipline}</span><h3>{svc.title}</h3></div><span className="service-index-number">{svc.num}</span></div>
                    <p>{svc.summary}</p>
                    <span className="service-index-link-label">Explore this service <i className="fa-solid fa-arrow-right" aria-hidden="true" /></span>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================================
          INSTANT PROJECT SCOPE & COST ESTIMATOR
          ========================================================================= */}
      <section
        className="estimator-section py-100"
        style={{
          background: 'linear-gradient(180deg, #09061A 0%, #120B30 100%)',
          borderTop: '1px solid rgba(181, 65, 250, 0.2)',
          borderBottom: '1px solid rgba(181, 65, 250, 0.2)',
        }}
      >
        <div className="container">
          <div className="row g-5 align-items-center">
            {/* Left Column: Interactive Switchboard */}
            <div className="col-lg-7">
              <div
                className="p-4 p-md-5 rounded-4"
                style={{
                  background: 'linear-gradient(160deg, rgba(33, 24, 81, 0.6) 0%, rgba(9, 6, 26, 0.9) 100%)',
                  border: '1px solid rgba(181, 65, 250, 0.25)',
                }}
              >
                <div className="badge-status-pill mb-3">
                  <span className="beacon-dot"></span>
                  <span>Instant Project Calculator</span>
                </div>
                <h2 className="text-white mb-3" style={{ fontSize: 'clamp(1.8rem, 3vw, 2.5rem)', fontWeight: 800 }}>
                  Estimate Your Project Cost
                </h2>
                <p style={{ color: '#c5c5d8', fontSize: '15px', marginBottom: '24px' }}>
                  Select your desired capabilities below to see an instant estimated investment range and timeline.
                </p>

                {/* Step 1: Project Type */}
                <div className="mb-4" role="group" aria-label="Choose the project type">
                  <label className="text-white d-block mb-2 font-mono" style={{ fontSize: '15px', fontWeight: 700 }}>
                    1. What are you looking to build?
                  </label>
                  <div className="d-flex flex-wrap gap-2">
                    {[
                      { id: 'ecommerce', label: 'E-Commerce Store & PayHere' },
                      { id: 'website', label: 'Custom Next.js Business Website' },
                      { id: 'portal', label: 'Custom Portal & Cloud Software' },
                      { id: 'seo', label: 'Google SEO & Growth Campaign' },
                      { id: 'branding', label: 'Logo & Brand Identity' },
                    ].map((t) => (
                      <button
                        key={t.id}
                        type="button"
                        onClick={() => setSelectedType(t.id)}
                        aria-pressed={selectedType === t.id}
                        className={`choice-chip-btn ${selectedType === t.id ? 'active' : ''}`}
                      >
                        {t.label}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Step 2: Desired Add-ons */}
                <div className="mb-4" role="group" aria-label="Choose optional project add-ons">
                  <label className="text-white d-block mb-2 font-mono" style={{ fontSize: '15px', fontWeight: 700 }}>
                    2. Add-on features you need:
                  </label>
                  <div className="d-flex flex-wrap gap-2">
                    {[
                      { id: 'payhere', label: '+ Sri Lankan PayHere Card IPG' },
                      { id: 'seo', label: '+ Google Page 1 SEO Schema' },
                      { id: 'sms', label: '+ Instant SMS Order Alerts' },
                      { id: 'multilang', label: '+ Multi-Language Support' },
                      { id: 'portal', label: '+ Customer Login Portal' },
                      { id: 'logo', label: '+ Custom Vector Logo Suite' },
                    ].map((a) => (
                      <button
                        key={a.id}
                        type="button"
                        onClick={() => toggleAddon(a.id)}
                        aria-pressed={selectedAddons.includes(a.id)}
                        className={`choice-chip-btn ${selectedAddons.includes(a.id) ? 'active' : ''}`}
                      >
                        {a.label}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Step 3: Target Timeline */}
                <div role="group" aria-label="Choose a target launch timeline">
                  <label className="text-white d-block mb-2 font-mono" style={{ fontSize: '15px', fontWeight: 700 }}>
                    3. Target launch timeline:
                  </label>
                  <div className="d-flex flex-wrap gap-2">
                    {[
                      { id: 'normal', label: 'Standard (2 to 4 Weeks)' },
                      { id: 'urgent', label: 'Fast-Track / Urgent Delivery' },
                    ].map((time) => (
                      <button
                        key={time.id}
                        type="button"
                        onClick={() => setSelectedTimeline(time.id)}
                        aria-pressed={selectedTimeline === time.id}
                        className={`choice-chip-btn ${selectedTimeline === time.id ? 'active' : ''}`}
                      >
                        {time.label}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: Estimated Result Card */}
            <div className="col-lg-5">
              <div
                className="p-4 p-md-5 rounded-4 text-center position-relative"
                style={{
                  background: 'linear-gradient(160deg, rgba(45, 30, 110, 0.8) 0%, rgba(10, 6, 28, 0.98) 100%)',
                  border: '1.5px solid #76F6F5',
                  boxShadow: '0 24px 60px rgba(0, 0, 0, 0.8), 0 0 35px rgba(118, 246, 245, 0.25)',
                }}
              >
                <span className="text-cyan font-mono d-block mb-2 fw-bold" style={{ fontSize: '12px', letterSpacing: '1px' }}>
                  ESTIMATED INVESTMENT RANGE
                </span>
                <div
                  className="text-white mb-2 font-mono"
                  style={{ fontSize: 'clamp(2.6rem, 4vw, 3.6rem)', fontWeight: 800, lineHeight: 1 }}
                >
                  ${estimatorTotal}
                  <span style={{ fontSize: '16px', color: '#A3A3C8', fontWeight: 400 }}> / project</span>
                </div>
                <p style={{ color: '#E6E6F5', fontSize: '14px', lineHeight: 1.6, marginBottom: '24px', opacity: 0.9 }}>
                  Planning estimate, not a fixed quote. Includes custom design, responsive build, hosting setup, and source-code handover.
                </p>

                <div className="d-flex flex-column gap-3">
                  <Link
                    href={`/contact?service=${encodeURIComponent(estimatorService)}&budget=${encodeURIComponent(estimatorBudget)}&estimate=${estimatorTotal}`}
                    className="theme-btn-one hero-cta-pill w-100 justify-content-center py-3"
                  >
                    <span className="btn-label">Discuss this estimate</span>
                    <span className="btn-arrow-circle">
                      <svg width="13" height="13" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1.5 12.5L12.5 1.5M12.5 1.5H3.5M12.5 1.5V10.5" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </span>
                  </Link>

                  <a
                    href={estimatorWhatsAppLink}
                    target="_blank"
                    rel="noreferrer"
                    className="hero-cta-pill w-100 justify-content-center py-3"
                    style={{
                      background: 'rgba(37, 211, 102, 0.15)',
                      border: '1px solid rgba(37, 211, 102, 0.45)',
                      color: '#25D366',
                      fontWeight: 700,
                    }}
                  >
                    <i className="fa-brands fa-whatsapp me-2" style={{ fontSize: '18px' }}></i>
                    <span>Discuss on WhatsApp</span>
                  </a>
                </div>
              </div>
            </div>
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
                      <path d="M1.5 12.5L12.5 1.5H3.5M12.5 1.5V10.5" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </span>
                </Link>
                <a
                  href="https://wa.me/94771234567?text=Hi%20Inversify,%20I'd%20like%20to%20ask%20a%20question%20about%20your%20services."
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
                    <path d="M1.5 12.5L12.5 1.5M12.5 1.5H3.5M12.5 1.5V10.5" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"/>
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
