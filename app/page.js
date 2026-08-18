'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { categoriesData, products } from '@/app/data/products';
import { useCart } from '@/app/context/cart-context';
import { 
  ShoppingBag, ArrowRight, Star, Sparkles, Menu, X, 
  ChevronRight, Truck, ShieldCheck 
} from 'lucide-react';

export default function VelqenStore() {
  const { totalItems, setIsCartOpen } = useCart();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#F4EFE6] text-[#151C12]">
      
      {/* 1. TOP ANNOUNCEMENT BAR */}
      <div className="bg-[#283621] text-[#EFE7D3] text-[11px] sm:text-xs py-2 px-3 text-center font-medium tracking-wide flex justify-center items-center gap-3 sm:gap-6">
        <span>🇬🇧 Free UK Delivery over £20</span>
        <span className="opacity-40">•</span>
        <span className="hidden xs:inline">Amazon FBA Fast Dispatch</span>
        <span className="hidden xs:inline opacity-40">•</span>
        <span>30-Day Returns</span>
      </div>

      {/* 2. HEADER WITH MOBILE HAMBURGER MENU */}
      <header className="sticky top-0 z-40 bg-[#F4EFE6]/95 backdrop-blur-md border-b border-[#E2D8C3]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 sm:h-20 flex items-center justify-between">
          
          {/* Mobile Menu Button */}
          <div className="flex items-center gap-3 md:hidden">
            <button 
              onClick={() => setMobileMenuOpen(true)}
              className="p-2 text-[#283621] hover:bg-[#EAE4D5] rounded-xl transition"
              aria-label="Open Menu"
            >
              <Menu className="w-6 h-6" />
            </button>
          </div>

          {/* Logo */}
          <div className="text-center md:text-left">
            <Link href="/" className="text-2xl sm:text-3xl font-extrabold tracking-tight text-[#283621]" style={{ fontFamily: "'Outfit', sans-serif" }}>
              VELQEN<span className="text-[#849B72]">.</span>
            </Link>
          </div>

          {/* Desktop Category Navigation */}
          <nav className="hidden md:flex items-center gap-6 lg:gap-8 text-xs font-bold tracking-wider uppercase text-[#283621]">
            {categoriesData.map((cat) => (
              <Link key={cat.slug} href={`/category/${cat.slug}`} className="hover:text-[#5B7349] transition">
                {cat.name}
              </Link>
            ))}
          </nav>

          {/* Header Actions (Bag Button) */}
          <div className="flex items-center gap-2 sm:gap-3">
            <span className="hidden lg:inline-block text-xs font-semibold text-[#283621] bg-[#E5DCBF] px-3 py-1.5 rounded-full border border-[#D5C9A6]">
              UK (GBP £)
            </span>
            <button 
              onClick={() => setIsCartOpen(true)}
              className="flex items-center gap-2 bg-[#283621] text-[#F4EFE6] px-3.5 sm:px-4 py-2 sm:py-2.5 rounded-full text-xs font-bold hover:bg-[#1C2617] transition shadow-md"
            >
              <ShoppingBag className="w-4 h-4 text-[#EFE7D3]" />
              <span>Bag ({totalItems})</span>
            </button>
          </div>
        </div>

        {/* HORIZONTAL TOUCH SCROLL CATEGORY RAIL (Mobile Only) */}
        <div className="md:hidden border-t border-[#E2D8C3] bg-[#FAF6EE] overflow-x-auto scrollbar-none py-2.5 px-4 flex gap-2">
          {categoriesData.map((cat) => (
            <Link
              key={cat.slug}
              href={`/category/${cat.slug}`}
              className="whitespace-nowrap px-3.5 py-1.5 bg-[#F4EFE6] border border-[#DCD0B4] rounded-full text-[11px] font-bold text-[#283621] active:bg-[#283621] active:text-white transition"
            >
              {cat.name}
            </Link>
          ))}
        </div>
      </header>

      {/* 3. MOBILE SLIDE-OUT DRAWER MENU */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-50 md:hidden">
          <div onClick={() => setMobileMenuOpen(false)} className="absolute inset-0 bg-black/40 backdrop-blur-sm" />
          
          <div className="absolute inset-y-0 left-0 max-w-[300px] w-full bg-[#F4EFE6] shadow-2xl flex flex-col justify-between p-6 border-r border-[#E2D8C3]">
            <div className="space-y-6">
              <div className="flex items-center justify-between border-b border-[#E2D8C3] pb-4">
                <span className="text-xl font-black text-[#283621]" style={{ fontFamily: "'Outfit', sans-serif" }}>
                  VELQEN<span className="text-[#849B72]">.</span>
                </span>
                <button onClick={() => setMobileMenuOpen(false)} className="p-1 text-slate-500">
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div>
                <p className="text-[10px] font-extrabold uppercase tracking-widest text-[#7A7360] mb-3">Shop Categories</p>
                <div className="space-y-1">
                  {categoriesData.map((cat) => (
                    <Link
                      key={cat.slug}
                      href={`/category/${cat.slug}`}
                      onClick={() => setMobileMenuOpen(false)}
                      className="flex items-center justify-between py-2.5 px-3 rounded-xl text-xs font-bold text-[#283621] hover:bg-[#EAE4D5] transition"
                    >
                      <span>{cat.name}</span>
                      <ChevronRight className="w-4 h-4 text-slate-400" />
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            <div className="border-t border-[#E2D8C3] pt-4 space-y-2 text-xs text-[#7A7360]">
              <p>🇬🇧 Official UK Store (GBP £)</p>
              <a href="mailto:info@velqen.co.uk" className="block font-semibold text-[#283621]">info@velqen.co.uk</a>
            </div>
          </div>
        </div>
      )}

      {/* 4. HERO SECTION (Touch-Optimized) */}
      <section className="px-3 sm:px-6 lg:px-8 py-4 sm:py-8 max-w-7xl mx-auto">
        <div className="bg-[#283621] text-[#F4EFE6] rounded-2xl sm:rounded-3xl p-6 sm:p-14 shadow-xl grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-10 items-center">
          
          <div className="lg:col-span-7 space-y-4 sm:space-y-6">
            <div className="inline-flex items-center gap-2 bg-[#3A4E31] text-[#EFE7D3] border border-[#506843] px-3 py-1 sm:px-3.5 sm:py-1.5 rounded-full text-[11px] sm:text-xs font-semibold">
              <Sparkles className="w-3.5 h-3.5 text-[#C9DDBB]" />
              British Design • Studio Edition
            </div>
            
            <h1 className="text-3xl sm:text-6xl font-extrabold tracking-tight leading-[1.15] sm:leading-[1.1]" style={{ fontFamily: "'Outfit', sans-serif" }}>
              Everyday carry crafted for effortless individuality.
            </h1>
            
            <p className="text-sm sm:text-lg text-[#D2C8AF] leading-relaxed max-w-xl font-normal">
              High-utility vegan leather baguettes, structured canvas totes, and weather-resistant travel duffels.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 pt-2">
              <a href="#collection" className="w-full sm:w-auto px-6 sm:px-8 py-3.5 sm:py-4 bg-[#F4EFE6] text-[#283621] font-bold rounded-xl sm:rounded-full text-xs uppercase tracking-wider transition flex items-center justify-center gap-2 shadow-lg active:scale-95">
                Explore The Drop <ArrowRight className="w-4 h-4 text-[#283621]" />
              </a>
              <a href="#categories" className="w-full sm:w-auto px-6 sm:px-7 py-3.5 sm:py-4 bg-transparent text-[#EFE7D3] border border-[#506843] font-bold rounded-xl sm:rounded-full text-xs uppercase tracking-wider transition text-center active:bg-[#3A4E31]">
                Shop By Category
              </a>
            </div>
          </div>

          <div className="lg:col-span-5">
            <Link href="/products/1" className="block group relative rounded-2xl overflow-hidden aspect-[4/5] bg-[#3A4E31] shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1548036328-c9fa89d128fa?auto=format&fit=crop&w=800&q=80" 
                alt="B.S. Classic Vegan Leather Shoulder Bag" 
                className="w-full h-full object-cover group-hover:scale-105 transition duration-700"
              />
              <div className="absolute top-3 left-3 bg-[#283621]/90 backdrop-blur-sm text-[#EFE7D3] text-[10px] sm:text-[11px] font-bold px-2.5 py-1 rounded-full uppercase tracking-wider border border-[#506843]">
                Trending in UK
              </div>
              <div className="absolute bottom-3 left-3 right-3 sm:bottom-4 sm:left-4 sm:right-4 bg-[#F4EFE6] text-[#283621] p-3 sm:p-4 rounded-xl shadow-lg flex items-center justify-between">
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-[#5B7349]">Signature Release</span>
                  <p className="text-xs sm:text-sm font-extrabold text-[#283621]" style={{ fontFamily: "'Outfit', sans-serif" }}>Classic Vegan Shoulder Bag</p>
                </div>
                <span className="text-xs sm:text-sm font-extrabold text-[#283621]">£34.00</span>
              </div>
            </Link>
          </div>

        </div>
      </section>

      {/* 5. SHOP BY CATEGORY (Responsive 2x3 Mobile Grid) */}
      <section id="categories" className="py-10 sm:py-16 max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
        <div className="mb-6 sm:mb-8">
          <span className="text-[11px] sm:text-xs font-bold uppercase tracking-widest text-[#5B7349]">Collections</span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#283621] mt-1" style={{ fontFamily: "'Outfit', sans-serif" }}>
            Shop by Category
          </h2>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-6">
          {categoriesData.map((cat) => (
            <Link href={`/category/${cat.slug}`} key={cat.slug} className="group relative rounded-xl sm:rounded-2xl overflow-hidden bg-[#E2D8C3] aspect-[4/5] block shadow-sm hover:shadow-md transition">
              <img 
                src={cat.image} 
                alt={cat.name} 
                className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#151C12]/90 via-[#151C12]/20 to-transparent flex flex-col justify-end p-3 sm:p-5">
                <span className="text-[9px] sm:text-[10px] font-bold uppercase tracking-wider text-[#EFE7D3]">{cat.headline}</span>
                <h4 className="text-xs sm:text-base font-bold text-white mt-0.5" style={{ fontFamily: "'Outfit', sans-serif" }}>{cat.name} &rarr;</h4>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* 6. 50-PRODUCT FEED (Responsive 2-Column Mobile Feed) */}
      <section id="collection" className="py-10 sm:py-16 bg-[#ECE4D0] border-t border-[#E2D8C3]">
        <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
          <div className="mb-6 sm:mb-10 flex justify-between items-baseline">
            <div>
              <span className="text-[11px] sm:text-xs font-bold uppercase tracking-widest text-[#5B7349]">Full Lineup</span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#283621] mt-1" style={{ fontFamily: "'Outfit', sans-serif" }}>
                All 50 Handbags & Carry
              </h2>
            </div>
            <span className="text-xs font-bold text-[#7A7360] hidden sm:block">Showing 50 Items</span>
          </div>

          {/* 2-Column Grid on Mobile, 4-Column on Desktop */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-6">
            {products.map((item) => (
              <Link 
                href={`/products/${item.id}`} 
                key={item.id} 
                className="bg-[#F4EFE6] rounded-xl sm:rounded-2xl p-2.5 sm:p-4 border border-[#DCD0B4] flex flex-col justify-between hover:shadow-xl hover:border-[#283621] transition group cursor-pointer active:scale-[0.98]"
              >
                <div>
                  <div className="relative aspect-square rounded-lg sm:rounded-xl overflow-hidden bg-[#E2D8C3] mb-2 sm:mb-4">
                    <img 
                      src={item.images[0]} 
                      alt={item.name} 
                      className="w-full h-full object-cover group-hover:scale-105 transition duration-500" 
                    />
                    <span className="absolute top-2 left-2 bg-[#283621] text-[#EFE7D3] text-[9px] sm:text-[10px] font-bold px-2 py-0.5 sm:px-2.5 sm:py-1 rounded-md uppercase tracking-wider">
                      {item.badge}
                    </span>
                    <span className="absolute bottom-2 right-2 bg-[#F4EFE6]/90 backdrop-blur-sm text-[9px] sm:text-[10px] font-mono text-[#283621] px-1.5 py-0.5 rounded font-bold">
                      {item.factoryModel || item.itemCode}
                    </span>
                  </div>

                  <div className="flex items-center gap-1 text-[#5B7349] text-[10px] sm:text-xs font-bold mb-1">
                    <Star className="w-3 h-3 sm:w-3.5 sm:h-3.5 fill-[#5B7349]" />
                    <span>{item.rating}</span>
                    <span className="text-slate-500 font-normal text-[9px] sm:text-xs">({item.reviews})</span>
                  </div>

                  <h3 className="font-bold text-xs sm:text-sm text-[#283621] line-clamp-1 group-hover:text-[#5B7349] transition" style={{ fontFamily: "'Outfit', sans-serif" }}>
                    {item.name}
                  </h3>
                  <p className="text-[10px] sm:text-xs text-[#6B7963] mt-0.5 line-clamp-1">{item.category}</p>
                </div>

                <div className="mt-3 sm:mt-5 pt-2 sm:pt-3 border-t border-[#E2D8C3] flex items-center justify-between">
                  <span className="text-sm sm:text-base font-extrabold text-[#283621]">£{item.price.toFixed(2)}</span>
                  <span className="text-[10px] sm:text-xs font-bold text-[#283621] flex items-center gap-0.5">
                    View &rarr;
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 7. FOOTER */}
      <footer className="bg-[#202C1B] text-[#D0C7B0] py-10 sm:py-14 text-xs border-t border-[#2E3D27]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          <div className="space-y-3">
            <span className="text-2xl font-extrabold text-[#EFE7D3] tracking-tight uppercase" style={{ fontFamily: "'Outfit', sans-serif" }}>
              VELQEN<span className="text-[#849B72]">.</span>
            </span>
            <p className="text-xs text-[#A8A08A] leading-relaxed max-w-xs">
              Everyday carry silhouettes engineered for modern youth lifestyle. Designed in the UK.
            </p>
            <p className="text-[11px] text-[#7A7360]">© {new Date().getFullYear()} Velqen.co.uk. All rights reserved.</p>
          </div>

          <div>
            <h5 className="font-bold text-white uppercase tracking-wider mb-3">Categories</h5>
            <ul className="space-y-2 text-[#A8A08A]">
              {categoriesData.map((cat) => (
                <li key={cat.slug}>
                  <Link href={`/category/${cat.slug}`} className="hover:text-white transition">{cat.name}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h5 className="font-bold text-white uppercase tracking-wider mb-3">Customer Support</h5>
            <ul className="space-y-2 text-[#A8A08A]">
              <li><a href="mailto:info@velqen.co.uk" className="hover:text-white transition">info@velqen.co.uk</a></li>
              <li><span className="text-[#A8A08A]">Amazon FBA Tracked Delivery</span></li>
              <li><span className="text-[#A8A08A]">30-Day UK Return Guarantee</span></li>
            </ul>
          </div>

          <div>
            <h5 className="font-bold text-white uppercase tracking-wider mb-3">Verified Platforms</h5>
            <p className="text-[#A8A08A] mb-3">Shop genuine Velqen carry on official storefronts:</p>
            <div className="flex gap-2">
              <span className="px-3 py-1 bg-[#2C3D24] text-[#EFE7D3] rounded text-xs font-semibold">Amazon UK</span>
              <span className="px-3 py-1 bg-[#2C3D24] text-[#EFE7D3] rounded text-xs font-semibold">eBay UK</span>
            </div>
          </div>
        </div>
      </footer>

    </div>
  );
}