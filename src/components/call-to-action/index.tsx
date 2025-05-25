import { ArrowRight, Store } from 'lucide-react';
import Link from 'next/link';
import { Button } from '../ui/button';

function CallToAction() {
  return (
    <section className="relative bg-gradient-to-b from-cyan-950/20 to-gray-700 py-24">
      <div className="container">
        <div className="flex flex-col items-center gap-6 text-center">
          <div className="absolute -top-6 w-fit rounded-full bg-cyan-300 p-4">
            <Store className="text-cyan-100" />
          </div>

          <h2 className="font-pt-caption text-heading-xl font-heading-xl leading-heading-xl text-balance text-gray-100">
            Crie uma loja online e inicie suas vendas ainda hoje
          </h2>

          <Button className="mt-6 rounded-full" asChild>
            <Link href="/criar-loja">
              Criar loja grátis
              <ArrowRight />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}

export default CallToAction;
