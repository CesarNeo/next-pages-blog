import { ArrowRight, Clock, Store } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '../ui/button';

function HeroSection() {
  return (
    <section className="relative container mt-16 flex items-center justify-center">
      <div className="grid min-h-80 grid-cols-1 items-center gap-8 md:h-144 md:grid-cols-2">
        <div className="flex flex-col items-center justify-center gap-4 md:items-start">
          <h1 className="text-heading-hg leading-heading-hg font-heading-hg font-pt-caption text-pretty text-gray-100">
            Venda seus produtos como afiliado em um único lugar
          </h1>

          <div className="flex flex-col items-center justify-center gap-4 md:items-start">
            <div>
              <div className="flex items-center gap-2">
                <Clock className="size-4 text-cyan-100" />
                <span className="text-gray-200">
                  Crie o seu site em menos de 5 minutos
                </span>
              </div>
              <div className="flex items-center gap-2">
                <Store className="size-4 text-cyan-100" />
                <span className="text-gray-200">
                  Acompanhe e otimize seu negócio online
                </span>
              </div>
            </div>

            <div className="mt-5 flex flex-col items-center gap-2 md:items-start">
              <Button className="w-fit rounded-full" asChild>
                <Link href="/criar-loja">
                  Criar loja grátis
                  <ArrowRight />
                </Link>
              </Button>

              <p className="text-body-xs leading-body-xs font-body-xs text-gray-300">
                Não precisa de cartão de crédito
              </p>
            </div>
          </div>
        </div>

        <div className="relative order-first hidden h-80 items-center justify-center md:order-last md:flex md:h-full">
          <Image
            src="/hero-section.svg"
            alt="Ilustração com ícones de store, tag e sacola"
            width={200}
            height={400}
            className="h-full w-auto object-contain"
          />
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
