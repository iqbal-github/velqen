'use client';

import React from 'react';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import { categoriesData, products } from '@/app/data/products';
import { useCart } from '@/app/context/cart-context';
import { ShoppingBag, Star, ChevronRight, ArrowLeft } from 'lucide-react';

export default function CategoryPage() {
  const params = useParams();
  const category = categoriesData.find(c => c.slug === params.slug) || categoriesData[0];
  const categoryProducts = products.filter(p => p.categorySlug === category.slug);
  const { totalItems, setIsCartOpen } = useCart();

  return (
    <div className="min-h-screen bg-[#F4EFE6] text-[#151C12]">
      
      {/* 1. TOP MARQUEE */}
      <div className="bg-[#283621] text-[#EFE7D3] text-xs py-2 px-4 text-center font-medium tracking-wide flex justify-center items-center gap-6">
        <span>🇬🇧 UK Free Standard Delivery</span>
        <span className="opacity-30">•</span>
        <span>Dispatched via Amazon Logistics</span>
        <span className="opacity-30">•</span>
        <span>30-Day UK Returns</span>
      </div>

      {/* 2. HEADER */}
      <header className="sticky top-0 z-30 bg-[#F4EFE6]/95 backdrop-blur-md border-b border-[#E2D8C3]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          <Link href="/" className="text-2xl sm:text-3xl font-extrabold tracking-tight text-[#283621]" style={{ fontFamily: "'Outfit', sans-serif" }}>
            VELQEN<span className="text-[#849B72]">.</span>
          </Link>

          {/* 4 Category Navigation Tabs */}
          <nav className="hidden md:flex items-center gap-8 text-xs font-bold tracking-wider uppercase text-[#283621]">
            {categoriesData.map((cat) => (
              <Link 
                key={cat.slug}
                href={`/category/${cat.slug}`}
                className={`transition pb-1 border-b-2 ${
                  cat.slug === category.slug 
                    ? 'border-[#283621] text-[#283621]' 
                    : 'border-transparent text-[#7A7360] hover:text-[#283621]'
                }`}
              >
                {cat.name}
              </Link>
            ))}
          </nav>

          <button 
            onClick={() => setIsCartOpen(true)}
            className="flex items-center gap-2 bg-[#283621] text-[#F4EFE6] px-4 py-2.5 rounded-full text-xs font-bold hover:bg-[#1C2617] transition shadow-md"
          >
            <ShoppingBag className="w-3.5 h-3.5 text-[#EFE7D3]" />
            <span>Bag ({totalItems})</span>
          </button>
        </div>
      </header>

      {/* 3. BREADCRUMBS */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <nav className="flex items-center gap-2 text-xs text-[#6B7963]">
          <Link href="/" className="hover:underline">Home</Link>
          <ChevronRight className="w-3 h-3 text-slate-400" />
          <span className="text-[#283621] font-semibold">{category.name}</span>
        </nav>
      </div>

      {/* 4. CATEGORY HERO BANNER */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-10">
        <div className="bg-[#283621] text-[#F4EFE6] rounded-3xl p-8 sm:p-12 border border-[#3E5235] flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="max-w-xl space-y-3">
            <span className="text-xs font-bold uppercase tracking-widest text-[#C9DDBB]">Curated Category Collection</span>
            <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight" style={{ fontFamily: "'Outfit', sans-serif" }}>
              {category.name}
            </h1>
            <p className="text-sm text-[#D2C8AF] leading-relaxed">
              {category.description}
            </p>
          </div>
          <div className="text-xs bg-[#3A4E31] px-4 py-2 rounded-xl text-[#EFE7D3] border border-[#506843] font-bold">
            Showing {categoryProducts.length} Silhouettes
          </div>
        </div>
      </section>

      {/* 5. PRODUCT GRID FOR THIS CATEGORY */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {categoryProducts.map((item) => (
            <Link 
              href={`/products/${item.id}`} 
              key={item.id} 
              className="bg-[#FAF6EE] rounded-3xl p-4 border border-[#DCD0B4] flex flex-col justify-between hover:shadow-xl hover:border-[#283621] transition group cursor-pointer"
            >
              <div>
                <div className="relative aspect-square rounded-2xl overflow-hidden bg-[#E2D8C3] mb-4">
                  <img 
                    src={item.images[0]} 
                    alt={item.name} 
                    className="w-full h-full object-cover group-hover:scale-105 transition duration-500" 
                  />
                  <span className="absolute top-3 left-3 bg-[#283621] text-[#EFE7D3] text-[10px] font-bold px-2.5 py-1 rounded-md uppercase tracking-wider">
                    {item.badge}
                  </span>
                  <span className="absolute bottom-3 right-3 bg-[#FAF6EE]/90 backdrop-blur-sm text-[10px] font-mono text-[#283621] px-2 py-0.5 rounded font-bold">
                    {item.itemCode}
                  </span>
                </div>

                <div className="flex items-center gap-1 text-[#5B7349] text-xs font-bold mb-1">
                  <Star className="w-3.5 h-3.5 fill-[#5B7349]" />
                  <span>{item.rating}</span>
                  <span className="text-slate-500 font-normal text-xs">({item.reviews} reviews)</span>
                </div>

                <h3 className="font-bold text-base text-[#283621] line-clamp-1 group-hover:text-[#5B7349] transition" style={{ fontFamily: "'Outfit', sans-serif" }}>
                  {item.name}
                </h3>
                <p className="text-xs text-[#6B7963] mt-1 line-clamp-2">{item.tagline}</p>
              </div>

              <div className="mt-6 pt-3 border-t border-[#E2D8C3] flex items-center justify-between">
                <span className="text-lg font-extrabold text-[#283621]">£{item.price.toFixed(2)}</span>
                <span className="text-xs font-bold text-[#283621] group-hover:translate-x-1 transition flex items-center gap-1">
                  View Details &rarr;
                </span>
              </div>
            </Link>
          ))}
        </div>
      </main>

      {/* 6. FOOTER */}
      <footer className="bg-[#202C1B] text-[#D0C7B0] py-10 text-xs border-t border-[#2E3D27] text-center">
        <p>© {new Date().getFullYear()} Velqen.co.uk. All rights reserved.</p>
      </footer>

    </div>
  );
}