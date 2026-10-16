'use client';

import React from 'react';
import Link from 'next/link';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function NotFound() {
  return (
    <main className="not-found-wrapper min-vh-100 d-flex flex-column justify-content-between" style={{ background: 'var(--dark-base)' }}>
      <Header />
      <div className="container py-120 text-center my-auto">
        <div className="badge-status-pill d-inline-flex mb-4">
          <span className="beacon-dot"></span>
          <span>Error 404 • Resource Not Found</span>
        </div>
        <h1 className="text-white mb-3" style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(3rem, 8vw, 6rem)', fontWeight: 800, letterSpacing: '-0.03em' }}>
          4<span style={{ background: 'var(--gradient-hero)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>0</span>4
        </h1>
        <h2 className="text-white mb-3" style={{ fontFamily: 'var(--font-display)', fontSize: '24px', fontWeight: 700 }}>
          Page Lost In Cyberspace
        </h2>
        <p className="text-secondary mx-auto mb-5" style={{ maxWidth: '520px', fontSize: '16px', lineHeight: 1.7 }}>
          The digital destination you are looking for has been moved, renamed, or temporarily archived. Let’s guide you back to our flagship platforms.
        </p>
        <div className="d-flex justify-content-center gap-3 flex-wrap">
          <Link href="/" className="theme-btn-one hero-cta-pill">
            <span className="btn-label">Back to Homepage</span>
            <span className="btn-arrow-circle">
              <svg width="13" height="13" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1.5 12.5L12.5 1.5M12.5 1.5H3.5M12.5 1.5V10.5" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </span>
          </Link>
          <Link href="/services" className="theme-btn-three hero-cta-pill">
            <span>Explore Services</span>
          </Link>
        </div>
      </div>
      <Footer />
    </main>
  );
}
