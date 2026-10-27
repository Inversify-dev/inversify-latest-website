'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import PageTitle from '@/components/PageTitle';

const serviceDatabase = {
  'web-development': {
    title: 'Website Design & Development',
    kicker: 'FAST, MODERN WEB ARCHITECTURE',
    tagline: 'Custom websites designed to build instant credibility, load in a flash, and turn visitors into real clients.',
    summary: 'We build custom websites that make a memorable first impression. Every site is engineered to load instantly across all smartphones and laptops, look world-class, and help customers discover your business easily through organic search.',
    heroImage: '/images/service-details.webp',
    problemText: 'Slow, cluttered websites with outdated plugins frustrate visitors, drive potential clients to competitors, and cause security headaches.',
    solutionText: 'Inversify builds fast, beautifully designed websites tailored to your business goals, offering instant loading and clear pathways that make contacting you effortless.',
    deliverables: [
      'Bespoke visual design crafted specifically for your brand and industry',
      'Instant sub-second page loading speed with zero lag or delay',
      '100% mobile-friendly layout optimized for iPhones, Androids, tablets, and laptops',
      'Built-in search engine readiness so new customers can discover you naturally',
      'Zero vulnerable plugins or fragile software to worry about',
      'Simple, user-friendly dashboard to update text and photos anytime',
      'Full operational ownership of your live website, custom domain, and brand assets',
    ],
    milestones: [
      { week: 'Step 1', label: 'Strategy, Wireframes & UX Flow', time: 'Days 1–3' },
      { week: 'Step 2', label: 'Bespoke UI Design & Brand Preview', time: 'Week 1–2' },
      { week: 'Step 3', label: 'Engineering & Speed Tuning', time: 'Week 2–3' },
      { week: 'Step 4', label: 'Review, QA & Official Launch', time: 'Week 4' },
    ],
    benefits: ['Instant Loading Speed', 'Mobile Friendly', 'Search Optimized', 'Full Live Deployment'],
    faqs: [
      {
        q: 'Why choose a custom-built website over standard templates?',
        a: 'Custom websites are built cleanly from the ground up without heavy templates or fragile plugins. They load in a fraction of a second, never crash under traffic spikes, and give your brand a distinct, high-end impression that builds immediate trust with customers.',
      },
      {
        q: 'Can my team update text and photos easily after launch?',
        a: 'Yes, absolutely. We connect your website to a clean, intuitive control panel where anyone on your team can edit text, publish news, or update photos in seconds with zero coding required.',
      },
      {
        q: 'How long does it take from kickoff to official launch?',
        a: 'Most standard business websites are completed and launched within 2 to 4 weeks, depending on project complexity and timely client feedback. We work in transparent milestones and provide a live staging link so you can preview progress in real-time.',
      },
      {
        q: 'Who owns the website, domain, and underlying source code?',
        a: 'Your business has complete operational ownership of your live website, custom domain, brand assets, and customer data. In accordance with Inversify terms, proprietary source code and editable/raw design files (AI, PSD, RAW) remain the property of Inversify unless specifically agreed upon in writing as a separate source-file buyout.',
      },
      {
        q: 'What are your payment terms and revision policies?',
        a: 'We require a 50% non-refundable advance payment before commencing work, with the remaining 50% settled prior to final delivery and live handover. Each project includes agreed revisions defined in the project brief. Annual hosting, domains, and maintenance are billed separately on a yearly basis.',
      },
    ],
  },
  'ecommerce-payhere': {
    title: 'E-Commerce & Online Stores',
    kicker: 'SMOOTH CHECKOUT & PAYMENT INTEGRATIONS',
    tagline: 'Intuitive online stores with reliable payment integrations, automated order notifications, and simple inventory management.',
    summary: 'We build modern e-commerce stores designed to give your shoppers a fast, effortless buying experience. Complete with secure payment integrations for local and international cards, instant SMS and WhatsApp order alerts, and an easy control panel to manage your products.',
    heroImage: '/images/service4-1.webp',
    problemText: 'Clunky checkout steps, missing card payment options, and slow mobile loading cause over 70% of shoppers to leave their carts without buying.',
    solutionText: 'We design frictionless 1-click checkout experiences with secure payment integrations, automatic SMS order confirmations, and fast mobile browsing.',
    deliverables: [
      'Reliable payment integrations for local cards, international cards, and digital wallets',
      'Support for global sales with multi-currency card processing',
      'Instant automated customer SMS and WhatsApp order confirmation notifications',
      'Modern product catalog with instant search, category filters, and variations',
      'Simple inventory management, automated stock alerts, and coupon discount engine',
      'Automatic delivery calculation for local dispatch and international couriers',
      'Bank-grade SSL security and encrypted checkout protecting customer data',
    ],
    milestones: [
      { week: 'Step 1', label: 'Store Planning & Payment Setup', time: 'Days 1–3' },
      { week: 'Step 2', label: 'Storefront Design & Product Uploads', time: 'Week 1–2' },
      { week: 'Step 3', label: 'Payment Gateway Testing & Order Alerts', time: 'Week 2–3' },
      { week: 'Step 4', label: 'Live Store Launch & Merchant Training', time: 'Week 4' },
    ],
    benefits: ['Payment Integrations', 'Instant SMS Alerts', '1-Click Checkout', 'Simple Stock Sync'],
    faqs: [
      {
        q: 'Can customers pay using credit and debit cards online?',
        a: 'Yes! We configure direct payment integrations allowing your customers to pay quickly and securely using Visa, Mastercard, and mobile wallets. Settlement happens directly into your business bank account.',
      },
      {
        q: 'Can I sell to customers internationally as well as locally?',
        a: 'Yes. We can set up international card processing alongside your local payment gateway, allowing buyers anywhere in the world to pay smoothly in their local currencies.',
      },
      {
        q: 'Will I receive an immediate alert when someone buys a product?',
        a: 'Yes, both you and your customer receive immediate SMS, WhatsApp, and email alerts the exact moment a payment is confirmed, with the order summary and delivery address.',
      },
      {
        q: 'How easily can I add new products or change prices?',
        a: 'You get a simple, secure store manager where adding new items, updating stock, creating promotional coupon codes, and viewing orders takes just a few clicks.',
      },
    ],
  },
  'ai-automation': {
    title: 'AI Automation',
    kicker: 'RUN YOUR OPERATIONS ON AUTOPILOT',
    tagline: 'Smart AI customer assistants and automated workflows that answer questions 24/7 and save hours every day.',
    summary: 'We set up custom AI automations and smart agent workflows that take care of repetitive daily tasks. From answering customer questions on WhatsApp around the clock to capturing new leads and organizing data automatically—let your business run smoothly without increasing overhead.',
    heroImage: '/images/service7-1.webp',
    problemText: 'Staff spend countless hours answering the same customer questions, copying information between spreadsheets, and missing new leads outside business hours.',
    solutionText: 'We build helpful AI assistants and automated workflows that respond to customer inquiries in seconds, capture contact details, and handle repetitive tasks 24/7.',
    deliverables: [
      '24/7 WhatsApp and website AI customer chat assistants trained on your business information',
      'Instant lead qualification, inquiry response, and appointment scheduling',
      'Automated multi-app workflows connecting WhatsApp, Google Sheets, email, and your CRM',
      'Automates repetitive data entry, inquiry routing, and customer follow-up reminders',
      'Saves 100+ hours of repetitive manual work every month for your team',
      'Bank-grade privacy: company data is kept secure and never used for public training',
    ],
    milestones: [
      { week: 'Step 1', label: 'Workflow Audit & Task Mapping', time: 'Days 1–3' },
      { week: 'Step 2', label: 'AI Assistant Architecture & Knowledge Training', time: 'Week 1–2' },
      { week: 'Step 3', label: 'WhatsApp, CRM & Tool Integration', time: 'Week 2–3' },
      { week: 'Step 4', label: 'Live Deployment, Testing & Staff Handover', time: 'Week 4' },
    ],
    benefits: ['24/7 Customer Support', '100+ Hours Saved Monthly', 'Zero Missed Leads', 'Seamless CRM Sync'],
    faqs: [
      {
        q: 'How does the AI know accurate information about our business?',
        a: 'We train your custom AI assistant specifically on your verified business guides, pricing sheets, product catalogs, and service FAQs. The AI only responds with your approved information and politely hands off to human staff when needed.',
      },
      {
        q: 'Can the AI assist customers directly on WhatsApp?',
        a: 'Yes! We integrate official WhatsApp Business APIs with custom AI assistants to answer inquiries, share pricing or product details, collect lead contact info, and book appointments 24/7.',
      },
      {
        q: 'What business software can you connect the automation to?',
        a: 'We can connect your workflows to Google Sheets, Gmail, HubSpot, Zoho, Notion, Slack, and virtually any other business tool you use daily.',
      },
      {
        q: 'Is our company and customer data kept secure?',
        a: 'Yes, 100%. We use enterprise private endpoints with strict zero-retention policies. Your private company records are never used to train public AI models.',
      },
    ],
  },
};

// Aliases for legacy or alternative service URLs to ensure zero broken links
serviceDatabase['ui-ux-design'] = serviceDatabase['web-development'];
serviceDatabase['branding-identity'] = serviceDatabase['web-development'];
serviceDatabase['seo-growth'] = serviceDatabase['web-development'];
serviceDatabase['cloud-apps'] = serviceDatabase['ai-automation'];

const serviceListNav = [
  { name: 'Website Design & Development', slug: 'web-development' },
  { name: 'E-Commerce & Online Stores', slug: 'ecommerce-payhere' },
  { name: 'AI Automation', slug: 'ai-automation' },
];

export default function ServiceDetailsPage({ params }) {
  const [activeFaq, setActiveFaq] = useState(0);

  const routeParams = params && typeof params.then === 'function' ? React.use(params) : params;
  const slug = routeParams?.slug || 'web-development';
  const service = serviceDatabase[slug] || serviceDatabase['web-development'];

  return (
    <main className="service-detail-root">
      <Header />
      <PageTitle
        tag={service.kicker}
        title={service.title}
        description={service.tagline}
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'Services', href: '/services' },
          { label: service.title },
        ]}
      />

      <section className="service-detail-content-section pt-90 pb-120">
        <div className="container">
          <div className="row g-5">
            {/* Left Sidebar Menu */}
            <div className="col-lg-4">
              <aside className="service-detail-sidebar sticky-top" style={{ top: '100px' }}>
                <div className="sidebar-nav-card p-4 rounded-4 mb-4">
                  <span className="sidebar-kicker-label text-cyan d-block mb-3 fw-bold" style={{ fontSize: '12px', letterSpacing: '1px' }}>
                    ALL INVERSIFY SERVICES
                  </span>
                  <ul className="sidebar-links-list list-unstyled mb-0">
                    {serviceListNav.map((s) => (
                      <li key={s.slug} className="mb-2">
                        <Link
                          href={`/services/${s.slug}`}
                          className={`sidebar-service-link d-flex align-items-center justify-content-between p-3 rounded-3 ${
                            s.slug === slug ? 'active' : ''
                          }`}
                        >
                          <span style={{ fontSize: '14.5px', fontWeight: 600 }}>{s.name}</span>
                          <i className="fa-solid fa-arrow-right" style={{ fontSize: '12px' }}></i>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Consultation Card */}
                <div className="sidebar-cta-card p-4 p-md-5 rounded-4 text-center">
                  <div className="cta-icon-circle mb-3 mx-auto">
                    <i className="fa-solid fa-comments text-cyan" style={{ fontSize: '20px' }}></i>
                  </div>
                  <h4 className="text-white mb-2" style={{ fontSize: '19px', fontWeight: 700 }}>
                    Need This For Your Business?
                  </h4>
                  <p className="text-secondary mb-4" style={{ fontSize: '14px', lineHeight: 1.6 }}>
                    Connect with our team in Colombo for a free cost estimate and custom timeline for your project.
                  </p>
                  <Link
                    href={`/contact?service=${encodeURIComponent(service.title)}`}
                    className="theme-btn-one hero-cta-pill w-100 justify-content-center mb-3"
                  >
                    <span className="btn-label">Get a Free Cost Estimate</span>
                  </Link>
                  <a
                    href="https://wa.me/94704621228?text=Hi%20Inversify,%20I'd%20like%20to%20get%20a%20quote%20for%20a%20website%20project."
                    target="_blank"
                    rel="noreferrer"
                    className="whatsapp-direct-btn w-100 d-flex align-items-center justify-content-center gap-2 p-3 rounded-3"
                  >
                    <i className="fa-brands fa-whatsapp" style={{ fontSize: '18px' }}></i>
                    <span>Chat on WhatsApp</span>
                  </a>
                </div>
              </aside>
            </div>

            {/* Right Main Content */}
            <div className="col-lg-8">
              <article className="service-main-editorial">
                {/* Hero Showcase Graphic */}
                <div className="service-hero-frame rounded-4 overflow-hidden mb-5">
                  <img
                    src={service.heroImage}
                    alt={service.title}
                    className="w-100 object-fit-cover"
                    style={{ maxHeight: '420px', display: 'block' }}
                  />
                </div>

                {/* Executive Summary */}
                <div className="service-editorial-body mb-5">
                  <h2 className="text-white mb-3" style={{ fontSize: 'clamp(1.8rem, 3vw, 2.4rem)', fontWeight: 800 }}>
                    How This Service Helps Your Business Grow
                  </h2>
                  <p className="lead text-white-50 mb-4" style={{ fontSize: '17px', lineHeight: 1.8 }}>
                    {service.summary}
                  </p>

                  {/* Problem vs Solution Split Box */}
                  <div className="row g-4 my-4">
                    <div className="col-md-6">
                      <div className="problem-card p-4 rounded-4 h-100">
                        <span className="label-kicker text-danger-subtle d-block mb-2">THE COMMON PROBLEM:</span>
                        <p className="text-secondary mb-0" style={{ fontSize: '14.5px', lineHeight: 1.7 }}>
                          {service.problemText}
                        </p>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="solution-card p-4 rounded-4 h-100">
                        <span className="label-kicker text-cyan d-block mb-2">HOW INVERSIFY SOLVES IT:</span>
                        <p className="text-white mb-0" style={{ fontSize: '14.5px', lineHeight: 1.7, fontWeight: 500 }}>
                          {service.solutionText}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Benefits Badges */}
                  <div className="tech-stack-showcase mt-5 mb-5">
                    <h3 className="text-white mb-3" style={{ fontSize: '20px', fontWeight: 700 }}>
                      Key Service Highlights
                    </h3>
                    <div className="d-flex flex-wrap gap-2">
                      {service.benefits.map((b, i) => (
                        <span key={i} className="tech-chip-item-large">
                          <i className="fa-solid fa-circle-check text-cyan me-2"></i> {b}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Scope of Deliverables Checklist */}
                  <div className="deliverables-breakdown mt-5 mb-5">
                    <h3 className="text-white mb-3" style={{ fontSize: '20px', fontWeight: 700 }}>
                      What Is Included in This Package:
                    </h3>
                    <div className="row g-3">
                      {service.deliverables.map((item, idx) => (
                        <div key={idx} className="col-12">
                          <div className="deliverable-checklist-row d-flex align-items-center gap-3 p-3 rounded-3">
                            <i className="fa-solid fa-circle-check text-cyan" style={{ fontSize: '16px' }}></i>
                            <span className="text-white" style={{ fontSize: '15px' }}>{item}</span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Delivery Timeline / Milestones */}
                  <div className="delivery-milestones-box mt-5 mb-5">
                    <h3 className="text-white mb-3" style={{ fontSize: '20px', fontWeight: 700 }}>
                      Simple 4-Step Project Roadmap
                    </h3>
                    <div className="row g-3">
                      {service.milestones.map((m, idx) => (
                        <div key={idx} className="col-sm-6 col-lg-3">
                          <div className="milestone-step-card p-3 rounded-3 h-100">
                            <span className="milestone-time text-cyan d-block mb-1">{m.time}</span>
                            <span className="milestone-phase text-white-50 d-block mb-2">{m.week}</span>
                            <h4 className="text-white mb-0" style={{ fontSize: '14px', fontWeight: 600 }}>
                              {m.label}
                            </h4>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* FAQs */}
                  {service.faqs && (
                    <div className="service-faqs mt-5">
                      <h3 className="text-white mb-3" style={{ fontSize: '20px', fontWeight: 700 }}>
                        Frequently Asked Questions
                      </h3>
                      <div className="faq-accordion-container">
                        {service.faqs.map((faq, index) => {
                          const isOpen = activeFaq === index;
                          return (
                            <div key={index} className={`faq-card-item mb-3 ${isOpen ? 'active' : ''}`}>
                              <button
                                className="faq-question-btn w-100 d-flex justify-content-between align-items-center p-4 text-start"
                                onClick={() => setActiveFaq(isOpen ? -1 : index)}
                              >
                                <span className="faq-question-text text-white">{faq.q}</span>
                                <span className="faq-toggle-icon ms-3">
                                  <i className={`fa-solid fa-${isOpen ? 'minus' : 'plus'}`}></i>
                                </span>
                              </button>
                              {isOpen && (
                                <div className="faq-answer-body px-4 pb-4">
                                  <p className="text-secondary mb-0" style={{ fontSize: '15px', lineHeight: 1.75 }}>
                                    {faq.a}
                                  </p>
                                </div>
                              )}
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  )}

                  {/* Bottom Action Footer */}
                  <div className="service-detail-cta-strip mt-5 pt-4 d-flex justify-content-between align-items-center flex-wrap gap-3 border-top border-secondary-subtle">
                    <Link href="/services" className="theme-btn-three hero-cta-pill">
                      <i className="fa-solid fa-arrow-left me-2"></i> View All Services
                    </Link>
                    <Link
                      href={`/contact?service=${encodeURIComponent(service.title)}`}
                      className="theme-btn-one hero-cta-pill"
                    >
                      <span className="btn-label">Get A Free Project Quote</span>
                      <span className="btn-arrow-circle">
                        <svg width="12" height="12" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M1.5 12.5L12.5 1.5M12.5 1.5H3.5M12.5 1.5V10.5" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      </span>
                    </Link>
                  </div>
                </div>
              </article>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
