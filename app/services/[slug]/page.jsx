'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import PageTitle from '@/components/PageTitle';

const serviceDatabase = {
  'web-development': {
    title: 'Custom Web Design & Development',
    kicker: 'MOST POPULAR SERVICE',
    tagline: 'Modern, high-speed websites that look world-class and generate consistent business inquiries.',
    summary: 'We build custom, modern websites designed to impress your visitors from the very first second. Every website we build is 100% mobile-friendly, loads instantly, and includes built-in Google SEO so customers can find your business easily.',
    heroImage: '/images/service-details.webp',
    problemText: 'Slow, outdated, or confusing websites turn customers away to competitors and fail to generate steady leads.',
    solutionText: 'Inversify creates fast, gorgeous, and easy-to-navigate websites that build instant credibility and make it effortless for visitors to contact you or buy from you.',
    deliverables: [
      'Bespoke, premium website design tailored to your brand',
      'Flawless responsive design for iPhones, Androids, Tablets & Desktops',
      'Sub-second instant page loading speed on all mobile networks',
      'Built-in Google Search Console & SEO setup for local and global discovery',
      'User-friendly admin dashboard to easily edit text and images yourself',
      '100% full code, domain, and asset ownership with zero hidden fees',
    ],
    milestones: [
      { week: 'Step 1', label: 'Discovery & Wireframes', time: 'Days 1–3' },
      { week: 'Step 2', label: 'Interactive Design Preview', time: 'Week 1–2' },
      { week: 'Step 3', label: 'Development & Speed Tuning', time: 'Week 2–3' },
      { week: 'Step 4', label: 'Testing, Launch & Handover', time: 'Week 4' },
    ],
    benefits: ['Instant Page Load', 'Mobile & Tablet Ready', 'Google Page 1 SEO', 'Easy Self-Updates'],
    faqs: [
      {
        q: 'How long will it take to build and launch my website?',
        a: 'Most standard business websites are completed and launched within 2 to 4 weeks. We provide a live preview link as we build so you can follow progress in real-time.',
      },
      {
        q: 'Can I easily edit text and add images after launch?',
        a: 'Yes! We configure a simple, user-friendly control panel where you or your staff can update content, photos, and contact info in a few clicks.',
      },
      {
        q: 'Do I get full ownership of my website and domain?',
        a: 'Yes, 100%. You own your domain name, all design assets, and all website files with complete independence.',
      },
    ],
  },
  'ecommerce-payhere': {
    title: 'E-Commerce Stores & PayHere Card Checkout',
    kicker: 'SELL ONLINE 24/7',
    tagline: 'Sell your products online with automatic card payments, SMS receipts, and inventory tracking.',
    summary: 'We build beautiful, high-converting online stores that make selling your products effortless. Fully integrated with official Sri Lankan payment gateways like PayHere, Genie, and Commercial Bank IPG, plus Stripe for international credit card payments.',
    heroImage: '/images/service4-1.webp',
    problemText: 'Complicated checkout processes and lack of local card payment options cause customers to abandon their carts before paying.',
    solutionText: 'We design 1-click checkout experiences with instant card payments, automatic customer SMS notifications, and live order tracking.',
    deliverables: [
      'Complete PayHere, Genie, and Commercial Bank IPG integration',
      'Accept Visa, Mastercard, and international cards seamlessly',
      'Automatic instant SMS & Email order confirmation to customers',
      'Easy product catalog, inventory manager & coupon code system',
      'Automatic shipping calculator for local delivery and worldwide DHL',
      'Bank-grade SSL checkout encryption and fraud protection',
    ],
    milestones: [
      { week: 'Step 1', label: 'Store Planning & Payment Setup', time: 'Days 1–3' },
      { week: 'Step 2', label: 'Storefront Design & Product Uploads', time: 'Week 1–2' },
      { week: 'Step 3', label: 'Gateway Testing & SMS Integration', time: 'Week 2–3' },
      { week: 'Step 4', label: 'Live Store Launch & Training', time: 'Week 4' },
    ],
    benefits: ['PayHere & Card Payments', 'Instant SMS Order Receipts', 'Inventory Sync', '1-Click Checkout'],
    faqs: [
      {
        q: 'Can customers pay using credit and debit cards in Sri Lanka?',
        a: 'Yes! Customers can pay with local and international Visa and Mastercard, Genie, and direct bank transfers via PayHere.',
      },
      {
        q: 'Will I receive an alert when a customer places an order?',
        a: 'Yes, you and your customer receive immediate SMS and email alerts the second a successful payment is made.',
      },
    ],
  },
  'ui-ux-design': {
    title: 'UI/UX Interface & Digital Product Design',
    kicker: 'CLICKABLE PROTOTYPES',
    tagline: 'Clean, user-friendly screens and interactive previews that your customers will love using.',
    summary: 'We transform your product ideas into intuitive, clean digital interfaces. You get full clickable Figma prototypes that you can test on your phone and show to investors or team members before development begins.',
    heroImage: '/images/service3-1.webp',
    problemText: 'Confusing, cluttered interfaces frustrate customers and cause them to stop using your digital product.',
    solutionText: 'We design clear, modern user flows where every button, form, and screen guides users naturally toward completing their goals.',
    deliverables: [
      'Clickable interactive design prototypes testable on mobile & desktop',
      'Complete component design systems with dark and light themes',
      'User journey maps designed for maximum ease of use',
      'Complete Figma design files and developer handoff specs',
    ],
    milestones: [
      { week: 'Step 1', label: 'User Research & Wireframing', time: 'Days 1–4' },
      { week: 'Step 2', label: 'Visual Concepts & Color Systems', time: 'Week 1–2' },
      { week: 'Step 3', label: 'High-Fidelity Screens & Interactions', time: 'Week 2–3' },
      { week: 'Step 4', label: 'Interactive Prototype Handover', time: 'Week 3–4' },
    ],
    benefits: ['Clickable Previews', 'Tested on Phones', 'Modern Aesthetics', 'Clear User Flows'],
    faqs: [
      {
        q: 'Can I test the design prototype on my smartphone?',
        a: 'Yes! We send you an interactive link so you can tap through the app or website on your phone just like a live app.',
      },
    ],
  },
  'branding-identity': {
    title: 'Logo, Branding & Visual Identity',
    kicker: 'STAND OUT FROM THE CROWD',
    tagline: 'Custom vector logo suites and brand style guides that make your business look established and premium.',
    summary: 'We craft memorable visual identities that command respect. From custom vector logos and modern font pairings to full brand guideline books and social media asset kits, we ensure your business looks cohesive everywhere.',
    heroImage: '/images/service5-1.webp',
    problemText: 'Cheap, generic stock logos make modern businesses look unestablished and untrustworthy to high-paying clients.',
    solutionText: 'We develop custom, bespoke brand identity systems that reflect your company\'s true quality and make you unforgettable.',
    deliverables: [
      'Custom vector logo suite (SVG, PDF, high-res transparent PNGs)',
      'Complete Brand Style Guide Book (fonts, exact color codes, usage rules)',
      'Social media profile avatars, covers, and promotional post templates',
      'Business card and corporate letterhead stationery designs',
    ],
    milestones: [
      { week: 'Step 1', label: 'Brand Direction & Concept Moodboards', time: 'Days 1–3' },
      { week: 'Step 2', label: 'Vector Logo Concepts & Revisions', time: 'Week 1–2' },
      { week: 'Step 3', label: 'Color Palette & Typography Styling', time: 'Week 2–3' },
      { week: 'Step 4', label: 'Final Master Brand Book Delivery', time: 'Week 3–4' },
    ],
    benefits: ['Custom Vector Logo', 'Brand Style Guide', 'Social Media Kit', 'Print & Digital Ready'],
    faqs: [
      {
        q: 'Can I use the logo files on huge billboard printings and shirts?',
        a: 'Yes! All logo files are created in mathematically scalable vector formats (SVG/PDF) that can be enlarged to any size without losing sharpness.',
      },
    ],
  },
  'cloud-apps': {
    title: 'Custom Web Portals & Business Software',
    kicker: 'STREAMLINE YOUR OPERATIONS',
    tagline: 'Automate manual tasks, manage bookings, and scale your business with custom web software.',
    summary: 'We build custom web portals, customer management systems, and booking software tailored to your exact business workflow. Say goodbye to messy spreadsheets and automate your daily operations.',
    heroImage: '/images/service7-1.webp',
    problemText: 'Managing your operations across WhatsApp messages and spreadsheets causes errors, lost inquiries, and hours of wasted manual work.',
    solutionText: 'We build custom online dashboards that handle bookings, customer records, and team tasks automatically in one secure place.',
    deliverables: [
      'Tailor-made customer and employee login portals',
      'Automated appointment, reservation, and booking workflows',
      'Secure cloud database with automated daily backups',
      '24/7 uptime monitoring and priority technical support',
    ],
    milestones: [
      { week: 'Step 1', label: 'Workflow Mapping & Requirements', time: 'Days 1–4' },
      { week: 'Step 2', label: 'Database Setup & Security Architecture', time: 'Week 1–2' },
      { week: 'Step 3', label: 'Feature Development & Dashboard Testing', time: 'Week 2–4' },
      { week: 'Step 4', label: 'Staff Training & Live Deployment', time: 'Week 4–5' },
    ],
    benefits: ['Custom Workflows', 'Automated Bookings', 'Secure Cloud Data', 'Staff Training Included'],
    faqs: [
      {
        q: 'Can this software integrate with our existing tools?',
        a: 'Yes, we can connect your custom portal with payment gateways, SMS providers, email marketing, and Google Calendar.',
      },
    ],
  },
  'seo-growth': {
    title: 'Google SEO & Search Rankings',
    kicker: 'GET MORE CUSTOMERS ON GOOGLE',
    tagline: 'Get your website to the top of Google so customers find you first when searching for your services.',
    summary: 'We optimize your website to rank at the top of Google search results for valuable commercial keywords in Sri Lanka and worldwide. Attract ready-to-buy customers who are actively searching for your services.',
    heroImage: '/images/service8-1.webp',
    problemText: 'If your business is not ranking on Google page 1, your competitors are getting all the calls and customer inquiries.',
    solutionText: 'We optimize your website speed, content keywords, and Google business setup so your website climbs to the top of search rankings.',
    deliverables: [
      'Comprehensive Google search ranking audit & roadmap',
      'Targeted keyword optimization for Sri Lanka & international markets',
      'Google Search Console and Google Analytics visitor tracking setup',
      'Speed acceleration to ensure Google favors your website',
    ],
    milestones: [
      { week: 'Step 1', label: 'Keyword Research & Competitor Audit', time: 'Days 1–3' },
      { week: 'Step 2', label: 'On-Page SEO & Content Optimization', time: 'Week 1–2' },
      { week: 'Step 3', label: 'Website Speed Boost for Google Ranking', time: 'Week 2–3' },
      { week: 'Step 4', label: 'Google Search Console Verification', time: 'Week 4' },
    ],
    benefits: ['Google Page 1 Ranking', 'More Inbound Calls', 'Speed Boost', 'Visitor Analytics'],
    faqs: [
      {
        q: 'How long does it take to see Google ranking improvements?',
        a: 'Technical SEO fixes and Google indexing typically show measurable ranking improvements in Google Search Console within 2 to 4 weeks.',
      },
    ],
  },
};

const serviceListNav = [
  { name: 'Custom Web Design', slug: 'web-development' },
  { name: 'Online Stores & PayHere', slug: 'ecommerce-payhere' },
  { name: 'UI/UX Interface Design', slug: 'ui-ux-design' },
  { name: 'Logo & Brand Identity', slug: 'branding-identity' },
  { name: 'Custom Business Software', slug: 'cloud-apps' },
  { name: 'Google SEO & Rankings', slug: 'seo-growth' },
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
                    href="https://wa.me/94771234567?text=Hi%20Inversify,%20I'd%20like%20to%20get%20a%20quote%20for%20a%20website%20project."
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
