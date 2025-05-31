'use client';

import { Button } from '@/components/ui/button';
import { AlertTriangle } from 'lucide-react';

type ErrorProps = {
  error: Error;
  reset: () => void;
};

function Error({ error, reset }: ErrorProps) {
  return (
    <div className="flex min-h-100 items-center justify-center p-4">
      <div className="w-full max-w-md text-center">
        <div className="relative mb-6 inline-block">
          <AlertTriangle className="mx-auto size-16 text-gray-100" />

          <div className="absolute top-1/2 left-1/2 h-1 w-16 -translate-x-1/2 -translate-y-1/2 -rotate-12 transform bg-red-500 opacity-80" />
        </div>

        <h2 className="text-heading-xl font-heading-xl font-pt-caption mb-2">
          Alguma coisa deu errado.
        </h2>
        {error?.message ? (
          <p className="text-body-sm font-body-sm mb-2 max-h-24 overflow-hidden px-4 text-ellipsis text-gray-300">
            {error.message}
          </p>
        ) : null}
        <Button className="mt-4" onClick={reset}>
          Tentar novamente
        </Button>
      </div>
    </div>
  );
}

export default Error;
