import Link from 'next/link';
import { products } from '@/app/data/products';
import ProductCard from '@/app/components/product-card';

export default function Home() {
  return (
    <div>
      {/* Hero */}
      <section className="mx-auto max-w-6xl px-5 pb-16 pt-14 text-center md:pt-20">
        <p className="text-sm font-semibold uppercase tracking-wide text-[#C1712F]">Velqen</p>
        <h1 className="mx-auto mt-3 max-w-2xl text-4xl font-bold leading-tight text-[#16233D] md:text-5xl">
          Everyday products, engineered around the problems people actually complain about.
        </h1>
        <p className="mx-auto mt-5 max-w-xl text-base text-[#5B6472]">
          We don&apos;t chase new categories for the sake of it. We look at what people already buy, read what
          frustrates them about it, and build a version that fixes it — reliable first, styled second.
        </p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
          <Link
            href="/products"
            className="rounded-full bg-[#16233D] px-7 py-3 text-sm font-semibold text-white transition hover:bg-[#0F1830]"
          >
            Shop now
          </Link>
          <Link href="/about" className="text-sm font-semibold text-[#16233D] underline underline-offset-4">
            Read our story
          </Link>
        </div>
      </section>

      {/* Product grid */}
      <section className="border-y border-[#E4DFD1] bg-white">
        <div className="mx-auto max-w-6xl px-5 py-16">
          <div className="flex items-end justify-between">
            <h2 className="text-2xl font-bold text-[#16233D] md:text-3xl">Now available</h2>
            <Link href="/products" className="hidden text-sm font-semibold text-[#C1712F] sm:block">
              View all →
            </Link>
          </div>
          <p className="mt-2 max-w-xl text-sm text-[#5B6472]">
            We&apos;re starting with one product, built and tested properly before we add the next.
          </p>

          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {products.map((product) => (
              <ProductCard key={product.slug} product={product} />
            ))}
          </div>
        </div>
      </section>

      {/* Brand philosophy */}
      <section className="mx-auto max-w-6xl px-5 py-16">
        <div className="grid items-center gap-10 md:grid-cols-2">
          <div>
            <h2 className="text-2xl font-bold text-[#16233D] md:text-3xl">Don&apos;t scale an assumption. Scale evidence.</h2>
            <p className="mt-4 text-sm text-[#5B6472]">
              Every Velqen product starts small on purpose. We&apos;d rather learn from real customers with a
              modest first batch than commit heavily to an idea that hasn&apos;t been tested yet.
            </p>
            <Link href="/about" className="mt-4 inline-block text-sm font-semibold text-[#C1712F] underline underline-offset-2">
              More about how we work →
            </Link>
          </div>
          <div className="rounded-2xl border border-[#E4DFD1] bg-[#F7F4EE] p-6">
            <ul className="space-y-4 text-sm text-[#5B6472]">
              <li><span className="font-semibold text-[#16233D]">Reliable first.</span> We fix what people complain about before we worry about how it looks.</li>
              <li><span className="font-semibold text-[#16233D]">Small batches.</span> We launch controlled, learn from real orders, then expand.</li>
              <li><span className="font-semibold text-[#16233D]">One category at a time.</span> Right now that&apos;s home organisation — more will follow as each one earns its place.</li>
            </ul>
          </div>
        </div>
      </section>

      {/* CTA banner */}
      <section className="bg-[#16233D]">
        <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-6 px-5 py-14 md:flex-row md:items-center">
          <div>
            <h2 className="text-2xl font-bold text-white">Take a look at what we&apos;ve built so far</h2>
            <p className="mt-2 text-sm text-white/70">One product, launched properly.</p>
          </div>
          <Link
            href="/products"
            className="rounded-full bg-[#C1712F] px-7 py-3 text-sm font-semibold text-white transition hover:bg-[#A25A22]"
          >
            Shop now
          </Link>
        </div>
      </section>
    </div>
  );
}
