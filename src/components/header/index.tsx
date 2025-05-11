import Link from 'next/link';
import { Button } from '../ui/button';
import ActiveLink from '../active-link';

function Header() {
  return (
    <header className="bg-background/95 supports-[backdrop-filter]:bg-background/60 fixed top-0 z-50 w-full border-b border-white/10 backdrop-blur-sm">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <Link href="/">Logo</Link>

          <nav className="flex items-center gap-6">
            <ActiveLink href="/">Início</ActiveLink>
            <ActiveLink href="/blog">Blog</ActiveLink>
            <Button asChild>
              <Link href="comecar">Começar</Link>
            </Button>
          </nav>
        </div>
      </div>
    </header>
  );
}

export default Header;
