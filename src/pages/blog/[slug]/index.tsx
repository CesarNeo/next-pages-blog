import { Avatar } from '@/components/avatar';
import Markdown from '@/components/markdown';
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from '@/components/ui/breadcrumb';
import { Button } from '@/components/ui/button';
import { allPosts } from 'contentlayer/generated';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';

function PostPage() {
  const router = useRouter();
  const { slug } = router.query as { slug: string };
  const post = allPosts.find(
    postFind => postFind.slug.toLocaleLowerCase() === slug.toLocaleLowerCase(),
  );
  const publishedDate = new Date(post?.date ?? '').toLocaleDateString('pt-BR');

  return (
    <main className="mt-32">
      <div className="container space-y-12 px-4 md:px-8">
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

          <aside className="space-y-6">
            <div className="rounded-lg bg-gray-700 p-4 md:p-6">
              <h2 className="text-heading-xs font-heading-xs leading-heading-xs font-pt-caption mb-4">
                Compartilhar
              </h2>

              <div className="space-y-3">
                {Array.from({ length: 4 }).map(provider => (
                  <Button variant="outline">LinkedIn</Button>
                ))}
              </div>
            </div>
          </aside>
        </div>
      </div>
    </main>
  );
}

export default PostPage;
