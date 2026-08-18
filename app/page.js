'use client';

import React from 'react';
import Link from 'next/link';
import { products } from '@/app/data/products';
import { useCart } from '@/app/context/CartContext';
import { ShoppingBag, ArrowRight, Star, Sparkles } from 'lucide-react';

export default function VelqenStore() {
  const { totalItems, setIsCartOpen } = useCart();

  const categories = [
    { name: "Nylon Crescents", tag: "Viral Fit", image: "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?auto=format&fit=crop&w=600&q=80", link: "/products/1" },
    { name: "Shoulder & Totes", tag: "Everyday Carry", image: "https://images.unsplash.com/photo-1590874103328-eac38a683ce7?auto=format&fit=crop&w=600&q=80", link: "/products/2" },
    { name: "Crossbody Slings", tag: "Hands-Free", image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&w=600&q=80", link: "/products/3" },
    { name: "Belt Bags & Packs", tag: "Utility", image: "https://images.unsplash.com/photo-1622560480605-d83c853bc5c3?auto=format&fit=crop&w=600&q=80", link: "/products/4" }
  ];

  return (
    <div className="min-h-screen bg-[#FAF8F5] text-[#1E241E] font-sans antialiased selection:bg-[#435334] selection:text-white">
      
      {/* 1. TOP MARQUEE */}
      <div className="bg-[#3A472E] text-[#FAF8F5] text-[12px] py-2 px-4 text-center font-medium tracking-wide flex justify-center items-center gap-6">
        <span>🇬🇧 UK Free Standard Delivery</span>
        <span className="opacity-40">•</span>
        <span>Effortless Everyday Silhouettes</span>
        <span className="opacity-40">•</span>
        <span>Dispatched via Fast UK Logistics</span>
      </div>

      {/* 2. HEADER */}
      <header className="sticky top-0 z-40 bg-[#FAF8F5]/90 backdrop-blur-md border-b border-[#EBE5DC]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          <nav className="hidden md:flex items-center gap-8 text-[13px] font-semibold tracking-wider uppercase text-[#3A472E]">
            <Link href="/products/1" className="hover:opacity-70 transition">Crescents</Link>
            <Link href="/products/2" className="hover:opacity-70 transition">Totes</Link>
            <Link href="/products/3" className="hover:opacity-70 transition">Slings</Link>
            <Link href="/products/4" className="hover:opacity-70 transition">Belt Packs</Link>
          </nav>

          <div className="text-center">
            <Link href="/" className="text-2xl sm:text-3xl font-black tracking-widest uppercase text-[#3A472E]">
              VELQEN
            </Link>
          </div>

          <div className="flex items-center gap-4">
            <button className="hidden sm:flex items-center gap-1.5 text-xs font-semibold text-[#3A472E] border border-[#3A472E]/30 px-3 py-1.5 rounded-full hover:bg-[#3A472E] hover:text-white transition">
              <span>UK (GBP £)</span>
            </button>
            <button 
              onClick={() => setIsCartOpen(true)}
              className="flex items-center gap-2 bg-[#3A472E] text-[#FAF8F5] px-4 py-2 rounded-full text-xs font-bold hover:bg-[#2D3824] transition shadow-sm"
            >
              <ShoppingBag className="w-3.5 h-3.5" />
              <span>Bag ({totalItems})</span>
            </button>
          </div>
        </div>
      </header>

      {/* 3. HERO */}
      <section className="relative pt-12 pb-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="bg-[#EFEAE2] rounded-3xl p-8 sm:p-16 flex flex-col lg:flex-row items-center justify-between gap-12 border border-[#E3DDD3]">
          <div className="max-w-xl">
            <div className="inline-flex items-center gap-2 bg-[#FAF8F5] text-[#3A472E] border border-[#D5CDC0] px-3.5 py-1 rounded-full text-xs font-bold mb-6">
              <Sparkles className="w-3.5 h-3.5 text-[#62774F]" />
              New Season Carry Essentials
            </div>
            <h1 className="text-4xl sm:text-6xl font-black text-[#262F1F] tracking-tight leading-[1.1]">
              Effortless bags for everyday individuality.
            </h1>
            <p className="mt-5 text-base sm:text-lg text-[#55634E] leading-relaxed">
              Designed in the UK. Ultra-lightweight nylon crescent shapes, versatile slings, and minimalist totes designed for daily expression without the markup.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <a href="#shop" className="px-7 py-3.5 bg-[#3A472E] hover:bg-[#262F1F] text-[#FAF8F5] font-bold rounded-full text-sm transition flex items-center gap-2">
                Explore The Drop <ArrowRight className="w-4 h-4" />
              </a>
              <a href="#philosophy" className="px-7 py-3.5 bg-transparent hover:bg-[#FAF8F5] text-[#3A472E] border border-[#3A472E]/40 font-bold rounded-full text-sm transition">
                Why Velqen?
              </a>
            </div>
          </div>

          <Link href="/products/1" className="relative w-full max-w-md aspect-square rounded-2xl overflow-hidden shadow-sm block group cursor-pointer">
            <img 
              src="https://images.unsplash.com/photo-1548036328-c9fa89d128fa?auto=format&fit=crop&w=800&q=80" 
              alt="Velqen Crescent Nylon Bag" 
              className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
            />
            <div className="absolute bottom-4 left-4 right-4 bg-[#FAF8F5]/95 backdrop-blur-md p-3.5 rounded-xl border border-[#EBE5DC] flex items-center justify-between">
              <div>
                <p className="text-[11px] font-bold text-[#62774F] uppercase tracking-wider">The Crescent Silhouette</p>
                <p className="text-sm font-extrabold text-[#262F1F]">Cloud Nylon Series</p>
              </div>
              <span className="text-xs font-bold text-[#3A472E] underline">View Details &rarr;</span>
            </div>
          </Link>
        </div>
      </section>

      {/* 4. VALUE PILLARS */}
      <section id="philosophy" className="py-12 border-y border-[#EBE5DC] bg-[#F5EFE6]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center sm:text-left">
            <div className="p-4">
              <span className="text-xs font-black uppercase tracking-wider text-[#62774F]">01 / Design</span>
              <h3 className="text-lg font-bold text-[#262F1F] mt-1">Effortless & Expressive</h3>
              <p className="text-xs text-[#55634E] mt-2 leading-relaxed">
                Clean silhouettes designed to blend seamlessly with streetwear, casuals, or smart everyday wear.
              </p>
            </div>
            <div className="p-4">
              <span className="text-xs font-black uppercase tracking-wider text-[#62774F]">02 / Identity</span>
              <h3 className="text-lg font-bold text-[#262F1F] mt-1">Individuality & Lifestyle</h3>
              <p className="text-xs text-[#55634E] mt-2 leading-relaxed">
                Lightweight, multi-pocket, and weather-resistant carry designed around real daily routines.
              </p>
            </div>
            <div className="p-4">
              <span className="text-xs font-black uppercase tracking-wider text-[#62774F]">03 / Value</span>
              <h3 className="text-lg font-bold text-[#262F1F] mt-1">Optimized Spending</h3>
              <p className="text-xs text-[#55634E] mt-2 leading-relaxed">
                Premium materials and durable hardware without the inflated designer price tag.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 5. SHOP BY SILHOUETTE */}
      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl sm:text-3xl font-black text-[#262F1F] mb-8">Shop by Silhouette</h2>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {categories.map((cat, i) => (
            <Link href={cat.link} key={i} className="group relative rounded-2xl overflow-hidden bg-[#EBE5DC] aspect-[4/5] cursor-pointer block">
              <img 
                src={cat.image} 
                alt={cat.name} 
                className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#262F1F]/80 via-transparent to-transparent flex flex-col justify-end p-4">
                <span className="text-[10px] font-bold uppercase tracking-wider text-[#D1E0C5]">{cat.tag}</span>
                <h4 className="text-sm sm:text-base font-bold text-white mt-0.5">{cat.name}</h4>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* 6. FEATURED PRODUCTS (Click to View Detail) */}
      <section id="shop" className="py-16 bg-[#FAF8F5] border-t border-[#EBE5DC]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-end mb-10">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-[#62774F]">The Velqen Lineup</span>
              <h2 className="text-3xl font-black text-[#262F1F] mt-1">Featured Carry</h2>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {products.map((item) => (
              <Link 
                href={`/products/${item.id}`} 
                key={item.id} 
                className="bg-white rounded-2xl p-3.5 border border-[#EBE5DC] flex flex-col justify-between hover:shadow-lg hover:border-[#3A472E]/40 transition group cursor-pointer"
              >
                <div>
                  <div className="relative aspect-square rounded-xl overflow-hidden bg-[#FAF8F5] mb-4">
                    <img 
                      src={item.images[0]} 
                      alt={item.name} 
                      className="w-full h-full object-cover group-hover:scale-105 transition duration-300" 
                    />
                    <span className="absolute top-2.5 left-2.5 bg-[#3A472E] text-[#FAF8F5] text-[10px] font-bold px-2 py-0.5 rounded-md">
                      {item.badge}
                    </span>
                  </div>

                  <div className="flex items-center gap-1 text-[#62774F] text-xs font-bold mb-1">
                    <Star className="w-3.5 h-3.5 fill-[#62774F]" />
                    <span>{item.rating}</span>
                    <span className="text-slate-400 font-normal">({item.reviews})</span>
                  </div>
                  <h3 className="font-bold text-sm text-[#262F1F] line-clamp-1 group-hover:text-[#3A472E] transition">
                    {item.name}
                  </h3>
                  <p className="text-[11px] text-[#55634E] mt-0.5">{item.category}</p>
                </div>

                <div className="mt-4 pt-3 border-t border-[#F0EBE3] flex items-center justify-between">
                  <span className="text-base font-extrabold text-[#262F1F]">£{item.price.toFixed(2)}</span>
                  <span className="text-xs font-bold text-[#3A472E] group-hover:translate-x-1 transition flex items-center gap-1">
                    View Details &rarr;
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 7. FOOTER */}
      <footer className="bg-[#2D3824] text-[#D5DDD0] py-14 text-xs border-t border-[#3A472E]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-3">
          <span className="text-2xl font-black text-white tracking-widest uppercase">VELQEN</span>
          <p className="text-xs text-[#B4C2AD]">Everyday carry silhouettes engineered for modern youth lifestyle. Designed in the UK.</p>
          <p className="text-[11px] text-[#8F9E89]">© {new Date().getFullYear()} Velqen.co.uk. All rights reserved.</p>
        </div>
      </footer>

    </div>
  );
}