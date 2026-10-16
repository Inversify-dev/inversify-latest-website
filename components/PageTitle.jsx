'use client';

import React from 'react';
import Link from 'next/link';

export default function PageTitle({
  title,
  subtitle = 'INVERSIFY DIGITAL',
  tag,
  description,
  ctaLabel,
  ctaHref,
  breadcrumbs,
  breadcrumb,
}) {
  const crumbs = breadcrumbs || [
    { label: 'Home', href: '/' },
    { label: breadcrumb || title },
  ];

  return (
    <section className="inversify-page-hero">
      <div className="page-hero-aurora-bg" aria-hidden="true">
        <div className="aurora-orb aurora-purple" />
        <div className="aurora-orb aurora-cyan" />
        <div className="aurora-orb aurora-indigo" />
        <div className="aurora-mesh-overlay" />
      </div>
      <div className="container">
        <div className="page-hero-content">
          <nav aria-label="Breadcrumb" className="page-hero-breadcrumb-wrap">
            <ol className="breadcrumb-list">
              {crumbs.map((crumb, idx) => {
                const isLast = idx === crumbs.length - 1;
                return (
                  <li key={`${crumb.label}-${idx}`} className={`breadcrumb-item ${isLast ? 'active' : ''}`}>
                    {crumb.href && !isLast ? <Link href={crumb.href} className="breadcrumb-link">{crumb.label}</Link> : <span className="breadcrumb-current">{crumb.label}</span>}
                    {!isLast && <span className="breadcrumb-sep" aria-hidden="true">/</span>}
                  </li>
                );
              })}
            </ol>
          </nav>
          <div className="page-hero-grid">
            <h1 className="page-hero-title">{title}</h1>
            {description && <p className="page-hero-description">{description}</p>}
          </div>
          <div className="page-hero-bottomline">
            <span>{tag || subtitle}</span>
            <span className="page-hero-rule" />
            <span>Colombo&nbsp; · &nbsp;Sri Lanka</span>
          </div>
          {ctaLabel && ctaHref && (
            <div className="page-hero-cta-row">
              <Link href={ctaHref} className="page-hero-cta">
                {ctaLabel}<span aria-hidden="true">↓</span>
              </Link>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
