'use client';

import Link from 'next/link';

const principles = [
  { number: '01', title: 'People before pixels', copy: 'We start with the people on the other side of the screen. Their goals shape every decision.', image: '/images/service7-1.webp', href: '/services/ui-ux-design', label: 'Experience design' },
  { number: '02', title: 'Thoughtful by default', copy: 'A clear process, honest collaboration and purposeful craft—no mystery, no theatre.', image: '/images/service8-1.webp', href: '/services', label: 'How we work' },
  { number: '03', title: 'Built for real life', copy: 'Performance, accessibility and practical maintainability are part of the design, not extras.', image: '/images/service4-1.webp', href: '/services/web-development', label: 'Digital engineering' },
  { number: '04', title: 'Distinctive, not decorative', copy: 'We look for the detail that makes a brand memorable, then give it room to breathe.', image: '/images/service3-1.webp', href: '/services/branding-identity', label: 'Brand & identity' },
];

export default function FeatureServices() {
  return (
    <section className="studio-principles studio-section">
      <div className="studio-section-topline"><span>04 / HOW WE THINK</span><span>Good work, for the right reasons</span></div>
      <div className="studio-principles-intro"><div><span className="studio-kicker">THE INVERSIFY APPROACH</span><h2>Make it useful.<br /><em>Make it matter.</em></h2></div><p>Not a production line. A close-knit team that brings the right mix of curiosity, craft and technical depth to every challenge.</p></div>
      <div className="studio-principle-list">
        {principles.map((item) => <Link href={item.href} key={item.number} className="studio-principle-row"><span className="studio-principle-number">{item.number}</span><span className="studio-principle-image"><img src={item.image} alt="" loading="lazy" /></span><span className="studio-principle-main"><span className="studio-principle-label">{item.label}</span><strong>{item.title}</strong><span>{item.copy}</span></span><span className="studio-principle-arrow" aria-hidden="true">↗</span></Link>)}
      </div>
    </section>
  );
}
