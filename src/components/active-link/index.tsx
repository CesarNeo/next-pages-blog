import Link from 'next/link';
import { useRouter } from 'next/router';
import { cn } from '@/lib/utils';
import type { TActiveLinkProps } from './types';

function ActiveLink({ href, as, ...props }: TActiveLinkProps) {
  const router = useRouter();
  const isCurrentPath =
    router.asPath === href ||
    router.asPath === as ||
    router.asPath.startsWith(String(as));

  return (
    <Link
      {...props}
      href={href}
      data-active={isCurrentPath}
      className={cn(
        'text-sm font-medium transition-colors hover:text-blue-500',
        'text-muted-foreground data-[active="true"]:text-blue-500',
      )}
    />
  );
}

export default ActiveLink;
