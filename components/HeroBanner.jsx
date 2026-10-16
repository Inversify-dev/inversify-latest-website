'use client';
import Link from 'next/link';

export default function HeroBanner() {
  return (
    <section className="studio-hero studio-hero-fullbleed" aria-labelledby="studio-hero-title">
      <div className="studio-hero-art" aria-hidden="true">
        <div className="hero-art-image"><img src="/images/banner-11.jpg" alt="" fetchPriority="high" /></div>
        <div className="hero-fullbleed-glow" />
        <span className="hero-orbit-mark hero-orbit-mark-one" />
        <span className="hero-orbit-mark hero-orbit-mark-two" />
        <div className="hero-art-stamp"><span className="hero-art-stamp-wordmark">IN</span><small>CREATIVE<br />ENGINEERING</small></div>
      </div>
      <div className="studio-hero-grain" aria-hidden="true" />
      <div className="studio-hero-inner">
        <div className="studio-hero-copy">
          {/* <div className="studio-eyebrow" data-reveal="up"><span className="status-pip" /> Independent digital studio <span className="eyebrow-location">— Colombo · Working everywhere</span></div> */}
          <p className="hero-overline" data-reveal="up" aria-label="Good ideas, made real."><span className="hero-typewriter">GOOD IDEAS, MADE REAL.</span></p>
          <h1 id="studio-hero-title" className="studio-hero-title" data-reveal="up">We make<br /><span className="hero-font-accent">digital</span> mean<br className="hero-small-break" /> something.</h1>
          <div className="studio-hero-bottom" data-reveal="up">
            <p>Strategy, design and technology for businesses ready to move forward. Thoughtful by design. Built to make a difference.</p>
            <div className="studio-hero-actions">
              <Link href="/contact" className="studio-button studio-button-primary"><span>Start a conversation</span><span className="studio-button-icon" aria-hidden="true">↗</span></Link>
              <Link href="/projects" className="studio-button studio-button-quiet"><span>See what we’ve made</span><span className="studio-button-icon" aria-hidden="true">↗</span></Link>
            </div>
          </div>
        </div>
      </div>
      <div className="hero-image-caption"><span>01 / 04</span><span>Independent thinking. Measurable momentum.</span><span>Scroll to explore ↓</span></div>
      <div className="studio-hero-footer"><span>Strategy · Design · Engineering</span><span className="hero-scroll-line" aria-hidden="true" /><span>Colombo · Sri Lanka</span></div>
    </section>
  );
}
