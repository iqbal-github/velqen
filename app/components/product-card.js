import Image from 'next/image';
import Link from 'next/link';

export default function ProductCard({ product }) {
  const thumbnail = product.colors?.[0];

  return (
    <Link
      href={`/products/${product.slug}`}
      className="group flex flex-col overflow-hidden rounded-2xl border border-[#E4DFD1] bg-white transition hover:border-[#C1712F]"
    >
      <div className="relative aspect-[4/3] bg-[#F7F4EE]">
        {thumbnail ? (
          <Image
            src={thumbnail.image}
            alt={`${product.name} in ${thumbnail.name}`}
            fill
            sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
            className="object-cover"
          />
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
