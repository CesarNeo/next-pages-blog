import type { TAvatarContainerProps } from './types';

function AvatarContainer({ children }: TAvatarContainerProps) {
  return <div className="flex items-center gap-3">{children}</div>;
}

export default AvatarContainer;
