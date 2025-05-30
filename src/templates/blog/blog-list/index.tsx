'use client';

import Search from '@/components/search';
import { Inbox } from 'lucide-react';
import { useSearchParams } from 'next/navigation';
import PostCard from './components/post-card';
import PostGridCard from './components/post-grid-card';
import type { TBlogListProps } from './types';

function BlogList({ posts }: TBlogListProps) {
  const searchParams = useSearchParams();

  const query = searchParams?.get('q') ?? '';
  const queryTitle = 'Resultados de busca para:'.concat(' ', query);
  const pageTitle = query
    ? queryTitle
    : 'Dicas e estratégias para impulsionar seu negócio';
  const allPosts = query
    ? posts.filter(post =>
        post.title.toLocaleLowerCase()?.includes(query.toLocaleLowerCase()),
      )
    : posts;

  const hasPosts = allPosts.length > 0;

  return (
    <div className="flex h-full grow flex-col py-24">
      <header className="pb-14">
        <div className="container flex flex-col items-start justify-between space-y-6 md:flex-row md:items-end">
          <div className="flex flex-col gap-4">
            <span className="text-body-tag font-body-tag w-fit rounded-md bg-cyan-300 px-4 py-2 text-center text-cyan-100 uppercase md:text-left">
              Blog
            </span>

            <h1 className="text-heading-lg font-heading-lg leading-heading-lg md:text-heading-xl md:font-heading-xl md:leading-heading-xl font-pt-caption max-w-2xl text-start text-balance text-gray-100 md:text-left">
              {pageTitle}
            </h1>
          </div>

          <Search />
        </div>
      </header>

      {hasPosts ? (
        <PostGridCard>
          {allPosts.map(post => (
            <PostCard
              key={post._id}
              slug={post.slug}
              title={post.title}
              description={post.description}
              image={post.image}
              date={new Date(post.date).toLocaleDateString('pt-BR')}
              author={post.author}
            />
          ))}
        </PostGridCard>
      ) : (
        <div className="container px-8">
          <div className="flex flex-col items-center justify-center gap-8 rounded-lg border-2 border-dashed border-gray-300 p-8 md:p-12">
            <Inbox className="size-12 text-cyan-100" />

            <p>Nenhum post encontrado.</p>
          </div>
        </div>
      )}
    </div>
  );
}

export default BlogList;
