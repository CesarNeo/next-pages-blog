import Image from 'next/image';

const CUSTOMER_STORY = [
  {
    content:
      'Criar minha loja com o site.set foi a melhor decisão para o meu negócio. A plataforma é super intuitiva, e consegui colocar meus produtos à venda em poucos minutos. A',
    author: {
      name: 'Annette Bones',
      role: 'CEO na Anne Corp',
      avatar: '/customer-1.png',
    },
  },
  {
    content:
      'Transformar minha ideia em uma loja online foi fácil e rápido. Adorei as opções de personalização e a simplicidade para gerenciar os pedidos. Já vejo meus produtos alcançando mais pessoas!',
    author: {
      name: 'Jacob Jones',
      role: 'CEO na JJ Org',
      avatar: '/customer-2.png',
    },
  },
];

function CustomerStorySection() {
  return (
    <section className="container py-8 md:py-10">
      <div className="flex flex-col items-center gap-12">
        <h2 className="font-pt-caption text-heading-xl font-heading-xl leading-heading-xl text-gray-100">
          Quem utiliza, aprova!
        </h2>

        <div className="grid gap-8 md:grid-cols-2">
          {CUSTOMER_STORY.map(story => (
            <div
              key={story.author.name}
              className="flex flex-col gap-6 rounded-lg bg-gray-500 p-6 md:p-12"
            >
              <p className="text-balance text-gray-200 italic">
                {story.content}
              </p>

              <div className="flex items-center gap-3">
                <div className="relative size-10">
                  <Image
                    src={story.author.avatar}
                    alt={story.author.name}
                    fill
                    className="object-cover"
                  />
                </div>

                <div className="flex flex-col">
                  <strong className="text-sm text-gray-200">
                    {story.author.name}
                  </strong>
                  <span className="text-xs text-gray-300">
                    {story.author.role}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default CustomerStorySection;
