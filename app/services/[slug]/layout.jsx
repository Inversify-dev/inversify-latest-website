const serviceMetadataMap = {
  'web-development': {
    title: 'Website Design & Development Sri Lanka | Inversify Colombo',
    description: 'High-speed bespoke websites engineered with Next.js, sub-second page speed, built-in search SEO, and frictionless mobile UX in Colombo, Sri Lanka.',
    keywords: ['website design sri lanka', 'web development colombo', 'custom website design colombo', 'nextjs developer sri lanka'],
    image: '/images/service-details.webp',
  },
  'ecommerce-payhere': {
    title: 'E-Commerce & Online Stores | Inversify Colombo Sri Lanka',
    description: 'Custom e-commerce storefronts integrated with secure card payments, automated WhatsApp/SMS order notifications, and island-wide delivery tracking in Sri Lanka.',
    keywords: ['ecommerce website development sri lanka', 'online store colombo', 'online payment gateway sri lanka'],
    image: '/images/service4-1.webp',
  },
  'custom-software': {
    title: 'Custom Software & Enterprise Systems Sri Lanka | Inversify Colombo',
    description: 'Bespoke business software, operational dashboards, client & employee portals, order fulfillment systems, and cloud databases engineered in Colombo, Sri Lanka.',
    keywords: ['custom software sri lanka', 'software development colombo', 'erp software sri lanka', 'operations dashboard colombo'],
    image: '/images/service-systems.webp',
  },
  'ai-automation': {
    title: 'AI Automation & 24/7 WhatsApp AI Assistants | Inversify Sri Lanka',
    description: 'Autonomous 24/7 AI chat assistants for WhatsApp and web, automated lead qualification, spreadsheet/CRM synchronization, and zero manual overhead workflows in Sri Lanka.',
    keywords: ['ai automation sri lanka', 'whatsapp ai assistant colombo', 'ai customer service bot sri lanka', 'business automation sri lanka'],
    image: '/images/service7-1.webp',
  },
};

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const data = serviceMetadataMap[slug] || {
    title: 'Digital Engineering Service | Inversify Colombo Sri Lanka',
    description: 'Bespoke digital engineering services by Inversify in Colombo, Sri Lanka.',
    keywords: ['inversify services', 'colombo digital agency'],
    image: '/images/service-details.webp',
  };

  return {
    title: data.title,
    description: data.description,
    keywords: data.keywords,
    alternates: {
      canonical: `https://inversify.lk/services/${slug}`,
    },
    openGraph: {
      title: data.title,
      description: data.description,
      url: `https://inversify.lk/services/${slug}`,
      siteName: 'Inversify',
      images: [
        {
          url: data.image,
          width: 1200,
          height: 630,
          alt: data.title,
        },
      ],
      locale: 'en_US',
      type: 'article',
    },
    twitter: {
      card: 'summary_large_image',
      title: data.title,
      description: data.description,
      images: [data.image],
    },
  };
}

export default function ServiceDetailLayout({ children }) {
  return children;
}

