'use client';

import { useState } from 'react';

const testimonials = [
  {
    name: 'Jersey Cloud Operations',
    role: 'Co-Founder & Operations Lead',
    metric: '+310%',
    metricLabel: 'checkout growth',
    quote: 'Inversify transformed our online storefront with a seamless card checkout that doubled conversion during major match weeks.',
    avatar: '/images/testi4-1.webp',
    company: 'JERSEY CLOUD',
  },
  {
    name: 'Colombo Athletic FC',
    role: 'Academy Director',
    metric: '+420%',
    metricLabel: 'player enrollments',
    quote: 'Their execution for our AC Milan Academy partner platform was extraordinary. Parents enroll with ease and trust our elite standards.',
    avatar: '/images/testi4-2.webp',
    company: 'COLOMBO ATHLETIC FC',
  },
  {
    name: 'Mint B2B Solutions',
    role: 'Operations Director',
    metric: '100%',
    metricLabel: 'compliance score',
    quote: 'A mission-critical portal engineered for Australian financial practices. Lightning fast, rock-solid security, and strict compliance.',
    avatar: '/images/testi4-3.webp',
    company: 'MINT B2B SOLUTIONS',
  },
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
