import type { TAvatarTitleProps } from './types';

function AvatarTitle({ children }: TAvatarTitleProps) {
  return (
    <strong className="text-body-sm font-body-sm leading-body-sm text-gray-200">
      {children}
    </strong>
  );
}

export default AvatarTitle;
