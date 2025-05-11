import Header from '../header';
import type { TLayoutProps } from './types';

function Layout({ children }: TLayoutProps) {
  return (
    <div className="dark relative flex min-h-dvh flex-col">
      <Header />

      <main className="mb-12 flex flex-1 flex-col">{children}</main>
    </div>
  );
}

export default Layout;
