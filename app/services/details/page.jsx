import ServiceDetailsPage from '../[slug]/page';

export const metadata = {
  title: 'Service Details | Inversify - Web & Software Engineering',
  description: 'Explore comprehensive digital engineering, web development, and cloud services delivered by Inversify Sri Lanka.',
};

export default function Page() {
  return <ServiceDetailsPage params={{ slug: 'web-development' }} />;
}
