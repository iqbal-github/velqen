'use client';

import React from 'react';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import { categoriesData, products } from '@/app/data/products';
import { useCart } from '@/app/context/cart-context';
import { ShoppingBag, Star, ChevronRight } from 'lucide-react';

export default function CategoryPage() {
  const params = useParams();
  const category = categoriesData.find(c => c.slug === params.slug) || categoriesData[0];
  const categoryProducts = products.filter(p => p.categorySlug === category.slug);
  const { totalItems, setIsCartOpen } = useCart();

  return (
    <div className="min-h-screen bg-[#F4EFE6] text-[#151C12]">
      
      {/* 1. TOP BAR */}
      <div className="bg-[#283621] text-[#EFE7D3] text-[11px] sm:text-xs py-2 px-3 text-center font-medium tracking-wide flex justify-center items-center gap-4">
        <span>🇬🇧 UK Free Standard Delivery</span>
        <span className="opacity-40">•</span>
        <span>Amazon FBA Fast Dispatch</span>
      </div>

      {/* 2. HEADER */}
      <header className="sticky top-0 z-30 bg-[#F4EFE6]/95 backdrop-blur-md border-b border-[#E2D8C3]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 sm:h-20 flex items-center justify-between">
          <Link href="/" className="text-2xl sm:text-3xl font-extrabold tracking-tight text-[#283621]" style={{ fontFamily: "'Outfit', sans-serif" }}>
            VELQEN<span className="text-[#849B72]">.</span>
          </Link>

          {/* Desktop Categories */}
          <nav className="hidden md:flex items-center gap-6 lg:gap-8 text-xs font-bold tracking-wider uppercase text-[#283621]">
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
            className="flex items-center gap-2 bg-[#283621] text-[#F4EFE6] px-3.5 sm:px-4 py-2 sm:py-2.5 rounded-full text-xs font-bold hover:bg-[#1C2617] transition shadow-md"
          >
            <ShoppingBag className="w-3.5 h-3.5 text-[#EFE7D3]" />
            <span>Bag ({totalItems})</span>
          </button>
        </div>

        {/* Horizontal Category Switcher (Mobile) */}
        <div className="md:hidden border-t border-[#E2D8C3] bg-[#FAF6EE] overflow-x-auto scrollbar-none py-2 px-3 flex gap-2">
          {categoriesData.map((cat) => (
            <Link
              key={cat.slug}
              href={`/category/${cat.slug}`}
              className={`whitespace-nowrap px-3.5 py-1.5 rounded-full text-[11px] font-bold transition ${
                cat.slug === category.slug
                  ? 'bg-[#283621] text-white'
                  : 'bg-[#F4EFE6] border border-[#DCD0B4] text-[#283621]'
              }`}
            >
              {cat.name}
            </Link>
          ))}
        </div>
      </header>

      {/* 3. BREADCRUMBS */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 sm:py-4">
        <nav className="flex items-center gap-1.5 text-xs text-[#6B7963]">
          <Link href="/" className="hover:underline">Home</Link>
          <ChevronRight className="w-3 h-3 text-slate-400" />
          <span className="text-[#283621] font-semibold">{category.name}</span>
        </nav>
      </div>

      {/* 4. CATEGORY BANNER */}
      <section className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 pb-6 sm:pb-10">
        <div className="bg-[#283621] text-[#F4EFE6] rounded-2xl sm:rounded-3xl p-6 sm:p-10 border border-[#3E5235] flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          <div className="space-y-2">
            <span className="text-[10px] sm:text-xs font-bold uppercase tracking-widest text-[#C9DDBB]">Category Collection</span>
            <h1 className="text-2xl sm:text-4xl font-extrabold tracking-tight" style={{ fontFamily: "'Outfit', sans-serif" }}>
              {category.name}
            </h1>
            <p className="text-xs sm:text-sm text-[#D2C8AF] max-w-xl">{category.description}</p>
          </div>
          <div className="text-xs bg-[#3A4E31] px-3 py-1.5 rounded-lg text-[#EFE7D3] font-bold">
            {categoryProducts.length} Silhouettes
          </div>
        </div>
      </section>

      {/* 5. 2-COLUMN MOBILE PRODUCT GRID */}
      <main className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 pb-20">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-6">
          {categoryProducts.map((item) => (
            <Link 
              href={`/products/${item.id}`} 
              key={item.id} 
              className="bg-[#FAF6EE] rounded-xl sm:rounded-2xl p-2.5 sm:p-4 border border-[#DCD0B4] flex flex-col justify-between hover:shadow-xl hover:border-[#283621] transition group cursor-pointer active:scale-[0.98]"
            >
              <div>
                <div className="relative aspect-square rounded-lg sm:rounded-xl overflow-hidden bg-[#E2D8C3] mb-2 sm:mb-4">
                  <img 
                    src={item.images[0]} 
                    alt={item.name} 
                    className="w-full h-full object-cover group-hover:scale-105 transition duration-500" 
                  />
                  <span className="absolute top-2 left-2 bg-[#283621] text-[#EFE7D3] text-[9px] sm:text-[10px] font-bold px-2 py-0.5 rounded uppercase tracking-wider">
                    {item.badge}
                  </span>
                </div>

                <div className="flex items-center gap-1 text-[#5B7349] text-[10px] sm:text-xs font-bold mb-1">
                  <Star className="w-3 h-3 fill-[#5B7349]" />
                  <span>{item.rating}</span>
                  <span className="text-slate-500 font-normal text-[9px]">({item.reviews})</span>
                </div>

                <h3 className="font-bold text-xs sm:text-sm text-[#283621] line-clamp-1 group-hover:text-[#5B7349] transition" style={{ fontFamily: "'Outfit', sans-serif" }}>
                  {item.name}
                </h3>
                <p className="text-[10px] sm:text-xs text-[#6B7963] mt-0.5 line-clamp-1">{item.tagline}</p>
              </div>

              <div className="mt-3 sm:mt-5 pt-2 sm:pt-3 border-t border-[#E2D8C3] flex items-center justify-between">
                <span className="text-sm sm:text-base font-extrabold text-[#283621]">£{item.price.toFixed(2)}</span>
                <span className="text-[10px] sm:text-xs font-bold text-[#283621]">
                  View &rarr;
                </span>
              </div>
            </Link>
          ))}
        </div>
      </main>

    </div>
  );
}