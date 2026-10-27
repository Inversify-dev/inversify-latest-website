'use client';

import { useState } from 'react';

const faqs = [
  { q: 'What services does Inversify provide?', a: 'We focus on four core disciplines: Website Design & Development, E-Commerce Storefronts with Payment Integrations, Custom Software & Internal Business Systems, and 24/7 AI Automation.' },
  { q: 'How long does a typical project take?', a: 'Custom business websites and online stores typically launch in 2 to 4 weeks. Custom software systems and AI workflows take 2 to 4 weeks, with live staging previews provided at each milestone.' },
  { q: 'Can you integrate online payment gateways for e-commerce?', a: 'Yes. We integrate secure card gateways for local and international payments directly into your business account with automated instant SMS and WhatsApp receipts.' },
  { q: 'Who owns the website and source code when completed?', a: 'Your business has complete operational ownership of the live website, domain, branding, uploaded media, and customer database upon final project settlement.' },
  { q: 'What are your payment terms and revision limits?', a: 'We work on a transparent 50% milestone advance before work starts, with the remaining 50% upon final sign-off before handover. Each project brief includes agreed revision rounds.' },
];

export default function FaqSection() {
  const [active, setActive] = useState(0);
  return (
    <section id="faq" className="studio-faq studio-section">
      <div className="studio-section-topline"><span>05 / THE DETAILS</span><span>Clarity is part of good work</span></div>
      <div className="studio-faq-layout">
        <div className="studio-faq-intro"><span className="studio-kicker">A FEW GOOD QUESTIONS</span><h2>Curious?<br /><em>Start here.</em></h2><p>Still wondering if we’re the right fit? Tell us what you’re thinking-we’re happy to talk it through.</p><a href="mailto:invert@inversify.lk" className="studio-arrow-link">Ask us directly <span aria-hidden="true">↗</span></a></div>
        <div className="studio-faq-list">{faqs.map((item, i) => <article className={`studio-faq-item ${active === i ? 'is-open' : ''}`} key={item.q}><button type="button" className="studio-faq-question" aria-expanded={active === i} aria-controls={`studio-faq-answer-${i}`} onClick={() => setActive(active === i ? -1 : i)}><span className="studio-faq-number">0{i + 1}</span><span>{item.q}</span><span className="studio-faq-toggle" aria-hidden="true">{active === i ? '−' : '+'}</span></button>{active === i && <div id={`studio-faq-answer-${i}`} className="studio-faq-answer"><p>{item.a}</p></div>}</article>)}</div>
      </div>
    </section>
  );
}
