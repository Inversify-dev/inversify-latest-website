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
  title: {
    default: 'Inversify | Websites, E-Commerce, Custom Software & AI Automation',
    template: '%s | Inversify',
  },
  description: "Sri Lanka's premier engineering studio in Colombo. Specializing in high-performance Website Design & Development, E-Commerce Stores & Card Payments, Bespoke Software Systems, and 24/7 AI Business Automation.",
  keywords: [
    'inversify',
    'inversify sri lanka',
    'inversify colombo',
    'building inversify',
    'website design and development sri lanka',
    'web design colombo',
    'web design agency sri lanka',
    'custom software development sri lanka',
    'software company colombo',
    'systems engineering colombo',
    'ecommerce website development sri lanka',
    'online payment gateway integration',
    'online store development colombo',
    'ai automation agency sri lanka',
    'ai business automation colombo',
    'whatsapp ai customer assistant sri lanka',
    'web development colombo',
  ],
  authors: [{ name: 'Inversify Engineering Team', url: 'https://inversify.lk' }],
  creator: 'Inversify',
  publisher: 'Inversify',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  alternates: {
    canonical: 'https://inversify.lk',
  },
  openGraph: {
    title: 'Inversify | Websites, E-Commerce, Custom Software & AI Automation',
    description: "Premier digital engineering studio in Colombo, Sri Lanka. Bespoke high-speed websites, online stores, custom software systems, and 24/7 AI automation workflows.",
    url: 'https://inversify.lk',
    siteName: 'Inversify',
    images: [
      {
        url: '/images/about1-1.webp',
        width: 1200,
        height: 630,
        alt: 'Inversify Engineering Studio Colombo Sri Lanka',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Inversify | Websites, E-Commerce, Custom Software & AI Automation',
    description: "Sri Lanka's premier engineering studio in Colombo. Custom websites, e-commerce storefronts, software systems, and AI automation.",
    images: ['/images/about1-1.webp'],
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION || 'google-site-verification-inversify',
  },
  other: {
    'geo.region': 'LK-11',
    'geo.placename': 'Colombo',
    'geo.position': '6.9344;79.8428',
    'ICBM': '6.9344, 79.8428',
  },
  icons: {
    icon: [
      { url: '/favicon.svg', type: 'image/svg+xml' },
      { url: '/favicon.ico', sizes: 'any' },
      { url: '/icon.png', sizes: '512x512', type: 'image/png' },
      { url: '/favicon.webp', sizes: '192x192', type: 'image/webp' },
    ],
    shortcut: '/favicon.ico',
    apple: [
      { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
      { url: '/apple-touch-icon.webp', sizes: '180x180', type: 'image/webp' },
    ],
  },
};

//hi

import ScrollAnimations from '../components/ScrollAnimations';

export default function RootLayout({ children }) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    name: 'Inversify',
    alternateName: ['Inversify Sri Lanka', 'Inversify Colombo', 'Inversify LK', 'Building Inversify'],
    url: 'https://inversify.lk',
    logo: 'https://inversify.lk/images/inversify-logo-white.webp',
    image: 'https://inversify.lk/images/about1-1.webp',
    description: 'Premier studio for Website Design & Development, E-Commerce Stores, Custom Software Systems, and AI Business Automation in Colombo, Sri Lanka.',
    telephone: '+94704621228',
    email: 'invert@inversify.lk',
    priceRange: '$$',
    currenciesAccepted: 'LKR, USD, GBP, AUD, EUR',
    paymentAccepted: 'Credit Card, Debit Card, Bank Transfer, Online Payment Gateway',
    sameAs: [
      'https://www.instagram.com/building.inversify/',
      'https://www.tiktok.com/@building.inversify',
    ],
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Colombo',
      addressCountry: 'Sri Lanka',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: '6.9344',
      longitude: '79.8428',
    },
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
        opens: '09:00',
        closes: '19:00',
      },
    ],
    areaServed: [
      {
        '@type': 'City',
        name: 'Colombo',
      },
      {
        '@type': 'Country',
        name: 'Sri Lanka',
      },
      {
        '@type': 'AdministrativeArea',
        name: 'Western Province',
      },
    ],
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Core Digital & AI Engineering Disciplines',
      itemListElement: [
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Website Design & Development',
            description: 'Ultra-fast custom websites engineered with sub-second page speed, bespoke design systems, search SEO readiness, and frictionless mobile UX.',
            url: 'https://inversify.lk/services/web-development',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'E-Commerce & Online Stores',
            description: 'Modern storefronts with secure credit/debit card payment integrations, automated buyer alerts, and live inventory sync.',
            url: 'https://inversify.lk/services/ecommerce-solutions',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Custom Software & Systems',
            description: 'Bespoke operational dashboards, ERP tools, client/employee portals, and cloud databases engineered to eliminate manual bottlenecks.',
            url: 'https://inversify.lk/services/custom-software',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'AI Automation',
            description: 'Autonomous 24/7 WhatsApp and web customer assistants, instant lead capture, spreadsheet sync, and zero manual overhead workflows.',
            url: 'https://inversify.lk/services/ai-automation',
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
