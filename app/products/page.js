import { products } from '@/app/data/products';
import ProductCard from '@/app/components/product-card';

export const metadata = {
  title: 'Shop | Velqen',
  description: 'Browse every product Velqen makes.',
};

export default function ProductsPage() {
  return (
    <div className="mx-auto max-w-6xl px-5 py-16">
      <p className="text-sm font-semibold uppercase tracking-wide text-[#C1712F]">Shop</p>
      <h1 className="mt-3 text-3xl font-bold text-[#F1EDE4] md:text-4xl">All products</h1>
      <p className="mt-4 max-w-2xl text-sm text-[#98A2B8]">
        We&apos;re starting with one product, built and tested properly before we add the next.
      </p>

      <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {products.map((product) => (
          <ProductCard key={product.slug} product={product} />
        ))}
      </div>
    </div>
  );
}
