import type { TPostGridCardProps } from './types';

function PostGridCard({ children }: TPostGridCardProps) {
  return (
    <div className="container grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      {children}
    </div>
  );
}

export default PostGridCard;
