'use client';

import React from 'react';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import PageTitle from '@/components/PageTitle';

export default function TermsPage() {
  const sections = [
    {
      num: '01',
      id: 'general-agreement',
      title: 'General Agreement & Engagement Terms',
      lead: 'The foundation of our working relationship, project authorization, and terms of service.',
      clauses: [
        {
          num: '1.1',
          text: 'These Terms & Conditions apply to all services, consulting, web development, e-commerce engineering, and AI automation delivered by Inversify Technologies.',
        },
        {
          num: '1.2',
          text: 'Confirmation of a project, signing of an approved proposal, or making any advance deposit constitutes full and formal acceptance of these terms.',
        },
        {
          num: '1.3',
          text: 'If the client breaches any part of this agreement—including client-caused project stalls, overdue milestone payments, or unnotified lack of communication exceeding one (1) week during or following project completion—Inversify reserves the right to terminate the contract without refund of prior deposits.',
        },
      ],
    },
    {
      num: '02',
      id: 'project-scope',
      title: 'Project Scope & Boundary Specifications',
      lead: 'How we define deliverables to ensure predictable timelines, clear pricing, and zero surprises.',
      clauses: [
        {
          num: '2.1',
          text: 'All engineering and creative work is conducted strictly according to the approved project brief, milestone roadmap, or formal statement of work.',
        },
        {
          num: '2.2',
          text: 'Any additional feature, database integration, layout redesign, or third-party connection requested beyond the signed scope will be classified as an out-of-scope expansion.',
        },
        {
          num: '2.3',
          text: 'Out-of-scope requests will receive a separate, transparent cost quotation and a revised delivery timeline prior to implementation.',
        },
      ],
    },
    {
      num: '03',
      id: 'revisions-policy',
      title: 'Revisions & Iterative Feedback',
      lead: 'A structured, healthy feedback process to refine deliverables without derailing the launch date.',
      clauses: [
        {
          num: '3.1',
          text: 'Each milestone includes a defined round of design and functional revisions as specified in the proposal prior to kickoff.',
        },
        {
          num: '3.2',
          text: 'Additional revision rounds requested beyond the agreed limit will be billed separately at standard studio hourly rates ($45/hr or equivalent local rate).',
        },
        {
          num: '3.3',
          text: 'Fundamental conceptual pivots, structural redesigns, or database re-architectures requested after formal sign-off of wireframes or design drafts will be quoted as a new project milestone.',
        },
      ],
    },
    {
      num: '04',
      id: 'payment-terms',
      title: 'Payment Terms & Milestone Structure',
      lead: 'Our straightforward, milestone-based payment schedule protecting both parties throughout development.',
      highlight: true,
      callout: {
        title: '50/50 Stage Payment Framework',
        text: 'Development commences upon receipt of a 50% initial commitment deposit. Final live deployment, production database release, and DNS domain pointing are executed upon settlement of the remaining 50% milestone balance.',
      },
      clauses: [
        {
          num: '4.1',
          text: 'A 50% non-refundable advance payment is required before commencing any design, software development, or AI automation setup.',
        },
        {
          num: '4.2',
          text: 'The remaining 50% balance must be settled in full prior to live public domain launch, release of production administrative credentials, or file transfer.',
        },
        {
          num: '4.3',
          text: 'Active sprint execution, staging environment access, and scheduled deployment dates may be paused if milestone invoices exceed their due dates.',
        },
        {
          num: '4.4',
          text: 'Project proposals are quoted based on prevailing currency exchange rates and third-party API tiers at the time of agreement.',
        },
        {
          num: '4.5',
          text: 'In the event of unilateral client cancellation, partial refunds are evaluated strictly at company discretion against the actual logged engineering hours and completed milestones.',
        },
        {
          num: '4.6',
          text: 'Recurring infrastructure services—including managed cloud hosting, automated backups, SSL certificates, and annual domain renewals—are billed separately on a 12-month renewal cycle.',
        },
        {
          num: '4.7',
          text: 'Recurring cloud fees are subject to adjustment based on provider infrastructure price revisions, server load scaling, or currency fluctuations.',
        },
        {
          num: '4.8',
          text: 'Any scheduled adjustment to annual recurring rates is communicated in writing with a minimum of 30 days advance notice.',
        },
      ],
    },
    {
      num: '05',
      id: 'monthly-packages',
      title: 'Monthly Retainers & Sprint Packages',
      lead: 'Rules governing recurring support packages, active growth sprints, and engineering hours.',
      clauses: [
        {
          num: '5.1',
          text: 'Dedicated monthly retainer packages are valid for one calendar month from the billing cycle start date.',
        },
        {
          num: '5.2',
          text: 'Retainer invoices are payable in advance at the start of each monthly sprint cycle.',
        },
        {
          num: '5.3',
          text: 'Each retainer package includes a dedicated allocation of maintenance hours, security updates, or feature development items as defined in the service tier.',
        },
        {
          num: '5.4',
          text: 'Unused monthly hours do not roll over to subsequent months unless explicitly arranged under an enterprise retainer agreement.',
        },
        {
          num: '5.5',
          text: 'Sprint deliverables and dedicated support tickets are paused immediately if a monthly retainer invoice becomes past due.',
        },
        {
          num: '5.6',
          text: 'Retainer agreements can be cancelled with written notice prior to the upcoming renewal date. Fees for completed billing cycles are non-refundable.',
        },
      ],
    },
    {
      num: '06',
      id: 'delivery-timelines',
      title: 'Delivery Timelines & Mutual Dependencies',
      lead: 'Timely project delivery is a shared commitment between our studio and your internal team.',
      clauses: [
        {
          num: '6.1',
          text: 'Estimated delivery schedules depend on project complexity, scope clarity, and prompt receipt of client feedback, copy, and media assets.',
        },
        {
          num: '6.2',
          text: 'Inversify is not liable for launch delays caused by client-side feedback hold-ups, missing product catalogs, third-party gateway delays, or delayed credential sharing.',
        },
      ],
    },
    {
      num: '07',
      id: 'source-files',
      title: 'Source Files & Intellectual Property',
      lead: 'Clear delineation of live operational ownership versus editable raw source code buyouts.',
      highlight: true,
      callout: {
        title: 'Intellectual Property & Live Deliverables Notice',
        text: 'The client receives full operational ownership of the live production website, their custom domain, all uploaded branding, text, imagery, and proprietary customer data. Master editable source files (raw Figma master files, AI source files, private Git repos) are excluded from standard web packages and require a dedicated source-code buyout agreement.',
      },
      clauses: [
        {
          num: '7.1',
          text: 'Editable master assets—including proprietary application source code repositories, master Figma UI design systems, and Adobe Illustrator/Photoshop vector files—are NOT included in standard commercial web build packages unless explicitly agreed upon in the contract.',
        },
        {
          num: '7.2',
          text: 'Complete source repository transfers and master design file deliverables are available subject to an agreed source-file licensing fee and formal IP buyout addendum.',
        },
        {
          num: '7.3',
          text: 'The client retains 100% unrestricted ownership of their business branding, trademarks, uploaded product catalog, text copy, customer database, and live deployed site.',
        },
      ],
    },
    {
      num: '08',
      id: 'cancellations-refunds',
      title: 'Cancellations & Milestone Settlements',
      lead: 'Our transparent protocol if a project must be discontinued or restructured.',
      clauses: [
        {
          num: '8.1',
          text: 'Advance commitment deposits and settled milestone payments are non-refundable once creative design or engineering sprints have commenced.',
        },
        {
          num: '8.2',
          text: 'In the event of mid-project cancellation by the client, all completed milestone components, code written, and staging builds delivered up to the cancellation date will be billed accordingly.',
        },
      ],
    },
    {
      num: '09',
      id: 'client-responsibility',
      title: 'Client Responsibility & Content Licensing',
      lead: 'Warranty of legal ownership for all brand assets and media supplied for development.',
      clauses: [
        {
          num: '9.1',
          text: 'The client confirms and warrants that all copy, trademarks, product photos, audio, videos, and fonts supplied to Inversify are legally owned by the client or licensed for commercial use.',
        },
        {
          num: '9.2',
          text: 'Inversify Technologies assumes no legal liability for trademark violations, copyright claims, or licensing disputes arising from client-supplied assets.',
        },
      ],
    },
    {
      num: '10',
      id: 'final-approval',
      title: 'Final Sign-off & Production Release',
      lead: 'The handover procedure ensuring deliverables meet your requirements before public launch.',
      clauses: [
        {
          num: '10.1',
          text: 'Once the client provides written sign-off on staging previews or deliverable milestones, Inversify is not responsible for typos, omissions, or errors that were overlooked during approval. Post-approval updates will be billed under standard revision rates.',
        },
      ],
    },
    {
      num: '11',
      id: 'portfolio-rights',
      title: 'Portfolio & Case Study Showcase',
      lead: 'Our right to celebrate great work and showcase our engineering craft.',
      clauses: [
        {
          num: '11.1',
          text: 'The client grants Inversify the non-exclusive right to display completed websites, case study metrics, and design concepts in our portfolio, case studies, and social channels for promotional purposes.',
        },
        {
          num: '11.2',
          text: 'If your project is subject to confidentiality agreements or proprietary market embargo, please notify Inversify in writing prior to project kickoff to establish custom NDA conditions.',
        },
      ],
    },
  ];

  return (
    <main className="terms-page-root">
      <Header />
      <PageTitle
        tag="LEGAL POLICIES / INVERSIFY TECHNOLOGIES"
        title="Terms &amp; Conditions"
        description="Clear, transparent terms governing all design, engineering, e-commerce, and AI automation partnerships with Inversify."
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'Terms & Conditions' },
        ]}
      />

      <section className="legal-editorial-section py-100">
        <div className="legal-editorial-container">
          
          {/* Executive Overview Hero Card */}
          <div className="legal-hero-card">
            <div className="legal-hero-meta">
              <span className="badge-status-pill">
                <span className="beacon-dot"></span>
                <span>Official Agreement</span>
              </span>
              <span className="text-secondary font-mono" style={{ fontSize: '13px' }}>
                Effective October 2026 · Colombo, Sri Lanka
              </span>
              <span className="text-secondary font-mono" style={{ fontSize: '13px' }}>
                · ~6 min read
              </span>
            </div>
            
            <h2 className="legal-hero-title">
              Engineering Partnerships Built on Absolute Transparency.
            </h2>
            
            <p className="legal-hero-desc">
              These Terms &amp; Conditions govern every service, custom build, and consulting engagement provided by Inversify Technologies. By confirming a project, approving a statement of work, or providing an initial milestone deposit, the client accepts these terms. We believe mutual clarity is the foundation of high-performance digital products.
            </p>

            <div className="legal-highlights-grid">
              <a href="#payment-terms" className="legal-highlight-pill">
                <i className="fa-solid fa-coins"></i>
                <span>04 · 50/50 Stage Payments</span>
              </a>
              <a href="#source-files" className="legal-highlight-pill">
                <i className="fa-solid fa-code"></i>
                <span>07 · Source Code &amp; IP Policy</span>
              </a>
              <a href="#revisions-policy" className="legal-highlight-pill">
                <i className="fa-solid fa-rotate-left"></i>
                <span>03 · Structured Revisions</span>
              </a>
              <a href="#monthly-packages" className="legal-highlight-pill">
                <i className="fa-solid fa-calendar-check"></i>
                <span>05 · Retainers &amp; Sprints</span>
              </a>
            </div>
          </div>

          {/* Mobile Horizontal Quick-Jump Pill Bar */}
          <div className="legal-mobile-quickjump" aria-label="Quick jump to terms section">
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
                  <span style={{ color: '#8c88ab', fontWeight: 500 }}>11 Clauses</span>
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
                <h4>Need a clarification?</h4>
                <p>
                  Our Colombo engineering leads are happy to review special scope or enterprise NDA requirements before kickoff.
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
                      <span className="legal-important-tag">Key Clause</span>
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
                      Official Studio Verification
                    </span>
                    <h3 className="text-white mb-2" style={{ fontSize: 'clamp(1.5rem, 2.2vw, 1.9rem)', fontWeight: 800 }}>
                      Ready to Build With Clarity?
                    </h3>
                  </div>
                  <span className="badge-status-pill mt-1">
                    <span className="beacon-dot"></span>
                    <span>Direct Colombo Engineering</span>
                  </span>
                </div>

                <p style={{ color: '#c5c5dc', fontSize: '15px', lineHeight: 1.7, maxWidth: '720px', margin: '0 0 24px 0' }}>
                  We look forward to engineering a high-impact digital presence for your brand. If you have questions regarding scope boundaries, timeline estimates, or payment schedules, get in touch with our team directly.
                </p>

                {/* Studio Contact Channels Row */}
                <div className="legal-channels-row">
                  <div className="legal-channel-item">
                    <span className="label">Engineering Studio</span>
                    <strong className="value">Inversify Technologies</strong>
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
                  <Link href="/contact" className="theme-btn-one hero-cta-pill d-inline-flex px-4 py-3">
                    <span className="btn-label">Start a Project Consultation</span>
                    <span className="btn-arrow-circle">
                      <svg width="13" height="13" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1.5 12.5L12.5 1.5M12.5 1.5H3.5M12.5 1.5V10.5" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </span>
                  </Link>
                  <Link href="/privacy" className="theme-btn-three hero-cta-pill d-inline-flex px-4 py-3">
                    <span>View Privacy Policy ↗</span>
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
