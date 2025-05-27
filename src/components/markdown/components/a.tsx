import { cn } from '@/lib/utils';
import type { ComponentProps } from 'react';

type TAProps = ComponentProps<'a'>;

function A({ className, ...props }: TAProps) {
  return (
    <a {...props} className={cn('text-blue-200 hover:underline', className)} />
  );
}

export default A;
