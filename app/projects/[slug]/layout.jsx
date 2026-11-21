const projectMetadataMap = {
  jerseycloud: {
    title: 'Jersey Cloud Case Study | E-Commerce & Online Stores | Inversify',
    description: 'How Inversify architected an ultra-fast custom React storefront for Jersey Cloud with seamless card checkout, +310% checkout conversion, and automated WhatsApp order alerts.',
    keywords: ['jersey cloud case study', 'ecommerce case study sri lanka', 'jerseycloud.lk website development', 'inversify jersey cloud'],
    image: '/images/projects/jerseycloud.webp',
  },
  qaidh: {
    title: 'Qaidh Sinnalebbe Case Study | Film Direction & Portfolio | Inversify',
    description: 'Cinematic visual showcase and digital portfolio engineered for international film director Qaidh Sinnalebbe by Inversify.',
    keywords: ['qaidh sinnalebbe portfolio', 'filmmaker portfolio website', 'inversify qaidh', 'creative portfolio colombo'],
    image: '/images/projects/qaidh.webp',
  },
  'fusion-gear': {
    title: 'Fusion Gear Case Study | Custom Order Management System | Inversify',
    description: 'Bespoke internal operations portal, real-time inventory sync, and order management dashboard engineered for Fusion Gear by Inversify in Colombo, Sri Lanka.',
    keywords: ['fusion gear admin portal', 'order management system sri lanka', 'custom software case study colombo', 'inversify fusion gear'],
    image: '/images/projects/all-orders-dashboard-mockup.webp',
  },
  'colombo-athletic-football-club': {
    title: 'Colombo Athletic FC Case Study | AC Milan Partner Academy Platform | Inversify',
    description: 'Official sports academy partner portal, youth enrollment system, and matchday platform engineered for Colombo Athletic FC by Inversify.',
    keywords: ['colombo athletic fc website', 'cafc official website', 'ac milan academy sri lanka', 'inversify cafc'],
    image: '/images/projects/cafc.webp',
  },
  'mint-b2b-solutions': {
    title: 'Mint B2B Solutions Case Study | Enterprise Operations Hub | Inversify',
    description: 'Secure enterprise operations platform engineered for Australian advisory practices and corporate clients by Inversify in Colombo, Sri Lanka.',
    keywords: ['mint b2b solutions platform', 'enterprise software colombo', 'b2b advisory platform', 'inversify mint b2b'],
    image: '/images/projects/mintb2b.webp',
  },
};

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const data = projectMetadataMap[slug] || {
    title: 'Case Study & Client Work | Inversify Colombo Sri Lanka',
    description: 'Digital engineering case study by Inversify in Colombo, Sri Lanka.',
    keywords: ['inversify case study', 'selected project'],
    image: '/images/projects/jerseycloud.webp',
  };

  return {
    title: data.title,
    description: data.description,
    keywords: data.keywords,
    alternates: {
      canonical: `https://inversify.lk/projects/${slug}`,
    },
    openGraph: {
      title: data.title,
      description: data.description,
      url: `https://inversify.lk/projects/${slug}`,
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

export default function ProjectDetailLayout({ children }) {
  return children;
}

