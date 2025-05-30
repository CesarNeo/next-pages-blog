import BlogList from '@/templates/blog/blog-list';
import { allPosts } from 'contentlayer/generated';

function BlogPage() {
  const posts = allPosts.sort((a, b) => {
    return new Date(b.date).getTime() - new Date(a.date).getTime();
  });

  return <BlogList posts={posts} />;
}

export default BlogPage;
