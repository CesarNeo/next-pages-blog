import { cn } from '@/lib/utils';
import type { ComponentProps } from 'react';

type TPProps = ComponentProps<'p'>;

function P({ className, ...props }: TPProps) {
  return (
    <p
      {...props}
      className={cn('mb-6 leading-relaxed text-gray-200', className)}
    />
  );
}

export default P;
