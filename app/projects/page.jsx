'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import PageTitle from '@/components/PageTitle';

export default function ProjectsPage() {
  const [activeFilter, setActiveFilter] = useState('all');

  const filterTabs = [
    { id: 'all', label: 'All' },
    { id: 'ecommerce', label: 'E-Commerce & PayHere' },
    { id: 'web', label: 'Websites' },
    { id: 'saas', label: 'Digital Products' },
    { id: 'cloud', label: 'Cloud ERP & Portals' },
    { id: 'branding', label: 'Branding & Identity' },
  ];

  const projects = [
    {
      id: 'lankapay-global-gateway',
      slug: 'lankapay-global-gateway',
      category: 'ecommerce',
      discipline: 'FinTech & Payment Architecture',
      badge: 'Completed Work',
      title: 'LankaPay Global Gateway & Online Card Checkout Engine',
      image: '/images/project1-1.webp',
    },
    {
      id: 'ceylon-luxe-organics',
      slug: 'ceylon-luxe-organics',
      category: 'ecommerce',
      discipline: 'Luxury E-Commerce / Storefront',
      badge: 'Website Project',
      title: 'Ceylon Luxe Organics Direct-to-Consumer Store & PayHere',
      image: '/images/project1-2.webp',
    },
    {
      id: 'vertex-cloud-erp',
      slug: 'vertex-cloud-erp',
      category: 'cloud',
      discipline: 'POS and Inventory Management',
      badge: 'Product Concept / In Development',
      title: 'Vertex Logistics Centralized Cloud Operations ERP',
      image: '/images/project1-3.webp',
    },
    {
      id: 'serendib-luxury-hospitality',
      slug: 'serendib-luxury-hospitality',
      category: 'web',
      discipline: 'Hospitality & Direct Booking',
      badge: 'Completed Work',
      title: 'Serendib Luxury Boutique Resorts & Villa Booking Engine',
      image: '/images/project1-4.webp',
    },
    {
      id: 'ui-ux-design-approach',
      slug: 'ui-ux-design-approach',
      category: 'saas',
      discipline: 'Design System & UI/UX',
      badge: 'Figma Prototype',
      title: 'Apex Global Design System & Clickable Interactive UI',
      image: '/images/project2-1.webp',
    },
    {
      id: 'future-ready-solutions',
      slug: 'future-ready-solutions',
      category: 'saas',
      discipline: 'Analytics & Sales Intelligence',
      badge: 'Live Dashboard',
      title: 'Aura Intelligence Real-Time Cashflow & Order Dashboard',
      image: '/images/project2-3.webp',
    },
  ];

  const filteredProjects =
    activeFilter === 'all'
      ? projects
      : projects.filter((p) => p.category === activeFilter);

  return (
    <main className="projects-page-root">
      <Header />
      <PageTitle
        tag="SELECTED WORK / 2022 — 2026"
        title="Work worth a closer look."
        description="A selection of digital products, commerce experiences, and brand work—made to solve real business problems."
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'Portfolio' },
        ]}
      />

      <section className="index-chapter index-chapter-work" aria-label="Portfolio introduction">
        <div><span className="index-chapter-kicker">01 / THE WORK</span><h2>Good work should <em>move something.</em></h2></div>
        <p>Explore the thinking behind each project. Use the filters to find a discipline, then open a case study for the full story.</p>
        <a href="#work-index" className="index-chapter-jump">Explore selected work <span aria-hidden="true">↓</span></a>
      </section>

      {/* =========================================================================
          AIK GLOBAL STYLE CLEAN FILTER & 3-COLUMN SHOWCASE GRID
          ========================================================================= */}
      <section id="work-index" className="projects-showcase-section pt-90 pb-120">
        <div className="container">
          {/* Subhead Kicker */}
          <div className="aik-hero-subhead">
            Browse the verified work by format and discipline.
          </div>

          {/* Pill Filter Bar */}
          <div className="aik-filter-bar" role="group" aria-label="Filter projects by discipline">
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
            <span>{filteredProjects.length} PROJECTS</span>
            <span className="aik-counter-dot"></span>
          </div>

          {/* Clean 3-Column Visual Grid (AIK Global Style) */}
          <div className="project-jigsaw-grid">
            {filteredProjects.map((proj, index) => (
              <div key={proj.slug} className={`project-jigsaw-cell ${index === 0 ? 'is-featured' : ''}`}>
                <Link href={`/projects/${proj.slug}`} className="project-jigsaw-tile">
                  <div className="project-jigsaw-media">
                    <img src={proj.image} alt={proj.title} loading="lazy" decoding="async" />
                    <span className="aik-card-badge">{proj.badge}</span>
                    <span className="project-jigsaw-open" aria-hidden="true"><i className="fa-solid fa-arrow-up-right-from-square" /></span>
                  </div>
                  <div className="project-jigsaw-caption">
                    <span className="project-jigsaw-discipline">{proj.discipline}</span>
                    <h3>{proj.title}</h3>
                    <span className="project-jigsaw-link-label">Explore case study <i className="fa-solid fa-arrow-up-right-from-square" aria-hidden="true" /></span>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================================
          CONVERSION CTA BANNER
          ========================================================================= */}
      <section
        className="projects-cta-section py-90 cta-banner-spacer"
        style={{
          background: 'linear-gradient(180deg, #09061A 0%, #100B2B 100%)',
          borderTop: '1px solid rgba(181, 65, 250, 0.2)',
        }}
      >
        <div className="container text-center">
          <div className="max-w-700 mx-auto">
            <h2 className="text-white mb-3" style={{ fontSize: 'clamp(2.4rem, 5vw, 4.5rem)', fontWeight: 700 }}>
              What are you ready to make next?
            </h2>
            <p style={{ color: '#c5c5d8', fontSize: '16.5px', lineHeight: 1.7, marginBottom: '24px' }}>
              Bring us a goal, a knotty problem, or a half-formed idea. We’ll help you shape a useful next step.
            </p>
            <div className="d-flex justify-content-center gap-3 flex-wrap">
              <Link href="/contact" className="theme-btn-one hero-cta-pill">
                <span className="btn-label">Start a conversation</span>
                <span className="btn-arrow-circle">
                  <svg width="12" height="12" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1.5 12.5L12.5 1.5M12.5 1.5H3.5M12.5 1.5V10.5" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </span>
              </Link>
              <a
                href="https://wa.me/94771234567?text=Hi%20Inversify,%20I'd%20like%20to%20discuss%20a%20new%20website%20project."
                target="_blank"
                rel="noreferrer"
                className="hero-cta-pill"
                style={{
                  background: 'rgba(37, 211, 102, 0.15)',
                  border: '1px solid rgba(37, 211, 102, 0.45)',
                  color: '#25D366',
                  padding: '12px 24px',
                  fontSize: '14.5px',
                  fontWeight: 700,
                }}
              >
                <i className="fa-brands fa-whatsapp me-2" style={{ fontSize: '18px' }}></i>
                <span>Chat on WhatsApp</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
