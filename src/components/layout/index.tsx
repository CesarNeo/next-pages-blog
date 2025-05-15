import { cn } from '@/lib/utils';
import { Inter } from 'next/font/google';
import Footer from '../footer';
import Header from '../header';
import type { TLayoutProps } from './types';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
});

function Layout({ children }: TLayoutProps) {
  return (
    <div
      className={cn(
        inter.variable,
        'dark font-inter relative flex min-h-dvh flex-col',
      )}
    >
      <Header />

      <main className="mb-12 flex flex-1 flex-col">{children}</main>

      <Footer />
    </div>
  );
}

export default Layout;
