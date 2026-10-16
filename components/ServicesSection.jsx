'use client';

import { useState } from 'react';
import Link from 'next/link';

const services = [
  { num: '01', title: 'Web design & engineering', slug: 'web-development', category: 'Digital platforms', tags: ['Next.js', 'React', 'Performance'], headline: 'Fast, considered websites that turn first impressions into forward motion.', desc: 'From brand-led websites to sophisticated applications, we make every interaction feel clear, useful and unmistakably yours.', image: '/images/project1-1.webp', stat: '0.4s', statLabel: 'LCP target', points: ['Strategy, UX and interface design', 'Responsive engineering, built to scale', 'Performance, accessibility and SEO foundations'] },
  { num: '02', title: 'Commerce & payments', slug: 'ecommerce-payhere', category: 'Digital commerce', tags: ['PayHere', 'Stripe', 'Checkout'], headline: 'A smoother way to sell—wherever your customers happen to be.', desc: 'Beautiful storefronts and low-friction checkout experiences, connected to the payment systems your customers already trust.', image: '/images/project1-2.webp', stat: '1 tap', statLabel: 'mobile-first', points: ['Product-led storefronts and catalogues', 'Local and international payment integration', 'Order, inventory and customer workflows'] },
  { num: '03', title: 'Product & experience design', slug: 'ui-ux-design', category: 'Digital products', tags: ['Research', 'Figma', 'Systems'], headline: 'Complex products made intuitive, cohesive and genuinely enjoyable.', desc: 'We turn customer insight into clear product journeys, expressive interfaces and design systems your team can keep building on.', image: '/images/project2-1.webp', stat: 'AA', statLabel: 'accessibility-led', points: ['Journey mapping and interaction design', 'Prototype-led validation and iteration', 'Flexible design systems and handoff'] },
  { num: '04', title: 'Brand & identity', slug: 'branding-identity', category: 'Brand worlds', tags: ['Identity', 'Art direction', 'Motion'], headline: 'A distinctive identity with enough depth to live everywhere.', desc: 'We build visual systems that give ambitious businesses a recognizable voice across digital products, campaigns and the real world.', image: '/images/service3-1.webp', stat: '360°', statLabel: 'brand thinking', points: ['Positioning and creative direction', 'Identity systems, typography and colour', 'Digital-first brand guidelines'] },
  { num: '05', title: 'Custom software & cloud', slug: 'cloud-apps', category: 'Connected systems', tags: ['Portals', 'Automation', 'Cloud'], headline: 'Tools and workflows designed around how your business actually works.', desc: 'When off-the-shelf software gets in the way, we build secure portals and operations tools that fit your people and process.', image: '/images/project1-3.webp', stat: '24/7', statLabel: 'ready to scale', points: ['Workflow discovery and technical architecture', 'Secure portals, dashboards and integrations', 'Cloud deployment and ongoing support'] },
];

export default function ServicesSection() {
  const [active, setActive] = useState(0);
  const service = services[active];
  return (
    <section id="services" className="studio-services studio-section">
      <div className="studio-section-topline"><span>02 / WHAT WE DO</span><span>One studio. Five ways to move.</span></div>
      <div className="studio-section-heading">
        <div><span className="studio-kicker">CAPABILITIES</span><h2>Good work takes<br /><em>more than one</em> discipline.</h2></div>
        <Link href="/services" className="studio-arrow-link">All services <span aria-hidden="true">↗</span></Link>
      </div>
      <div className="studio-capability-layout">
        <div className="studio-capability-list" role="tablist" aria-label="Inversify capabilities">
          {services.map((item, index) => (
            <button key={item.num} id={`capability-tab-${index}`} className={`studio-capability-tab ${active === index ? 'is-active' : ''}`} type="button" role="tab" aria-selected={active === index} aria-controls="capability-panel" onClick={() => setActive(index)}>
              <span className="studio-capability-num">{item.num}</span><span className="studio-capability-title">{item.title}</span><span className="studio-capability-arrow" aria-hidden="true">↗</span>
            </button>
          ))}
          <div className="studio-capability-foot"><span>01—05</span><span>DESIGN / BUILD / GROW</span></div>
        </div>
        <div className="studio-capability-panel" id="capability-panel" role="tabpanel" aria-labelledby={`capability-tab-${active}`} key={service.num}>
          <div className="studio-capability-image"><img src={service.image} alt="" loading="lazy" /><span className="studio-capability-image-label">{service.category}</span></div>
          <div className="studio-capability-copy"><div className="studio-capability-tags">{service.tags.map(tag => <span key={tag}>{tag}</span>)}</div><h3>{service.headline}</h3><p>{service.desc}</p>
            <ul>{service.points.map(point => <li key={point}><span aria-hidden="true">↗</span>{point}</li>)}</ul>
            <div className="studio-capability-bottom"><div><strong>{service.stat}</strong><span>{service.statLabel}</span></div><Link href={`/services/${service.slug}`} className="studio-button studio-button-light">Explore capability <span className="studio-button-icon" aria-hidden="true">↗</span></Link></div>
          </div>
        </div>
      </div>
    </section>
  );
}
