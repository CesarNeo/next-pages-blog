import { cn } from '@/lib/utils';
import { Inter, PT_Sans_Caption as PtSansCaption } from 'next/font/google';
import CallToAction from '@/templates/landing-page/sections/call-to-action';
import Footer from './components/footer';
import Header from './components/header';
import type { TLayoutProps } from './types';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
});

const ptSansCaption = PtSansCaption({
  subsets: ['latin'],
  variable: '--font-pt-caption',
  weight: ['400', '700'],
});

function Layout({ children }: TLayoutProps) {
  return (
    <div
      className={cn(
        inter.variable,
        ptSansCaption.variable,
        'dark font-inter relative flex min-h-dvh flex-col bg-gray-700',
      )}
    >
      <Header />

      <main className="mt-10 mb-12 flex flex-1 flex-col">{children}</main>

      <CallToAction />
      <Footer />
    </div>
  );
}

export default Layout;
