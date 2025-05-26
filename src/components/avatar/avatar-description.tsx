import type { TAvatarDescriptionProps } from './types';

function AvatarDescription({ children }: TAvatarDescriptionProps) {
  return (
    <div className="text-body-xs font-body-xs leading-body-xs text-gray-300">
      {children}
    </div>
  );
}

export default AvatarDescription;
