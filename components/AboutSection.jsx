'use client';

import Link from 'next/link';

export default function AboutSection() {
  return (
    <section id="about" className="studio-about studio-section">
      <div className="studio-section-topline"><span>01 / WHO WE ARE</span><span>Independent thinking, built to last</span></div>
      <div className="studio-about-heading">
        <h2>Not just a digital<br /><em>presence.</em> A point of view.</h2>
        <div className="studio-about-intro">
          <p>We bring strategy, design and engineering into the same room. The result is digital work with a clear purpose—and a little more personality.</p>
          <Link href="/services" className="studio-arrow-link">Meet our capabilities <span aria-hidden="true">↗</span></Link>
        </div>
      </div>
      <div className="studio-about-stage">
        <div className="studio-about-photo"><img src="/images/about1-1.webp" alt="The Inversify team collaborating around a design table" loading="lazy" /><span className="studio-photo-note">COLOMBO STUDIO · EST. 2016</span></div>
        <div className="studio-about-note"><span className="studio-index">A small studio with a wide lens.</span><p>From ambitious first launches to complex platforms, we partner with teams who care about what they put into the world.</p><Link href="/projects" className="studio-arrow-link">See what we mean <span aria-hidden="true">↗</span></Link></div>
        <div className="studio-stat-block">
          <div className="studio-stat-number-wrap">
            <span className="studio-stat-number counter-animate">250</span>
            <span className="studio-stat-plus">+</span>
          </div>
          <span className="studio-stat-label">digital platforms<br />shipped with intent</span>
          <span className="studio-stat-foot">SMALL TEAM. SERIOUS CRAFT.</span>
        </div>
        <div className="studio-orbit-mark" aria-hidden="true"><span>IN</span><i /></div>
      </div>
    </section>
  );
}
