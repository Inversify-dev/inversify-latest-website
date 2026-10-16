'use client';

const technologies = [
  { name: 'Next.js', tag: 'Web' }, { name: 'React', tag: 'Interfaces' }, { name: 'TypeScript', tag: 'Systems' },
  { name: 'Figma', tag: 'Design' }, { name: 'PayHere', tag: 'Commerce' }, { name: 'Stripe', tag: 'Payments' },
  { name: 'Node.js', tag: 'Cloud' }, { name: 'PostgreSQL', tag: 'Data' }, { name: 'Cloudflare', tag: 'Edge' },
];

export default function TechStackMarquee() {
  return <div className="studio-stack-strip"><span className="studio-stack-label">A FEW TOOLS IN OUR KIT</span><div className="studio-stack-items">{technologies.map(item => <span className="studio-stack-item" key={item.name}><strong>{item.name}</strong><small>{item.tag}</small></span>)}</div></div>;
}
