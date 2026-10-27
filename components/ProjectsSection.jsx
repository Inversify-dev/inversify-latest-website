'use client';

import Link from 'next/link';

const projects = [
  {
    title: 'Jersey Cloud',
    slug: 'jerseycloud',
    category: 'E-Commerce / Retail Store',
    year: '2026',
    image: '/images/projects/jerseycloud.webp',
    result: 'High-converting sportswear store with automated online checkout and island-wide delivery.',
    domain: 'jerseycloud.lk',
  },
  {
    title: 'Qaidh Sinnalebbe',
    slug: 'qaidh',
    category: 'Film Direction / Portfolio',
    year: '2026',
    image: '/images/projects/qaidh.webp',
    result: 'Cinematic portfolio and visual showcase for an international filmmaker and creative director.',
    domain: 'qaidh.com',
  },
  {
    title: 'Colombo Athletic FC',
    slug: 'colombo-athletic-football-club',
    category: 'Sports Academy / AC Milan Partner',
    year: '2026',
    image: '/images/projects/cafc.webp',
    result: 'Official AC Milan Academy enrollment engine and youth tournament platform.',
    domain: 'colomboathleticfootballclub.com',
  },
  {
    title: 'Mint B2B Solutions',
    slug: 'mint-b2b-solutions',
    category: 'Enterprise / B2B Operations',
    year: '2026',
    image: '/images/projects/mintb2b.webp',
    result: 'Secure offshore back-office hub built for Australian financial advisory practices.',
    domain: 'mintb2bsolutions.com',
  },
  {
    title: 'Fusion Gear',
    slug: 'fusion-gear',
    category: 'Order Management System',
    year: '2026',
    image: '/images/projects/fusiongear-admin.webp',
    result: 'Centralised operations dashboard with real-time customer package tracking.',
    domain: 'Internal System',
  },
];

export default function ProjectsSection() {
  return (
    <section id="projects" className="studio-work studio-section">
      <div className="studio-section-topline"><span>03 / SELECTED WORK</span><span>Good ideas, out in the world</span></div>
      <div className="studio-section-heading studio-work-heading"><div><span className="studio-kicker">A FEW THINGS WE’VE MADE</span><h2>Work with<br /><em>something</em> to say.</h2></div><div className="studio-work-aside"><p>We partner with ambitious people to make useful, beautiful digital things-and make them matter.</p><Link href="/projects" className="studio-arrow-link">Explore all projects <span aria-hidden="true">↗</span></Link></div></div>
      <div className="studio-work-grid">
        {projects.map((project, index) => (
          <Link href={`/projects/${project.slug}`} className={`studio-work-card studio-work-card-${index + 1}`} key={project.slug}>
            <div className="studio-work-image">
              <img src={project.image} alt={project.title} loading="lazy" />
              <span className="studio-work-number">0{index + 1}</span>
              <span className="studio-work-visit" aria-hidden="true">↗</span>
            </div>
            <div className="studio-work-content-enclosed">
              <div className="studio-work-meta">
                <span>{project.category}</span>
                <span>{project.domain}</span>
              </div>
              <div className="studio-work-title-row">
                <h3>{project.title}</h3>
                <span>{project.result}</span>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
