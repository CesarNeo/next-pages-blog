import PostPageTemplate from '@/templates/blog/post-page';
import type { TPostPageProps } from '@/templates/blog/post-page/types';
import { allPosts } from 'contentlayer/generated';
import type { GetStaticPaths, GetStaticProps } from 'next';

export const getStaticPaths = (async () => {
  const sortedPosts = allPosts.sort((a, b) => {
    return new Date(b.date).getTime() - new Date(a.date).getTime();
  });
  const fiveRecentPosts = sortedPosts.slice(0, 5);
  const paths = fiveRecentPosts.map(post => ({
    params: { slug: post.slug },
  }));

  return {
    paths,
    fallback: 'blocking',
  };
}) satisfies GetStaticPaths;

export const getStaticProps = (async context => {
  const { slug } = context.params as { slug: string };
  const post = allPosts.find(p => p.slug === slug);

  if (!post) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      post,
    },
  };
}) satisfies GetStaticProps;

function PostPage({ post }: TPostPageProps) {
  return <PostPageTemplate post={post} />;
}

export default PostPage;
