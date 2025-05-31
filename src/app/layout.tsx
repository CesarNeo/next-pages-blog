import Layout from '@/components/layout';
import '@/styles/globals.css';
import type { Metadata } from 'next';

import type { PropsWithChildren } from 'react';

export const metadata = {
  title: 'Site.Set',
  description: 'Venda seus produtos como afiliado em um único lugar',
  robots: 'index, follow',
} satisfies Metadata;

function RootLayout({ children }: PropsWithChildren) {
  return (
    <html lang="en">
      <body>
        <Layout>{children}</Layout>
      </body>
    </html>
  );
}

export default RootLayout;
