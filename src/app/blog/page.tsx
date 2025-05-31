import BlogList from '@/templates/blog/blog-list';
import { allPosts } from 'contentlayer/generated';
import type { Metadata } from 'next';

export const metadata = {
  title: 'Blog | Site.Set',
  description: 'Dicas e estratégias para impulsionar seu negócio',
  robots: 'index, follow',
  openGraph: {
    title: 'Blog | Site.Set',
    description: 'Dicas e estratégias para impulsionar seu negócio',
    url: 'https://next-pages-blog-ecru.vercel.app/og-image.jpg',
    siteName: 'Site.Set',
    locale: 'pt-BR',
    type: 'website',
    images: [
      {
        url: 'https://next-pages-blog-ecru.vercel.app/og-image.jpg',
        width: 800,
        height: 600,
        alt: 'Site.Set - Venda seus produtos como afiliado em um único lugar',
      },
    ],
  },
} satisfies Metadata;

function BlogPage() {
  const posts = allPosts.sort((a, b) => {
    return new Date(b.date).getTime() - new Date(a.date).getTime();
  });

  return <BlogList posts={posts} />;
}

export default BlogPage;
