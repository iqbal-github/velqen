import Link from 'next/link';
import OrganiserDiagram from '@/app/components/organiser-diagram';

// Per-product thumbnail illustrations. Add an entry here as new products
// get their own concept art/photography.
const ILLUSTRATIONS = {
  'under-sink-organiser': OrganiserDiagram,
};

export default function ProductCard({ product }) {
  const Illustration = ILLUSTRATIONS[product.slug];

  return (
    <Link
      href={`/products/${product.slug}`}
      className="group flex flex-col overflow-hidden rounded-2xl border border-[#E4DFD1] bg-white transition hover:border-[#C1712F]"
    >
      <div className="aspect-[4/3] bg-[#F7F4EE]">
        {Illustration ? (
          <Illustration className="h-full w-full" />
        ) : (
          <div className="flex h-full w-full items-center justify-center text-sm text-[#9AA3B2]">
            Image coming soon
          </div>
        )}
      </div>
      <div className="flex flex-1 flex-col gap-2 p-5">
        <p className="text-xs font-semibold uppercase tracking-wide text-[#C1712F]">{product.category}</p>
        <p className="text-sm font-semibold text-[#16233D] group-hover:underline">{product.name}</p>
        <p className="text-sm text-[#5B6472]">{product.cardBlurb}</p>
        <p className="mt-auto pt-2 text-sm font-semibold text-[#16233D]">£{product.price.toFixed(2)}</p>
      </div>
    </Link>
  );
}
