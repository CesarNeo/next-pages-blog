import { Avatar } from '@/components/avatar';
import Markdown from '@/components/markdown';
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from '@/components/ui/breadcrumb';
import Image from 'next/image';
import Link from 'next/link';
import type { TPostPageProps } from './types';
import PostShare from './components/post-share';

function PostPageTemplate({ post }: TPostPageProps) {
  const { slug } = post;

  const publishedDate = new Date(post?.date ?? '').toLocaleDateString('pt-BR');
  const postUrl = 'https://site.com/blog/'.concat(slug);

  return (
    <main className="py-20">
      <div className="container space-y-8 px-4 md:px-8">
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink
                asChild
                className="text-action-sm font-action-sm leading-action-sm"
              >
                <Link href="/blog">Blog</Link>
              </BreadcrumbLink>
            </BreadcrumbItem>

            <BreadcrumbSeparator />

            <BreadcrumbItem>
              <span className="text-action-sm font-action-sm leading-action-sm text-blue-200">
                {post?.title}
              </span>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>

        <div className="lg:12 grid grid-cols-1 gap-6 lg:grid-cols-[1fr_18.75rem]">
          <article className="overflow-hidden rounded-lg border border-gray-400 bg-gray-600">
            <figure className="relative aspect-[16/10] w-full overflow-hidden rounded-lg">
              <Image
                src={post?.image ?? ''}
                alt={post?.title ?? ''}
                fill
                className="object-cover"
              />
            </figure>

            <header className="mt-8 p-4 pb-0 md:p-6 lg:p-12">
              <h1 className="text-heading-lg font-heading-lg leading-heading-lg md:text-heading-xl md:leading-heading-xl md:font-heading-xl font-pt-caption mb-8 text-balance">
                {post?.title}
              </h1>

              <Avatar.Container>
                <Avatar.Image
                  src={post?.author.avatar}
                  alt={post?.author.name}
                  size="sm"
                />

                <Avatar.Content>
                  <Avatar.Title>{post?.author.name}</Avatar.Title>
                  <Avatar.Description>
                    Publica em:{' '}
                    <time dateTime={post?.date}>{publishedDate}</time>
                  </Avatar.Description>
                </Avatar.Content>
              </Avatar.Container>
            </header>

            <div className="prose prose-invert mt-12 max-w-none px-4 md:px-6 lg:px-12">
              <Markdown content={post?.body.raw} />
            </div>
          </article>

          <PostShare post={post} postUrl={postUrl} />
        </div>
      </div>
    </main>
  );
}

export default PostPageTemplate;
