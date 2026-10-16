'use client';

import { useState } from 'react';

const faqs = [
  { q: 'What does Inversify do?', a: 'We bring strategy, design and technology together. Our work spans custom websites and applications, e-commerce and payment integrations, product design, brand identity, and cloud software.' },
  { q: 'How long does a typical project take?', a: 'A focused website often takes two to four weeks. E-commerce, portals and custom software vary with scope; we agree the milestones up front and share progress through working previews.' },
  { q: 'Can you integrate Sri Lankan payment gateways?', a: 'Yes. We work with PayHere and other local providers, as well as international payment options such as Stripe where available.' },
  { q: 'Who owns the work when it is finished?', a: 'Your business owns the agreed design and code deliverables. We make handover, documentation and the practical next steps part of the delivery—not an afterthought.' },
];

export default function FaqSection() {
  const [active, setActive] = useState(0);
  return (
    <section id="faq" className="studio-faq studio-section">
      <div className="studio-section-topline"><span>05 / THE DETAILS</span><span>Clarity is part of good work</span></div>
      <div className="studio-faq-layout">
        <div className="studio-faq-intro"><span className="studio-kicker">A FEW GOOD QUESTIONS</span><h2>Curious?<br /><em>Start here.</em></h2><p>Still wondering if we’re the right fit? Tell us what you’re thinking—we’re happy to talk it through.</p><a href="mailto:hello@inversify.lk" className="studio-arrow-link">Ask us directly <span aria-hidden="true">↗</span></a></div>
        <div className="studio-faq-list">{faqs.map((item, i) => <article className={`studio-faq-item ${active === i ? 'is-open' : ''}`} key={item.q}><button type="button" className="studio-faq-question" aria-expanded={active === i} aria-controls={`studio-faq-answer-${i}`} onClick={() => setActive(active === i ? -1 : i)}><span className="studio-faq-number">0{i + 1}</span><span>{item.q}</span><span className="studio-faq-toggle" aria-hidden="true">{active === i ? '−' : '+'}</span></button>{active === i && <div id={`studio-faq-answer-${i}`} className="studio-faq-answer"><p>{item.a}</p></div>}</article>)}</div>
      </div>
    </section>
  );
}
