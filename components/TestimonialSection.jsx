'use client';

const testimonialData = {
  company: 'FUSION GEAR',
  project: 'Custom Order Tracking & Waybill Generation System',
  headline:
    'Really happy with the service provided by Inversify! They developed an order tracking and waybill generation system for Fusion Gear, which has made our day-to-day operations so much easier.',
  body:
    'The system works smoothly, the team was professional and easy to communicate with, and they understood our requirements really well. What impressed us most was that they completed and delivered the project much earlier than expected.',
  conclusion: 'Highly recommended, and looking forward to working with them again!',
  clientName: 'Fusion Gear Operations',
  clientRole: 'Automated Logistics & Order Fulfillment',
  avatar: '/images/testi4-1.webp',
  metric: 'Early',
  metricLabel: 'ahead of schedule delivery',
  rating: '5.0',
};

export default function TestimonialSection() {
  return (
    <section id="testimonials" className="studio-testimonials studio-section">
      <div className="studio-testimonial-layout">
        <div className="studio-testimonial-heading">
          <span className="studio-kicker">IN GOOD COMPANY</span>
          <h2>
            We make things.<br />
            <em>We make friends.</em>
          </h2>
          <div className="studio-rating mb-4">
            <strong className="counter-animate">{testimonialData.rating}</strong>
            <span>
              <span aria-label="5 out of 5 stars">★★★★★</span>
              <small>Verified client rating</small>
            </span>
          </div>

          {/* Trust Highlights to balance column height */}
          <div className="testimonial-trust-points d-flex flex-column gap-2 pt-3 border-top border-secondary-subtle">
            <div className="d-flex align-items-center gap-2 text-white-50" style={{ fontSize: '13.5px' }}>
              <i className="fa-solid fa-circle-check text-cyan flex-shrink-0" style={{ fontSize: '13px' }}></i>
              <span>100% Client Code &amp; IP Ownership</span>
            </div>
            <div className="d-flex align-items-center gap-2 text-white-50" style={{ fontSize: '13.5px' }}>
              <i className="fa-solid fa-circle-check text-cyan flex-shrink-0" style={{ fontSize: '13px' }}></i>
              <span>Delivered Ahead of Promised Launch Date</span>
            </div>
            <div className="d-flex align-items-center gap-2 text-white-50" style={{ fontSize: '13.5px' }}>
              <i className="fa-solid fa-circle-check text-cyan flex-shrink-0" style={{ fontSize: '13px' }}></i>
              <span>Direct Colombo Engineering Support</span>
            </div>
          </div>
        </div>

        <article className="studio-quote-card" aria-live="polite">
          {/* Header Bar */}
          <div className="studio-quote-top d-flex align-items-center justify-content-between flex-wrap gap-3 mb-4">
            <div className="d-flex align-items-center gap-3">
              <span
                style={{
                  color: 'var(--studio-cyan, #76f6f5)',
                  fontFamily: 'Georgia, serif',
                  fontSize: '52px',
                  lineHeight: 0.8,
                  fontWeight: 400,
                }}
              >
                “
              </span>
              <div>
                <span className="studio-quote-company d-block fw-bold text-uppercase" style={{ letterSpacing: '0.12em', fontSize: '13px' }}>
                  {testimonialData.company}
                </span>
                <span className="text-secondary" style={{ fontSize: '12px' }}>
                  {testimonialData.project}
                </span>
              </div>
            </div>
            <div
              className="d-flex align-items-center gap-2 px-3 py-1 rounded-pill"
              style={{
                background: 'rgba(118, 246, 245, 0.08)',
                border: '1px solid rgba(118, 246, 245, 0.22)',
              }}
            >
              <i className="fa-solid fa-circle-check text-cyan" style={{ fontSize: '12px' }}></i>
              <span className="text-cyan fw-bold" style={{ fontSize: '11px', letterSpacing: '0.08em' }}>
                VERIFIED CLIENT REVIEW
              </span>
            </div>
          </div>

          {/* Structured Testimonial Content */}
          <div className="studio-quote-body mb-4">
            {/* Lead Headline */}
            <h3
              className="text-white mb-3"
              style={{
                fontSize: 'clamp(18px, 1.8vw, 22px)',
                lineHeight: 1.5,
                fontWeight: 700,
                letterSpacing: '-0.02em',
              }}
            >
              {testimonialData.headline}
            </h3>

            {/* Operational Story */}
            <p
              className="text-secondary mb-3"
              style={{
                fontSize: 'clamp(14.5px, 1.35vw, 16px)',
                lineHeight: 1.75,
              }}
            >
              {testimonialData.body}
            </p>

            {/* Recommendation Takeaway Strip */}
            <div
              className="p-3 rounded-3 d-flex align-items-center gap-3"
              style={{
                background: 'rgba(181, 65, 250, 0.08)',
                border: '1px solid rgba(181, 65, 250, 0.2)',
              }}
            >
              <i className="fa-solid fa-star text-warning flex-shrink-0" style={{ fontSize: '15px' }}></i>
              <span className="text-white fw-semibold" style={{ fontSize: '14.5px', lineHeight: 1.5 }}>
                {testimonialData.conclusion}
              </span>
            </div>
          </div>

          {/* Footer Bar */}
          <div className="studio-quote-bottom d-flex align-items-center justify-content-between flex-wrap gap-3 pt-3 border-top border-white border-opacity-10">
            <div className="studio-quote-person d-flex align-items-center gap-3">
              <img
                src={testimonialData.avatar}
                alt={testimonialData.clientName}
                style={{
                  width: '46px',
                  height: '46px',
                  borderRadius: '50%',
                  objectFit: 'cover',
                  border: '2px solid rgba(118, 246, 245, 0.3)',
                }}
              />
              <div>
                <strong className="text-white d-block" style={{ fontSize: '14.5px' }}>
                  {testimonialData.clientName}
                </strong>
                <small className="text-secondary" style={{ fontSize: '12.5px' }}>
                  {testimonialData.clientRole}
                </small>
              </div>
            </div>

            <div className="studio-quote-metric text-end">
              <strong className="counter-animate text-cyan d-block" style={{ fontSize: '26px', fontWeight: 800 }}>
                {testimonialData.metric}
              </strong>
              <small className="text-secondary" style={{ fontSize: '12px' }}>
                {testimonialData.metricLabel}
              </small>
            </div>
          </div>
        </article>
      </div>
    </section>
  );
}
