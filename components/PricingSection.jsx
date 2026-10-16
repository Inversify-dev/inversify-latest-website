'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import InteractiveSpotlightCard from './InteractiveSpotlightCard';

export default function PricingSection() {
  const [isYearly, setIsYearly] = useState(false);

  const monthlyPlans = [
    {
      name: 'Starter Retainer',
      price: '$390',
      period: '/ month',
      badge: 'Core Maintenance',
      desc: 'Ideal for established businesses needing dedicated engineering hours, speed audits, and continuous cloud monitoring.',
      features: [
        'Technical Discovery & Roadmap Strategy',
        'Up to 15 Dedicated Engineering Hours/Mo',
        '99.99% Cloud Uptime & Error Telemetry',
        'Quarterly SEO Audits & Core Web Vitals Tuning',
        'Direct WhatsApp & Slack Lead Architect Support',
      ],
      cta: 'Choose Starter',
      highlight: false,
    },
    {
      name: 'Pro Growth Engine',
      price: '$790',
      period: '/ month',
      badge: 'Most Popular',
      desc: 'High-velocity bi-weekly feature sprints for brands expanding their e-commerce storefronts and custom web applications.',
      features: [
        'Fullstack Next.js Development Sprints',
        'Up to 40 Dedicated Dev Hours/Mo',
        'PayHere, Genie & Stripe Gateway Tuning',
        '100/100 Core Web Vitals Speed Guarantee',
        'Bi-Weekly Strategic Engineering Review Calls',
        'Zero Vendor Lock-in & Full IP Ownership',
      ],
      cta: 'Choose Pro Growth',
      highlight: true,
    },
    {
      name: 'Enterprise Cloud',
      price: '$1,490',
      period: '/ month',
      badge: 'Dedicated Team',
      desc: 'Full-stack cloud engineering for mission-critical SaaS, multi-tenant databases, and enterprise platforms.',
      features: [
        'Dedicated Senior Lead Software Architect',
        'Continuous Sprint Deliveries & Microservices',
        'AWS & Cloudflare Edge Infrastructure Scaling',
        'Custom Database & API Integrations',
        '24/7 Critical Incident SLA (Sub-1 Hour Response)',
        'Quarterly Security & Penetration Audits',
      ],
      cta: 'Choose Enterprise',
      highlight: false,
    },
  ];

  const projectPlans = [
    {
      name: 'Launchpad Starter',
      price: 'LKR 160k',
      period: 'one-time',
      badge: 'Quick Launch',
      desc: 'Bespoke high-performance Next.js landing or multi-page platform delivered in 2 to 3 weeks.',
      features: [
        'Up to 5 Custom High-Speed Pages',
        'Next.js 16 Server-Side & Static Generation',
        'Mobile-First Responsive Layout Architecture',
        'Google Schema Markup & Technical SEO',
        '30 Days Dedicated Post-Launch Support',
      ],
      cta: 'Start Project',
      highlight: false,
    },
    {
      name: 'Growth Storefront',
      price: 'LKR 340k',
      period: 'one-time',
      badge: 'High Conversion',
      desc: 'Complete high-conversion e-commerce platform with PayHere, Genie, or Stripe payment gateways.',
      features: [
        'Up to 15 Bespoke Pages & Custom Storefront',
        'PayHere, Genie & Commercial Bank IPG Integration',
        'Figma Clickable Prototype & UI Design System',
        'Guaranteed 100/100 Core Web Vitals',
        '60 Days Dedicated SLA Support Warranty',
        'Complete Source Code & Figma Tokens Handover',
      ],
      cta: 'Start Project',
      highlight: true,
    },
    {
      name: 'Enterprise Custom',
      price: 'LKR 680k+',
      period: 'custom scope',
      badge: 'Tailored Scope',
      desc: 'Full-scale cloud SaaS product engineering, custom database architectures, and high-concurrency APIs.',
      features: [
        'Bespoke Cloud Architecture & Microservices',
        'Custom PostgreSQL / Redis Database Schemas',
        'AWS Cloudflare Edge Infrastructure Setup',
        'Enterprise Security, Penetration Testing & IAM',
        '90 Days 24/7 SLA Engineering Support',
        '100% Intellectual Property & Code Ownership',
      ],
      cta: 'Contact Architects',
      highlight: false,
    },
  ];

  const currentPlans = isYearly ? projectPlans : monthlyPlans;

  return (
    <section id="pricing" className="pricing-section py-100 position-relative">
      <div className="container">
        {/* Section Header */}
        <div className="sec-title text-center mb-5">
          <div className="mb-3 d-inline-block">
            <div className="badge-status-pill">
              <span className="beacon-dot"></span>
              <span>Transparent Investment Models</span>
            </div>
          </div>
          <h2 className="title text-reveal-anim">
            Predictable Pricing, <span>Exceptional ROI</span>
          </h2>
          <p className="text mx-auto" style={{ maxWidth: '640px', marginTop: '14px' }}>
            Choose between dedicated monthly agile sprints or fixed-scope milestone deliverables. Every tier includes 100% code ownership.
          </p>

          {/* Toggle Switch */}
          <div className="d-flex justify-content-center mt-4 pt-2">
            <div className="services-filter-pills p-1">
              <button
                type="button"
                className={`filter-pill-btn py-2 px-4 ${!isYearly ? 'active' : ''}`}
                onClick={() => setIsYearly(false)}
              >
                Monthly Agile Retainer
              </button>
              <button
                type="button"
                className={`filter-pill-btn py-2 px-4 ${isYearly ? 'active' : ''}`}
                onClick={() => setIsYearly(true)}
              >
                Fixed-Scope Project Sprints
              </button>
            </div>
          </div>
        </div>

        {/* Pricing Cards Grid */}
        <div className="row g-4 justify-content-center">
          {currentPlans.map((plan, idx) => (
            <div key={idx} className="col-xl-4 col-md-6">
              <InteractiveSpotlightCard
                className={`pricing-card-modern p-4 p-xl-5 h-100 d-flex flex-column justify-content-between rounded-4 ${
                  plan.highlight ? 'pricing-card-highlight' : ''
                }`}
                style={{
                  border: plan.highlight ? '1.5px solid #B541FA' : '1px solid rgba(181, 65, 250, 0.25)',
                  boxShadow: plan.highlight ? '0 20px 50px rgba(181, 65, 250, 0.25)' : '0 12px 35px rgba(0,0,0,0.5)',
                  background: plan.highlight
                    ? 'linear-gradient(160deg, rgba(45, 30, 110, 0.75) 0%, rgba(12, 7, 34, 0.95) 100%)'
                    : 'linear-gradient(160deg, rgba(33, 24, 81, 0.5) 0%, rgba(10, 6, 28, 0.9) 100%)',
                }}
              >
                <div>
                  <div className="d-flex justify-content-between align-items-center mb-3">
                    <span
                      className="font-mono text-uppercase"
                      style={{
                        fontSize: '11px',
                        fontWeight: 700,
                        letterSpacing: '1px',
                        color: plan.highlight ? '#76F6F5' : '#A3A3C8',
                        background: plan.highlight ? 'rgba(118, 246, 245, 0.12)' : 'rgba(255, 255, 255, 0.05)',
                        border: plan.highlight ? '1px solid rgba(118, 246, 245, 0.3)' : '1px solid rgba(255, 255, 255, 0.1)',
                        padding: '4px 12px',
                        borderRadius: '100px',
                      }}
                    >
                      {plan.badge}
                    </span>
                    {plan.highlight && (
                      <span className="beacon-dot"></span>
                    )}
                  </div>

                  <h3 className="text-white mb-2" style={{ fontFamily: 'var(--font-display)', fontSize: '22px', fontWeight: 700 }}>
                    {plan.name}
                  </h3>
                  <p className="text-secondary mb-4" style={{ fontSize: '13.5px', lineHeight: 1.6 }}>
                    {plan.desc}
                  </p>

                  <div className="d-flex align-items-baseline gap-2 mb-4 pb-3" style={{ borderBottom: '1px solid rgba(255, 255, 255, 0.08)' }}>
                    <span className="text-white font-mono" style={{ fontSize: '38px', fontWeight: 800, letterSpacing: '-0.02em' }}>
                      {plan.price}
                    </span>
                    <span className="text-secondary font-mono" style={{ fontSize: '13px' }}>
                      {plan.period}
                    </span>
                  </div>

                  <div className="d-flex flex-column gap-3 mb-4">
                    {plan.features.map((feat, fIdx) => (
                      <div key={fIdx} className="d-flex align-items-start gap-2">
                        <i className="fa-solid fa-circle-check mt-1 text-cyan" style={{ fontSize: '13px', flexShrink: 0 }}></i>
                        <span className="text-light" style={{ fontSize: '13.5px', lineHeight: 1.5 }}>
                          {feat}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-3">
                  <Link
                    href="/contact"
                    className={`hero-cta-pill w-100 justify-content-center ${plan.highlight ? 'btn-primary' : ''}`}
                    style={{
                      padding: '12px 20px',
                      fontSize: '14.5px',
                    }}
                  >
                    <span className="btn-label">{plan.cta}</span>
                    <span className="btn-arrow-circle">
                      <svg width="12" height="12" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1.5 12.5L12.5 1.5M12.5 1.5H3.5M12.5 1.5V10.5" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </span>
                  </Link>
                </div>
              </InteractiveSpotlightCard>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
