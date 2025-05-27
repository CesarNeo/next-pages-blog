import { cn } from '@/lib/utils';
import type { ComponentProps } from 'react';

type TStrongProps = ComponentProps<'strong'>;

function Strong({ className, ...props }: TStrongProps) {
  return (
    <strong
      {...props}
      className={cn('font-extrabold text-gray-100', className)}
    />
  );
}

export default Strong;
