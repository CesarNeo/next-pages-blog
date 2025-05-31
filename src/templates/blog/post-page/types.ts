import type { Post } from 'contentlayer/generated';

type TPostPageProps = {
  post: Post;
};

type TBlogPostPageProps = {
  params: Promise<{ slug: string }>;
};

export type { TPostPageProps, TBlogPostPageProps };
