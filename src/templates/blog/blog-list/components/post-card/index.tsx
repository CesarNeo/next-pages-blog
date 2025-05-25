import Image from 'next/image';
import Link from 'next/link';

function PostCard() {
  return (
    <Link
      href="/blog/"
      className="w-full max-w-2xl overflow-hidden rounded-3xl border border-gray-400 bg-gray-600 transition-all duration-300 hover:border-blue-300"
    >
      <div className="overflow-hidden rounded-md p-2">
        <div className="relative">
          <div className="absolute top-0 right-0 px-3 py-1">
            <span className="text-body-xs font-body-xs leading-body-xs text-gray-300">
              20/12/2024
            </span>
          </div>

          <Image
            src="/assets/primeiro-post.png"
            alt=""
            width={288}
            height={144}
            className="h-40 w-full object-cover object-center"
          />
        </div>

        <div className="mt-4 space-y-4 px-2">
          <h2 className="text-heading-sm font-heading-xs leading-heading-xs font-pt-caption line-clamp-3 text-gray-100">
            Transformando seu negócio em uma loja virtual
          </h2>

          <p className="text-body-sm font-body-sm leading-body-sm line-clamp-3 text-gray-300">
            Se você está buscando uma maneira simples e eficaz de vender seus
            produtos online, o Site.Set é a solução perfeita para você. Criar
            uma loja virtual de sucesso nunca foi tão fácil. Com nossa
            plataforma intuitiva, você pode criar um site profissional para sua
            loja em minutos, sem precisar de conhecimentos técnicos.
          </p>

          <div className="flex items-center gap-3 border-t border-gray-400 py-4">
            <div className="relative size-5 overflow-hidden rounded-full border border-blue-200 md:size-6">
              <Image src="" alt="" fill className="rounded-md object-cover" />
            </div>

            <span className="text-body-sm font-body-xs leading-body-xs text-gray-300">
              Cesar
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
}

export default PostCard;
