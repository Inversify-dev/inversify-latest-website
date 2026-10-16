'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function Footer() {
  const [newsletterPrepared, setNewsletterPrepared] = useState(false);

  const handleNewsletterRequest = (event) => {
    event.preventDefault();
    const email = String(new FormData(event.currentTarget).get('email') || '').trim();
    if (!email) return;

    const subject = 'Request for the Inversify monthly note';
    const body = `Please send the Inversify monthly design and technology note to:\n\n${email}\n\nI understand that this request only takes effect after I send this email.`;
    window.location.href = `mailto:hello@inversify.lk?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    setNewsletterPrepared(true);
    event.currentTarget.reset();
  };

  return (
    <footer className="studio-footer">
      <div className="studio-footer-top">
        <Link href="/" className="studio-footer-mark" aria-label="Inversify home">
          <span className="studio-brand-symbol">i<span>.</span></span>
          <span>INVERSIFY<small>INDEPENDENT DIGITAL STUDIO</small></span>
        </Link>
        <div className="studio-footer-manifesto">Thoughtful by design.<br /><em>Built to make a difference.</em></div>
        <Link href="/contact" className="studio-footer-cta">Have a good one in mind? <span aria-hidden="true">↗</span></Link>
      </div>
      <div className="studio-footer-rule" />
      <div className="studio-footer-grid">
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
          <a href="mailto:hello@inversify.lk">hello@inversify.lk</a>
          <a href="tel:+94112345678">+94 (11) 234 5678</a>
          <a href="https://wa.me/94771234567" target="_blank" rel="noreferrer">WhatsApp ↗</a>
        </div>
        <div className="studio-footer-newsletter">
          <span className="studio-footer-heading">A NOTE NOW AND THEN</span>
          <p>Small dispatches on design, technology and good business.</p>
          {newsletterPrepared ? (
            <p className="studio-footer-newsletter-note" role="status" aria-live="polite">
              Review the draft and press Send to request the note. Nothing is subscribed automatically.
            </p>
          ) : (
            <>
              <form onSubmit={handleNewsletterRequest}>
                <label className="visually-hidden" htmlFor="footer-email">Your email address</label>
                <input id="footer-email" name="email" type="email" autoComplete="email" required aria-describedby="footer-newsletter-note" placeholder="Your email address" />
                <button type="submit" aria-label="Prepare a newsletter request email" title="Prepare an email request"><span aria-hidden="true">↗</span></button>
              </form>
              <p id="footer-newsletter-note" className="studio-footer-newsletter-note">Opens an email draft; nothing is sent until you press Send.</p>
            </>
          )}
        </div>
      </div>
      <div className="studio-footer-bottom">
        <span>© {new Date().getFullYear()} INVERSIFY TECHNOLOGIES</span>
        <span>MADE WITH INTENT IN COLOMBO, SRI LANKA</span>
        <div><Link href="/contact">Privacy</Link><Link href="/contact">Terms</Link></div>
      </div>
    </footer>
  );
}
