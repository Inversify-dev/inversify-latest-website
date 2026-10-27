'use client';

import Link from 'next/link';

export default function AboutSection() {
  return (
    <section id="about" className="studio-about studio-section">
      <div className="studio-section-topline">
        <span>01 / WHO WE ARE</span>
        <span className="studio-topline-sub">Independent thinking, built to last</span>
      </div>
      <div className="studio-about-heading">
        <h2>Not just a digital<br /><em>presence.</em> <span className="formal-cap-a">A</span> point of view.</h2>
        <div className="studio-about-intro">
          <p>We bring strategy, design, custom software and AI engineering into one room. The result is high-performance digital work that solves real operational challenges.</p>
          <Link href="/services" className="studio-arrow-link">Meet our capabilities <span aria-hidden="true">↗</span></Link>
        </div>
      </div>
      <div className="studio-about-stage">
        <div className="studio-about-photo">
          <img src="/images/about1-1.webp" alt="The Inversify team collaborating around a design table" loading="lazy" />
        </div>
        <div className="studio-about-note">
          <span className="studio-index">A focused studio with a wide lens.</span>
          <p>From ambitious online stores to complex bespoke management platforms, we partner with teams who care about craft and measurable momentum.</p>
          <Link href="/projects" className="studio-arrow-link">See our selected work <span aria-hidden="true">↗</span></Link>
        </div>
        <div className="studio-stat-block">
          <div className="studio-stat-number-wrap">
            <span className="studio-stat-number counter-animate">250</span>
            <span className="studio-stat-plus">+</span>
          </div>
          <span className="studio-stat-label">digital platforms &amp;<br />systems delivered</span>
          <span className="studio-stat-foot">SMALL TEAM. SERIOUS CRAFT.</span>
        </div>
      </div>
    </section>
  );
}
