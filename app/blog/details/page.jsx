import BlogDetailsPage from '../[slug]/page';

export const metadata = {
  title: 'Blog Details | Inversify - Web & Software Engineering',
  description: 'Read the latest thought leadership and technical articles from Inversify Colombo.',
};

export default function Page() {
  return <BlogDetailsPage params={{ slug: 'where-creativity-meets-strategy' }} />;
}
