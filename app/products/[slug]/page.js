import Link from 'next/link';
import { notFound } from 'next/navigation';
import { products, getProductBySlug } from '@/app/data/products';
import OrganiserDiagram from '@/app/components/organiser-diagram';
import AddToCart from '@/app/components/add-to-cart';

const ILLUSTRATIONS = {
  'under-sink-organiser': OrganiserDiagram,
};

export function generateStaticParams() {
  return products.map((product) => ({ slug: product.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const product = getProductBySlug(slug);
  if (!product) return {};
  return {
    title: `${product.name} | Velqen`,
    description: product.tagline,
  };
}

export default async function ProductPage({ params }) {
  const { slug } = await params;
  const product = getProductBySlug(slug);
  if (!product) notFound();

  const Illustration = ILLUSTRATIONS[product.slug];

  return (
    <div className="mx-auto max-w-6xl px-5 py-12">
      <Link href="/products" className="text-sm font-medium text-[#5B6472] hover:text-[#16233D]">
        ← All products
      </Link>

      <div className="mt-6 grid gap-12 md:grid-cols-2">
        <div>
          {Illustration && <Illustration className="w-full rounded-2xl border border-[#E4DFD1] bg-white" />}
        </div>

        <div>
          <p className="text-xs font-semibold uppercase tracking-wide text-[#C1712F]">{product.category}</p>
          <h1 className="mt-2 text-3xl font-bold text-[#16233D]">{product.name}</h1>
          <p className="mt-2 text-2xl font-semibold text-[#C1712F]">£{product.price.toFixed(2)}</p>
          <p className="mt-4 text-sm text-[#5B6472]">{product.intro}</p>

          <div className="mt-8">
            <AddToCart product={product} />
          </div>

          {product.fitGuidance && (
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
          )}
        </div>
      </div>

      {product.problems && (
        <div className="mt-16">
          <h2 className="text-xl font-bold text-[#16233D]">The problem with most of these</h2>
          <div className="mt-6 grid gap-6 md:grid-cols-2">
            {product.problems.map((p) => (
              <div key={p.title} className="rounded-2xl border border-[#E4DFD1] bg-[#F7F4EE] p-5">
                <p className="text-sm font-semibold text-[#16233D]">{p.title}</p>
                <p className="mt-2 text-sm text-[#5B6472]">{p.detail}</p>
              </div>
            ))}
          </div>
        </div>
      )}

      {product.features && (
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
      )}

      <div className="mt-16 grid gap-12 md:grid-cols-2">
        {product.specs && (
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
        )}

        {product.fitGuidance && (
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
        )}
      </div>
    </div>
  );
}
