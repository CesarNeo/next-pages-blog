'use client';

import { Button } from '@/components/ui/button';
import { useShare } from '@/hooks/use-share';
import type { TPostShareProps } from './types';

function PostShare({ post, postUrl }: TPostShareProps) {
  const { shareButtons } = useShare({
    url: postUrl,
    title: post?.title,
    text: post?.description,
  });

  return (
    <aside className="space-y-6">
      <div className="rounded-lg bg-gray-700">
        <h2 className="text-heading-xs font-heading-xs leading-heading-xs font-pt-caption mb-4">
          Compartilhar
        </h2>

        <div className="space-y-3">
          {shareButtons.map(provider => (
            <Button
              key={provider.provider}
              variant="outline"
              className="w-full justify-start"
              onClick={provider.action}
            >
              {provider.icon}
              {provider.name}
            </Button>
          ))}
        </div>
      </div>
    </aside>
  );
}

export default PostShare;
