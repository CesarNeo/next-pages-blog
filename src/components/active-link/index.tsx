import Link from 'next/link';
import { useRouter } from 'next/router';
import { cn } from '@/lib/utils';
import type { TActiveLinkProps } from './types';

function ActiveLink({ href, as, ...props }: TActiveLinkProps) {
  const router = useRouter();
  const isCurrentPath = router.asPath === href || router.asPath === as;

  return (
    <Link
      {...props}
      href={href}
      data-active={isCurrentPath}
      className={cn(
        'text-action-sm font-action-sm leading-action-sm transition-colors hover:text-blue-200',
        'text-gray-100 data-[active="true"]:text-blue-200',
      )}
    />
  );
}

export default ActiveLink;
