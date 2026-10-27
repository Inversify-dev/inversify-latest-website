import './globals.css';
import '@fontsource-variable/bricolage-grotesque';
import '@fontsource-variable/outfit';
import '@fontsource-variable/urbanist';
import '@fontsource-variable/orbitron';
import '@fontsource/bebas-neue';
import '@fontsource-variable/chivo';
import '@fontsource-variable/lexend';
import '@fontsource-variable/geist';
import '@fontsource-variable/syne';
import '@fontsource-variable/plus-jakarta-sans';
import '@fontsource-variable/space-grotesk';
import '@fontsource/ibm-plex-mono';
import '@fortawesome/fontawesome-free/css/all.min.css';

export const metadata = {
  metadataBase: new URL('https://inversify.lk'),
  title: 'Inversify | Websites, E-Commerce, Custom Software & AI Automation',
  description: "Sri Lanka's premier engineering studio specializing in high-performance Website Design & Development, E-Commerce Stores, Bespoke Software Systems, and AI Business Automation.",
  keywords: [
    'website design and development sri lanka',
    'web design colombo',
    'custom software development sri lanka',
    'systems engineering colombo',
    'ecommerce website development sri lanka',
    'payment gateway integration sri lanka',
    'online store development colombo',
    'ai automation agency sri lanka',
    'ai business automation colombo',
    'whatsapp ai customer assistant',
    'nextjs web development colombo',
    'inversify',
  ],
  authors: [{ name: 'Inversify Engineering Team' }],
  openGraph: {
    title: 'Inversify | Websites, E-Commerce, Custom Software & AI Automation',
    description: 'Bespoke custom websites, online storefronts, bespoke software systems, and autonomous 24/7 AI business automation workflows.',
    url: 'https://inversify.lk',
    siteName: 'Inversify',
    images: [
      {
        url: '/images/about1-1.webp',
        width: 1200,
        height: 630,
        alt: 'Inversify Colombo Engineering',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  icons: {
    icon: [
      { url: '/favicon.svg', type: 'image/svg+xml' },
      { url: '/favicon.ico', sizes: 'any' },
      { url: '/favicon.webp', sizes: '192x192', type: 'image/webp' },
    ],
    shortcut: '/favicon.ico',
    apple: '/apple-touch-icon.webp',
  },
};

import ScrollAnimations from '../components/ScrollAnimations';

export default function RootLayout({ children }) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    name: 'Inversify',
    url: 'https://inversify.lk',
    logo: 'https://inversify.lk/images/inversify-logo-white.webp',
    image: 'https://inversify.lk/images/about1-1.webp',
    description: 'Premier studio for Website Design & Development, E-Commerce Stores, Custom Software Systems, and AI Business Automation in Colombo, Sri Lanka.',
    telephone: '+94704621228',
    email: 'invert@inversify.lk',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Level 14, World Trade Center, Echelon Square',
      addressLocality: 'Colombo',
      postalCode: '00100',
      addressCountry: 'LK',
    },
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Core Digital & AI Services',
      itemListElement: [
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Website Design & Development',
            description: 'Ultra-fast custom websites built with modern architecture, instant page loading, and clean mobile responsiveness.',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'E-Commerce & Online Stores',
            description: 'Modern online stores with secure card payment integrations, automated SMS order alerts, and live inventory sync.',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'AI Automation',
            description: 'Autonomous 24/7 WhatsApp and web customer chat assistants, lead capture, and workflow automation.',
          },
        },
      ],
    },
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.95',
      reviewCount: '150',
    },
  };

  return (
    <html lang="en" data-scroll-behavior="smooth" style={{ overscrollBehavior: 'none', scrollBehavior: 'smooth' }}>
      <head>
        <link rel="stylesheet" href="/css/bootstrap.min.css" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>
        <ScrollAnimations />
        <div className="page-wrapper">
          {children}
        </div>
      </body>
    </html>
  );
}
