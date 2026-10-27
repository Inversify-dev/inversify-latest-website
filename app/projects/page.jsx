'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import PageTitle from '@/components/PageTitle';

export default function ProjectsPage() {
  const [activeFilter, setActiveFilter] = useState('all');

  const filterTabs = [
    { id: 'all', label: 'All Projects' },
    { id: 'ecommerce', label: 'E-Commerce & Retail' },
    { id: 'systems', label: 'Systems & Operations' },
    { id: 'creative', label: 'Film & Creative Direction' },
    { id: 'sports', label: 'Sports & Academy' },
    { id: 'b2b', label: 'Enterprise B2B' },
  ];

  const projects = [
    {
      id: 'jerseycloud',
      slug: 'jerseycloud',
      category: 'ecommerce',
      discipline: 'E-Commerce & Retail Store',
      badge: 'Live Platform',
      title: 'Jersey Cloud',
      domain: 'jerseycloud.lk',
      image: '/images/projects/jerseycloud.webp',
    },
    {
      id: 'qaidh',
      slug: 'qaidh',
      category: 'creative',
      discipline: 'Film Direction & Portfolio',
      badge: 'Live Showcase',
      title: 'Qaidh Sinnalebbe',
      domain: 'qaidh.com',
      image: '/images/projects/qaidh.webp',
    },
    {
      id: 'fusion-gear',
      slug: 'fusion-gear',
      category: 'systems',
      discipline: 'Order Management System',
      badge: 'Internal System',
      title: 'Fusion Gear',
      domain: 'Internal System',
      image: '/images/projects/fusiongear-admin.webp',
    },
    {
      id: 'colombo-athletic-football-club',
      slug: 'colombo-athletic-football-club',
      category: 'sports',
      discipline: 'Sports Academy Platform',
      badge: 'Official Academy Partner',
      title: 'Colombo Athletic FC',
      domain: 'colomboathleticfootballclub.com',
      image: '/images/projects/cafc.webp',
    },
    {
      id: 'mint-b2b-solutions',
      slug: 'mint-b2b-solutions',
      category: 'b2b',
      discipline: 'Enterprise B2B Operations',
      badge: 'Live Platform',
      title: 'Mint B2B Solutions',
      domain: 'mintb2bsolutions.com',
      image: '/images/projects/mintb2b.webp',
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
        tag="SELECTED WORK"
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



      <Footer />
    </main>
  );
}
