import Image from 'next/image';
import type { TAvatarImageProps } from './types';

function AvatarImage({
  src = '',
  alt = '',
  width = 40,
  height = 40,
  ...props
}: TAvatarImageProps) {
  return <Image {...props} width={width} height={height} src={src} alt={alt} />;
}

export default AvatarImage;
