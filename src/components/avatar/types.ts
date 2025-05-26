import type { ImageProps } from 'next/image';
import type { PropsWithChildren } from 'react';

type TAvatarContainerProps = PropsWithChildren;
type TAvatarContentProps = PropsWithChildren;
type TAvatarDescriptionProps = PropsWithChildren;
type TAvatarImageProps = Omit<ImageProps, 'src' | 'alt'> & {
  src: string | undefined;
  alt: string | undefined;
};
type TAvatarTitleProps = PropsWithChildren;

export type {
  TAvatarContainerProps,
  TAvatarContentProps,
  TAvatarDescriptionProps,
  TAvatarImageProps,
  TAvatarTitleProps,
};
