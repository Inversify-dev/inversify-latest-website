'use client';

import React from 'react';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import PageTitle from '@/components/PageTitle';

const projectDatabase = {
  jerseycloud: {
    title: 'Jersey Cloud -E-Commerce Storefront',
    kicker: 'E-COMMERCE & RETAIL SUCCESS STORY',
    client: 'Jersey Cloud (Pvt) Ltd',
    liveUrl: 'https://jerseycloud.lk',
    domain: 'jerseycloud.lk',
    industry: 'Sports Apparel, Football Kits & Fanwear E-Commerce',
    timeline: 'Completed in 3 Weeks',
    location: 'Colombo, Sri Lanka',
    image: '/images/projects/jerseycloud.webp',
    challenge:
      'Jersey Cloud needed a high-performance, mobile-first e-commerce platform for football fans and athletes across Sri Lanka. Their previous setup lacked automated local card payments, dynamic size customization for player names/numbers, and instant WhatsApp order confirmations.',
    solution:
      'Inversify architected an ultra-fast custom React storefront integrated with the official PayHere payment gateway for seamless Visa and MasterCard checkouts, instant order status SMS and WhatsApp alerts, island-wide delivery tracking, and a high-converting mobile product catalog.',
    results: [
      { metric: '+310%', label: 'Mobile Checkout Conversion' },
      { metric: 'Instant', label: 'PayHere Card & IPG Processing' },
      { metric: '0.38s', label: 'Sub-Second Page Speed' },
      { metric: '100%', label: 'Island-Wide Automated Delivery Dispatch' },
    ],
    techStack: ['Next.js / React', 'PayHere Card IPG', 'Mobile-First UX', 'Automated SMS & WhatsApp Alerts'],
    responsiveMockup: '/images/projects/jerseycloud-responsive.webp',
    gallery: ['/images/projects/jerseycloud-catalog.webp', '/images/projects/jerseycloud-product.webp'],
    milestones: [
      'Custom e-commerce store with high-resolution jersey previews & team filtering',
      'Direct PayHere payment gateway with Visa, MasterCard, and Genie integration',
      'Automated order dispatch and island-wide delivery notification system',
      'Real-time stock management and mobile-optimized customer checkout',
    ],
    nextSlug: 'qaidh',
    nextTitle: 'Qaidh Sinnalebbe -Filmmaker Portfolio',
  },
  qaidh: {
    title: 'Qaidh Sinnalebbe -Filmmaker Portfolio',
    kicker: 'CREATIVE DIRECTION SUCCESS STORY',
    client: 'Qaidh Sinnalebbe (Qreate Studios)',
    liveUrl: 'https://qaidh.com',
    domain: 'qaidh.com',
    industry: 'Film Direction, Visual Storytelling & Creative Strategy',
    timeline: 'Completed in 3 Weeks',
    location: 'Colombo, Sri Lanka',
    image: '/images/projects/qaidh.webp',
    challenge:
      'Award-winning filmmaker and director Qaidh Sinnalebbe needed a bold, distinctive portfolio website to showcase his independent films (such as "Somewhere Between"), festival awards, and commercial creative strategy without looking like a generic template.',
    solution:
      'Inversify crafted a dark, atmospheric editorial platform featuring custom typography (Royal Signature & Century Gothic), high-contrast cinematic imagery, embedded festival showcases, and smooth narrative pacing tailored to international producers and festival curators.',
    results: [
      { metric: '100%', label: 'Bespoke Visual Identity' },
      { metric: 'Global', label: 'Festival Curation & Press Visibility' },
      { metric: 'Instant', label: 'High-Res Video & Film Poster Previews' },
      { metric: '5/5', label: 'Creative Direction Score' },
    ],
    techStack: ['Editorial Web Architecture', 'Custom Typography Engine', 'Cinematic Media Gallery', 'Responsive Narrative Layout'],
    responsiveMockup: '/images/projects/qaidh-responsive.webp',
    gallery: ['/images/projects/qaidh-films.webp', '/images/projects/qaidh-feature.webp'],
    milestones: [
      'Deep cinematic dark-mode aesthetic with custom typography pairing',
      'Dedicated independent film showcase for festival releases & short films',
      'Interactive biography, press features, and direct production inquiry channels',
      'Ultra-fast mobile loading for international film festival juries',
    ],
    nextSlug: 'fusion-gear',
    nextTitle: 'Fusion Gear -Order Management & Live Tracking',
  },
  'fusion-gear': {
    title: 'Fusion Gear -Order Management & Live Tracking',
    kicker: 'ORDER MANAGEMENT & TRACKING SYSTEM SUCCESS STORY',
    client: 'Fusion Gear (Pvt) Ltd',
    liveUrl: null,
    domain: 'Internal System',
    industry: 'Sportswear Retail, Order Fulfillment & Live Parcel Tracking',
    timeline: 'Completed in 3 Weeks',
    location: 'Colombo, Sri Lanka',
    image: '/images/projects/fusiongear.webp',
    challenge:
      'Fusion Gear manages high-volume custom jersey orders across overseas manufacturing and domestic dispatch. Previously, updating customers on supplier processing, overseas transit, customs clearance, and courier delivery required manual inquiries, causing operational overhead and communication delays.',
    solution:
      'Inversify engineered a centralised order management solution connecting an administrative operations dashboard with a customer-facing live order tracking portal. Orders are managed seamlessly through the admin dashboard, while customers monitor real-time shipping milestones without contacting support.',
    results: [
      { metric: '-85%', label: 'Manual Status Inquiries' },
      { metric: '100%', label: 'Milestone Progress Visibility' },
      { metric: '3,000+', label: 'Orders Processed & Monitored' },
      { metric: '0.25s', label: 'Sub-Second Portal Lookup Speed' },
    ],
    techStack: ['Tailored System Architecture', 'Real-Time Order Tracking Engine', 'Admin Control Dashboard', 'Automated Waybill Management'],
    responsiveMockup: '/images/projects/fusiongear-responsive.webp',
    gallery: ['/images/projects/fusiongear.webp', '/images/projects/fusiongear-detail.webp'],
    milestones: [
      'Centralised administrative dashboard for managing orders, batches, and waybills in one place',
      'Customer-facing 9-stage tracking timeline (from order receipt to customs and final dispatch)',
      'Real-time status synchronization reflected immediately on the public tracking portal',
      'Streamlined operational workflow eliminating manual customer status messaging',
    ],
    nextSlug: 'colombo-athletic-football-club',
    nextTitle: 'Colombo Athletic FC -AC Milan Academy',
  },
  'colombo-athletic-football-club': {
    title: 'Colombo Athletic FC -AC Milan Academy',
    kicker: 'OFFICIAL AC MILAN PARTNER SUCCESS STORY',
    client: 'Colombo Athletic FC / AC Milan Academy Sri Lanka',
    liveUrl: 'https://colomboathleticfootballclub.com',
    domain: 'colomboathleticfootballclub.com',
    industry: 'Youth Football Academy & Elite Sports Coaching',
    timeline: 'Completed in 4 Weeks',
    location: 'Colombo, Sri Lanka',
    image: '/images/projects/cafc.webp',
    challenge:
      'As the official AC Milan Academy Partner in Sri Lanka, CAFC needed a world-class digital platform to manage youth player registrations (ages 6–17), showcase Milan methodology training programs, and streamline seasonal academy enrollments.',
    solution:
      'Inversify designed and engineered an elite sports platform reflecting the iconic AC Milan Rossoneri brand heritage. Built with modern web architecture, interactive training schedules, live news marquee strips, and a frictionless mobile player registration engine.',
    results: [
      { metric: '+420%', label: 'Academy Enrollment Registrations' },
      { metric: 'Official', label: 'AC Milan Academy Partner' },
      { metric: '1-Click', label: 'WhatsApp Direct Coach & Academy Liaison' },
      { metric: '0.4s', label: 'Sub-Second Page Load Speed' },
    ],
    techStack: ['Next.js App Engine', 'AC Milan Rossoneri Brand System', 'Interactive Enrollment Engine', 'Weekly Training Timetable'],
    responsiveMockup: '/images/projects/cafc-responsive.webp',
    gallery: ['/images/projects/cafc-news.webp', '/images/projects/cafc-portal.webp'],
    milestones: [
      'Brand-aligned visual architecture co-branded with official AC Milan Academy guidelines',
      'Integrated online student registration & camp enrollment flow for ages 6–17',
      'Interactive weekly training timetable and Milan methodology program showcase',
      'Seamless mobile hotline and WhatsApp integration for immediate parent inquiries',
    ],
    nextSlug: 'mint-b2b-solutions',
    nextTitle: 'Mint B2B Solutions -Offshore Operations Hub',
  },
  'mint-b2b-solutions': {
    title: 'Mint B2B Solutions -Offshore Operations Hub',
    kicker: 'ENTERPRISE B2B SUCCESS STORY',
    client: 'Mint Business Solutions Private Limited',
    liveUrl: 'https://mintb2b.solutions',
    domain: 'mintb2bsolutions.com',
    industry: 'Offshore Operations, Paraplanning & Mortgage Processing for Australian Advisers',
    timeline: 'Completed in 4 Weeks',
    location: 'Melbourne, Australia & Colombo, Sri Lanka',
    image: '/images/projects/mintb2b.webp',
    challenge:
      'Australian financial advisory, wealth management, and mortgage practices needed enterprise-grade offshore support with guaranteed data compliance (VDI infrastructure, zero local data storage) and seamless Melbourne-Colombo operational alignment.',
    solution:
      'Inversify engineered a clean, high-credibility corporate platform built with modern typography (Plus Jakarta Sans & Inter), interactive discovery consultation bookings, comprehensive compliance frameworks, and role-based service deep-dives.',
    results: [
      { metric: '+180%', label: 'Qualified Discovery Consultation Requests' },
      { metric: '100%', label: 'Australian Privacy & Security VDI Compliance' },
      { metric: '24/7', label: 'Melbourne Practice Liaison & Operational Uptime' },
      { metric: 'A+', label: 'Enterprise Security & Performance Benchmark' },
    ],
    techStack: ['Next.js Corporate Stack', 'Australian Financial Compliance Architecture', 'Discovery Session Engine', 'Clean Corporate Design System'],
    responsiveMockup: '/images/projects/mintb2b-responsive.webp',
    gallery: ['/images/projects/mintb2b-capabilities.webp'],
    milestones: [
      'High-credibility corporate UI tailored for Australian wealth practices & mortgage brokers',
      'Interactive service matrix for paraplanning, accounting, and loan tracking',
      'Compliance showcase highlighting Virtual Desktop Infrastructure & data privacy standards',
      'Direct discovery session booking engine with Melbourne & Colombo time-zone syncing',
    ],
    nextSlug: 'jerseycloud',
    nextTitle: 'Jersey Cloud -E-Commerce Storefront',
  },
};

// Map legacy and alternate slugs to real project slugs
projectDatabase['lankapay-global-gateway'] = projectDatabase['jerseycloud'];
projectDatabase['ceylon-luxe-organics'] = projectDatabase['jerseycloud'];
projectDatabase['vertex-cloud-erp'] = projectDatabase['mint-b2b-solutions'];
projectDatabase['serendib-luxury-hospitality'] = projectDatabase['colombo-athletic-football-club'];
projectDatabase['ui-ux-design-approach'] = projectDatabase['qaidh'];
projectDatabase['future-ready-solutions'] = projectDatabase['mint-b2b-solutions'];
projectDatabase['high-performance-website'] = projectDatabase['jerseycloud'];
projectDatabase['cafc'] = projectDatabase['colombo-athletic-football-club'];
projectDatabase['mint'] = projectDatabase['mint-b2b-solutions'];
projectDatabase['mintb2b'] = projectDatabase['mint-b2b-solutions'];
projectDatabase['jersey-cloud'] = projectDatabase['jerseycloud'];
projectDatabase['fusiongear'] = projectDatabase['fusion-gear'];
projectDatabase['fusion'] = projectDatabase['fusion-gear'];
projectDatabase['fusion-gear-tracking'] = projectDatabase['fusion-gear'];
projectDatabase['track-fusiongear'] = projectDatabase['fusion-gear'];

export default function ProjectDetailsPage({ params }) {
  const routeParams = params && typeof params.then === 'function' ? React.use(params) : params;
  const slug = routeParams?.slug || 'jerseycloud';
  const project = projectDatabase[slug] || projectDatabase['jerseycloud'];

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
            <div className="row g-4 align-items-center">
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
              <div className="col-6 col-lg-3 d-flex flex-column justify-content-center">
                <span className="case-meta-label text-cyan d-block mb-1">
                  {project.liveUrl ? 'LIVE PLATFORM' : 'DEPLOYMENT'}
                </span>
                {project.liveUrl ? (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="d-inline-flex align-items-center gap-2 text-decoration-none fw-bold text-white hover-cyan"
                    style={{ fontSize: '14.5px' }}
                  >
                    <span>{project.domain}</span>
                    <i className="fa-solid fa-arrow-up-right-from-square text-cyan" style={{ fontSize: '12px' }}></i>
                  </a>
                ) : (
                  <span className="d-inline-flex align-items-center gap-2 text-white fw-bold" style={{ fontSize: '14.5px' }}>
                    <span>{project.domain}</span>
                  </span>
                )}
              </div>
            </div>
          </div>

          {/* Hero Image Showcase */}
          <div className="case-hero-image-frame position-relative">
            <img
              src={project.image}
              alt={project.title}
            />
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noreferrer"
                className="case-live-badge-btn"
              >
                <span>Visit Live Website</span>
                <i className="fa-solid fa-arrow-up-right-from-square"></i>
              </a>
            )}
          </div>

          {/* Key Metrics Strip - 4-col on desktop, 2x2 grid on mobile */}
          <div className="case-results-grid mb-5">
            {project.results.map((res, idx) => (
              <div key={idx} className="case-result-item">
                <div className="result-metric-card">
                  <div className="result-number text-cyan mb-1">
                    {res.metric}
                  </div>
                  <div className="result-label">
                    {res.label}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Multi-Device Responsive Architecture Showcase */}
          {project.responsiveMockup && (
            <div className="case-responsive-showcase">
              <div className="mb-3">
                <div className="badge-status-pill mb-2">
                  <span className="beacon-dot"></span>
                  <span>RESPONSIVE ACROSS ALL SCREENS</span>
                </div>
                <h3 className="text-white mb-1" style={{ fontSize: 'clamp(20px, 2.5vw, 26px)', fontWeight: 700 }}>
                  Flawless Multi-Device Experience
                </h3>
              </div>
              <div className="case-responsive-frame">
                <img
                  src={project.responsiveMockup}
                  alt={`${project.title} - Responsive across desktop, tablet, and mobile`}
                  loading="lazy"
                />
              </div>
            </div>
          )}

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
          {project.gallery && project.gallery.length > 0 && (
            <div className="case-gallery-section">
              <div className="d-flex align-items-center justify-content-between flex-wrap gap-2 mb-3">
                <div>
                  <div className="badge-status-pill mb-2">
                    <span className="beacon-dot"></span>
                    <span>UI & FEATURE SPOTLIGHT</span>
                  </div>
                  <h3 className="text-white mb-0" style={{ fontSize: 'clamp(20px, 2.5vw, 28px)', fontWeight: 700 }}>
                    {project.gallery.length > 1 ? 'Project Showcase Highlights' : 'Project Showcase Highlight'}
                  </h3>
                </div>
                <span className="text-secondary" style={{ fontSize: '13px' }}>
                  {project.gallery.length > 1 ? `${project.gallery.length} Verified Highlights` : 'Verified Platform Showcase'}
                </span>
              </div>
              {project.gallery.length === 1 ? (
                <div className="gallery-single-wrap">
                  <img
                    src={project.gallery[0]}
                    alt={`${project.title} Feature Highlight`}
                    loading="lazy"
                  />
                </div>
              ) : (
                <div className="row">
                  {project.gallery.map((img, i) => (
                    <div key={i} className="col-12 col-md-6">
                      <div className="gallery-img-wrap">
                        <img
                          src={img}
                          alt={`${project.title} Feature Highlight ${i + 1}`}
                          loading="lazy"
                        />
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          )}

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
                  href={`https://wa.me/94704621228?text=${encodeURIComponent(`Hi Inversify, I saw your case study on ${project.title} and would like to get a quote.`)}`}
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
