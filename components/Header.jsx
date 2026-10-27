'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const links = [
  { href: '/', label: 'Home' },
  { href: '/projects', label: 'Work' },
  { href: '/services', label: 'Services' },
  { href: '/blog', label: 'Journal' },
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

  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
      document.documentElement.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
      document.documentElement.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
      document.documentElement.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  return (
    <>
      <header className={`inversifyv1-navbar ${isScrolled ? 'is-scrolled' : ''}`}>
        <div className="inversifyv1-nav-container">
          <div className="nav-container-inner">
            <div className="nav-left-wrapper">
              <Link href="/" className="nav-logo-link" aria-label="Inversify home">
                <img
                  src="/images/inversify-logo-white.webp"
                  alt="Inversify"
                  className="inversify-nav-logo"
                  width={140}
                  height={42}
                  fetchPriority="high"
                />
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

      {mobileMenuOpen && (
        <div className="mobile-drawer-backdrop is-open" onClick={() => setMobileMenuOpen(false)} aria-hidden="false">
          <div className="mobile-drawer-panel" id="mobile-navigation" role="dialog" aria-modal="true" aria-label="Mobile navigation" onClick={(event) => event.stopPropagation()}>
            <div className="mobile-drawer-header">
              <Link href="/" className="nav-logo-link" onClick={() => setMobileMenuOpen(false)} aria-label="Inversify home">
                <img
                  src="/images/inversify-logo-white.webp"
                  alt="Inversify"
                  className="inversify-nav-logo"
                  width={130}
                  height={40}
                />
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
              <Link href="/contact" onClick={() => setMobileMenuOpen(false)} className="mobile-cta-btn"><span>Start a project</span><span aria-hidden="true">↗</span></Link>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
