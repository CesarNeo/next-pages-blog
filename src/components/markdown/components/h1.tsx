import { cn } from '@/lib/utils';
import type { ComponentProps } from 'react';

type H1Props = ComponentProps<'h1'>;

function H1({ className, ...props }: H1Props) {
  return (
    <h1
      {...props}
      className={cn(
        'text-heading-md font-heading-md leading-heading-md md:text-heading-xl md:leading-heading-xl md:font-heading-xl font-pt-caption mb-4 text-balance',
        className,
      )}
    />
  );
}

export default H1;
