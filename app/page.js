import Link from 'next/link';
import { CheckCircle2 } from 'lucide-react';
import { product } from '@/app/data/product';
import OrganiserDiagram from '@/app/components/organiser-diagram';

export default function Home() {
  return (
    <div>
      {/* Hero */}
      <section className="mx-auto max-w-6xl px-5 pb-16 pt-14 md:pt-20">
        <div className="grid items-center gap-12 md:grid-cols-2">
          <div>
            <p className="text-sm font-semibold uppercase tracking-wide text-[#C1712F]">
              New from Velqen
            </p>
            <h1 className="mt-3 text-4xl font-bold leading-tight text-[#16233D] md:text-5xl">
              {product.tagline}
            </h1>
            <p className="mt-5 max-w-lg text-base text-[#5B6472]">{product.intro}</p>

            <div className="mt-8 flex flex-wrap items-center gap-4">
              <Link
                href="/product"
                className="rounded-full bg-[#16233D] px-7 py-3 text-sm font-semibold text-white transition hover:bg-[#0F1830]"
              >
                Shop the organiser — £{product.price.toFixed(2)}
              </Link>
              <Link
                href="/faq"
                className="text-sm font-semibold text-[#16233D] underline underline-offset-4"
              >
                Will it fit my cabinet?
              </Link>
            </div>
          </div>

          <OrganiserDiagram className="w-full max-w-md justify-self-center" />
        </div>
      </section>

      {/* Problem */}
      <section className="border-y border-[#E4DFD1] bg-white">
        <div className="mx-auto max-w-6xl px-5 py-16">
          <h2 className="text-2xl font-bold text-[#16233D] md:text-3xl">
            Under-sink storage usually fights the cabinet. We designed around it instead.
          </h2>
          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {product.problems.map((p) => (
              <div key={p.title} className="rounded-2xl border border-[#E4DFD1] bg-[#F7F4EE] p-6">
                <p className="text-sm font-semibold text-[#16233D]">{p.title}</p>
                <p className="mt-2 text-sm text-[#5B6472]">{p.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="mx-auto max-w-6xl px-5 py-16">
        <h2 className="text-2xl font-bold text-[#16233D] md:text-3xl">Built reliable first, styled second</h2>
        <div className="mt-10 grid gap-8 md:grid-cols-3">
          {product.features.map((f) => (
            <div key={f.title} className="flex gap-3">
              <CheckCircle2 className="mt-0.5 shrink-0 text-[#C1712F]" size={20} />
              <div>
                <p className="text-sm font-semibold text-[#16233D]">{f.title}</p>
                <p className="mt-1 text-sm text-[#5B6472]">{f.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA banner */}
      <section className="bg-[#16233D]">
        <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-6 px-5 py-14 md:flex-row md:items-center">
          <div>
            <h2 className="text-2xl font-bold text-white">
              {product.name}
            </h2>
            <p className="mt-2 text-sm text-white/70">
              Adjustable 360–540mm · Plumbing clearance · Anti-tip frame
            </p>
          </div>
          <Link
            href="/product"
            className="rounded-full bg-[#C1712F] px-7 py-3 text-sm font-semibold text-white transition hover:bg-[#A25A22]"
          >
            View product — £{product.price.toFixed(2)}
          </Link>
        </div>
      </section>
    </div>
  );
}
