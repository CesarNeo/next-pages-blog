'use client';

import { cn } from '@/lib/utils';
import { CircleX, SearchIcon } from 'lucide-react';
import { useRouter, useSearchParams } from 'next/navigation';
import {
  useCallback,
  useEffect,
  useRef,
  type ChangeEvent,
  type FormEvent,
} from 'react';

function Search() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const inputSearchRef = useRef<HTMLInputElement | null>(null);

  const hasQuery = !!searchParams?.has('q');
  const query = searchParams?.get('q') ?? '';

  const handleSearchSubmit = useCallback(
    (event: FormEvent) => {
      event.preventDefault();

      if (query.trim()) {
        router.push('/blog?q='.concat(encodeURIComponent(query)));
      }
    },
    [query, router],
  );

  const handleQueryChange = (event: ChangeEvent<HTMLInputElement>) => {
    const queryValue = event.target.value;

    router.push('/blog?q='.concat(encodeURIComponent(queryValue)), {
      scroll: false,
    });
  };

  const handleResetSearch = () => {
    router.push('/blog', { scroll: false });
  };

  useEffect(() => {
    if (inputSearchRef.current && hasQuery) {
      inputSearchRef.current.focus();
    }
  }, [hasQuery]);

  return (
    <form
      className="group relative w-full md:w-60"
      onSubmit={handleSearchSubmit}
    >
      <SearchIcon
        className={cn(
          'absolute top-1/2 left-3 size-4 -translate-1/2 text-gray-300 transition-colors duration-200 group-focus-within:text-blue-300',
          query && 'text-blue-300',
        )}
      />

      <input
        ref={inputSearchRef}
        value={query}
        onChange={handleQueryChange}
        type="text"
        placeholder="Buscar"
        className="text-body-sm font-body-sm leading-body-sm placeholder:text-body-sm placeholder:font-body-sm placeholder:leading-body-sm h-10 w-full rounded-md border border-gray-400 bg-transparent pl-9 text-gray-100 transition-all duration-200 outline-none placeholder:text-gray-300 focus-within:border-blue-300 focus-within:ring-1 focus-within:ring-blue-300"
      />

      {query ? (
        <button
          type="button"
          className="cursor-pointer"
          onClick={handleResetSearch}
        >
          <CircleX className="absolute top-1/2 right-3 size-4 -translate-y-1/2 text-gray-300" />
        </button>
      ) : null}
    </form>
  );
}

export default Search;
