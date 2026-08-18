'use client';

import React from 'react';
import Link from 'next/link';
import { products } from '@/app/data/products';
import { useCart } from '@/app/context/cart-context';
import { ShoppingBag, ArrowRight, Star, Sparkles, Truck, ShieldCheck } from 'lucide-react';

export default function VelqenStore() {
  const { totalItems, setIsCartOpen } = useCart();

  const categories = [
    { name: "Nylon Crescents", tag: "Viral Silhouette", image: "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?auto=format&fit=crop&w=600&q=80", link: "/products/1" },
    { name: "Everyday Totes", tag: "15\" Laptop Ready", image: "https://images.unsplash.com/photo-1590874103328-eac38a683ce7?auto=format&fit=crop&w=600&q=80", link: "/products/2" },
    { name: "Modular Slings", tag: "Hands-Free Utility", image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&w=600&q=80", link: "/products/3" },
    { name: "Utility Belt Packs", tag: "Compact Carry", image: "https://images.unsplash.com/photo-1622560480605-d83c853bc5c3?auto=format&fit=crop&w=600&q=80", link: "/products/4" }
  ];

  return (
    <div className="min-h-screen bg-[#F4EFE6] text-[#151C12]">
      
      {/* 1. TOP MARQUEE (Matcha Green) */}
      <div className="bg-[#283621] text-[#EFE7D3] text-xs py-2.5 px-4 text-center font-medium tracking-wide flex justify-center items-center gap-6">
        <span>🇬🇧 Free UK Standard Delivery</span>
        <span className="opacity-30">•</span>
        <span>Effortless Daily Silhouettes</span>
        <span className="opacity-30">•</span>
        <span>Dispatched via Amazon FBA UK</span>
      </div>

      {/* 2. HEADER */}
      <header className="sticky top-0 z-40 bg-[#F4EFE6]/95 backdrop-blur-md border-b border-[#E2D8C3]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          
          <nav className="hidden md:flex items-center gap-8 text-xs font-bold tracking-wider uppercase text-[#283621]">
            <Link href="/products/1" className="hover:text-[#5B7349] transition">Crescents</Link>
            <Link href="/products/2" className="hover:text-[#5B7349] transition">Totes</Link>
            <Link href="/products/3" className="hover:text-[#5B7349] transition">Slings</Link>
            <Link href="/products/4" className="hover:text-[#5B7349] transition">Packs</Link>
          </nav>

          {/* Logo with Outfit font */}
          <div className="text-center">
            <Link href="/" className="text-2xl sm:text-3xl font-extrabold tracking-tight text-[#283621]" style={{ fontFamily: "'Outfit', sans-serif" }}>
              VELQEN<span className="text-[#849B72]">.</span>
            </Link>
          </div>

          <div className="flex items-center gap-3">
            <span className="hidden sm:inline-block text-xs font-semibold text-[#283621] bg-[#E5DCBF] px-3 py-1.5 rounded-full border border-[#D5C9A6]">
              UK (GBP £)
            </span>
            <button 
              onClick={() => setIsCartOpen(true)}
              className="flex items-center gap-2 bg-[#283621] text-[#F4EFE6] px-4 py-2.5 rounded-full text-xs font-bold hover:bg-[#1C2617] transition shadow-md"
            >
              <ShoppingBag className="w-3.5 h-3.5 text-[#EFE7D3]" />
              <span>Bag ({totalItems})</span>
            </button>
          </div>
        </div>
      </header>

      {/* 3. HERO (Rich Deep Matcha Block with Cream Typography) */}
      <section className="px-4 sm:px-6 lg:px-8 py-8 max-w-7xl mx-auto">
        <div className="bg-[#283621] text-[#F4EFE6] rounded-3xl p-8 sm:p-14 shadow-xl grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 bg-[#3A4E31] text-[#EFE7D3] border border-[#506843] px-3.5 py-1.5 rounded-full text-xs font-semibold">
              <Sparkles className="w-3.5 h-3.5 text-[#C9DDBB]" />
              British Design • Studio Edition
            </div>
            
            <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight leading-[1.1]" style={{ fontFamily: "'Outfit', sans-serif" }}>
              Everyday carry crafted for effortless individuality.
            </h1>
            
            <p className="text-base sm:text-lg text-[#D2C8AF] leading-relaxed max-w-xl font-normal">
              Ultralight water-resistant nylon crescents and structured canvas totes. High utility, zero designer markup.
            </p>

            <div className="flex flex-wrap items-center gap-4 pt-2">
              <a href="#collection" className="px-8 py-4 bg-[#F4EFE6] hover:bg-white text-[#283621] font-bold rounded-full text-xs uppercase tracking-wider transition flex items-center gap-2 shadow-lg">
                Explore The Drop <ArrowRight className="w-4 h-4 text-[#283621]" />
              </a>
              <a href="#philosophy" className="px-7 py-4 bg-transparent hover:bg-[#3A4E31] text-[#EFE7D3] border border-[#506843] font-bold rounded-full text-xs uppercase tracking-wider transition">
                Our Standards
              </a>
            </div>
          </div>

          <div className="lg:col-span-5">
            <Link href="/products/1" className="block group relative rounded-2xl overflow-hidden aspect-[4/5] bg-[#3A4E31] shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1548036328-c9fa89d128fa?auto=format&fit=crop&w=800&q=80" 
                alt="Cloud Crescent Bag" 
                className="w-full h-full object-cover group-hover:scale-105 transition duration-700"
              />
              <div className="absolute top-4 left-4 bg-[#283621]/90 backdrop-blur-sm text-[#EFE7D3] text-[11px] font-bold px-3 py-1 rounded-full uppercase tracking-wider border border-[#506843]">
                Trending UK
              </div>
              <div className="absolute bottom-4 left-4 right-4 bg-[#F4EFE6] text-[#283621] p-4 rounded-xl shadow-lg flex items-center justify-between">
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-[#5B7349]">Cloud Nylon Series</span>
                  <p className="text-sm font-extrabold text-[#283621]" style={{ fontFamily: "'Outfit', sans-serif" }}>The Crescent Shoulder Bag</p>
                </div>
                <span className="text-sm font-extrabold text-[#283621]">£24.00</span>
              </div>
            </Link>
          </div>

        </div>
      </section>

      {/* 4. VALUE PILLARS */}
      <section id="philosophy" className="py-12 border-y border-[#E2D8C3] bg-[#ECE4D0]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            
            <div className="bg-[#F4EFE6] p-6 rounded-2xl border border-[#DCD0B4]">
              <span className="text-xs font-extrabold uppercase text-[#5B7349] tracking-wider">01 / Aesthetics</span>
              <h3 className="text-lg font-bold text-[#283621] mt-1" style={{ fontFamily: "'Outfit', sans-serif" }}>Effortless & Expressive</h3>
              <p className="text-xs text-[#52614B] mt-2 leading-relaxed">
                Clean silhouettes and rich earth tones engineered to pair naturally with your everyday wardrobe.
              </p>
            </div>

            <div className="bg-[#F4EFE6] p-6 rounded-2xl border border-[#DCD0B4]">
              <span className="text-xs font-extrabold uppercase text-[#5B7349] tracking-wider">02 / Utility</span>
              <h3 className="text-lg font-bold text-[#283621] mt-1" style={{ fontFamily: "'Outfit', sans-serif" }}>Individuality & Lifestyle</h3>
              <p className="text-xs text-[#52614B] mt-2 leading-relaxed">
                Featherweight crinkle nylon and multi-compartment interior layouts built for daily active routines.
              </p>
            </div>

            <div className="bg-[#F4EFE6] p-6 rounded-2xl border border-[#DCD0B4]">
              <span className="text-xs font-extrabold uppercase text-[#5B7349] tracking-wider">03 / Fair Pricing</span>
              <h3 className="text-lg font-bold text-[#283621] mt-1" style={{ fontFamily: "'Outfit', sans-serif" }}>Optimized Spending</h3>
              <p className="text-xs text-[#52614B] mt-2 leading-relaxed">
                Direct UK distribution. Japanese smooth zips and reinforced stitching without inflated designer prices.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* 5. SHOP BY SILHOUETTE */}
      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <span className="text-xs font-bold uppercase tracking-widest text-[#5B7349]">Categories</span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#283621] mt-1" style={{ fontFamily: "'Outfit', sans-serif" }}>
            Shop by Silhouette
          </h2>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {categories.map((cat, i) => (
            <Link href={cat.link} key={i} className="group relative rounded-2xl overflow-hidden bg-[#E2D8C3] aspect-[4/5] block shadow-sm hover:shadow-md transition">
              <img 
                src={cat.image} 
                alt={cat.name} 
                className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#151C12]/80 via-transparent to-transparent flex flex-col justify-end p-5">
                <span className="text-[10px] font-bold uppercase tracking-wider text-[#EFE7D3]">{cat.tag}</span>
                <h4 className="text-sm sm:text-base font-bold text-white mt-0.5" style={{ fontFamily: "'Outfit', sans-serif" }}>{cat.name}</h4>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* 6. FEATURED PRODUCTS */}
      <section id="collection" className="py-16 bg-[#ECE4D0] border-t border-[#E2D8C3]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-10">
            <span className="text-xs font-bold uppercase tracking-widest text-[#5B7349]">Curated Lineup</span>
            <h2 className="text-3xl font-extrabold text-[#283621] mt-1" style={{ fontFamily: "'Outfit', sans-serif" }}>
              Signature Carry Collection
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {products.map((item) => (
              <Link 
                href={`/products/${item.id}`} 
                key={item.id} 
                className="bg-[#F4EFE6] rounded-2xl p-4 border border-[#DCD0B4] flex flex-col justify-between hover:shadow-xl hover:border-[#283621] transition group cursor-pointer"
              >
                <div>
                  <div className="relative aspect-square rounded-xl overflow-hidden bg-[#E2D8C3] mb-4">
                    <img 
                      src={item.images[0]} 
                      alt={item.name} 
                      className="w-full h-full object-cover group-hover:scale-105 transition duration-500" 
                    />
                    <span className="absolute top-3 left-3 bg-[#283621] text-[#EFE7D3] text-[10px] font-bold px-2.5 py-1 rounded-md uppercase tracking-wider">
                      {item.badge}
                    </span>
                  </div>

                  <div className="flex items-center gap-1 text-[#5B7349] text-xs font-bold mb-1">
                    <Star className="w-3.5 h-3.5 fill-[#5B7349]" />
                    <span>{item.rating}</span>
                    <span className="text-slate-500 font-normal text-xs">({item.reviews})</span>
                  </div>

                  <h3 className="font-bold text-sm text-[#283621] line-clamp-1 group-hover:text-[#5B7349] transition" style={{ fontFamily: "'Outfit', sans-serif" }}>
                    {item.name}
                  </h3>
                  <p className="text-xs text-[#6B7963] mt-0.5">{item.category}</p>
                </div>

                <div className="mt-5 pt-3 border-t border-[#E2D8C3] flex items-center justify-between">
                  <span className="text-base font-extrabold text-[#283621]">£{item.price.toFixed(2)}</span>
                  <span className="text-xs font-bold text-[#283621] group-hover:translate-x-1 transition flex items-center gap-1">
                    Details &rarr;
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 7. FOOTER */}
      <footer className="bg-[#202C1B] text-[#D0C7B0] py-14 text-xs border-t border-[#2E3D27]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-4 gap-8">
          
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
            <h5 className="font-bold text-white uppercase tracking-wider mb-3">Silhouettes</h5>
            <ul className="space-y-2 text-[#A8A08A]">
              <li><Link href="/products/1" className="hover:text-white transition">Nylon Crescents</Link></li>
              <li><Link href="/products/2" className="hover:text-white transition">Everyday Totes</Link></li>
              <li><Link href="/products/3" className="hover:text-white transition">Crossbody Slings</Link></li>
              <li><Link href="/products/4" className="hover:text-white transition">Utility Packs</Link></li>
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
            <p className="text-[#A8A08A] mb-3">Shop genuine Velqen carry on official partner stores:</p>
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