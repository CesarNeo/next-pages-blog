import Image from 'next/image';
import Link from 'next/link';
import type { TPostCardProps } from './types';

function PostCard({
  title,
  slug,
  image,
  author,
  date,
  description,
}: TPostCardProps) {
  return (
    <Link
      href={'/blog/'.concat(slug)}
      className="w-full max-w-2xl overflow-hidden rounded-2xl border border-gray-400 bg-gray-600 transition-all duration-300 hover:border-blue-300"
    >
      <div className="overflow-hidden rounded-md p-2">
        <div className="relative">
          <div className="absolute top-0 right-0 rounded-bl-md bg-gray-600 px-3 py-1 backdrop-blur-sm">
            <span className="text-body-xs font-body-xs leading-body-xs text-gray-300">
              {date}
            </span>
          </div>

          <Image
            src={image}
            alt=""
            width={288}
            height={144}
            className="h-40 w-full rounded-lg object-cover object-center"
          />
        </div>

        <div className="mt-4 space-y-4 px-2">
          <h2 className="text-heading-sm font-heading-xs leading-heading-xs font-pt-caption line-clamp-3 text-gray-100">
            {title}
          </h2>

          <p className="text-body-sm font-body-sm leading-body-sm line-clamp-3 text-gray-300">
            {description}
          </p>

          <div className="flex items-center gap-3 border-t border-gray-400 py-4">
            <div className="relative size-5 overflow-hidden rounded-full border border-blue-200 md:size-6">
              <Image
                src={author.avatar}
                alt={author.name}
                fill
                className="rounded-md object-cover"
              />
            </div>

            <span className="text-body-sm font-body-xs leading-body-xs text-gray-300">
              {author.name}
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
}

export default PostCard;
