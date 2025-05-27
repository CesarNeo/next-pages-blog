import type { ImageProps } from 'next/image';
import type { PropsWithChildren } from 'react';

type TAvatarSize = 'xs' | 'sm';

type TAvatarContainerProps = PropsWithChildren;
type TAvatarContentProps = PropsWithChildren;
type TAvatarDescriptionProps = PropsWithChildren;
type TAvatarImageProps = Omit<
  ImageProps,
  'src' | 'alt' | 'width' | 'height'
> & {
  src: string | undefined;
  alt: string | undefined;
  size?: TAvatarSize;
};
type TAvatarTitleProps = PropsWithChildren;

export type {
  TAvatarContainerProps,
  TAvatarContentProps,
  TAvatarDescriptionProps,
  TAvatarImageProps,
  TAvatarTitleProps,
};
