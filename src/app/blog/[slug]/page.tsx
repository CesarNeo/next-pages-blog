import PostPageTemplate from '@/templates/blog/post-page';
import type { TBlogPostPageProps } from '@/templates/blog/post-page/types';
import { allPosts } from 'contentlayer/generated';
import { notFound } from 'next/navigation';

async function PostPage({ params }: TBlogPostPageProps) {
  const { slug } = await params;
  const post = allPosts.find(p => p.slug === slug);

  if (!post) notFound();

  return <PostPageTemplate post={post} />;
}

export default PostPage;
