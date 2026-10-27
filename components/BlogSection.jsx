'use client';

import Link from 'next/link';

const posts = [
  { title: 'Why sub-second website speed doubles client inquiries', slug: 'strong-online-presence', date: 'OCT 2026', read: '5 MIN', image: '/images/blog1-1.webp', category: 'Web Architecture', excerpt: 'How clean code and instant mobile loading convert casual visitors into verified business inquiries.' },
  { title: 'Deploying 24/7 AI assistants to eliminate manual busywork', slug: 'visual-identity-shapes-success', date: 'SEP 2026', read: '4 MIN', image: '/images/blog1-2.webp', category: 'AI Automation', excerpt: 'Automating lead qualification and customer WhatsApp replies without increasing payroll.' },
  { title: 'The merchant guide to online card checkout in Sri Lanka', slug: 'story-driven-branding', date: 'SEP 2026', read: '6 MIN', image: '/images/blog1-3.webp', category: 'Digital Commerce', excerpt: 'Setting up frictionless card checkout, instant WhatsApp alerts, and automated stock sync.' },
];

export default function BlogSection() {
  const lead = posts[0];
  return (
    <section id="blog" className="studio-journal studio-section">
      <div className="studio-section-topline"><span>07 / FIELD NOTES</span><span>Ideas we keep coming back to</span></div>
      <div className="studio-section-heading"><div><span className="studio-kicker">THE JOURNAL</span><h2>Notes from the<br /><em>work in progress.</em></h2></div><Link href="/blog" className="studio-arrow-link">All stories <span aria-hidden="true">↗</span></Link></div>
      <div className="studio-journal-grid"><Link href={`/blog/${lead.slug}`} className="studio-journal-lead"><div className="studio-journal-image"><img src={lead.image} alt="" loading="lazy" /><span className="studio-journal-image-label">{lead.category}</span></div><div className="studio-journal-lead-copy"><div className="studio-journal-meta"><span>{lead.date}</span><span>{lead.read}</span></div><h3>{lead.title}</h3><p>{lead.excerpt}</p><span className="studio-arrow-link">Read the story <span aria-hidden="true">↗</span></span></div></Link>
        <div className="studio-journal-list">{posts.slice(1).map((post, i) => <Link href={`/blog/${post.slug}`} className="studio-journal-item" key={post.slug}><span className="studio-journal-index">0{i + 2}</span><span className="studio-journal-item-image"><img src={post.image} alt="" loading="lazy" /></span><span className="studio-journal-item-copy"><span className="studio-journal-meta"><span>{post.category}</span><span>{post.read}</span></span><strong>{post.title}</strong><span className="studio-journal-date">{post.date}</span></span><span className="studio-principle-arrow" aria-hidden="true">↗</span></Link>)}</div>
      </div>
    </section>
  );
}
