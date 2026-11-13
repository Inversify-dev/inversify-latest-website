export const metadata = {
  title: 'Digital Services & Engineering Disciplines | Inversify Colombo',
  description: 'Explore our 4 core engineering disciplines: Custom Website Design & Development, E-Commerce Stores & Card Gateways, Bespoke Software & Portals, and Autonomous 24/7 AI Automation in Colombo, Sri Lanka.',
  keywords: [
    'services inversify',
    'web development services colombo',
    'ecommerce store development sri lanka',
    'bespoke software development sri lanka',
    'ai business automation services colombo',
    'it services sri lanka',
  ],
  alternates: {
    canonical: 'https://inversify.lk/services',
  },
  openGraph: {
    title: 'Digital Services & Engineering Disciplines | Inversify',
    description: 'Bespoke Web Platforms, Digital Commerce, Custom Software & AI Automation engineered in Colombo, Sri Lanka.',
    url: 'https://inversify.lk/services',
    siteName: 'Inversify',
    images: [
      {
        url: '/images/service-details.webp',
        width: 1200,
        height: 630,
        alt: 'Inversify Engineering Disciplines Colombo',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Digital Services & Engineering Disciplines | Inversify',
    description: 'Custom Web Platforms, E-Commerce Stores, Bespoke Software & 24/7 AI Automation in Colombo, Sri Lanka.',
    images: ['/images/service-details.webp'],
  },
};

export default function ServicesLayout({ children }) {
  return children;
}

