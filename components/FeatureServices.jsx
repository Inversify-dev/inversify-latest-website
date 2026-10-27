'use client';

import Link from 'next/link';

const principles = [
  { number: '01', title: 'Website Design & Development', copy: 'Fast, modern custom websites designed to give your brand instant credibility and attract new customers.', image: '/images/service4-1.webp', href: '/services/web-development', label: 'Websites' },
  { number: '02', title: 'E-Commerce & Online Stores', copy: 'Clean shopping experiences with smooth payment integrations for easy card checkout and order tracking.', image: '/images/service8-1.webp', href: '/services/ecommerce-payhere', label: 'Online Stores' },
  { number: '03', title: 'Custom Software & Systems', copy: 'Bespoke business software, internal portals, order management dashboards, and ERP tools engineered for scale.', image: '/images/service-systems.jpg', href: '/services/custom-software', label: 'Software & Systems' },
  { number: '04', title: 'AI Automation', copy: 'Smart 24/7 customer chat assistants and automated workflows that handle routine business operations.', image: '/images/service7-1.webp', href: '/services/ai-automation', label: 'AI Workflows' },
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
