import { Button } from '@/components/ui/button';
import { FileQuestion, Search } from 'lucide-react';
import Link from 'next/link';

function NotFound() {
  return (
    <div className="flex min-h-dvh flex-col items-center justify-center">
      <div className="w-full max-w-md text-center">
        <FileQuestion className="mx-auto mb-6 size-16 text-gray-100" />
      </div>

      <div className="relative mb-3 inline-block">
        <span className="inline-block -translate-x-1 -translate-y-2 -rotate-12 transform animate-bounce text-8xl font-bold">
          4
        </span>
        <span className="inline-block text-8xl font-bold">0</span>
        <span className="inline-block text-8xl font-bold">4</span>
      </div>

      <p className="mb-8 text-gray-200">Página não encontrada</p>

      <div className="mt-6 flex justify-center gap-4">
        <Button asChild>
          <Link href="/">Home</Link>
        </Button>

        <Button asChild variant="secondary">
          <Link href="/blog?q=">
            <Search className="size-4" />
            Pesquisar posts
          </Link>
        </Button>
      </div>
    </div>
  );
}

export default NotFound;
