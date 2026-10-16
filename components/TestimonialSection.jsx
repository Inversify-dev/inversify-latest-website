'use client';

import { useState } from 'react';

const testimonials = [
  { name: 'Dilan Jayawardena', role: 'Managing Director, Ceylon Luxe Organics', metric: '+320%', metricLabel: 'revenue growth', quote: 'Working with Inversify was a game-changer. They transformed our online platform with a sleek experience and PayHere integration that boosted our conversion rate within 60 days.', avatar: '/images/testi4-1.webp', company: 'CEYLON LUXE' },
  { name: 'Rashmi Senanayake', role: 'Head of Digital, Serendib Luxury Travel', metric: '0.4s', metricLabel: 'page load', quote: 'Their deep mastery of interaction design and performance optimization is unmatched. The site stayed fast and reliable right through our peak season.', avatar: '/images/testi4-2.webp', company: 'SERENDIB' },
  { name: 'Kavinda Perera', role: 'VP of Technology, LankaPay Gateway', metric: '99.99%', metricLabel: 'uptime', quote: 'Inversify delivered a mission-critical checkout application with fast response times, multi-currency processing and automated reconciliation—ahead of deadline.', avatar: '/images/testi4-3.webp', company: 'LANKAPAY' },
];

export default function TestimonialSection() {
  const [index, setIndex] = useState(0);
  const item = testimonials[index];
  const change = (step) => setIndex((index + step + testimonials.length) % testimonials.length);
  return (
    <section id="testimonials" className="studio-testimonials studio-section">
      <div className="studio-section-topline"><span>06 / GOOD WORDS</span><span>Measured in outcomes, remembered in people</span></div>
      <div className="studio-testimonial-layout"><div className="studio-testimonial-heading"><span className="studio-kicker">IN GOOD COMPANY</span><h2>We make things.<br /><em>We make friends.</em></h2><div className="studio-rating"><strong className="counter-animate">4.95</strong><span><span aria-label="5 out of 5 stars">★★★★★</span><small>Average client rating · 150+ projects</small></span></div></div>
        <article className="studio-quote-card" aria-live="polite" key={item.name}><div className="studio-quote-top"><span>“</span><span className="studio-quote-company">{item.company}</span><span className="studio-quote-count">0{index + 1} / 0{testimonials.length}</span></div><blockquote>{item.quote}</blockquote><div className="studio-quote-bottom"><div className="studio-quote-person"><img src={item.avatar} alt="" /><span><strong>{item.name}</strong><small>{item.role}</small></span></div><div className="studio-quote-metric"><strong className="counter-animate">{item.metric}</strong><small>{item.metricLabel}</small></div><div className="studio-quote-controls"><button type="button" onClick={() => change(-1)} aria-label="Previous testimonial">←</button><button type="button" onClick={() => change(1)} aria-label="Next testimonial">→</button></div></div></article>
      </div>
    </section>
  );
}
