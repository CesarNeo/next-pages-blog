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
  const post = allPosts.find(postFind =>
    postFind.slug.toLocaleLowerCase().includes(slug.toLocaleLowerCase()),
  );

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
        </article>
      </div>
    </main>
  );
}

export default PostPage;
