import Link from 'next/link';
import { product } from '@/app/data/product';
import OrganiserDiagram from '@/app/components/organiser-diagram';
import AddToCart from '@/app/components/add-to-cart';

export const metadata = {
  title: `${product.name} | Velqen`,
  description: product.tagline,
};

export default function ProductPage() {
  return (
    <div className="mx-auto max-w-6xl px-5 py-12">
      <div className="grid gap-12 md:grid-cols-2">
        <div>
          <OrganiserDiagram className="w-full rounded-2xl border border-[#E4DFD1] bg-white" />
        </div>

        <div>
          <h1 className="text-3xl font-bold text-[#16233D]">{product.name}</h1>
          <p className="mt-2 text-2xl font-semibold text-[#C1712F]">£{product.price.toFixed(2)}</p>
          <p className="mt-4 text-sm text-[#5B6472]">{product.intro}</p>

          <div className="mt-8">
            <AddToCart product={product} />
          </div>

          <div className="mt-8 rounded-2xl border border-[#E4DFD1] bg-[#F7F4EE] p-5">
            <p className="text-sm font-semibold text-[#16233D]">Not sure it&apos;ll fit?</p>
            <p className="mt-1 text-sm text-[#5B6472]">
              Measure your cabinet before ordering — see our{' '}
              <Link href="/faq" className="font-medium text-[#C1712F] underline underline-offset-2">
                fit guidance
              </Link>
              .
            </p>
          </div>
        </div>
      </div>

      {/* Features */}
      <div className="mt-16">
        <h2 className="text-xl font-bold text-[#16233D]">What&apos;s different about this one</h2>
        <div className="mt-6 grid gap-6 md:grid-cols-3">
          {product.features.map((f) => (
            <div key={f.title} className="rounded-2xl border border-[#E4DFD1] bg-white p-5">
              <p className="text-sm font-semibold text-[#16233D]">{f.title}</p>
              <p className="mt-2 text-sm text-[#5B6472]">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Specs */}
      <div className="mt-16 grid gap-12 md:grid-cols-2">
        <div>
          <h2 className="text-xl font-bold text-[#16233D]">Specifications</h2>
          <dl className="mt-6 divide-y divide-[#E4DFD1] rounded-2xl border border-[#E4DFD1] bg-white">
            {product.specs.map((s) => (
              <div key={s.label} className="flex justify-between gap-4 px-5 py-3 text-sm">
                <dt className="text-[#5B6472]">{s.label}</dt>
                <dd className="font-medium text-[#16233D]">{s.value}</dd>
              </div>
            ))}
          </dl>
        </div>

        <div>
          <h2 className="text-xl font-bold text-[#16233D]">Before you buy: measure your cabinet</h2>
          <ol className="mt-6 space-y-3">
            {product.fitGuidance.map((step, i) => (
              <li key={step} className="flex gap-3 text-sm text-[#5B6472]">
                <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#16233D] text-xs font-semibold text-white">
                  {i + 1}
                </span>
                {step}
              </li>
            ))}
          </ol>
        </div>
      </div>
    </div>
  );
}
