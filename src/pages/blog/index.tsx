import BlogList from '@/templates/blog/blog-list';
import type { TBlogListProps } from '@/templates/blog/blog-list/types';
import { allPosts } from 'contentlayer/generated';
import type { GetStaticProps } from 'next';

function BlogPage({ posts }: TBlogListProps) {
  return <BlogList posts={posts} />;
}

export default BlogPage;

export const getStaticProps = (async () => {
  const posts = allPosts.sort((a, b) => {
    return new Date(b.date).getTime() - new Date(a.date).getTime();
  });

  return {
    props: {
      posts,
    },
  };
}) satisfies GetStaticProps<TBlogListProps>;
