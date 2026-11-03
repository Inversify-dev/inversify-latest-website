'use client';

import { useState } from 'react';
import Link from 'next/link';

const services = [
  {
    num: '01',
    title: 'Website Design & Development',
    slug: 'web-development',
    category: 'High-Speed Web Platforms',
    tags: ['Custom Design', 'Next.js Speed', 'Search Optimized', 'Mobile First'],
    headline: 'Ultra-fast custom websites built to convert visitors into clients.',
    desc: 'Bespoke digital architecture engineered for instant loading, organic search visibility, and high conversion.',
    image: '/images/project1-1.webp',
    stat: 'Instant',
    statLabel: 'Page Loading Speed',
    points: [
      'Bespoke visual identity tailored for your industry',
      'Sub-second speed with zero vulnerable plugins',
      'High-converting inquiry flows that drive client action',
    ],
  },
  {
    num: '02',
    title: 'E-Commerce & Online Stores',
    slug: 'ecommerce-payhere',
    category: 'Digital Storefronts & Payments',
    tags: ['Online Stores', 'Payment Integrations', 'Instant Checkout', 'Inventory Sync'],
    headline: 'Frictionless storefronts with seamless card & digital checkout.',
    desc: 'High-conversion shopping experiences with secure card gateways, automated WhatsApp receipts, and live inventory sync.',
    image: '/images/service4-1.webp',
    stat: '1-Click',
    statLabel: 'Simple Checkout',
    points: [
      'Card, digital wallet & bank payment gateways',
      'Automated instant WhatsApp & SMS order receipts',
      'Real-time inventory and discount management',
    ],
  },
  {
    num: '03',
    title: 'Custom Software & Systems',
    slug: 'custom-software',
    category: 'Enterprise & Internal Systems',
    tags: ['Bespoke Software', 'Internal Tools', 'Operations Portals', 'Cloud Databases'],
    headline: 'Bespoke portals, internal systems, and operations software.',
    desc: 'Tailor-made dashboards, ERP tools, and tracking portals engineered to eliminate manual bottlenecks and scale.',
    image: '/images/service-systems.jpg',
    stat: '100%',
    statLabel: 'Bespoke Architecture',
    points: [
      'Custom operational dashboards & client portals',
      'Real-time API sync and secure cloud databases',
      'Role-based permissions & bank-grade access',
    ],
  },
  {
    num: '04',
    title: 'AI Automation',
    slug: 'ai-automation',
    category: 'Smart Business Systems',
    tags: ['24/7 AI Assistants', 'Workflow Automation', 'CRM Sync', 'Hands-Free Ops'],
    headline: 'Smart AI workflows and 24/7 customer chat assistants.',
    desc: 'Practical AI systems that qualify leads, answer customer WhatsApp inquiries around the clock, and automate everyday busywork.',
    image: '/images/service7-1.webp',
    stat: '24/7',
    statLabel: 'Customer Support',
    points: [
      '24/7 AI assistants answering inquiries on WhatsApp',
      'Automated lead qualification and CRM updates',
      'Hands-free operations connecting everyday tools',
    ],
  },
];

export default function ServicesSection() {
  const [active, setActive] = useState(0);
  const service = services[active];
  return (
    <section id="services" className="studio-services studio-section">
      <div className="studio-section-topline"><span>02 / WHAT WE DO</span><span>One studio. Four focused advantages.</span></div>
      <div className="studio-section-heading">
        <div><span className="studio-kicker">CAPABILITIES</span><h2>Focused capabilities.<br /><em>Measurable business impact.</em></h2></div>
        <Link href="/services" className="studio-arrow-link">Explore all services <span aria-hidden="true">↗</span></Link>
      </div>
      <div className="studio-capability-layout">
        <div className="studio-capability-list" role="tablist" aria-label="Inversify capabilities">
          {services.map((item, index) => (
            <button key={item.num} id={`capability-tab-${index}`} className={`studio-capability-tab ${active === index ? 'is-active' : ''}`} type="button" role="tab" aria-selected={active === index} aria-controls="capability-panel" onClick={() => setActive(index)}>
              <span className="studio-capability-num">{item.num}</span><span className="studio-capability-title">{item.title}</span><span className="studio-capability-arrow" aria-hidden="true">↗</span>
            </button>
          ))}
          <div className="studio-capability-foot"><span>01-04</span><span>WEBSITES · E-COMMERCE · SOFTWARE SYSTEMS · AI AUTOMATION</span></div>
        </div>
        <div className="studio-capability-panel" id="capability-panel" role="tabpanel" aria-labelledby={`capability-tab-${active}`} key={service.num}>
          <div className="studio-capability-image"><img src={service.image} alt="" loading="lazy" /><span className="studio-capability-image-label">{service.category}</span></div>
          <div className="studio-capability-copy"><div className="studio-capability-tags">{service.tags.map(tag => <span key={tag}>{tag}</span>)}</div><h3>{service.headline}</h3><p>{service.desc}</p>
            <ul>{service.points.map(point => <li key={point}><span aria-hidden="true">↗</span>{point}</li>)}</ul>
            <div className="studio-capability-bottom"><div><strong>{service.stat}</strong><span>{service.statLabel}</span></div><Link href={`/services/${service.slug}`} className="studio-button studio-button-light">Explore capability <span className="studio-button-icon" aria-hidden="true">↗</span></Link></div>
          </div>
        </div>
      </div>
    </section>
  );
}
