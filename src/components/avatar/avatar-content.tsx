import type { TAvatarContentProps } from './types';

function AvatarContent({ children }: TAvatarContentProps) {
  return <div className="flex flex-col">{children}</div>;
}

export default AvatarContent;
