import Link from 'next/link';
import { Sparkles, Ruler, ShieldCheck, MapPin, ArrowRight, CheckCircle2 } from 'lucide-react';
import { products } from '@/app/data/products';
import OrganiserDiagram from '@/app/components/organiser-diagram';

const TRUST_STRIP = [
  { icon: Ruler, label: 'Adjustable to fit real cabinets' },
  { icon: ShieldCheck, label: 'Tested loaded, not just empty' },
  { icon: MapPin, label: 'UK-based, Amazon UK stock' },
];

const PRINCIPLES = [
  {
    n: '01',
    title: 'Reliable first',
    desc: 'We fix what people complain about before we worry about how it looks.',
  },
  {
    n: '02',
    title: 'Small batches',
    desc: 'We launch controlled, learn from real orders, then expand.',
  },
  {
    n: '03',
    title: 'One category at a time',
    desc: 'Right now that’s home organisation — more will follow as each one earns its place.',
  },
];

export default function Home() {
  const featured = products[0];

  return (
    <div className="overflow-x-hidden">
      {/* Hero */}
      <section className="relative mx-auto max-w-6xl px-5 pb-20 pt-16 md:pt-24">
        <div
          aria-hidden
          className="pointer-events-none absolute -right-24 -top-24 h-80 w-80 rounded-full bg-[#C1712F]/20 blur-3xl"
        />
        <div
          aria-hidden
          className="pointer-events-none absolute -left-32 top-40 h-72 w-72 rounded-full bg-[#F1EDE4]/5 blur-3xl"
        />

        <div className="relative grid items-center gap-12 md:grid-cols-2">
          <div>
            <span className="inline-flex items-center gap-1.5 rounded-full border border-[#C1712F]/30 bg-[#C1712F]/10 px-3 py-1 text-xs font-semibold text-[#C1712F]">
              <Sparkles size={13} /> New from Velqen
            </span>

            <h1 className="mt-5 text-4xl font-bold leading-[1.1] text-[#F1EDE4] md:text-6xl">
              Everyday products, engineered around what actually frustrates people.
            </h1>
            <p className="mt-5 max-w-md text-base text-[#98A2B8]">
              We don&apos;t chase new categories for the sake of it. We look at what people already buy, read
              what frustrates them about it, and build a version that fixes it — reliable first, styled
              second.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-4">
              <Link
                href="/products"
                className="group inline-flex items-center gap-2 rounded-full bg-[#F1EDE4] px-7 py-3 text-sm font-semibold text-[#0E1420] transition hover:bg-[#DCD5C4]"
              >
                Shop now
                <ArrowRight size={16} className="transition group-hover:translate-x-0.5" />
              </Link>
              <Link href="/about" className="text-sm font-semibold text-[#F1EDE4] underline underline-offset-4">
                Read our story
              </Link>
            </div>

            <div className="mt-10 flex flex-wrap gap-x-8 gap-y-3">
              {TRUST_STRIP.map(({ icon: Icon, label }) => (
                <div key={label} className="flex items-center gap-2 text-xs font-medium text-[#98A2B8]">
                  <Icon size={16} className="text-[#C1712F]" />
                  {label}
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div
              aria-hidden
              className="pointer-events-none absolute inset-0 -z-10 translate-x-4 translate-y-4 rounded-2xl bg-[#F1EDE4]/5"
            />
            <OrganiserDiagram className="w-full rounded-2xl border border-[#E4DFD1] bg-white shadow-sm" />
          </div>
        </div>
      </section>

      {/* Featured product */}
      <section className="relative overflow-hidden bg-[#171E30]">
        <div
          aria-hidden
          className="pointer-events-none absolute -right-20 top-1/2 h-96 w-96 -translate-y-1/2 rounded-full bg-[#C1712F]/25 blur-3xl"
        />
        <div className="relative mx-auto grid max-w-6xl items-center gap-10 px-5 py-16 md:grid-cols-2 md:py-20">
          <div className="order-2 md:order-1">
            <p className="text-xs font-semibold uppercase tracking-wide text-[#C1712F]">{featured.category}</p>
            <h2 className="mt-2 text-2xl font-bold text-white md:text-3xl">{featured.name}</h2>
            <p className="mt-3 text-sm text-white/70">{featured.cardBlurb}</p>
            <p className="mt-5 text-3xl font-bold text-white">£{featured.price.toFixed(2)}</p>
            <div className="mt-6 flex flex-wrap gap-4">
              <Link
                href={`/products/${featured.slug}`}
                className="inline-flex items-center gap-2 rounded-full bg-[#C1712F] px-7 py-3 text-sm font-semibold text-white transition hover:bg-[#A25A22]"
              >
                View product
                <ArrowRight size={16} />
              </Link>
              <Link
                href="/products"
                className="inline-flex items-center rounded-full border border-white/30 px-7 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
              >
                View all products
              </Link>
            </div>
          </div>
          <div className="order-1 rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm md:order-2 md:p-8">
            <ul className="space-y-5">
              {featured.features.slice(0, 3).map((f) => (
                <li key={f.title} className="flex gap-3">
                  <CheckCircle2 className="mt-0.5 shrink-0 text-[#C1712F]" size={20} />
                  <div>
                    <p className="text-sm font-semibold text-white">{f.title}</p>
                    <p className="mt-1 text-sm text-white/70">{f.desc}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Principles */}
      <section className="mx-auto max-w-6xl px-5 py-20">
        <div className="max-w-xl">
          <h2 className="text-2xl font-bold text-[#F1EDE4] md:text-3xl">
            Don&apos;t scale an assumption. Scale evidence.
          </h2>
          <p className="mt-3 text-sm text-[#98A2B8]">
            Every Velqen product starts small on purpose. We&apos;d rather learn from real customers with a
            modest first batch than commit heavily to an idea that hasn&apos;t been tested yet.
          </p>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {PRINCIPLES.map((p) => (
            <div
              key={p.n}
              className="rounded-2xl border border-[#262D45] bg-[#161C2E] p-6 transition hover:-translate-y-1 hover:border-[#C1712F]/60"
            >
              <p className="text-3xl font-bold text-[#C1712F]/50">{p.n}</p>
              <p className="mt-3 text-sm font-semibold text-[#F1EDE4]">{p.title}</p>
              <p className="mt-2 text-sm text-[#98A2B8]">{p.desc}</p>
            </div>
          ))}
        </div>

        <Link
          href="/about"
          className="mt-8 inline-flex items-center gap-1.5 text-sm font-semibold text-[#C1712F] underline underline-offset-2"
        >
          More about how we work <ArrowRight size={14} />
        </Link>
      </section>

      {/* Closing CTA */}
      <section className="border-t border-[#262D45] bg-[#C1712F]">
        <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-6 px-5 py-14 md:flex-row md:items-center">
          <div>
            <h2 className="text-2xl font-bold text-white">Want to hear about new products first?</h2>
            <p className="mt-2 text-sm text-white/80">Reach out and we&apos;ll keep you posted.</p>
          </div>
          <Link
            href="/contact"
            className="rounded-full bg-[#16233D] px-7 py-3 text-sm font-semibold text-white transition hover:bg-[#0F1830]"
          >
            Get in touch
          </Link>
        </div>
      </section>
    </div>
  );
}
