'use client';

import React from 'react';
import Link from 'next/link';
import { products } from '@/app/data/products';
import { useCart } from '@/app/context/cart-context';
import { ShoppingBag, ArrowRight, Star, Sparkles, Compass, ShieldCheck, Heart } from 'lucide-react';

export default function VelqenStore() {
  const { totalItems, setIsCartOpen } = useCart();

  const categories = [
    { name: "Nylon Crescents", tag: "Viral Fit", image: "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?auto=format&fit=crop&w=600&q=80", link: "/products/1" },
    { name: "Everyday Totes", tag: "Laptop Ready", image: "https://images.unsplash.com/photo-1590874103328-eac38a683ce7?auto=format&fit=crop&w=600&q=80", link: "/products/2" },
    { name: "Urban Slings", tag: "Hands-Free", image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&w=600&q=80", link: "/products/3" },
    { name: "Utility Belt Packs", tag: "Essentials", image: "https://images.unsplash.com/photo-1622560480605-d83c853bc5c3?auto=format&fit=crop&w=600&q=80", link: "/products/4" }
  ];

  return (
    <div className="min-h-screen bg-[#F7F4EE] text-[#222820]">
      
      {/* 1. TOP MARQUEE BANNER */}
      <div className="bg-[#3B4A34] text-[#F4ECCF] text-[11px] py-2 px-4 text-center font-semibold tracking-wider flex justify-center items-center gap-6 uppercase">
        <span>🇬🇧 UK Free Standard Delivery</span>
        <span className="opacity-40">•</span>
        <span>Everyday Streetwear Silhouettes</span>
        <span className="opacity-40">•</span>
        <span>Amazon FBA Fast Dispatch</span>
      </div>

      {/* 2. BOUTIQUE EDITORIAL HEADER */}
      <header className="sticky top-0 z-40 bg-[#F7F4EE]/90 backdrop-blur-md border-b border-[#E7E2D6]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          
          <nav className="hidden md:flex items-center gap-8 text-xs font-bold tracking-widest uppercase text-[#3B4A34]">
            <Link href="/products/1" className="hover:text-[#C86D51] transition">Crescents</Link>
            <Link href="/products/2" className="hover:text-[#C86D51] transition">Totes</Link>
            <Link href="/products/3" className="hover:text-[#C86D51] transition">Slings</Link>
            <Link href="/products/4" className="hover:text-[#C86D51] transition">Packs</Link>
          </nav>

          {/* Logo in Syne Font */}
          <div className="text-center">
            <Link href="/" className="text-3xl font-extrabold tracking-tighter text-[#3B4A34]" style={{ fontFamily: "'Syne', sans-serif" }}>
              VELQEN<span className="text-[#C86D51]">.</span>
            </Link>
          </div>

          <div className="flex items-center gap-3">
            <span className="hidden sm:inline-block text-[11px] font-bold text-[#3B4A34] bg-[#EAE4D5] px-3 py-1 rounded-full">
              UK Store (GBP £)
            </span>
            <button 
              onClick={() => setIsCartOpen(true)}
              className="flex items-center gap-2 bg-[#3B4A34] text-[#F7F4EE] px-4 py-2 rounded-full text-xs font-bold hover:bg-[#283323] transition shadow-sm"
            >
              <ShoppingBag className="w-3.5 h-3.5 text-[#F4ECCF]" />
              <span>Bag ({totalItems})</span>
            </button>
          </div>
        </div>
      </header>

      {/* 3. EDITORIAL HERO SECTION */}
      <section className="pt-10 pb-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="bg-[#ECE5D8] rounded-[2.5rem] p-8 sm:p-14 border border-[#DDD5C5] grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 bg-[#F7F4EE] border border-[#D5CDC0] text-[#3B4A34] px-4 py-1.5 rounded-full text-xs font-bold shadow-2xl">
              <Sparkles className="w-3.5 h-3.5 text-[#C86D51]" />
              2026 Studio Drop • Everyday Carry
            </div>
            
            <h1 className="text-4xl sm:text-6xl font-black text-[#263121] tracking-tight leading-[1.08]" style={{ fontFamily: "'Syne', sans-serif" }}>
              Bags designed for effortless individuality.
            </h1>
            
            <p className="text-base sm:text-lg text-[#55634E] leading-relaxed max-w-xl font-normal">
              Ultralight water-resistant nylon crescents and structured canvas totes. Engineered in Britain for modern youth lifestyle without the markup.
            </p>

            <div className="flex flex-wrap items-center gap-4 pt-2">
              <a href="#collection" className="px-8 py-4 bg-[#3B4A34] hover:bg-[#242D20] text-[#F7F4EE] font-bold rounded-full text-xs uppercase tracking-wider transition flex items-center gap-2 shadow-md">
                Shop The Drop <ArrowRight className="w-4 h-4 text-[#F4ECCF]" />
              </a>
              <a href="#story" className="px-7 py-4 bg-[#F7F4EE] hover:bg-white text-[#3B4A34] border border-[#D5CDC0] font-bold rounded-full text-xs uppercase tracking-wider transition">
                Our Philosophy
              </a>
            </div>
          </div>

          <div className="lg:col-span-5">
            <Link href="/products/1" className="block group relative rounded-3xl overflow-hidden aspect-[4/5] bg-[#DDD5C5] shadow-lg">
              <img 
                src="https://images.unsplash.com/photo-1548036328-c9fa89d128fa?auto=format&fit=crop&w=800&q=80" 
                alt="Cloud Crescent Bag" 
                className="w-full h-full object-cover group-hover:scale-105 transition duration-700"
              />
              <div className="absolute top-4 right-4 bg-[#C86D51] text-white text-[10px] font-extrabold uppercase px-3 py-1 rounded-full tracking-wider shadow">
                Staff Pick
              </div>
              <div className="absolute bottom-4 left-4 right-4 bg-[#F7F4EE]/95 backdrop-blur-md p-4 rounded-2xl border border-[#E3DDD3] flex items-center justify-between">
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-[#79885C]">Viral Silhouette</span>
                  <p className="text-sm font-black text-[#263121]" style={{ fontFamily: "'Syne', sans-serif" }}>The Cloud Crescent Bag</p>
                </div>
                <span className="text-sm font-extrabold text-[#3B4A34]">£24.00</span>
              </div>
            </Link>
          </div>

        </div>
      </section>

      {/* 4. THREE BRAND PILLARS */}
      <section id="story" className="py-12 border-y border-[#E7E2D6] bg-[#F1ECE1]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-[#F7F4EE] p-6 rounded-2xl border border-[#E0D9CB]">
              <span className="text-[11px] font-black uppercase text-[#C86D51] tracking-widest">01 / Aesthetics</span>
              <h3 className="text-lg font-bold text-[#263121] mt-1" style={{ fontFamily: "'Syne', sans-serif" }}>Effortless & Expressive</h3>
              <p className="text-xs text-[#5D6B56] mt-2 leading-relaxed font-normal">
                Minimalist curves and neutral tones curated to pair naturally with your everyday vintage, streetwear, or casual fits.
              </p>
            </div>

            <div className="bg-[#F7F4EE] p-6 rounded-2xl border border-[#E0D9CB]">
              <span className="text-[11px] font-black uppercase text-[#C86D51] tracking-widest">02 / Utility</span>
              <h3 className="text-lg font-bold text-[#263121] mt-1" style={{ fontFamily: "'Syne', sans-serif" }}>Individuality & Routine</h3>
              <p className="text-xs text-[#5D6B56] mt-2 leading-relaxed font-normal">
                Featherweight crinkle nylon and multi-compartment layouts built for hands-free movement across the city.
              </p>
            </div>

            <div className="bg-[#F7F4EE] p-6 rounded-2xl border border-[#E0D9CB]">
              <span className="text-[11px] font-black uppercase text-[#C86D51] tracking-widest">03 / Fair Pricing</span>
              <h3 className="text-lg font-bold text-[#263121] mt-1" style={{ fontFamily: "'Syne', sans-serif" }}>Optimized Spending</h3>
              <p className="text-xs text-[#5D6B56] mt-2 leading-relaxed font-normal">
                Direct-to-consumer craftsmanship. Premium Japanese zips and reinforced stitching without designer markups.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 5. SHOP BY SILHOUETTE (Depop Grid Style) */}
      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-end mb-8">
          <div>
            <span className="text-xs font-bold uppercase tracking-widest text-[#79885C]">Category Drop</span>
            <h2 className="text-2xl sm:text-3xl font-black text-[#263121] mt-1" style={{ fontFamily: "'Syne', sans-serif" }}>
              Explore Silhouettes
            </h2>
          </div>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {categories.map((cat, i) => (
            <Link href={cat.link} key={i} className="group relative rounded-3xl overflow-hidden bg-[#E7E2D6] aspect-[4/5] block shadow-sm hover:shadow-md transition">
              <img 
                src={cat.image} 
                alt={cat.name} 
                className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#222820]/80 via-transparent to-transparent flex flex-col justify-end p-5">
                <span className="text-[10px] font-bold uppercase tracking-wider text-[#F4ECCF]">{cat.tag}</span>
                <h4 className="text-sm sm:text-base font-bold text-white mt-0.5" style={{ fontFamily: "'Syne', sans-serif" }}>{cat.name}</h4>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* 6. FEATURED PRODUCTS */}
      <section id="collection" className="py-16 bg-[#F1ECE1] border-t border-[#E7E2D6]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-end mb-10">
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-[#79885C]">Curated Lineup</span>
              <h2 className="text-3xl font-black text-[#263121] mt-1" style={{ fontFamily: "'Syne', sans-serif" }}>
                Signature Carry
              </h2>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {products.map((item) => (
              <Link 
                href={`/products/${item.id}`} 
                key={item.id} 
                className="bg-[#F7F4EE] rounded-3xl p-4 border border-[#E0D9CB] flex flex-col justify-between hover:shadow-xl hover:border-[#3B4A34]/50 transition group cursor-pointer"
              >
                <div>
                  <div className="relative aspect-square rounded-2xl overflow-hidden bg-[#EAE4D5] mb-4">
                    <img 
                      src={item.images[0]} 
                      alt={item.name} 
                      className="w-full h-full object-cover group-hover:scale-105 transition duration-500" 
                    />
                    <span className="absolute top-3 left-3 bg-[#3B4A34] text-[#F4ECCF] text-[10px] font-bold px-2.5 py-1 rounded-full uppercase tracking-wider">
                      {item.badge}
                    </span>
                  </div>

                  <div className="flex items-center gap-1 text-[#79885C] text-xs font-bold mb-1">
                    <Star className="w-3.5 h-3.5 fill-[#79885C]" />
                    <span>{item.rating}</span>
                    <span className="text-slate-400 font-normal text-[11px]">({item.reviews})</span>
                  </div>

                  <h3 className="font-bold text-sm text-[#263121] line-clamp-1 group-hover:text-[#C86D51] transition" style={{ fontFamily: "'Syne', sans-serif" }}>
                    {item.name}
                  </h3>
                  <p className="text-[11px] text-[#697A62] mt-0.5">{item.category}</p>
                </div>

                <div className="mt-5 pt-3 border-t border-[#EAE4D5] flex items-center justify-between">
                  <span className="text-base font-black text-[#263121]">£{item.price.toFixed(2)}</span>
                  <span className="text-xs font-bold text-[#3B4A34] group-hover:translate-x-1 transition flex items-center gap-1">
                    Details &rarr;
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 7. FOOTER */}
      <footer className="bg-[#2D3827] text-[#D5DDD0] py-14 text-xs border-t border-[#3B4A34]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-4 gap-8">
          
          <div className="space-y-3">
            <span className="text-2xl font-black text-[#F4ECCF] tracking-tighter uppercase" style={{ fontFamily: "'Syne', sans-serif" }}>
              VELQEN<span className="text-[#C86D51]">.</span>
            </span>
            <p className="text-xs text-[#A8B7A2] leading-relaxed max-w-xs">
              Everyday carry silhouettes engineered for modern youth lifestyle. Designed in the UK.
            </p>
            <p className="text-[11px] text-[#7A8A74]">© {new Date().getFullYear()} Velqen.co.uk. All rights reserved.</p>
          </div>

          <div>
            <h5 className="font-bold text-white uppercase tracking-wider mb-3">Silhouettes</h5>
            <ul className="space-y-2 text-[#A8B7A2]">
              <li><Link href="/products/1" className="hover:text-white transition">Nylon Crescents</Link></li>
              <li><Link href="/products/2" className="hover:text-white transition">Everyday Totes</Link></li>
              <li><Link href="/products/3" className="hover:text-white transition">Crossbody Slings</Link></li>
              <li><Link href="/products/4" className="hover:text-white transition">Utility Packs</Link></li>
            </ul>
          </div>

          <div>
            <h5 className="font-bold text-white uppercase tracking-wider mb-3">Customer Care</h5>
            <ul className="space-y-2 text-[#A8B7A2]">
              <li><a href="mailto:info@velqen.co.uk" className="hover:text-white transition">info@velqen.co.uk</a></li>
              <li><span className="text-[#A8B7A2]">Amazon FBA Tracked Delivery</span></li>
              <li><span className="text-[#A8B7A2]">30-Day UK Return Guarantee</span></li>
            </ul>
          </div>

          <div>
            <h5 className="font-bold text-white uppercase tracking-wider mb-3">Verified Channels</h5>
            <p className="text-[#A8B7A2] mb-3">Shop genuine Velqen carry on verified platforms:</p>
            <div className="flex gap-2">
              <span className="px-2.5 py-1 bg-[#3B4A34] text-[#F4ECCF] rounded-lg text-[10px] font-bold">Amazon UK</span>
              <span className="px-2.5 py-1 bg-[#3B4A34] text-[#F4ECCF] rounded-lg text-[10px] font-bold">eBay UK</span>
            </div>
          </div>

        </div>
      </footer>

    </div>
  );
}