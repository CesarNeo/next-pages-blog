'use client';

import Link from 'next/link';
import { cn } from '@/lib/utils';
import { usePathname } from 'next/navigation';
import type { TActiveLinkProps } from './types';

function ActiveLink({ href, ...props }: TActiveLinkProps) {
  const pathname = usePathname();

  const linkPath = (typeof href === 'string' ? href : href.pathname) ?? '';
  const isActive =
    pathname === linkPath || pathname?.startsWith(`${linkPath}/`);

  return (
    <Link
      {...props}
      href={href}
      data-active={isActive}
      className={cn(
        'text-action-sm font-action-sm leading-action-sm transition-colors hover:text-blue-200',
        'text-gray-100 data-[active="true"]:text-blue-200',
      )}
    />
  );
}

export default ActiveLink;
