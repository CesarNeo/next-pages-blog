import Image from 'next/image';
import { cn } from '@/lib/utils';
import type { TAvatarImageProps } from './types';

const AVATAR_SIZES = {
  xs: 'size-5',
  sm: 'size-9',
} as const;

function AvatarImage({
  src = '',
  alt = '',
  size = 'xs',
  ...props
}: TAvatarImageProps) {
  return (
    <div
      className={cn(
        'relative overflow-hidden rounded-full border border-blue-200',
        AVATAR_SIZES[size],
      )}
    >
      <Image
        {...props}
        fill
        src={src}
        alt={alt}
        className="object-cover object-center"
      />
    </div>
  );
}

export default AvatarImage;
