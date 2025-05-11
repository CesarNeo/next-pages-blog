import Image from 'next/image';
import Link from 'next/link';

function Footer() {
  return (
    <footer className="border-t border-white/10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between gap-8 py-8 md:flex-row">
          <Link href="/">
            <Image alt="Logo site" src="/logo.svg" width={116} height={32} />
          </Link>

          <nav className="text-muted-foreground flex flex-col items-center gap-4 text-sm md:flex-row">
            <Link
              href="/termos-de-uso"
              className="hover:text-primary transition-colors"
            >
              Termos de uso
            </Link>
            <Link
              href="/politica-de-privacidade"
              className="hover:text-primary transition-colors"
            >
              Política de privacidade
            </Link>
            <Link
              href="/feedback"
              className="hover:text-primary transition-colors"
            >
              Feedback
            </Link>
          </nav>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
