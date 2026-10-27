'use client';

import React from 'react';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import PageTitle from '@/components/PageTitle';

export default function PrivacyPage() {
  const sections = [
    {
      num: '01',
      id: 'core-principles',
      title: 'Core Principles & Commitment to Privacy',
      lead: 'How Inversify protects your privacy and treats proprietary business information with the highest level of care.',
      clauses: [
        {
          num: '1.1',
          text: 'Inversify operates with a strict, privacy-first posture. We collect only the information strictly required to deliver high-performance design, software engineering, e-commerce infrastructure, and AI automation.',
        },
        {
          num: '1.2',
          text: 'We never sell, rent, monetize, or disclose your personal contact information or business data to third-party data brokers, advertising networks, or unauthorized third parties.',
        },
        {
          num: '1.3',
          text: 'All communications, project materials, and technical specifications exchanged with our Colombo engineering studio are governed by commercial confidentiality standards.',
        },
      ],
    },
    {
      num: '02',
      id: 'information-collected',
      title: 'Information We Collect & Process',
      lead: 'A transparent breakdown of data gathered during discovery, proposal scoping, and active development.',
      clauses: [
        {
          num: '2.1',
          text: 'Direct Inquiry Data: When you submit a project inquiry, email us, or chat on WhatsApp, we collect your name, email address, phone number, company name, and project requirements.',
        },
        {
          num: '2.2',
          text: 'Technical Specifications: During discovery sessions, we may collect technical architecture preferences, API documentation, domain configurations, and integration requirements necessary for project execution.',
        },
        {
          num: '2.3',
          text: 'Automated Diagnostic Data: When browsing our website, standard web server access logs may capture non-personally identifiable diagnostic data (e.g. browser type, operating system, device screen dimensions) solely to ensure responsive layout compatibility.',
        },
      ],
    },
    {
      num: '03',
      id: 'data-use',
      title: 'Purpose of Data Processing',
      lead: 'Every piece of information we request serves a direct, legitimate engineering and communication objective.',
      clauses: [
        {
          num: '3.1',
          text: 'Preparing custom technical proposals, project estimates, and milestone timelines tailored to your business goals.',
        },
        {
          num: '3.2',
          text: 'Developing, staging, testing, and deploying your custom web platforms, e-commerce stores, and automated AI pipelines.',
        },
        {
          num: '3.3',
          text: 'Issuing milestone invoices, service receipts, and coordinating maintenance or sprint renewals.',
        },
        {
          num: '3.4',
          text: 'Providing direct engineering support and post-launch troubleshooting via our dedicated Colombo studio channels.',
        },
      ],
    },
    {
      num: '04',
      id: 'client-confidentiality',
      title: 'Proprietary Information & Non-Disclosure (NDA)',
      lead: 'Enterprise-grade confidentiality safeguarding your business logic, designs, and internal data.',
      highlight: true,
      callout: {
        title: 'Non-Disclosure Guarantee',
        text: 'All business metrics, trade secrets, unpublished concept designs, and customer databases shared during development are protected under bilateral non-disclosure protocols. If your organization requires an institutional NDA prior to discovery, our team provides signed agreements upon request.',
      },
      clauses: [
        {
          num: '4.1',
          text: 'Client credentials, database connections, and operational metrics provided for system integration are stored exclusively in encrypted password managers with access restricted to assigned senior engineers.',
        },
        {
          num: '4.2',
          text: 'Our team will never use client data for any secondary purpose, research project, or unrelated commercial venture.',
        },
      ],
    },
    {
      num: '05',
      id: 'ai-privacy',
      title: 'AI Automation & Zero Model-Training Guarantee',
      lead: 'Specific protections governing the engineering and deployment of AI-powered workflows.',
      highlight: true,
      callout: {
        title: 'Zero Data Retention for Public AI Models',
        text: 'For all AI Automation solutions engineered by Inversify, we use private, enterprise API endpoints with verified Zero Data Retention (ZDR) guarantees. Client prompts, proprietary business documents, and customer communications are NEVER used to train, fine-tune, or improve public foundational AI models.',
      },
      clauses: [
        {
          num: '5.1',
          text: 'Data pipelines engineered for AI automation connect exclusively through secure, authenticated enterprise tunnels to ensure client data remains private and ephemeral.',
        },
        {
          num: '5.2',
          text: 'Client knowledge bases and custom retrieval vectors are hosted on dedicated, client-owned or isolated vector databases with encrypted data-at-rest protocols.',
        },
      ],
    },
    {
      num: '06',
      id: 'security-storage',
      title: 'Technical Safeguards & Infrastructure Security',
      lead: 'Rigorous engineering measures deployed to protect assets against unauthorized access or loss.',
      clauses: [
        {
          num: '6.1',
          text: 'All web traffic and API integrations are protected with modern cryptographic transport layer security (TLS 1.3 / SSL encryption).',
        },
        {
          num: '6.2',
          text: 'Source code repositories and staging servers are protected with hardware-enforced Multi-Factor Authentication (MFA) and least-privilege role-based access control.',
        },
        {
          num: '6.3',
          text: 'Production deployments are containerized and hosted on enterprise cloud infrastructure with continuous monitoring and automated disaster recovery backups.',
        },
      ],
    },
    {
      num: '07',
      id: 'third-party-integrations',
      title: 'Third-Party Services & Payment Gateways',
      lead: 'How external services are handled when integrated into your website or e-commerce solution.',
      clauses: [
        {
          num: '7.1',
          text: 'Payment processing for e-commerce clients connects directly to PCI-DSS Level 1 certified gateways (e.g. Visa/MasterCard acquiring banks, PayHere, Stripe). Inversify never stores, logs, or views full credit card numbers or banking credentials.',
        },
        {
          num: '7.2',
          text: 'Third-party cloud providers (e.g. Cloudflare, AWS, Vercel, Meta WhatsApp Business APIs) operate under their respective enterprise security and compliance standards.',
        },
      ],
    },
    {
      num: '08',
      id: 'data-retention-rights',
      title: 'Your Rights & Data Retention Controls',
      lead: 'You maintain absolute authority over the data you share with Inversify.',
      clauses: [
        {
          num: '8.1',
          text: 'Right to Access & Rectify: You can request a summary of the contact information and project archives we hold for your organization at any time.',
        },
        {
          num: '8.2',
          text: 'Right to Erasure: Following project completion and warranty sign-off, you may instruct us to permanently purge staging databases, temporary credentials, or draft assets from our systems.',
        },
        {
          num: '8.3',
          text: 'Archival Retention: Completed contract documents and financial records are retained solely for statutory accounting compliance as required by Sri Lankan commercial law.',
        },
      ],
    },
    {
      num: '09',
      id: 'data-protection-officer',
      title: 'Contact Our Data Protection Lead',
      lead: 'Direct, same-day access to our team for any privacy queries or security inquiries.',
      clauses: [
        {
          num: '9.1',
          text: 'For questions regarding data processing, NDA requests, or records updates, contact our engineering lead directly at invert@inversify.lk or +94 70 462 1228.',
        },
      ],
    },
  ];

  return (
    <main className="privacy-page-root">
      <Header />
      <PageTitle
        tag="LEGAL POLICIES / INVERSIFY"
        title="Privacy Policy"
        description="Our verified commitment to safeguarding your proprietary business data, customer records, and confidential materials."
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'Privacy Policy' },
        ]}
      />

      <section className="legal-editorial-section py-100">
        <div className="legal-editorial-container">
          
          {/* Executive Overview Hero Card */}
          <div className="legal-hero-card">
            <div className="legal-hero-meta">
              <span className="badge-status-pill">
                <span className="beacon-dot"></span>
                <span>Data Protection Commitment</span>
              </span>
              <span className="text-secondary font-mono" style={{ fontSize: '13px' }}>
                Effective October 2026 · Colombo, Sri Lanka
              </span>
              <span className="text-secondary font-mono" style={{ fontSize: '13px' }}>
                · ~5 min read
              </span>
            </div>
            
            <h2 className="legal-hero-title">
              Your Proprietary Business Data is Respected &amp; Protected.
            </h2>
            
            <p className="legal-hero-desc">
              At Inversify, we design and build mission-critical digital systems for forward-thinking organizations. We understand that confidential ideas, customer databases, and strategic plans require rigorous, transparent safeguards. This policy details how your data is handled from discovery to deployment.
            </p>

            <div className="legal-highlights-grid">
              <a href="#client-confidentiality" className="legal-highlight-pill">
                <i className="fa-solid fa-user-shield"></i>
                <span>04 · Non-Disclosure Protocols</span>
              </a>
              <a href="#ai-privacy" className="legal-highlight-pill">
                <i className="fa-solid fa-microchip"></i>
                <span>05 · Zero AI Model-Training Guarantee</span>
              </a>
              <a href="#security-storage" className="legal-highlight-pill">
                <i className="fa-solid fa-lock"></i>
                <span>06 · TLS 1.3 &amp; MFA Safeguards</span>
              </a>
              <a href="#data-retention-rights" className="legal-highlight-pill">
                <i className="fa-solid fa-trash-can"></i>
                <span>08 · Right to Data Erasure</span>
              </a>
            </div>
          </div>

          {/* Mobile Horizontal Quick-Jump Pill Bar */}
          <div className="legal-mobile-quickjump" aria-label="Quick jump to privacy section">
            {sections.map((sec) => (
              <a key={sec.id} href={`#${sec.id}`} className="legal-mobile-chip">
                <span>{sec.num}.</span>
                <span>{sec.title.split('&')[0].trim()}</span>
              </a>
            ))}
          </div>

          {/* Two Column Layout: Sticky Index (Desktop) + Listed Content */}
          <div className="legal-layout-grid">
            
            {/* Sticky Table of Contents Sidebar */}
            <aside className="legal-toc-aside" aria-label="Table of contents">
              <div className="legal-toc-panel">
                <div className="legal-toc-eyebrow">
                  <span>Table of Contents</span>
                  <span style={{ color: '#8c88ab', fontWeight: 500 }}>9 Sections</span>
                </div>
                <ul className="legal-toc-nav">
                  {sections.map((sec) => (
                    <li key={sec.id}>
                      <a
                        href={`#${sec.id}`}
                        className={`legal-toc-link ${sec.highlight ? 'is-highlight' : ''}`}
                      >
                        <span className="legal-toc-num">{sec.num}</span>
                        <span>{sec.title.split('&')[0].trim()}</span>
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Direct Assistance Widget */}
              <div className="legal-sidebar-help">
                <h4>Data Privacy Question?</h4>
                <p>
                  Reach our Colombo studio directly for security audits, data handling summaries, or custom NDA signatures.
                </p>
                <a href="mailto:invert@inversify.lk">
                  <span>invert@inversify.lk</span>
                  <span aria-hidden="true">↗</span>
                </a>
              </div>
            </aside>

            {/* Main Editorial Flow */}
            <div className="legal-doc-content">
              {sections.map((section) => (
                <article key={section.id} id={section.id} className="legal-section-block">
                  <header className="legal-section-header">
                    <span className="legal-sec-badge">{section.num}</span>
                    <h2 className="legal-sec-title">{section.title}</h2>
                    {section.highlight && (
                      <span className="legal-important-tag">Enterprise Guarantee</span>
                    )}
                  </header>

                  <p className="legal-sec-lead">{section.lead}</p>

                  {/* Highlight Callout Panel if present */}
                  {section.callout && (
                    <div className="legal-callout-panel">
                      <h4>
                        <i className="fa-solid fa-shield-halved"></i>
                        <span>{section.callout.title}</span>
                      </h4>
                      <p>{section.callout.text}</p>
                    </div>
                  )}

                  {/* Clean Listed-Down Clauses */}
                  <ol className="legal-clause-flow">
                    {section.clauses.map((clause) => (
                      <li key={clause.num} className="legal-clause-item">
                        <span className="legal-clause-num">{clause.num}</span>
                        <p className="legal-clause-text">{clause.text}</p>
                      </li>
                    ))}
                  </ol>
                </article>
              ))}

              {/* Official Studio Signatory Card */}
              <div className="legal-signatory-card text-center text-md-start">
                <div className="d-flex flex-column flex-md-row justify-content-between align-items-start gap-3 mb-3">
                  <div>
                    <span className="font-mono text-cyan d-block mb-1" style={{ fontSize: '12px', letterSpacing: '0.08em', textTransform: 'uppercase', fontWeight: 700 }}>
                      Data Protection Officer
                    </span>
                    <h3 className="text-white mb-2" style={{ fontSize: 'clamp(1.5rem, 2.2vw, 1.9rem)', fontWeight: 800 }}>
                      Have a Privacy or Security Inquiry?
                    </h3>
                  </div>
                  <span className="badge-status-pill mt-1">
                    <span className="beacon-dot"></span>
                    <span>Verified Colombo Studio</span>
                  </span>
                </div>

                <p style={{ color: '#c5c5dc', fontSize: '15px', lineHeight: 1.7, maxWidth: '720px', margin: '0 0 24px 0' }}>
                  If you have questions regarding data retention, want to request an update to your records, or need an executed Non-Disclosure Agreement for an upcoming project, reach out directly.
                </p>

                {/* Studio Contact Channels Row */}
                <div className="legal-channels-row">
                  <div className="legal-channel-item">
                    <span className="label">Engineering Studio</span>
                    <strong className="value">Inversify</strong>
                    <span className="sub">Colombo, Sri Lanka</span>
                  </div>

                  <div className="legal-channel-item">
                    <span className="label">Direct Hotline &amp; WhatsApp</span>
                    <a href="tel:+94704621228" className="value">
                      +94 70 462 1228
                    </a>
                    <span className="sub">
                      <a href="https://wa.me/94704621228" target="_blank" rel="noreferrer" className="text-cyan text-decoration-none">
                        Chat on WhatsApp ↗
                      </a>
                    </span>
                  </div>

                  <div className="legal-channel-item">
                    <span className="label">Direct Email</span>
                    <a href="mailto:invert@inversify.lk" className="value">
                      invert@inversify.lk
                    </a>
                    <span className="sub">Colombo, Sri Lanka</span>
                  </div>
                </div>

                <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-md-start gap-3 pt-2">
                  <Link href="/terms" className="theme-btn-one hero-cta-pill d-inline-flex px-4 py-3">
                    <span className="btn-label">Review Terms &amp; Conditions</span>
                    <span className="btn-arrow-circle">
                      <svg width="13" height="13" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1.5 12.5L12.5 1.5M12.5 1.5H3.5M12.5 1.5V10.5" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </span>
                  </Link>
                  <Link href="/contact" className="theme-btn-three hero-cta-pill d-inline-flex px-4 py-3">
                    <span>Contact Our Studio ↗</span>
                  </Link>
                </div>

              </div>

            </div>
          </div>

        </div>
      </section>

      <Footer />
    </main>
  );
}
