import Image from 'next/image';
import Link from 'next/link';

function Logo() {
  return (
    <Link href="/" title="Página inicial">
      <Image alt="Logo site" src="/logo.svg" width={116} height={32} />
    </Link>
  );
}

export default Logo;
