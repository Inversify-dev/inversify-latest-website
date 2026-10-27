'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import PageTitle from '@/components/PageTitle';

const blogArticles = [
  {
    id: 1,
    slug: 'strong-online-presence',
    title: 'How a High-Speed Static Website Can Double Your Business Inquiries & Sales',
    category: 'static',
    discipline: 'Static Web Architecture',
    badge: 'October 2026',
    readTime: '5 min read',
    excerpt: 'How clean Next.js architecture and sub-second mobile loading directly double customer conversion rates.',
    image: '/images/blog1-1.webp',
  },
  {
    id: 2,
    slug: 'visual-identity-shapes-success',
    title: 'Deploying AI Automation & WhatsApp Agents to Eliminate 100+ Hours of Manual Work',
    category: 'automation',
    discipline: 'AI Business Automation',
    badge: 'September 2026',
    readTime: '4 min read',
    excerpt: 'Practical workflows to qualify inbound leads and answer customer inquiries 24/7 on autopilot.',
    image: '/images/blog1-2.webp',
  },
  {
    id: 3,
    slug: 'story-driven-branding',
    title: 'How to Accept Online Card Payments in Sri Lanka: The Merchant Payment Guide',
    category: 'ecommerce',
    discipline: 'E-Commerce & Payments',
    badge: 'September 2026',
    readTime: '6 min read',
    excerpt: 'A comprehensive walkthrough of reliable card gateway integrations, security, and WhatsApp alerts.',
    image: '/images/blog1-3.webp',
  },
  {
    id: 4,
    slug: 'modern-react-architecture',
    title: 'Why Static Next.js Beats WordPress for Zero Vulnerabilities and Sub-Second Speed',
    category: 'static',
    discipline: 'Jamstack Engineering',
    badge: 'August 2026',
    readTime: '5 min read',
    excerpt: 'Eliminating bloated plugins, security vulnerabilities, and maintenance headaches with modern React.',
    image: '/images/news-1.webp',
  },
  {
    id: 5,
    slug: 'ai-powered-product-design',
    title: 'How to Rank Your Business on the First Page of Google in Sri Lanka',
    category: 'seo',
    discipline: 'Google Search & Local SEO',
    badge: 'August 2026',
    readTime: '4 min read',
    excerpt: 'Local search engine optimization principles that ensure high-intent customers find your brand first.',
    image: '/images/news-2.webp',
  },
  {
    id: 6,
    slug: 'cloud-security-compliance',
    title: 'AI Lead Qualification: Turning WhatsApp Messages into Paying Clients 24/7',
    category: 'automation',
    discipline: 'Autonomous AI Workflows',
    badge: 'July 2026',
    readTime: '3 min read',
    excerpt: 'Routing high-value prospects straight into your sales pipeline without delayed manual responses.',
    image: '/images/news-3.webp',
  },
];

export default function BlogPage() {
  const [selectedTopic, setSelectedTopic] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const topics = [
    { id: 'all', label: 'All Articles' },
    { id: 'static', label: 'Static Websites' },
    { id: 'ecommerce', label: 'E-Commerce & Payments' },
    { id: 'automation', label: 'AI Automation' },
    { id: 'seo', label: 'Google SEO' },
  ];

  const filteredPosts = blogArticles.filter((post) => {
    const matchesTopic = selectedTopic === 'all' || post.category === selectedTopic;
    const matchesSearch =
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.discipline.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesTopic && matchesSearch;
  });

  const leadArticle = filteredPosts.length > 0 ? filteredPosts[0] : null;
  const secondaryArticles = filteredPosts.length > 1 ? filteredPosts.slice(1) : [];

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (newsletterEmail) {
      const subject = 'Subscribe me to the Inversify Growth Dispatch';
      const body = `Please add ${newsletterEmail} to the Inversify Growth Dispatch.`;
      window.location.href = `mailto:invert@inversify.lk?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
      setSubscribed(true);
    }
  };

  return (
    <main className="blog-page-root">
      <Header />
      <PageTitle
        tag="THE JOURNAL / FIELD NOTES"
        title="Ideas for your next move."
        description="Clear, practical insights on modern web architecture, digital commerce, AI automation, and business growth."
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'Blog & Articles' },
        ]}
      />

      {/* Chapter Intro with Generous White Space */}
      <section className="index-chapter index-chapter-journal" aria-label="Journal introduction">
        <div>
          <span className="index-chapter-kicker">03 / FIELD NOTES</span>
          <h2>Useful ideas.<br /><em>Room to think.</em></h2>
        </div>
        <p>Explore practical guides on high-speed websites, automated operations, and commerce growth strategies.</p>
        <a href="#journal-index" className="index-chapter-jump">Browse the journal <span aria-hidden="true">↓</span></a>
      </section>

      {/* =========================================================================
          MAGAZINE-STYLE JOURNAL SHOWCASE SECTION
          ========================================================================= */}
      <section id="journal-index" className="blog-showcase-section pt-70 pb-120">
        <div className="container">
          {/* Subhead Kicker */}
          <div className="aik-hero-subhead mb-3">
            Practical strategies for founders and operators.
          </div>

          {/* Smooth Scrollable Filter Pill Bar */}
          <div className="aik-filter-bar" role="group" aria-label="Filter articles by topic">
            {topics.map((t) => (
              <button
                key={t.id}
                onClick={() => setSelectedTopic(t.id)}
                aria-pressed={selectedTopic === t.id}
                className={`aik-filter-pill ${selectedTopic === t.id ? 'active' : ''}`}
              >
                {t.label}
              </button>
            ))}
          </div>

          {/* Toolbar Strip: Count & Search */}
          <div className="blog-toolbar mb-5">
            <div className="aik-counter-strip">
              <span role="status" aria-live="polite">{filteredPosts.length} ARTICLES</span>
              <span className="aik-counter-dot"></span>
            </div>
            <label className="blog-search-field">
              <i className="fa-solid fa-magnifying-glass" aria-hidden="true" />
              <span className="visually-hidden">Search articles</span>
              <input
                type="search"
                aria-label="Search the journal"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search the journal..."
              />
            </label>
          </div>

          {/* Lead Featured Story Placement (Hero Dispatch) */}
          {leadArticle && (
            <div className="journal-lead-showcase mb-5">
              <Link href={`/blog/${leadArticle.slug}`} className="journal-lead-card">
                <div className="journal-lead-media">
                  <img src={leadArticle.image} alt={leadArticle.title} loading="lazy" decoding="async" />
                  <span className="journal-lead-badge">{leadArticle.discipline}</span>
                </div>
                <div className="journal-lead-body">
                  <div className="journal-meta-row">
                    <span className="journal-kicker">FEATURED DISPATCH</span>
                    <span className="journal-meta-dot">·</span>
                    <time className="journal-date">{leadArticle.badge}</time>
                    <span className="journal-meta-dot">·</span>
                    <span className="journal-read-time">{leadArticle.readTime}</span>
                  </div>
                  <h2 className="journal-lead-title">{leadArticle.title}</h2>
                  <p className="journal-lead-excerpt">{leadArticle.excerpt}</p>
                  <span className="journal-lead-action">
                    <span>Read Full Dispatch</span>
                    <i className="fa-solid fa-arrow-right" aria-hidden="true" />
                  </span>
                </div>
              </Link>
            </div>
          )}

          {/* Secondary Editorial Grid (Balanced & Spacious) */}
          {secondaryArticles.length > 0 && (
            <div className="journal-secondary-grid">
              {secondaryArticles.map((article) => (
                <div key={article.slug} className="journal-editorial-item">
                  <Link href={`/blog/${article.slug}`} className="journal-editorial-card">
                    <div className="journal-editorial-media">
                      <img src={article.image} alt={article.title} loading="lazy" decoding="async" />
                      <span className="journal-editorial-badge">{article.discipline}</span>
                    </div>
                    <div className="journal-editorial-body">
                      <div className="journal-meta-row">
                        <time className="journal-date">{article.badge}</time>
                        <span className="journal-meta-dot">·</span>
                        <span className="journal-read-time">{article.readTime}</span>
                      </div>
                      <h3 className="journal-editorial-title">{article.title}</h3>
                      <p className="journal-editorial-excerpt">{article.excerpt}</p>
                      <span className="journal-editorial-link">
                        <span>Read article</span>
                        <i className="fa-solid fa-arrow-right" aria-hidden="true" />
                      </span>
                    </div>
                  </Link>
                </div>
              ))}
            </div>
          )}

          {/* Empty State */}
          {filteredPosts.length === 0 && (
            <div className="text-center py-5">
              <p style={{ color: '#c5c5d8', fontSize: '16px', marginBottom: '16px' }}>
                No articles found matching "{searchQuery}".
              </p>
              <button
                type="button"
                className="journal-reset theme-btn-three hero-cta-pill"
                onClick={() => { setSearchQuery(''); setSelectedTopic('all'); }}
              >
                Clear search and filters
              </button>
            </div>
          )}
        </div>
      </section>

      {/* =========================================================================
          NEWSLETTER DISPATCH (POLISHED & SPACIOUS)
          ========================================================================= */}
      <section
        className="blog-newsletter-section py-90 cta-banner-spacer"
        style={{
          background: 'linear-gradient(180deg, #09061A 0%, #100B2B 100%)',
          borderTop: '1px solid rgba(181, 65, 250, 0.15)',
        }}
      >
        <div className="container">
          <div
            className="p-4 p-md-5 rounded-4 max-w-800 mx-auto text-center"
            style={{
              background: 'linear-gradient(160deg, rgba(33, 24, 81, 0.6) 0%, rgba(10, 6, 28, 0.95) 100%)',
              border: '1.5px solid rgba(181, 65, 250, 0.3)',
              boxShadow: '0 20px 50px rgba(0, 0, 0, 0.6)',
            }}
          >
            <div className="badge-status-pill mb-3">
              <span className="beacon-dot"></span>
              <span>Inversify Growth Dispatch</span>
            </div>
            <h2 className="text-white mb-3" style={{ fontSize: 'clamp(1.8rem, 3vw, 2.4rem)', fontWeight: 800 }}>
              Practical Web &amp; Growth Strategies
            </h2>
            <p style={{ color: '#c5c5d8', fontSize: '15.5px', maxWidth: '560px', margin: '0 auto 28px auto', lineHeight: 1.7 }}>
              A monthly note on modern engineering, conversions, and automation. Delivered directly to your inbox.
            </p>

            {subscribed ? (
              <div className="newsletter-mailto-note" role="status" aria-live="polite">
                Your email draft is ready. Review and send to request the monthly dispatch.
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="d-flex flex-column flex-sm-row gap-2 justify-content-center max-w-600 mx-auto">
                <label htmlFor="journal-newsletter-email" className="visually-hidden">Your work email address</label>
                <input
                  id="journal-newsletter-email"
                  type="email"
                  name="email"
                  autoComplete="email"
                  placeholder="Enter your work email address..."
                  value={newsletterEmail}
                  onChange={(e) => setNewsletterEmail(e.target.value)}
                  className="custom-input-box"
                  style={{ background: 'rgba(9, 6, 26, 0.8)', borderRadius: '100px', padding: '12px 24px' }}
                  required
                />
                <button type="submit" className="theme-btn-one hero-cta-pill flex-shrink-0">
                  <span className="btn-label">Request Monthly Dispatch</span>
                </button>
              </form>
            )}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
