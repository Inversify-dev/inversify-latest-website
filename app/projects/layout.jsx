export const metadata = {
  title: 'Selected Work & Case Studies | Inversify Colombo Sri Lanka',
  description: 'Explore our portfolio of completed projects: Jersey Cloud online store, Qaidh Sinnalebbe portfolio, Fusion Gear order system, Colombo Athletic FC academy, and Mint B2B platform.',
  keywords: [
    'inversify projects',
    'inversify case studies',
    'web design portfolio sri lanka',
    'software portfolio colombo',
    'jersey cloud case study',
    'qaidh portfolio',
    'fusion gear',
  ],
  alternates: {
    canonical: 'https://inversify.lk/projects',
  },
  openGraph: {
    title: 'Selected Work & Case Studies | Inversify',
    description: 'Real client case studies across E-Commerce, Custom Software, Websites, and Enterprise Platforms in Colombo, Sri Lanka.',
    url: 'https://inversify.lk/projects',
    siteName: 'Inversify',
    images: [
      {
        url: '/images/projects/jerseycloud.webp',
        width: 1200,
        height: 630,
        alt: 'Inversify Selected Work & Case Studies',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Selected Work & Case Studies | Inversify',
    description: 'Real digital products and platforms engineered for ambitious businesses in Sri Lanka and globally.',
    images: ['/images/projects/jerseycloud.webp'],
  },
};

export default function ProjectsLayout({ children }) {
  return children;
}

