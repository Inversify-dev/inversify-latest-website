'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import PageTitle from '@/components/PageTitle';

const serviceDatabase = {
  'web-development': {
    title: 'Website Design & Development',
    kicker: 'FAST, MODERN WEB DESIGN',
    tagline: 'Custom websites designed to build instant credibility, load fast, and turn visitors into real clients.',
    summary: 'We build custom websites that make a memorable first impression. Every site is engineered to load fast across all smartphones and laptops, look world-class, and help customers discover your business easily through Google search.',
    heroImage: '/images/service-details.webp',
    problemText: 'Slow, cluttered websites with outdated plugins frustrate visitors, drive potential clients to competitors, and cause security headaches.',
    solutionText: 'Inversify builds fast, beautifully designed websites tailored to your business goals, offering instant loading and clear pathways that make contacting you effortless.',
    benefits: ['Fast Loading Speed', 'Mobile Friendly', 'Search Optimized', 'Full Live Launch'],
    deliverables: [
      {
        num: '01',
        category: 'Design & Visuals',
        icon: 'fa-palette',
        title: 'Unique Custom Design',
        desc: 'Crafted specifically from scratch for your brand and audience-never pre-made templates or clone themes.',
      },
      {
        num: '02',
        category: 'Speed',
        icon: 'fa-bolt-lightning',
        title: 'Fast Page Loading Speed',
        desc: 'Engineered with clean, modern code for instant page transitions with zero bloat or lag.',
      },
      {
        num: '03',
        category: 'Mobile Experience',
        icon: 'fa-mobile-screen-button',
        title: 'Works on All Phones & Laptops',
        desc: 'Fluid layouts that look sharp and work smoothly across all smartphones, tablets, and computers.',
      },
      {
        num: '04',
        category: 'Search Engine',
        icon: 'fa-magnifying-glass-chart',
        title: 'Ready for Google Search',
        desc: 'Structured so new customers can discover your business easily through Google search.',
      },
      {
        num: '05',
        category: 'Security',
        icon: 'fa-shield-halved',
        title: 'Secure, Reliable Code',
        desc: 'Clean modern code without bloated third-party plugins that break, slow down, or get hacked.',
      },
      {
        num: '06',
        category: 'Launch & Domain',
        icon: 'fa-rocket',
        title: 'Full Domain & Launch Setup',
        desc: 'Complete setup of your custom domain name, secure SSL certificate, and official live deployment.',
      },
    ],
    milestones: [
      {
        step: '01',
        phase: 'Step 1',
        time: 'Planning',
        label: 'Strategy & Page Layout',
        desc: 'Understanding your business goals and mapping out simple, clear page layouts for mobile and desktop.',
        deliverables: [
          'Business goals & customer journey review',
          'Page layout blueprints for mobile & desktop',
          'Clear navigation & inquiry buttons',
        ],
      },
      {
        step: '02',
        phase: 'Step 2',
        time: 'Design',
        label: 'Visual Design & Brand Preview',
        desc: 'Creating your visual style, color palette, fonts, and an interactive design preview.',
        deliverables: [
          'High-quality visual design of your pages',
          'Interactive design preview you can test',
          'Matching brand colors, fonts & graphics',
        ],
      },
      {
        step: '03',
        phase: 'Step 3',
        time: 'Building',
        label: 'Development & Speed Tuning',
        desc: 'Writing clean, high-performance website code with optimized images and fast loading.',
        deliverables: [
          'Clean, modern custom-built website pages',
          'Image optimization & fast page loading',
          'Cross-browser & cross-device testing',
        ],
      },
      {
        step: '04',
        phase: 'Step 4',
        time: 'Launch',
        label: 'Testing, Domain Setup & Launch',
        desc: 'Final quality checks, custom domain connection, SSL security setup, and official live launch.',
        deliverables: [
          'SSL security & custom domain connection',
          'Search engine readiness check',
          'Final testing & official live handover',
        ],
      },
    ],
    faqs: [
      {
        q: 'Why choose a custom-built website over standard templates?',
        a: 'Custom websites are built cleanly from the ground up without heavy templates or fragile plugins. They load in a fraction of a second, never crash under traffic spikes, and give your brand a distinct, high-end impression that builds immediate trust with customers.',
      },
      {
        q: 'What happens after my website is launched?',
        a: 'We make sure your site runs smoothly on your domain with secure SSL protection, fast hosting setup, and provide ongoing support for any adjustments you need.',
      },
      {
        q: 'How long does it take from kickoff to official launch?',
        a: 'Project timelines are agreed during kickoff based on your specific requirements and review speed. We work in clear milestones so you can preview progress in real-time.',
      },
      {
        q: 'Who owns the website and domain?',
        a: 'Your business has complete operational ownership of your live website, custom domain, brand assets, and customer data. In accordance with Inversify terms, proprietary code and raw design files remain with Inversify unless agreed upon in writing.',
      },
      {
        q: 'What are your payment terms and revision policies?',
        a: 'We require a 50% advance payment before commencing work, with the remaining 50% settled prior to final delivery and live handover. Each project includes agreed revisions defined in the project brief.',
      },
    ],
  },
  'ecommerce-solutions': {
    title: 'E-Commerce & Online Stores',
    kicker: 'SMOOTH CHECKOUT & PAYMENT GATEWAY INTEGRATIONS',
    tagline: 'Intuitive online stores with reliable payment gateway integrations, automated order notifications, and simple inventory management.',
    summary: 'We build modern online stores designed to give your shoppers a fast, effortless buying experience. Complete with secure payment gateway integrations for local and international cards, instant order alerts, and an easy way to manage your products and inventory.',
    heroImage: '/images/service4-1.webp',
    problemText: 'Clunky checkout steps, missing card payment options, and slow mobile loading cause shoppers to leave without buying.',
    solutionText: 'We design simple, frictionless checkouts with secure payment gateway integrations, automatic order confirmations, and fast mobile browsing.',
    benefits: ['Payment Gateway Integrations', 'Instant Order Alerts', '1-Click Checkout', 'Easy Stock Management'],
    deliverables: [
      {
        num: '01',
        category: 'Checkout & Payments',
        icon: 'fa-credit-card',
        title: 'Card Payment Processing',
        desc: 'Reliable payment gateway integration for local and international cards with automated bank settlements.',
      },
      {
        num: '02',
        category: 'Global Reach',
        icon: 'fa-globe',
        title: 'Global Sales & Multi-Currency',
        desc: 'Support for international sales allowing buyers anywhere in the world to pay smoothly in their preferred currency.',
      },
      {
        num: '03',
        category: 'Order Alerts',
        icon: 'fa-comments',
        title: 'Instant Order & Customer Alerts',
        desc: 'Automated instant notifications delivered to both you and your customer the exact second a purchase is confirmed.',
      },
      {
        num: '04',
        category: 'Mobile UX',
        icon: 'fa-bag-shopping',
        title: 'Simple 1-Click Mobile Checkout',
        desc: 'Streamlined checkout steps engineered to minimize drop-offs and convert mobile shoppers quickly.',
      },
      {
        num: '05',
        category: 'Stock Control',
        icon: 'fa-boxes-stacked',
        title: 'Easy Inventory & Order Manager',
        desc: 'Simple stock sync, low-stock warnings, and easy promotional discount coupon code creation.',
      },
      {
        num: '06',
        category: 'Security',
        icon: 'fa-lock',
        title: 'Bank-Grade SSL Checkout Security',
        desc: 'End-to-end encrypted transactions protecting customer payment data and merchant credentials.',
      },
    ],
    milestones: [
      {
        step: '01',
        phase: 'Step 1',
        time: 'Setup',
        label: 'Store Planning & Payment Setup',
        desc: 'Setting up your payment gateway connection, product categories, and delivery rates.',
        deliverables: [
          'Payment gateway connection setup',
          'Product categories & catalog setup',
          'Delivery zones & rates setup',
        ],
      },
      {
        step: '02',
        phase: 'Step 2',
        time: 'Design',
        label: 'Storefront Design & Product Uploads',
        desc: 'Designing simple, attractive mobile product pages with clear photos and easy search.',
        deliverables: [
          'Custom storefront design',
          'Product photo galleries and pricing setup',
          'Simple mobile cart and checkout layout',
        ],
      },
      {
        step: '03',
        phase: 'Step 3',
        time: 'Testing',
        label: 'Payment Testing & Order Alerts',
        desc: 'Testing live card transactions and making sure automated order alerts trigger properly.',
        deliverables: [
          'Card payment test transactions',
          'Instant order confirmation alerts',
          'Discount coupon code testing',
        ],
      },
      {
        step: '04',
        phase: 'Step 4',
        time: 'Launch',
        label: 'Store Launch & Handover',
        desc: 'Connecting your domain name, live payment activation, and walking your team through adding products.',
        deliverables: [
          'Live payment gateway activation',
          'Custom domain connection with SSL',
          'Product management walkthrough for your team',
        ],
      },
    ],
    faqs: [
      {
        q: 'Can customers pay using credit and debit cards online?',
        a: 'Yes! We configure direct payment gateway integrations allowing your customers to pay quickly and securely using Visa, Mastercard, and mobile wallets. Settlement happens directly into your business bank account.',
      },
      {
        q: 'Can I sell to customers internationally as well as locally?',
        a: 'Yes. We configure international card processing alongside your local payment gateway, allowing buyers anywhere in the world to pay smoothly in their local currencies.',
      },
      {
        q: 'Will I receive an immediate alert when someone buys a product?',
        a: 'Yes, both you and your customer receive immediate order confirmation and email alerts the exact moment a payment is confirmed, with the order summary and delivery address.',
      },
      {
        q: 'How easily can I add new products or change prices?',
        a: 'You get a simple, secure store manager where adding new items, updating stock, creating promotional coupon codes, and viewing orders takes just a few clicks.',
      },
    ],
  },
  'custom-software': {
    title: 'Custom Software & Systems',
    kicker: 'CUSTOM BUSINESS SOFTWARE & PORTALS',
    tagline: 'Custom business software, operational portals, and internal management tools engineered to solve your operational bottlenecks.',
    summary: 'We build tailor-made software applications, client and employee portals, order management tools, and business platforms built to solve your unique operational bottlenecks. Secure, scalable, and tailored precisely to how your business works.',
    heroImage: '/images/service-systems.webp',
    problemText: 'Off-the-shelf software is expensive, clunky, and forces your business to adapt to rigid templates instead of supporting your actual workflows.',
    solutionText: 'We engineer custom software and internal systems that map precisely to your processes, streamline operations, and scale effortlessly with your team.',
    benefits: ['100% Custom Built', 'Zero Per-User Fees', 'Role-Based Access', 'Seamless Tool Sync'],
    deliverables: [
      {
        num: '01',
        category: 'Operations',
        icon: 'fa-network-wired',
        title: 'Custom Management Portals',
        desc: 'Tailored management dashboards and client portals built to match your exact daily workflow.',
      },
      {
        num: '02',
        category: 'Fulfillment',
        icon: 'fa-dolly',
        title: 'Order & Task Tracking',
        desc: 'Order management, parcel tracking, automated slips, and real-time operational status updates.',
      },
      {
        num: '03',
        category: 'Access Control',
        icon: 'fa-user-shield',
        title: 'Staff Roles & Permissions',
        desc: 'Clear permissions ensuring managers, staff, and external clients only see what is relevant to their role.',
      },
      {
        num: '04',
        category: 'Cloud Storage',
        icon: 'fa-database',
        title: 'Secure Cloud Database',
        desc: 'Fast, secure cloud database architecture built for reliable daily use and data protection.',
      },
      {
        num: '05',
        category: 'Integration',
        icon: 'fa-arrows-rotate',
        title: 'External System Connections',
        desc: 'Secure connections linking your software with your accounting, payment gateways, and courier delivery systems.',
      },
      {
        num: '06',
        category: 'Cost Control',
        icon: 'fa-file-invoice-dollar',
        title: 'Zero Monthly Per-User Fees',
        desc: 'Eliminate expensive recurring seat fees-your company owns and operates the platform with zero per-user overhead.',
      },
    ],
    milestones: [
      {
        step: '01',
        phase: 'Step 1',
        time: 'Planning',
        label: 'Requirements & Workflow Mapping',
        desc: 'Mapping your internal business processes, user roles, and system requirements in plain terms.',
        deliverables: [
          'Clear software requirements summary',
          'System data structure plan',
          'Staff role and permission list',
        ],
      },
      {
        step: '02',
        phase: 'Step 2',
        time: 'Design',
        label: 'Screen Layouts & Database Setup',
        desc: 'Designing interactive screen layouts and setting up secure cloud data storage.',
        deliverables: [
          'Screen layout wireframes',
          'Cloud database setup',
          'Security and login plan',
        ],
      },
      {
        step: '03',
        phase: 'Step 3',
        time: 'Building',
        label: 'Software Development & Connections',
        desc: 'Building the software, creating the user screens, and connecting your business tools.',
        deliverables: [
          'Management screens and core system build',
          'Automated workflows & system connectors',
          'Data import and testing',
        ],
      },
      {
        step: '04',
        phase: 'Step 4',
        time: 'Launch',
        label: 'Testing, Staff Training & Handover',
        desc: 'Full testing, staff training sessions, and officially rolling out the software to your team.',
        deliverables: [
          'Security testing and permission checks',
          'Staff walkthrough and training',
          'Live rollout with zero per-user fees',
        ],
      },
    ],
    faqs: [
      {
        q: 'Why build custom software instead of using standard tools?',
        a: 'Standard software tools charge recurring monthly fees per user that grow expensive quickly, and they force you to fit their rigid templates. A custom system is built 100% around your exact business rules, requires zero per-user seat fees, and belongs to your company.',
      },
      {
        q: 'Can the software connect with our existing tools?',
        a: 'Yes! We build secure connections linking your custom software with accounting tools, payment gateways, spreadsheets, and courier systems.',
      },
      {
        q: 'Who has access to the data, and how secure is it?',
        a: 'Your system is built with secure login, role-based permissions, and encrypted data storage. Different team members only see what their job allows, and all actions are safely logged.',
      },
      {
        q: 'Do you provide maintenance and updates after launch?',
        a: 'Yes, we provide ongoing system monitoring, security updates, data backups, and feature improvements under clear support agreements.',
      },
    ],
  },
  'ai-automation': {
    title: 'AI Automation',
    kicker: 'RUN ROUTINE TASKS ON AUTOPILOT',
    tagline: 'Smart AI customer assistants and automated workflows that answer questions 24/7 and save hours every day.',
    summary: 'We set up custom AI assistants and automated workflows that take care of repetitive daily tasks. From answering customer questions around the clock to capturing new leads and organizing data automatically-let your business run smoothly without increasing staff workload.',
    heroImage: '/images/service7-1.webp',
    problemText: 'Staff spend countless hours answering the same customer questions, copying information between spreadsheets, and missing new leads outside business hours.',
    solutionText: 'We build helpful AI assistants and automated workflows that respond to customer inquiries in seconds, capture contact details, and handle repetitive tasks 24/7.',
    benefits: ['24/7 Customer Support', '100+ Hours Saved Monthly', 'Zero Missed Leads', 'Automatic Record Sync'],
    deliverables: [
      {
        num: '01',
        category: '24/7 Support',
        icon: 'fa-robot',
        title: '24/7 AI Customer Assistant',
        desc: 'Custom AI assistant trained specifically on your company services, pricing, and common customer questions.',
      },
      {
        num: '02',
        category: 'Lead Capture',
        icon: 'fa-user-check',
        title: 'Instant Lead Capture & Alerts',
        desc: 'Instantly captures visitor contact details, qualifies what they need, and books inquiries 24/7.',
      },
      {
        num: '03',
        category: 'Integrations',
        icon: 'fa-diagram-project',
        title: 'Automated Tool Workflows',
        desc: 'Automatic data sync between your communication channels, Google Sheets, Gmail, and CRM systems.',
      },
      {
        num: '04',
        category: 'Efficiency',
        icon: 'fa-clock-rotate-left',
        title: '100+ Hours Saved Every Month',
        desc: 'Eliminates repetitive manual copy-pasting, data entry, and inquiry follow-ups for your staff.',
      },
      {
        num: '05',
        category: 'Customer Care',
        icon: 'fa-handshake-angle',
        title: 'Smart Human Team Handover',
        desc: 'AI handles common questions and smoothly alerts your team when a specialized question comes in.',
      },
      {
        num: '06',
        category: 'Data Privacy',
        icon: 'fa-shield-cat',
        title: 'Strict Data Privacy Protection',
        desc: 'Dedicated private setup with zero public model training-your business records stay 100% confidential.',
      },
    ],
    milestones: [
      {
        step: '01',
        phase: 'Step 1',
        time: 'Audit',
        label: 'Task Audit & Workflow Mapping',
        desc: 'Identifying your most time-consuming customer questions and repetitive daily tasks.',
        deliverables: [
          'Common customer questions review',
          'Communication channel setup review',
          'Target workflow blueprint',
        ],
      },
      {
        step: '02',
        phase: 'Step 2',
        time: 'Training',
        label: 'AI Knowledge Setup & Testing',
        desc: 'Training your AI assistant on your verified business guides, FAQs, and price lists.',
        deliverables: [
          'AI knowledge setup and accurate answers',
          'Strict guardrails to ensure truthful replies',
          'Lead capture and contact collection flow',
        ],
      },
      {
        step: '03',
        phase: 'Step 3',
        time: 'Integration',
        label: 'System & Tool Connections',
        desc: 'Connecting the AI with your customer chat channels, Google Sheets, and team records.',
        deliverables: [
          'Customer chat channel connection',
          'Automatic Google Sheets & CRM record updates',
          'Human team notification for special requests',
        ],
      },
      {
        step: '04',
        phase: 'Step 4',
        time: 'Launch',
        label: 'Live Launch & Team Walkthrough',
        desc: 'Live testing, team walkthrough, and turning on 24/7 automated assistance.',
        deliverables: [
          'Live testing of answers and edge cases',
          'Staff walkthrough on managing conversations',
          '24/7 automated assistance live launch',
        ],
      },
    ],
    faqs: [
      {
        q: 'How does the AI know accurate information about our business?',
        a: 'We train your custom AI assistant specifically on your verified business guides, pricing sheets, product catalogs, and service FAQs. The AI only responds with your approved information and politely hands off to human staff when needed.',
      },
      {
        q: 'Can the AI assist customers directly on our chat channels?',
        a: 'Yes! We integrate custom AI assistants to answer inquiries, share pricing or product details, collect lead contact info, and book appointments 24/7.',
      },
      {
        q: 'What business software can you connect the automation to?',
        a: 'We can connect your workflows to Google Sheets, Gmail, HubSpot, Zoho, Notion, Slack, and virtually any other business tool you use daily.',
      },
      {
        q: 'Is our company and customer data kept secure?',
        a: 'Yes, 100%. We use private setups with strict privacy policies. Your private company records are never used to train public AI models.',
      },
    ],
  },
};

// Aliases for legacy or alternative service URLs to ensure zero broken links
serviceDatabase['ecommerce'] = serviceDatabase['ecommerce-solutions'];
serviceDatabase['ecommerce-payhere'] = serviceDatabase['ecommerce-solutions'];
serviceDatabase['ecommerce-stores'] = serviceDatabase['ecommerce-solutions'];
serviceDatabase['online-stores'] = serviceDatabase['ecommerce-solutions'];
serviceDatabase['ui-ux-design'] = serviceDatabase['web-development'];
serviceDatabase['branding-identity'] = serviceDatabase['web-development'];
serviceDatabase['seo-growth'] = serviceDatabase['web-development'];
serviceDatabase['software-systems'] = serviceDatabase['custom-software'];
serviceDatabase['software'] = serviceDatabase['custom-software'];
serviceDatabase['systems'] = serviceDatabase['custom-software'];
serviceDatabase['cloud-apps'] = serviceDatabase['custom-software'];

const serviceListNav = [
  { name: 'Website Design & Development', slug: 'web-development' },
  { name: 'E-Commerce & Online Stores', slug: 'ecommerce-solutions' },
  { name: 'Custom Software & Systems', slug: 'custom-software' },
  { name: 'AI Automation', slug: 'ai-automation' },
];

export default function ServiceDetailsPage({ params }) {
  const [activeStep, setActiveStep] = useState(0);
  const [activeFaq, setActiveFaq] = useState(0);

  const routeParams = params && typeof params.then === 'function' ? React.use(params) : params;
  const slug = routeParams?.slug || 'web-development';
  const service = serviceDatabase[slug] || serviceDatabase['web-development'];

  const currentMilestone = service.milestones[activeStep] || service.milestones[0];

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
          <div className="row g-lg-5 g-0">
            {/* Main Editorial Content (Priority 1 on mobile, 8-col right on desktop) */}
            <div className="col-lg-8 order-1 order-lg-2">
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
                <div className="service-editorial-body">
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

                  {/* =========================================================================
                      1. WHAT IS INCLUDED IN THIS PACKAGE (CLEAN 6-CONTAINER SPECIFICATION MATRIX)
                      ========================================================================= */}
                  <div className="deliverables-breakdown mt-5 mb-5">
                    <div className="mb-4">
                      <span className="label-kicker text-cyan d-block mb-1">
                        INCLUDED DELIVERABLES &amp; SPECIFICATIONS
                      </span>
                      <h3 className="text-white mb-0" style={{ fontSize: 'clamp(20px, 3vw, 24px)', fontWeight: 800 }}>
                        What Is Included in This Package
                      </h3>
                    </div>

                    {/* Modular 6-Card Interactive Grid (Exact 6 Containers, No Filters) */}
                    <div className="deliverables-interactive-grid">
                      {service.deliverables.slice(0, 6).map((item, idx) => (
                        <div key={idx} className="deliverable-interactive-card">
                          <div className="deliverable-card-header d-flex align-items-center justify-content-between mb-3">
                            <div className="d-flex align-items-center gap-2">
                              <span className="deliverable-num-badge">{item.num}</span>
                              <span className="deliverable-category-tag">{item.category}</span>
                            </div>
                            <div className="deliverable-icon-circle">
                              <i className={`fa-solid ${item.icon}`}></i>
                            </div>
                          </div>
                          <h4 className="deliverable-card-title text-white mb-2">{item.title}</h4>
                          <p className="deliverable-card-desc mb-3">{item.desc}</p>
                          <div className="deliverable-card-footer d-flex align-items-center gap-2">
                            <i className="fa-solid fa-circle-check text-cyan" style={{ fontSize: '13px' }}></i>
                            <span className="deliverable-status-label">Guaranteed in writing</span>
                          </div>
                        </div>
                      ))}
                    </div>

                    {/* Package Guarantee Banner */}
                    <div className="package-guarantee-banner mt-4 p-4 rounded-4 d-flex align-items-center gap-3">
                      <div className="guarantee-icon-wrap">
                        <i className="fa-solid fa-shield-halved text-cyan" style={{ fontSize: '24px' }}></i>
                      </div>
                      <div>
                        <h5 className="text-white mb-1" style={{ fontSize: '15px', fontWeight: 700 }}>
                          100% Operational Ownership &amp; Zero Hidden Fees
                        </h5>
                        <p className="text-white-50 mb-0" style={{ fontSize: '13.5px', lineHeight: 1.5 }}>
                          No vendor lock-in, no per-seat software fees, and no surprise plugin renewal bills. You receive clean production code, custom domain control, and full operational access.
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* =========================================================================
                      2. SIMPLE 4-STEP PROJECT ROADMAP (INTERACTIVE STEPPER LIFECYCLE)
                      ========================================================================= */}
                  <div className="delivery-milestones-box mt-5 mb-5">
                    <div className="mb-4">
                      <span className="label-kicker text-cyan d-block mb-1">
                        PHASED ENGINEERING LIFECYCLE
                      </span>
                      <h3 className="text-white mb-1" style={{ fontSize: 'clamp(20px, 3vw, 24px)', fontWeight: 800 }}>
                        Simple 4-Step Project Roadmap
                      </h3>
                      <p className="text-white-50 mb-0" style={{ fontSize: '14.5px' }}>
                        Click on any phase below to inspect the work focus and key deliverables.
                      </p>
                    </div>

                    {/* Stepper Node Navigation Track */}
                    <div className="roadmap-stepper-track mb-4">
                      <div className="row g-2 g-md-3">
                        {service.milestones.map((m, idx) => {
                          const isCurrent = activeStep === idx;
                          return (
                            <div key={idx} className="col-6 col-lg-3 d-flex">
                              <button
                                type="button"
                                onClick={() => setActiveStep(idx)}
                                className={`roadmap-step-tab w-100 text-start p-3 rounded-4 d-flex flex-column justify-content-between ${isCurrent ? 'active' : ''}`}
                              >
                                <div className="d-flex align-items-center justify-content-between mb-2 w-100">
                                  <span className="step-tab-num">{m.step}</span>
                                  <span className="step-tab-time">{m.time}</span>
                                </div>
                                <h5 className="step-tab-label mb-0 w-100">{m.label}</h5>
                                <div className="step-tab-progress-indicator mt-2 w-100">
                                  <div className="step-tab-bar" style={{ width: isCurrent ? '100%' : '20%' }}></div>
                                </div>
                              </button>
                            </div>
                          );
                        })}
                      </div>
                    </div>

                    {/* Active Phase Deep-Dive Card */}
                    {currentMilestone && (
                      <div className="roadmap-active-card p-4 p-md-5 rounded-4 position-relative overflow-hidden">
                        <div className="active-card-topline d-flex flex-wrap align-items-center justify-content-between gap-2 mb-3">
                          <div className="d-flex align-items-center gap-2">
                            <span className="phase-indicator-pill">
                              <span className="glowing-dot"></span>
                              ACTIVE STAGE: {currentMilestone.phase}
                            </span>
                            <span className="phase-time-pill">{currentMilestone.time}</span>
                          </div>
                          <div className="phase-nav-buttons d-flex align-items-center gap-2">
                            <button
                              type="button"
                              disabled={activeStep === 0}
                              onClick={() => setActiveStep((prev) => Math.max(0, prev - 1))}
                              className="phase-nav-btn"
                              aria-label="Previous step"
                            >
                              <i className="fa-solid fa-chevron-left"></i>
                            </button>
                            <span className="text-white-50" style={{ fontSize: '12px', fontFamily: 'var(--font-mono)' }}>
                              {activeStep + 1} / {service.milestones.length}
                            </span>
                            <button
                              type="button"
                              disabled={activeStep === service.milestones.length - 1}
                              onClick={() => setActiveStep((prev) => Math.min(service.milestones.length - 1, prev + 1))}
                              className="phase-nav-btn"
                              aria-label="Next step"
                            >
                              <i className="fa-solid fa-chevron-right"></i>
                            </button>
                          </div>
                        </div>

                        <h4 className="text-white mb-2" style={{ fontSize: 'clamp(18px, 2.5vw, 22px)', fontWeight: 700 }}>
                          {currentMilestone.label}
                        </h4>
                        <p className="text-white-50 mb-4" style={{ fontSize: '15px', lineHeight: 1.6 }}>
                          {currentMilestone.desc}
                        </p>

                        <div className="phase-deliverables-wrap pt-3 border-top border-secondary-subtle">
                          <span className="text-cyan d-block mb-2 fw-bold" style={{ fontSize: '12px', letterSpacing: '0.08em', fontFamily: 'var(--font-mono)' }}>
                            KEY MILESTONE DELIVERABLES:
                          </span>
                          <div className="row g-2">
                            {currentMilestone.deliverables.map((del, dIdx) => (
                              <div key={dIdx} className="col-md-4 d-flex">
                                <div className="phase-checklist-item d-flex align-items-center gap-2 p-2 px-3 rounded-2 w-100">
                                  <i className="fa-solid fa-circle-check text-cyan flex-shrink-0" style={{ fontSize: '13px' }}></i>
                                  <span className="text-white flex-grow-1" style={{ fontSize: '13.5px', lineHeight: 1.4 }}>
                                    {del}
                                  </span>
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    )}
                  </div>

                  {/* =========================================================================
                      3. FREQUENTLY ASKED QUESTIONS (INTERACTIVE INTELLIGENCE ACCORDION)
                      ========================================================================= */}
                  {service.faqs && (
                    <div className="service-faqs mt-5">
                      <div className="mb-4">
                        <span className="label-kicker text-cyan d-block mb-1">
                          COMMON QUESTIONS &amp; TRANSPARENT ANSWERS
                        </span>
                        <h3 className="text-white mb-0" style={{ fontSize: 'clamp(20px, 3vw, 24px)', fontWeight: 800 }}>
                          Frequently Asked Questions
                        </h3>
                      </div>

                      <div className="faq-accordion-container">
                        {service.faqs.map((faq, index) => {
                          const isOpen = activeFaq === index;
                          return (
                            <div key={index} className={`faq-card-item mb-3 ${isOpen ? 'active' : ''}`}>
                              <button
                                className="faq-question-btn w-100 d-flex justify-content-between align-items-center p-4 text-start"
                                onClick={() => setActiveFaq(isOpen ? -1 : index)}
                                aria-expanded={isOpen}
                              >
                                <div className="d-flex align-items-center gap-3">
                                  <span className="faq-index-badge">Q{index + 1}</span>
                                  <span className="faq-question-text text-white">{faq.q}</span>
                                </div>
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

                      {/* Direct Question Note */}
                      <div className="faq-help-strip mt-3 p-3 rounded-3 d-flex align-items-center justify-content-between flex-wrap gap-2">
                        <span className="text-white-50" style={{ fontSize: '13.5px' }}>
                          Have a question about your specific business workflow?
                        </span>
                        <a
                          href="https://wa.me/94704621228?text=Hi%20Inversify,%20I%20have%20a%20question%20about%20your%20services."
                          target="_blank"
                          rel="noreferrer"
                          className="faq-chat-link text-cyan text-decoration-none fw-bold"
                          style={{ fontSize: '13.5px' }}
                        >
                          Chat directly on WhatsApp <i className="fa-solid fa-arrow-right ms-1"></i>
                        </a>
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
                          <path d="M1.5 12.5L12.5 1.5M12.5 1.5H3.5M12.5 1.5V10.5" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      </span>
                    </Link>
                  </div>
                </div>
              </article>
            </div>

            {/* =========================================================================
                4. SIDEBAR NAVIGATION & CONSULTATION (VIEWPORT-PERFECT STICKY)
                ========================================================================= */}
            <div className="col-lg-4 order-2 order-lg-1 service-detail-sidebar-col">
              <aside className="service-detail-sidebar">
                <div className="sidebar-nav-card rounded-3">
                  <span className="sidebar-kicker-label text-cyan d-block fw-bold mb-2">
                    ALL INVERSIFY SERVICES
                  </span>
                  <ul className="sidebar-links-list list-unstyled mb-0">
                    {serviceListNav.map((s) => (
                      <li key={s.slug} className="mb-2">
                        <Link
                          href={`/services/${s.slug}`}
                          className={`sidebar-service-link d-flex align-items-center justify-content-between rounded-2 ${s.slug === slug ? 'active' : ''
                            }`}
                        >
                          <span style={{ fontSize: '13.5px', fontWeight: 600 }}>{s.name}</span>
                          <i className="fa-solid fa-arrow-right" style={{ fontSize: '12px' }}></i>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Consultation Card */}
                <div className="sidebar-cta-card rounded-3 text-center">
                  <span className="sidebar-kicker-label text-cyan d-block fw-bold mb-2">
                    DIRECT INQUIRY &amp; ESTIMATE
                  </span>
                  <h4 className="text-white mb-2" style={{ fontSize: '18px', fontWeight: 700 }}>
                    Need This For Your Business?
                  </h4>
                  <p className="text-secondary mb-3" style={{ fontSize: '13.5px', lineHeight: 1.55 }}>
                    Connect directly with our Colombo team for a free cost estimate and custom timeline.
                  </p>

                  <Link
                    href={`/contact?service=${encodeURIComponent(service.title)}`}
                    className="theme-btn-one hero-cta-pill w-100 justify-content-center mb-2"
                  >
                    <span className="btn-label">Get a Free Cost Estimate</span>
                  </Link>
                  <a
                    href="https://wa.me/94704621228?text=Hi%20Inversify,%20I'd%20like%20to%20get%20a%20quote%20for%20a%20website%20project."
                    target="_blank"
                    rel="noreferrer"
                    className="whatsapp-direct-btn w-100 d-flex align-items-center justify-content-center gap-2 rounded-2 mb-3"
                  >
                    <i className="fa-brands fa-whatsapp" style={{ fontSize: '16px' }}></i>
                    <span>Chat on WhatsApp</span>
                  </a>
                  <div className="d-flex align-items-center justify-content-center gap-2 pt-2 border-top border-white border-opacity-10 text-white-50">
                    <i className="fa-solid fa-shield-halved text-cyan" style={{ fontSize: '12px' }}></i>
                    <span style={{ fontSize: '12px', fontWeight: 500 }}>Direct Colombo Team &bull; 24h Response</span>
                  </div>
                </div>
              </aside>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
