'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const links = [
  { href: '/', label: 'Home' },
  { href: '/projects', label: 'Work' },
  { href: '/services', label: 'Services' },
  { href: '/blog', label: 'Journal' },
  { href: '/contact', label: 'Contact' },
];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    const handleKeyDown = (event) => {
      if (event.key === 'Escape') setMobileMenuOpen(false);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  useEffect(() => setMobileMenuOpen(false), [pathname]);

  return (
    <>
      <header className={`izatic-navbar ${isScrolled ? 'is-scrolled' : ''}`}>
        <div className="izatic-nav-container">
          <div className="nav-container-inner">
            <div className="nav-left-wrapper">
              <Link href="/" className="nav-logo-link" aria-label="Inversify home">
                <span className="izatic-logo-icon" aria-hidden="true">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M4 5C4 3.89543 4.89543 3 6 3H10C11.1046 3 12 3.89543 12 5V19C12 20.1046 11.1046 21 10 21H6C4.89543 21 4 20.1046 4 19V5Z" fill="#09061A" />
                    <path d="M14 12C14 10.8954 14.8954 10 16 10H18C19.1046 10 20 10.8954 20 12V19C20 20.1046 19.1046 21 18 21H16C14.8954 21 14 20.1046 14 19V12Z" fill="#09061A" />
                    <circle cx="17" cy="5" r="2" fill="#09061A" />
                  </svg>
                </span>
                <span className="izatic-nav-text">INVERSIFY</span>
              </Link>
            </div>
            <nav className="nav-center-menu" aria-label="Main navigation">
              <ul className="nav-pill-menu">
                {links.map((link) => {
                  const active = link.href === '/' ? pathname === '/' : pathname.startsWith(link.href);
                  return <li className="nav-item" key={link.href}><Link href={link.href} className={`nav-link ${active ? 'active' : ''}`} aria-current={active ? 'page' : undefined}>{link.label}</Link></li>;
                })}
              </ul>
            </nav>
            <div className="nav-right-wrapper">
              <Link href="/contact" className="nav-call-pill" aria-label="Start a project">
                <span className="nav-pill-text">Start a project</span>
                <span className="nav-pill-icon" aria-hidden="true">↗</span>
              </Link>
              <button className="nav-mobile-toggle" type="button" onClick={() => setMobileMenuOpen(true)} aria-label="Open navigation menu" aria-expanded={mobileMenuOpen} aria-controls="mobile-navigation">
                <span className="hamburger-line" /><span className="hamburger-line" /><span className="hamburger-line" />
              </button>
            </div>
          </div>
        </div>
      </header>

      <div className={`mobile-drawer-backdrop ${mobileMenuOpen ? 'is-open' : ''}`} onClick={() => setMobileMenuOpen(false)} aria-hidden={!mobileMenuOpen}>
        <div className="mobile-drawer-panel" id="mobile-navigation" role="dialog" aria-modal="true" aria-label="Mobile navigation" onClick={(event) => event.stopPropagation()}>
          <div className="mobile-drawer-header">
            <Link href="/" className="nav-logo-link" onClick={() => setMobileMenuOpen(false)}>
              <span className="izatic-logo-icon" aria-hidden="true"><span className="izatic-logo-symbol">I</span></span>
              <span className="izatic-nav-text">INVERSIFY</span>
            </Link>
            <button className="mobile-drawer-close" type="button" onClick={() => setMobileMenuOpen(false)} aria-label="Close menu">×</button>
          </div>
          <nav className="mobile-drawer-body" aria-label="Mobile navigation links">
            <ul className="mobile-nav-links">
              {links.map((link) => <li key={link.href}><Link href={link.href} onClick={() => setMobileMenuOpen(false)}>{link.label}<span aria-hidden="true"> ↗</span></Link></li>)}
            </ul>
          </nav>
          <div className="mobile-drawer-footer">
            <div className="mobile-contact-info"><span className="loc-label">Colombo · Sri Lanka</span><p>Independent thinking. Measurable momentum.</p></div>
            <Link href="/contact" onClick={() => setMobileMenuOpen(false)} className="mobile-cta-btn"><span>Start a conversation</span><span aria-hidden="true">↗</span></Link>
          </div>
        </div>
      </div>
    </>
  );
}
