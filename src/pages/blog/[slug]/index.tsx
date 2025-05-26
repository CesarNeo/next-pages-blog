import { Avatar } from '@/components/avatar';
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from '@/components/ui/breadcrumb';
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

          <header className="p-4 pb-0 md:p-6 lg:p-12">
            <h1 className="text-heading-lg font-heading-lg leading-heading-lg md:text-heading-xl md:leading-heading-xl md:font-heading-xl mb-6 text-balance">
              {post?.title}
            </h1>

            <Avatar.Container>
              <Avatar.Image src={post?.author.avatar} alt={post?.author.name} />

              <Avatar.Content>
                <Avatar.Title>{post?.author.name}</Avatar.Title>
                <Avatar.Description>
                  Publica em: <time dateTime={post?.date}>{publishedDate}</time>
                </Avatar.Description>
              </Avatar.Content>
            </Avatar.Container>
          </header>
        </article>
      </div>
    </main>
  );
}

export default PostPage;
