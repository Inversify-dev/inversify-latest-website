'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import PageTitle from '@/components/PageTitle';

const articlesDatabase = {
  'strong-online-presence': {
    title: 'How a Modern Website Can Double Your Business Inquiries & Sales',
    kicker: 'BUSINESS GROWTH GUIDE',
    category: 'Business Growth',
    date: 'October 28, 2026',
    author: 'Inversify Team',
    authorRole: 'Web Growth Consultant',
    authorAvatar: '/images/testi4-1.webp',
    readTime: '4 min read',
    image: '/images/blog1-1.webp',
    intro:
      'Your website is the single most important digital storefront your business owns. When customers hear about your company, the first thing they do is search for your website. Here is how a fast, modern website directly converts visitors into paying customers.',
    pullQuote:
      'A great website is not just a digital brochure-it is your hardest-working 24/7 salesperson, answering questions and collecting customer leads while you sleep.',
    sections: [
      {
        heading: '1. Why Website Speed Determines Your Sales',
        body: 'Over 60% of visitors browse websites on their smartphones. If your page takes more than 3 seconds to load, potential buyers hit the back button and buy from your competitors instead. A fast website immediately keeps their attention.',
      },
      {
        heading: '2. Building Instant Trust and Credibility',
        body: 'When your website looks clean, modern, and easy to read, visitors immediately perceive your business as established, trustworthy, and professional. Clear contact buttons and customer testimonials reassure them that they are making the right choice.',
      },
      {
        heading: '3. Making It Easy for Customers to Contact You',
        body: 'Every page should have a clear call to action: a 1-click WhatsApp button, a simple inquiry form, or a direct phone number. Removing friction makes it effortless for interested clients to reach out.',
      },
    ],
    takeaways: [
      'A fast website keeps mobile visitors engaged and prevents lost sales.',
      'Professional design builds instant credibility with high-paying clients.',
      'Clear WhatsApp and phone contact buttons dramatically increase inquiries.',
    ],
    nextSlug: 'visual-identity-shapes-success',
    nextTitle: 'How Professional Branding & Logo Design Attracts High-Paying Clients',
  },
  'visual-identity-shapes-success': {
    title: 'How Professional Branding & Logo Design Attracts High-Paying Clients',
    kicker: 'BRANDING & DESIGN',
    category: 'Branding & Design',
    date: 'September 15, 2026',
    author: 'Inversify Design Studio',
    authorRole: 'Senior Brand Designer',
    authorAvatar: '/images/testi4-2.webp',
    readTime: '4 min read',
    image: '/images/blog1-2.webp',
    intro:
      'Your brand identity is the visual promise you make to your customers. Having a cohesive, custom logo and color palette makes your company look established and allows you to command higher prices.',
    pullQuote:
      'People judge the quality of your services by the quality of your visual presentation. When you invest in great branding, your customers treat you with greater respect.',
    sections: [
      {
        heading: 'The Power of a Custom Vector Logo',
        body: 'Cheap online templates and generic logos make modern companies look small. A bespoke vector logo is mathematically sharp on mobile screens, storefront signboards, and corporate stationery.',
      },
      {
        heading: 'Consistent Colors and Typography Across All Touchpoints',
        body: 'Using the same clean fonts and cohesive color palette across your website, social media, and business cards creates a memorable impression that customers recognize instantly.',
      },
    ],
    takeaways: [
      'Custom vector logos can be enlarged to any size without losing sharpness.',
      'Consistent brand colors make your marketing instantly recognizable.',
      'Premium visual identity allows you to charge higher rates with confidence.',
    ],
    nextSlug: 'story-driven-branding',
    nextTitle: 'How to Accept Online Card Payments in Sri Lanka: The Complete Guide',
  },
  'story-driven-branding': {
    title: 'How to Accept Online Card Payments in Sri Lanka: The Complete Guide',
    kicker: 'E-COMMERCE & PAYMENTS',
    category: 'E-Commerce & Payments',
    date: 'September 02, 2026',
    author: 'E-Commerce Specialist',
    authorRole: 'Payment Systems Lead',
    authorAvatar: '/images/testi4-1.webp',
    readTime: '5 min read',
    image: '/images/blog1-3.webp',
    intro:
      'Selling products and services online in Sri Lanka has never been easier. Learn how setting up trusted payment gateways like PayHere allows your business to accept Visa, Mastercard, Genie, and direct bank transfers 24/7.',
    pullQuote:
      'Giving your customers the convenience to pay online with their credit card or debit card immediately increases your order volume and eliminates manual cash collection delays.',
    sections: [
      {
        heading: '1. Connecting PayHere and Local Payment Gateways',
        body: 'PayHere allows Sri Lankan businesses to accept card payments from local banks (Commercial Bank, Sampath Bank, HNB, BOC, Nations Trust) directly into your bank account with automated daily settlements.',
      },
      {
        heading: '2. Accepting International Currencies with Stripe',
        body: 'If you want to sell products to customers in the US, UK, Australia, or Europe, integrating Stripe multi-currency checkout allows customers to pay in USD, GBP, and EUR seamlessly.',
      },
      {
        heading: '3. Instant Customer SMS and Email Receipts',
        body: 'The moment a customer completes a payment, automated SMS and email notifications reassure them and give them their order tracking receipt immediately.',
      },
    ],
    takeaways: [
      'PayHere makes accepting local card payments in Sri Lanka fast and secure.',
      'Multi-currency support allows you to sell to international clients.',
      'Instant SMS receipts give buyers peace of mind and build loyalty.',
    ],
    nextSlug: 'modern-react-architecture',
    nextTitle: '5 Costly Website Mistakes That Drive Customers to Your Competitors',
  },
  'modern-react-architecture': {
    title: '5 Costly Website Mistakes That Drive Customers to Your Competitors',
    kicker: 'WEBSITE TIPS',
    category: 'Website Tips',
    date: 'August 20, 2026',
    author: 'Web Strategy Team',
    authorRole: 'Lead Consultant',
    authorAvatar: '/images/testi4-2.webp',
    readTime: '4 min read',
    image: '/images/news-1.webp',
    intro:
      'Is your website failing to generate leads? Here are the 5 most common website design mistakes business owners make and how fixing them can immediately boost your customer inquiries.',
    pullQuote:
      'Your website exists to serve your customers. When you make information easy to find and contact buttons prominent, your inquiries skyrocket.',
    sections: [
      {
        heading: 'Mistake #1: Hidden Contact Info and Phone Numbers',
        body: 'Visitors should never have to search for how to reach you. Keep a direct WhatsApp chat button and phone number visible at the top and bottom of every page.',
      },
      {
        heading: 'Mistake #2: Slow Loading Speeds on Mobile',
        body: 'Heavy, unoptimized images slow down your website. Modern websites use lightweight WebP image formats that load in the blink of an eye on mobile 4G/5G.',
      },
      {
        heading: 'Mistake #3: Too Much Confusing Industry Jargon',
        body: 'Explain what you do in simple, customer-friendly language. Focus on the problem you solve and the tangible benefits your clients receive.',
      },
    ],
    takeaways: [
      'Keep WhatsApp and phone buttons easily visible on all devices.',
      'Optimize image sizes to ensure instant mobile page loading.',
      'Use clear, simple words that customers understand immediately.',
    ],
    nextSlug: 'ai-powered-product-design',
    nextTitle: 'How to Rank Your Business on the First Page of Google in Sri Lanka',
  },
  'ai-powered-product-design': {
    title: 'How to Rank Your Business on the First Page of Google in Sri Lanka',
    kicker: 'GOOGLE SEO & RANKINGS',
    category: 'Google SEO & Rankings',
    date: 'August 08, 2026',
    author: 'SEO Team',
    authorRole: 'Search Marketing Lead',
    authorAvatar: '/images/testi4-1.webp',
    readTime: '5 min read',
    image: '/images/news-2.webp',
    intro:
      'When ready-to-buy customers search on Google for services in Colombo and Sri Lanka, does your website appear on page 1? Here is how practical SEO helps you capture high-intent inquiries every single day.',
    pullQuote:
      'Ranking on Google is the highest-ROI marketing channel because you are appearing right when a customer is actively looking to purchase your service.',
    sections: [
      {
        heading: '1. Setting Up Google Search Console & Business Profiles',
        body: 'Verifying your domain with Google Search Console ensures Google indexes every page of your website and shows your business on Google Maps and local search results.',
      },
      {
        heading: '2. Targeting High-Value Search Keywords',
        body: 'Structuring your website titles and headings around what customers actually type into Google connects you directly with interested buyers.',
      },
    ],
    takeaways: [
      'Google SEO brings you ready-to-buy customers without paying for ads.',
      'Mobile-friendly, fast websites receive higher search placement.',
      'Local Google business listings capture high-ticket regional inquiries.',
    ],
    nextSlug: 'cloud-security-compliance',
    nextTitle: 'Custom Web Portals vs Off-the-Shelf Software: Which Is Right for You?',
  },
  'cloud-security-compliance': {
    title: 'Custom Web Portals vs Off-the-Shelf Software: Which Is Right for You?',
    kicker: 'BUSINESS SOFTWARE',
    category: 'Business Software',
    date: 'July 24, 2026',
    author: 'Business Systems Team',
    authorRole: 'Systems Architect',
    authorAvatar: '/images/testi4-2.webp',
    readTime: '5 min read',
    image: '/images/news-3.webp',
    intro:
      'Are you outgrowing spreadsheets and generic subscription software? Here is a straightforward guide to help you decide when a custom web portal can save your team hours of manual work every week.',
    pullQuote:
      'Custom software is designed around your exact business workflow-saving time, eliminating errors, and giving you 100% control over your business data.',
    sections: [
      {
        heading: 'When to Choose Custom Software',
        body: 'If your business has unique booking requirements, custom customer portals, or specialized inventory workflows, custom software pays for itself in saved labor and increased operational speed.',
      },
      {
        heading: 'Full Data Ownership and Zero Monthly Per-User Fees',
        body: 'With custom web software built by Inversify, you own the entire system with zero expensive monthly per-user software licensing fees.',
      },
    ],
    takeaways: [
      'Custom web portals eliminate repetitive manual paperwork.',
      'You own your software and customer data 100% with no recurring seat fees.',
      'Staff can access the system securely from anywhere on laptop or mobile.',
    ],
    nextSlug: 'strong-online-presence',
    nextTitle: 'How a Modern Website Can Double Your Business Inquiries & Sales',
  },
};

export default function BlogArticlePage({ params }) {
  const [commentForm, setCommentForm] = useState({ name: '', email: '', message: '' });
  const [commentSubmitted, setCommentSubmitted] = useState(false);
  const [comments, setComments] = useState([
    {
      id: 1,
      name: 'Rohan Fernando',
      role: 'Business Owner',
      date: 'October 2026',
      avatar: '/images/testi4-1.webp',
      text: 'This guide explained website speed and customer conversion so clearly. We upgraded our site with Inversify and our inquiries doubled within a month!',
    },
    {
      id: 2,
      name: 'Nadeesha Senanayake',
      role: 'Marketing Director',
      date: 'September 2026',
      avatar: '/images/testi4-2.webp',
      text: 'Great practical advice on online card payments in Sri Lanka. Inversify made our PayHere store integration completely seamless.',
    },
  ]);

  const routeParams = params && typeof params.then === 'function' ? React.use(params) : params;
  const slug = routeParams?.slug || 'strong-online-presence';
  const article = articlesDatabase[slug] || articlesDatabase['strong-online-presence'];

  const handleCommentSubmit = (e) => {
    e.preventDefault();
    if (!commentForm.name || !commentForm.email || !commentForm.message) return;

    const newEntry = {
      id: Date.now(),
      name: commentForm.name,
      role: 'Reader',
      date: 'Just now',
      avatar: '/images/testi4-1.webp',
      text: commentForm.message,
    };

    setComments([...comments, newEntry]);
    setCommentForm({ name: '', email: '', message: '' });
    setCommentSubmitted(true);
    setTimeout(() => setCommentSubmitted(false), 6000);
  };

  return (
    <main className="blog-article-root">
      <Header />
      <PageTitle
        tag={article.kicker}
        title={article.title}
        description={`Written by ${article.author} • ${article.readTime}`}
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'Blog', href: '/blog' },
          { label: 'Article' },
        ]}
      />

      <article className="article-reading-section pt-90 pb-120">
        <div className="container">
          {/* Centered 800px Focused Reading Column with Generous Breathing Room */}
          <div className="article-reading-container mx-auto max-w-800">
            {/* Author Attribution & Date Header with Generous Margin */}
            <div className="author-bar-wrap d-flex justify-content-between align-items-center flex-wrap gap-3 border-bottom border-secondary-subtle">
              <div className="d-flex align-items-center gap-3">
                <img
                  src={article.authorAvatar}
                  alt={article.author}
                  className="rounded-circle"
                  style={{ width: '48px', height: '48px', objectFit: 'cover' }}
                />
                <div>
                  <div className="text-white fw-bold" style={{ fontSize: '15px' }}>{article.author}</div>
                  <div className="text-secondary" style={{ fontSize: '13px' }}>{article.authorRole}</div>
                </div>
              </div>

              <div className="d-flex align-items-center gap-3 text-secondary" style={{ fontSize: '13.5px' }}>
                <span className="blog-category-pill">{article.category}</span>
                <span>{article.date}</span>
                <span>•</span>
                <span className="text-cyan">{article.readTime}</span>
              </div>
            </div>

            {/* Featured Image with High Clearance */}
            <div className="article-featured-image-frame rounded-4 overflow-hidden">
              <img
                src={article.image}
                alt={article.title}
                className="w-100 object-fit-cover"
                style={{ maxHeight: '420px', display: 'block' }}
              />
            </div>

            {/* Article Intro */}
            <p className="article-lead-text text-white mb-5" style={{ fontSize: '19px', lineHeight: 1.85, fontWeight: 400 }}>
              {article.intro}
            </p>

            {/* Pull Quote */}
            {article.pullQuote && (
              <blockquote className="article-pull-quote my-5 p-4 p-md-5 rounded-3">
                <p className="mb-0 text-white fw-semibold" style={{ fontSize: '18px', fontStyle: 'normal', lineHeight: 1.75 }}>
                  "{article.pullQuote}"
                </p>
              </blockquote>
            )}

            {/* Main Sections */}
            {article.sections &&
              article.sections.map((sec, idx) => (
                <div key={idx} className="article-body-section my-5">
                  <h2 className="text-white mb-3" style={{ fontSize: '24px', fontWeight: 800 }}>
                    {sec.heading}
                  </h2>
                  <p className="text-secondary" style={{ fontSize: '16.5px', lineHeight: 1.85 }}>
                    {sec.body}
                  </p>
                </div>
              ))}

            {/* Key Takeaways Box */}
            {article.takeaways && article.takeaways.length > 0 && (
              <div className="article-takeaways-card p-4 p-md-5 rounded-4 my-5">
                <h3 className="text-white mb-3" style={{ fontSize: '20px', fontWeight: 700 }}>
                  <i className="fa-solid fa-lightbulb text-cyan me-2"></i> Key Takeaways
                </h3>
                <ul className="mb-0 list-unstyled d-flex flex-column gap-3">
                  {article.takeaways.map((item, i) => (
                    <li key={i} className="d-flex align-items-start gap-2 text-white" style={{ fontSize: '15px', lineHeight: 1.6 }}>
                      <i className="fa-solid fa-circle-check text-cyan mt-1" style={{ fontSize: '14px' }}></i>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* In-Article Conversion Callout */}
            <div className="p-4 p-md-5 rounded-4 my-5 text-center" style={{ background: 'rgba(33, 24, 81, 0.5)', border: '1px solid rgba(181, 65, 250, 0.3)' }}>
              <h3 className="text-white mb-2" style={{ fontSize: '22px', fontWeight: 800 }}>
                Ready to Upgrade Your Business Website?
              </h3>
              <p className="text-secondary mb-4 mx-auto" style={{ maxWidth: '500px', fontSize: '15px' }}>
                Let our team in Colombo build a fast, high-converting website for your brand. Contact us for a free quote.
              </p>
              <div className="d-flex justify-content-center gap-3 flex-wrap">
                <Link href="/contact" className="theme-btn-one hero-cta-pill">
                  <span className="btn-label">Get A Free Quote</span>
                </Link>
                <a
                  href="https://wa.me/94704621228?text=Hi%20Inversify,%20I%20read%20your%20article%20and%20would%20like%20to%20get%20a%20quote."
                  target="_blank"
                  rel="noreferrer"
                  className="whatsapp-direct-btn d-inline-flex align-items-center justify-content-center gap-2 p-3 rounded-3"
                >
                  <i className="fa-brands fa-whatsapp" style={{ fontSize: '18px' }}></i>
                  <span>Chat on WhatsApp</span>
                </a>
              </div>
            </div>

            {/* Article Share & Tags */}
            <div className="article-footer-tags py-4 my-5 d-flex justify-content-between align-items-center flex-wrap gap-3 border-top border-bottom border-secondary-subtle">
              <div className="d-flex align-items-center gap-2">
                <span className="text-secondary" style={{ fontSize: '13px', fontWeight: 600 }}>TOPIC:</span>
                <span className="tech-chip-item">{article.category}</span>
                <span className="tech-chip-item">Business Growth</span>
              </div>

              <div className="d-flex align-items-center gap-2">
                <span className="text-secondary" style={{ fontSize: '13px' }}>SHARE:</span>
                <a href="https://twitter.com" target="_blank" rel="noreferrer" className="share-icon-btn">
                  <i className="fa-brands fa-x-twitter"></i>
                </a>
                <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="share-icon-btn">
                  <i className="fa-brands fa-linkedin-in"></i>
                </a>
              </div>
            </div>

            {/* Next / Prev Article Banner */}
            {article.nextSlug && (
              <div className="next-article-box p-4 rounded-4 my-5 d-flex justify-content-between align-items-center flex-wrap gap-3">
                <div>
                  <span className="text-cyan d-block mb-1" style={{ fontSize: '12px', textTransform: 'uppercase', letterSpacing: '1px' }}>
                    RECOMMENDED READING &rarr;
                  </span>
                  <Link href={`/blog/${article.nextSlug}`} className="text-white fw-bold hover-cyan" style={{ fontSize: '17px' }}>
                    {article.nextTitle}
                  </Link>
                </div>
                <Link href={`/blog/${article.nextSlug}`} className="theme-btn-three hero-cta-pill">
                  <span>Read Guide</span>
                </Link>
              </div>
            )}

            {/* Discussion & Comments Section */}
            <div className="article-discussion-section pt-5 mt-5">
              <h3 className="text-white mb-4" style={{ fontSize: '22px', fontWeight: 700 }}>
                Reader Discussion ({comments.length})
              </h3>

              <div className="comments-stream mb-5 d-flex flex-column gap-3">
                {comments.map((c) => (
                  <div key={c.id} className="comment-bubble-card p-4 rounded-4">
                    <div className="d-flex justify-content-between align-items-center mb-2">
                      <div className="d-flex align-items-center gap-2">
                        <img src={c.avatar} alt={c.name} className="rounded-circle" style={{ width: '36px', height: '36px', objectFit: 'cover' }} />
                        <div>
                          <span className="text-white fw-bold d-block" style={{ fontSize: '14px' }}>{c.name}</span>
                          <span className="text-secondary" style={{ fontSize: '12px' }}>{c.role}</span>
                        </div>
                      </div>
                      <span className="text-cyan" style={{ fontSize: '12px' }}>{c.date}</span>
                    </div>
                    <p className="text-secondary mb-0" style={{ fontSize: '14.5px', lineHeight: 1.65 }}>
                      {c.text}
                    </p>
                  </div>
                ))}
              </div>

              {/* Leave a Comment Form */}
              <div className="leave-comment-box p-4 p-md-5 rounded-4">
                <h4 className="text-white mb-2" style={{ fontSize: '19px', fontWeight: 700 }}>
                  Leave a Thought or Question
                </h4>
                <p className="text-secondary mb-4" style={{ fontSize: '14px' }}>
                  Have a question about websites, online payments, or digital marketing? Ask our team below.
                </p>

                {commentSubmitted && (
                  <div className="p-3 rounded-3 mb-4" style={{ background: 'rgba(118, 246, 245, 0.15)', border: '1px solid #76F6F5', color: '#fff' }}>
                    <i className="fa-solid fa-circle-check text-cyan me-2"></i> Thank you! Your comment has been posted.
                  </div>
                )}

                <form onSubmit={handleCommentSubmit} noValidate>
                  <div className="row g-3">
                    <div className="col-sm-6">
                      <label className="field-label text-secondary mb-1" style={{ fontSize: '13px' }}>Your Name *</label>
                      <input
                        type="text"
                        placeholder="e.g. Kasun Perera"
                        value={commentForm.name}
                        onChange={(e) => setCommentForm({ ...commentForm, name: e.target.value })}
                        className="custom-input-box w-100"
                        required
                      />
                    </div>
                    <div className="col-sm-6">
                      <label className="field-label text-secondary mb-1" style={{ fontSize: '13px' }}>Your Email *</label>
                      <input
                        type="email"
                        placeholder="e.g. kasun@company.com"
                        value={commentForm.email}
                        onChange={(e) => setCommentForm({ ...commentForm, email: e.target.value })}
                        className="custom-input-box w-100"
                        required
                      />
                    </div>
                    <div className="col-12">
                      <label className="field-label text-secondary mb-1" style={{ fontSize: '13px' }}>Your Question or Comment *</label>
                      <textarea
                        rows="4"
                        placeholder="Write your thoughts..."
                        value={commentForm.message}
                        onChange={(e) => setCommentForm({ ...commentForm, message: e.target.value })}
                        className="custom-input-box w-100"
                        required
                      ></textarea>
                    </div>
                    <div className="col-12 mt-3">
                      <button type="submit" className="theme-btn-one hero-cta-pill">
                        <span className="btn-label">Post Comment</span>
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </article>

      <Footer />
    </main>
  );
}
