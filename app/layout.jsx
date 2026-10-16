import './globals.css';
import '@fontsource-variable/bricolage-grotesque';
import '@fontsource-variable/unbounded';
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
  title: 'Inversify - Leading Digital & Web Development Agency Sri Lanka',
  description: "Inversify is Sri Lanka's premier web development and digital engineering agency in Colombo. We build ultra-fast, custom websites, e-commerce stores, and cloud SaaS.",
  keywords: ['web development sri lanka', 'web design colombo', 'best web agency sri lanka', 'inversify', 'payhere integration'],
  authors: [{ name: 'Inversify Engineering Team' }],
  openGraph: {
    title: 'Inversify - Leading Digital & Web Development Agency Sri Lanka',
    description: 'Award-winning digital craftsmanship from Colombo. Building high-performance web applications and conversion-engineered digital platforms.',
    url: 'https://inversify.lk',
    siteName: 'Inversify Digital Agency',
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
    icon: '/favicon.svg',
    shortcut: '/favicon.svg',
    apple: '/favicon.svg',
  },
};

import ScrollAnimations from '../components/ScrollAnimations';

export default function RootLayout({ children }) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    name: 'Inversify',
    url: 'https://inversify.lk',
    logo: 'https://inversify.lk/images/logo2.webp',
    image: 'https://inversify.lk/images/about1-1.webp',
    description: 'Leading web development and digital engineering agency in Colombo, Sri Lanka.',
    telephone: '+94112345678',
    email: 'hello@inversify.lk',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Level 14, World Trade Center, Echelon Square',
      addressLocality: 'Colombo',
      postalCode: '00100',
      addressCountry: 'LK',
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
        <link rel="stylesheet" href="/css/style.css" />
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
