'use client';

import React from 'react';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import PageTitle from '@/components/PageTitle';

const projectDatabase = {
  'lankapay-global-gateway': {
    title: 'LankaPay Global Gateway & Online Checkout',
    kicker: 'PAYMENT GATEWAY SUCCESS STORY',
    client: 'LankaPay Financial Network',
    industry: 'Financial Technology / Online Card Payments',
    timeline: 'Completed in 4 Weeks',
    location: 'Colombo, Sri Lanka',
    image: '/images/project1-1.webp',
    challenge:
      'LankaPay wanted to make paying online in Sri Lanka simple, fast, and secure by unifying PayHere, Genie, and direct bank card payments into one smooth 1-click mobile checkout experience.',
    solution:
      'Inversify designed and built an ultra-fast, mobile-friendly payment checkout with instant SMS payment receipts, automated bank reconciliation, and bank-grade card encryption.',
    results: [
      { metric: '+340%', label: 'Mobile Order Growth' },
      { metric: 'Instant', label: 'Card Payment Processing' },
      { metric: '100%', label: 'Safe & Encrypted' },
      { metric: '0.4s', label: 'Instant Page Speed' },
    ],
    techStack: ['PayHere Card Payments', 'Instant SMS Confirmations', 'Mobile Optimized', 'Bank-Grade Security'],
    gallery: ['/images/project1-1.webp', '/images/project1-2.webp', '/images/project1-3.webp'],
    milestones: [
      'Designed a clean, 1-click mobile payment checkout modal',
      'Connected PayHere, Genie, and Commercial Bank IPG card processing',
      'Built automated daily settlement reports for business owners',
      'Configured instant SMS and email transaction receipts',
    ],
    nextSlug: 'ceylon-luxe-organics',
    nextTitle: 'Ceylon Luxe Organics Online Storefront',
  },
  'ceylon-luxe-organics': {
    title: 'Ceylon Luxe Organics Online Storefront',
    kicker: 'E-COMMERCE SUCCESS STORY',
    client: 'Ceylon Luxe Botanicals Ltd',
    industry: 'Organic Wellness & Global E-Commerce',
    timeline: 'Completed in 3 Weeks',
    location: 'Colombo / London',
    image: '/images/project1-2.webp',
    challenge:
      'Ceylon Luxe needed a luxury online store that could accept card payments locally in Sri Lanka and internationally, calculate DHL shipping rates automatically, and load instantly on mobile phones.',
    solution:
      'We built a high-converting online shopping platform with seamless PayHere card checkout, automatic currency switching (LKR / USD), and an easy-to-use product manager for their team.',
    results: [
      { metric: '+220%', label: 'International Online Sales' },
      { metric: '100/100', label: 'Google Speed Score' },
      { metric: '1-Click', label: 'Easy Mobile Buying' },
      { metric: 'Automated', label: 'DHL Shipping Rates' },
    ],
    techStack: ['Online Store', 'PayHere Card IPG', 'Global Shipping Sync', 'Mobile First'],
    gallery: ['/images/project1-2.webp', '/images/project1-1.webp', '/images/project1-4.webp'],
    milestones: [
      'Bespoke luxury product catalog with high-resolution image zoom',
      'Automatic DHL Express global shipping rate calculator',
      'PayHere and international card payment integration',
      'Sub-second instant mobile loading speed across all countries',
    ],
    nextSlug: 'vertex-cloud-erp',
    nextTitle: 'Vertex Logistics Business Management Portal',
  },
  'vertex-cloud-erp': {
    title: 'Vertex Logistics Business Management Portal',
    kicker: 'BUSINESS AUTOMATION SUCCESS STORY',
    client: 'Vertex Logistics Global',
    industry: 'Logistics & Supply Chain Management',
    timeline: 'Completed in 6 Weeks',
    location: 'Colombo / Singapore',
    image: '/images/project1-3.webp',
    challenge:
      'Managing inventory across multiple warehouses using spreadsheets was causing manual errors, lost tracking numbers, and hours of wasted administrative time.',
    solution:
      'Inversify built a custom web portal that lets staff manage stock, track dispatches, and generate automated PDF invoices and reports in real time from any laptop or phone.',
    results: [
      { metric: '20+ Hrs', label: 'Saved Per Week in Admin Time' },
      { metric: 'Zero', label: 'Manual Paperwork Errors' },
      { metric: '12', label: 'Warehouses Synced in Real Time' },
      { metric: '100%', label: 'Secure Cloud Access' },
    ],
    techStack: ['Custom Portal', 'Live Inventory Tracking', 'Automated Invoicing', 'Cloud Database'],
    gallery: ['/images/project1-3.webp', '/images/project2-1.webp', '/images/project2-3.webp'],
    milestones: [
      'Real-time inventory tracking across 12 warehouse locations',
      'Staff permissions and secure login system',
      'Automated invoice and packing slip PDF generator',
      'Automated daily cloud backups and security shielding',
    ],
    nextSlug: 'serendib-luxury-hospitality',
    nextTitle: 'Serendib Luxury Resorts & Villas',
  },
  'serendib-luxury-hospitality': {
    title: 'Serendib Luxury Resorts & Villas',
    kicker: 'HOSPITALITY SUCCESS STORY',
    client: 'Serendib Hospitality Group',
    industry: 'Boutique Luxury Resorts',
    timeline: 'Completed in 3 Weeks',
    location: 'Galle / Colombo, Sri Lanka',
    image: '/images/project1-4.webp',
    challenge:
      'The resort was paying heavy commissions to third-party travel booking platforms, while their old website failed to show the true luxury of their villas.',
    solution:
      'We designed an immersive luxury website with direct reservation calendars, PayHere card deposits, photo tours, and zero commission fees paid to middleman platforms.',
    results: [
      { metric: '+280%', label: 'Direct Online Bookings' },
      { metric: '0%', label: 'Third-Party Commission Fees' },
      { metric: 'Instant', label: 'WhatsApp Reservation Confirmations' },
      { metric: '4.95/5', label: 'Guest Booking Satisfaction' },
    ],
    techStack: ['Direct Reservations', 'Villa Photo Tours', 'PayHere Card Payments', 'Instant WhatsApp Alerts'],
    gallery: ['/images/project1-4.webp', '/images/project1-2.webp', '/images/project1-1.webp'],
    milestones: [
      'Direct online booking calendar with real-time room availability',
      'Automatic customer WhatsApp and email booking confirmation',
      'High-resolution villa photography gallery with mobile speed boost',
      'Multi-language English and German support',
    ],
    nextSlug: 'ui-ux-design-approach',
    nextTitle: 'Apex Global Brand & Web System',
  },
  'ui-ux-design-approach': {
    title: 'Apex Global Brand & Web System',
    kicker: 'BRAND DESIGN SUCCESS STORY',
    client: 'Apex Enterprise Software',
    industry: 'Enterprise Software & Digital Products',
    timeline: 'Completed in 3 Weeks',
    location: 'Colombo, Sri Lanka',
    image: '/images/project2-1.webp',
    challenge:
      'Inconsistent visual styles and logos across 4 corporate software products confused customers and made the company look fragmented.',
    solution:
      'Inversify designed a unified brand style guide, custom vector logos, and an interactive design system that gives all their products a modern, cohesive look.',
    results: [
      { metric: '100%', label: 'Brand Consistency' },
      { metric: '4', label: 'Products Unified' },
      { metric: 'Tested', label: 'On All Screen Sizes' },
      { metric: 'Figma', label: 'Clickable Prototypes Handed Over' },
    ],
    techStack: ['Custom Vector Logo', 'Brand Style Guide', 'Figma Clickable UI', 'Modern Aesthetics'],
    gallery: ['/images/project2-1.webp', '/images/project1-3.webp', '/images/project2-3.webp'],
    milestones: [
      'Unified vector logo suite and color palette creation',
      'Complete corporate brand guideline book',
      'Interactive Figma design system testable on smartphones',
      'Clear developer-ready asset export kits',
    ],
    nextSlug: 'future-ready-solutions',
    nextTitle: 'Aura Analytics Real-Time Sales Dashboard',
  },
  'future-ready-solutions': {
    title: 'Aura Analytics Real-Time Sales Dashboard',
    kicker: 'ANALYTICS SUCCESS STORY',
    client: 'Aura Intelligence Labs',
    industry: 'Customer Analytics & Software',
    timeline: 'Completed in 4 Weeks',
    location: 'Colombo / San Francisco',
    image: '/images/project2-3.webp',
    challenge:
      'Business owners needed a clean, simple dashboard to see their online sales, customer conversion funnels, and revenue trends in real time.',
    solution:
      'We built an easy-to-read analytics dashboard with live charts, sales alerts, and clear business metrics that anyone on the team can understand at a glance.',
    results: [
      { metric: 'Real-Time', label: 'Live Sales Tracking' },
      { metric: 'Instant', label: 'Revenue Trend Alerts' },
      { metric: 'Clean', label: 'Easy-to-Read Charts' },
      { metric: '100%', label: 'Mobile Accessible' },
    ],
    techStack: ['Sales Dashboard', 'Instant Alerts', 'Live Charts', 'Secure Cloud Data'],
    gallery: ['/images/project2-3.webp', '/images/project1-3.webp', '/images/project2-1.webp'],
    milestones: [
      'Real-time sales chart canvas showing live revenue streams',
      'Automatic WhatsApp and email threshold alerts for sales milestones',
      'Clean dark-mode dashboard interface designed for easy readability',
      'Secure login with role-based access for business executives',
    ],
    nextSlug: 'lankapay-global-gateway',
    nextTitle: 'LankaPay Global Gateway & Online Checkout',
  },
};

export default function ProjectDetailsPage({ params }) {
  const routeParams = params && typeof params.then === 'function' ? React.use(params) : params;
  const slug = routeParams?.slug || 'lankapay-global-gateway';
  const project = projectDatabase[slug] || projectDatabase['lankapay-global-gateway'];

  return (
    <main className="project-detail-root">
      <Header />
      <PageTitle
        tag={project.kicker}
        title={project.title}
        description={`Client case study and project results for ${project.client}.`}
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'Portfolio', href: '/projects' },
          { label: project.title },
        ]}
      />

      <article className="project-case-study-section pt-90 pb-120">
        <div className="container">
          {/* Executive Metadata Bar */}
          <div className="case-meta-bar p-4 p-md-5 rounded-4 mb-5">
            <div className="row g-4">
              <div className="col-6 col-lg-3">
                <span className="case-meta-label text-cyan d-block mb-1">CLIENT</span>
                <span className="case-meta-val text-white fw-bold" style={{ fontSize: '15px' }}>{project.client}</span>
              </div>
              <div className="col-6 col-lg-3">
                <span className="case-meta-label text-cyan d-block mb-1">INDUSTRY</span>
                <span className="case-meta-val text-white fw-bold" style={{ fontSize: '15px' }}>{project.industry}</span>
              </div>
              <div className="col-6 col-lg-3">
                <span className="case-meta-label text-cyan d-block mb-1">PROJECT TIMELINE</span>
                <span className="case-meta-val text-white fw-bold" style={{ fontSize: '15px' }}>{project.timeline}</span>
              </div>
              <div className="col-6 col-lg-3">
                <span className="case-meta-label text-cyan d-block mb-1">LOCATION</span>
                <span className="case-meta-val text-white fw-bold" style={{ fontSize: '15px' }}>{project.location}</span>
              </div>
            </div>
          </div>

          {/* Hero Image Showcase with Generous Spacing */}
          <div className="case-hero-image-frame rounded-4 overflow-hidden mb-5">
            <img
              src={project.image}
              alt={project.title}
              className="w-100 object-fit-cover"
              style={{ maxHeight: '480px', display: 'block' }}
            />
          </div>

          {/* Key Metrics Strip */}
          <div className="case-results-grid row g-4 mb-5">
            {project.results.map((res, idx) => (
              <div key={idx} className="col-6 col-lg-3">
                <div className="result-metric-card p-4 rounded-4 text-center h-100">
                  <div className="result-number text-cyan mb-2" style={{ fontSize: 'clamp(2rem, 3vw, 2.6rem)', fontWeight: 800 }}>
                    {res.metric}
                  </div>
                  <div className="result-label text-white-50" style={{ fontSize: '13.5px', fontWeight: 600 }}>
                    {res.label}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Challenge & Solution Detailed Narrative */}
          <div className="row g-5 my-5">
            <div className="col-lg-6">
              <div className="case-narrative-card p-4 p-md-5 rounded-4 h-100">
                <div className="badge-status-pill mb-3">
                  <span className="beacon-dot"></span>
                  <span>The Challenge</span>
                </div>
                <h3 className="text-white mb-3" style={{ fontSize: '22px', fontWeight: 700 }}>
                  What the Client Needed
                </h3>
                <p className="text-secondary mb-0" style={{ fontSize: '15.5px', lineHeight: 1.8 }}>
                  {project.challenge}
                </p>
              </div>
            </div>

            <div className="col-lg-6">
              <div className="case-narrative-card p-4 p-md-5 rounded-4 h-100" style={{ borderColor: 'rgba(118, 246, 245, 0.3)' }}>
                <div className="badge-status-pill mb-3">
                  <span className="beacon-dot"></span>
                  <span>The Inversify Solution</span>
                </div>
                <h3 className="text-white mb-3" style={{ fontSize: '22px', fontWeight: 700 }}>
                  What We Delivered
                </h3>
                <p className="text-white mb-0" style={{ fontSize: '15.5px', lineHeight: 1.8, fontWeight: 500 }}>
                  {project.solution}
                </p>
              </div>
            </div>
          </div>

          {/* Visual Gallery Proof */}
          <div className="case-gallery-section my-5">
            <h3 className="text-white mb-4" style={{ fontSize: '22px', fontWeight: 700 }}>
              Project Showcase Highlights
            </h3>
            <div className="row g-4">
              {project.gallery.map((img, i) => (
                <div key={i} className="col-md-4">
                  <div className="gallery-img-wrap rounded-3 overflow-hidden">
                    <img
                      src={img}
                      alt={`Project Screenshot ${i + 1}`}
                      className="w-100 object-fit-cover hover-zoom"
                      style={{ height: '240px', display: 'block' }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Milestones & Consultation Box */}
          <div className="row g-5 my-5 project-delivery-block">
            <div className="col-lg-7">
              <h3 className="text-white mb-3" style={{ fontSize: '22px', fontWeight: 700 }}>
                What Was Delivered in This Project
              </h3>
              <div className="milestones-list">
                {project.milestones.map((m, idx) => (
                  <div key={idx} className="milestone-item-row d-flex align-items-center gap-3 p-3 rounded-3 mb-2">
                    <i className="fa-solid fa-circle-check text-cyan" style={{ fontSize: '16px' }}></i>
                    <span className="text-white" style={{ fontSize: '15px' }}>{m}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="col-lg-5">
              <div className="project-inquiry-box p-4 p-md-5 rounded-4 text-center">
                <h4 className="text-white mb-2" style={{ fontSize: '20px', fontWeight: 700 }}>
                  Want Similar Results For Your Business?
                </h4>
                <p className="text-secondary mb-4" style={{ fontSize: '14.5px', lineHeight: 1.6 }}>
                  Contact us today for a free project consultation and cost estimate.
                </p>
                <Link href="/contact" className="theme-btn-one hero-cta-pill w-100 justify-content-center mb-3">
                  <span className="btn-label">Get A Free Project Quote</span>
                </Link>
                <a
                  href="https://wa.me/94771234567?text=Hi%20Inversify,%20I%20saw%20your%20recent%20work%20and%20would%20like%20to%20get%20a%20quote."
                  target="_blank"
                  rel="noreferrer"
                  className="whatsapp-direct-btn w-100 d-flex align-items-center justify-content-center gap-2 p-3 rounded-3"
                >
                  <i className="fa-brands fa-whatsapp" style={{ fontSize: '18px' }}></i>
                  <span>Chat on WhatsApp</span>
                </a>
              </div>
            </div>
          </div>

          {/* Bottom Project Navigation */}
          <div className="case-bottom-nav pt-5 mt-5 d-flex justify-content-between align-items-center flex-wrap gap-3 border-top border-secondary-subtle">
            <Link href="/projects" className="theme-btn-three hero-cta-pill">
              <i className="fa-solid fa-arrow-left me-2"></i> View All Projects
            </Link>

            {project.nextSlug && (
              <Link href={`/projects/${project.nextSlug}`} className="next-case-link text-white d-flex align-items-center gap-2">
                <span className="text-secondary" style={{ fontSize: '13px' }}>NEXT SUCCESS STORY:</span>
                <span className="fw-bold hover-cyan">{project.nextTitle} &rarr;</span>
              </Link>
            )}
          </div>
        </div>
      </article>

      <Footer />
    </main>
  );
}
