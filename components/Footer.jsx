'use client';

import React from 'react';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="studio-footer">
      <div className="studio-footer-top">
        <Link href="/" className="studio-footer-mark" aria-label="Inversify home">
          <div className="studio-footer-brand-wrap">
            <img
              src="/images/inversify-logo-white.webp"
              alt="Inversify"
              className="studio-footer-brand-logo"
              width={160}
              height={48}
              loading="lazy"
            />
            <small className="studio-footer-brand-tag"></small>
          </div>
        </Link>
        <div className="studio-footer-manifesto">Thoughtful by design.<br /><em>Built to make a difference.</em></div>
        <Link href="/contact" className="studio-footer-cta">Have a good one in mind? <span aria-hidden="true">↗</span></Link>
      </div>
      <div className="studio-footer-rule" />
      <div className="studio-footer-grid studio-footer-grid-3col">
        <div className="studio-footer-about">
          <p>We make useful, beautiful digital things for people moving business forward.</p>
          <div className="studio-footer-location"><span className="status-pip" /> COLOMBO · WORKING EVERYWHERE</div>
        </div>
        <div className="studio-footer-links">
          <span className="studio-footer-heading">EXPLORE</span>
          <Link href="/projects">Work</Link>
          <Link href="/services">Capabilities</Link>
          <Link href="/blog">Journal</Link>
          <Link href="/contact">Contact</Link>
        </div>
        <div className="studio-footer-links">
          <span className="studio-footer-heading">GET IN TOUCH</span>
          <a href="mailto:invert@inversify.lk">invert@inversify.lk</a>
          <a href="tel:+94704621228">+94 70 462 1228</a>
          <a href="https://wa.me/94704621228" target="_blank" rel="noreferrer">WhatsApp ↗</a>
        </div>
      </div>
      <div className="studio-footer-bottom">
        <span>© {new Date().getFullYear()} INVERSIFY TECHNOLOGIES</span>
        <span>MADE WITH INTENT IN COLOMBO, SRI LANKA</span>
        <div><Link href="/privacy">Privacy</Link><Link href="/terms">Terms &amp; Conditions</Link></div>
      </div>
    </footer>
  );
}
