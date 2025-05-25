import Search from '@/components/search';
import { useRouter } from 'next/router';
import PostCard from './components/post-card';

function BlogList() {
  const router = useRouter();
  const query = (router.query.q as string) ?? '';
  const queryTitle = 'Resultados de busca para:'.concat(' ', query);
  const pageTitle = query
    ? queryTitle
    : 'Dicas e estratégias para impulsionar seu negócio';

  return (
    <div className="flex h-full grow flex-col py-24">
      <header>
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

      <PostCard
        title="Como criar uma estratégia de marketing digital"
        slug="como-criar-uma-estrategia-de-marketing-digital"
        description="Aprenda a criar uma estratégia de marketing digital eficaz para o seu negócio."
        image="/assets/primeiro-post.png"
        date="01/10/2023"
        author={{
          name: 'Lucas Oliveira',
          avatar: '/assets/primeiro-post.png',
        }}
      />
    </div>
  );
}

export default BlogList;
