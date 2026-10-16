'use client';

import Link from 'next/link';

const projects = [
  { title: 'LankaPay Global Gateway', slug: 'lankapay-global-gateway', category: 'FinTech / Payments', year: '2026', image: '/images/project1-1.webp', result: 'A faster way to pay.' },
  { title: 'Ceylon Luxe Organics', slug: 'ceylon-luxe-organics', category: 'Commerce / Lifestyle', year: '2026', image: '/images/project1-2.webp', result: 'A storefront with staying power.' },
  { title: 'Vertex Cloud Enterprise ERP', slug: 'vertex-cloud-erp', category: 'Cloud / Operations', year: '2026', image: '/images/project1-3.webp', result: 'Clarity across every operation.' },
  { title: 'Serendib Luxury Hospitality', slug: 'serendib-luxury-hospitality', category: 'Hospitality / Booking', year: '2026', image: '/images/project1-4.webp', result: 'A more direct guest journey.' },
];

export default function ProjectsSection() {
  return (
    <section id="projects" className="studio-work studio-section">
      <div className="studio-section-topline"><span>03 / SELECTED WORK</span><span>Good ideas, out in the world</span></div>
      <div className="studio-section-heading studio-work-heading"><div><span className="studio-kicker">A FEW THINGS WE’VE MADE</span><h2>Work with<br /><em>something</em> to say.</h2></div><div className="studio-work-aside"><p>We partner with ambitious people to make useful, beautiful digital things—and make them matter.</p><Link href="/projects" className="studio-arrow-link">Explore all projects <span aria-hidden="true">↗</span></Link></div></div>
      <div className="studio-work-grid">
        {projects.map((project, index) => (
          <Link href={`/projects/${project.slug}`} className={`studio-work-card studio-work-card-${index + 1}`} key={project.slug}>
            <div className="studio-work-image"><img src={project.image} alt={project.title} loading="lazy" /><span className="studio-work-number">0{index + 1}</span><span className="studio-work-visit" aria-hidden="true">↗</span></div>
            <div className="studio-work-meta"><span>{project.category}</span><span>{project.year}</span></div>
            <div className="studio-work-title-row"><h3>{project.title}</h3><span>{project.result}</span></div>
          </Link>
        ))}
      </div>
    </section>
  );
}
