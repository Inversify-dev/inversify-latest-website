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
    headline: 'Ultra-fast, beautifully designed websites built to turn visitors into genuine clients.',
    desc: 'We design and engineer bespoke websites tailored to your business goals. Every page loads in the blink of an eye, works flawlessly across smartphones and desktops, and is built to help new customers discover your brand organically.',
    image: '/images/project1-1.webp',
    stat: 'Instant',
    statLabel: 'Page Loading Speed',
    points: [
      'Bespoke visual design crafted specifically for your industry',
      'Smooth, instant loading with zero lag or vulnerable plugins',
      'Clear call-to-actions that guide visitors to inquire or get in touch',
    ],
  },
  {
    num: '02',
    title: 'E-Commerce & Online Stores',
    slug: 'ecommerce-payhere',
    category: 'Digital Storefronts & Payments',
    tags: ['Online Stores', 'Payment Integrations', 'Instant Checkout', 'Inventory Sync'],
    headline: 'Effortless online stores with smooth checkout and secure payment integrations.',
    desc: 'We build intuitive shopping experiences that make purchasing products simple and enjoyable. Complete with secure payment integrations for credit/debit cards, automated customer order alerts via SMS and WhatsApp, and simple inventory management.',
    image: '/images/service4-1.webp',
    stat: '1-Click',
    statLabel: 'Simple Checkout',
    points: [
      'Reliable payment integrations for local cards, international payments & digital wallets',
      'Automatic instant SMS & WhatsApp notifications the moment an order is placed',
      'Simple product catalog, inventory tracking, and discount coupon codes',
    ],
  },
  {
    num: '03',
    title: 'AI Automation',
    slug: 'ai-automation',
    category: 'Smart Business Systems',
    tags: ['24/7 AI Assistants', 'Workflow Automation', 'CRM Sync', 'Hands-Free Ops'],
    headline: 'Smart AI workflows and 24/7 customer assistants that save hours every single day.',
    desc: 'We set up practical AI automation systems that handle repetitive operations for you. From answering customer inquiries on WhatsApp around the clock to qualifying leads and organizing data automatically—let your business run smoothly without increasing overhead.',
    image: '/images/service7-1.webp',
    stat: '24/7',
    statLabel: 'Customer Support',
    points: [
      'Helpful AI customer assistants answering inquiries day and night',
      'Automated lead capture, appointment booking, and instant follow-ups',
      'Frees your team from manual tasks by connecting your everyday tools',
    ],
  },
];

export default function ServicesSection() {
  const [active, setActive] = useState(0);
  const service = services[active];
  return (
    <section id="services" className="studio-services studio-section">
      <div className="studio-section-topline"><span>02 / WHAT WE DO</span><span>One studio. Three focused advantages.</span></div>
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
          <div className="studio-capability-foot"><span>01-03</span><span>WEBSITES · E-COMMERCE · AI AUTOMATION</span></div>
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
