'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import { products } from '@/app/data/products';
import { useCart } from '@/app/context/cart-context';
import { 
  ShoppingBag, Star, Truck, ShieldCheck, Heart, 
  ChevronRight, Check 
} from 'lucide-react';

export default function ProductDetailPage() {
  const params = useParams();
  const product = products.find(p => p.id === params.id) || products[0];

  const { addToCart, totalItems, setIsCartOpen } = useCart();
  const [selectedImage, setSelectedImage] = useState(0);
  const [selectedColor, setSelectedColor] = useState(product.colors ? product.colors[0].name : "Standard");
  const [quantity, setQuantity] = useState(1);
  const [isFavourited, setIsFavourited] = useState(false);

  const handleAdd = () => {
    addToCart(product, quantity);
  };

  return (
    <div className="min-h-screen bg-[#F4EFE6] text-[#151C12] pb-24 lg:pb-0">
      
      {/* 1. TOP ANNOUNCEMENT BAR */}
      <div className="bg-[#283621] text-[#EFE7D3] text-[11px] sm:text-xs py-2 px-3 text-center font-medium tracking-wide flex justify-center items-center gap-4">
        <span>🇬🇧 Official UK Stock</span>
        <span className="opacity-40">•</span>
        <span>Amazon FBA Fast Dispatch</span>
      </div>

      {/* 2. HEADER */}
      <header className="sticky top-0 z-30 bg-[#F4EFE6]/95 backdrop-blur-md border-b border-[#E2D8C3]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 sm:h-20 flex items-center justify-between">
          <Link href="/" className="text-2xl sm:text-3xl font-extrabold tracking-tight text-[#283621]" style={{ fontFamily: "'Outfit', sans-serif" }}>
            VELQEN<span className="text-[#849B72]">.</span>
          </Link>
          
          <div className="flex items-center gap-4">
            <Link href="/" className="text-xs font-bold text-[#283621] hover:text-[#5B7349] uppercase tracking-wider hidden sm:block">
              All Bags
            </Link>
            <button 
              onClick={() => setIsCartOpen(true)}
              className="flex items-center gap-2 bg-[#283621] text-[#F4EFE6] px-3.5 sm:px-4 py-2 sm:py-2.5 rounded-full text-xs font-bold hover:bg-[#1C2617] transition shadow-md"
            >
              <ShoppingBag className="w-3.5 h-3.5 text-[#EFE7D3]" />
              <span>Bag ({totalItems})</span>
            </button>
          </div>
        </div>
      </header>

      {/* 3. BREADCRUMB */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 sm:py-4">
        <nav className="flex items-center gap-1.5 text-[11px] sm:text-xs text-[#6B7963] overflow-hidden whitespace-nowrap">
          <Link href="/" className="hover:underline flex-shrink-0">Home</Link>
          <ChevronRight className="w-3 h-3 text-slate-400 flex-shrink-0" />
          <Link href={`/category/${product.categorySlug}`} className="hover:underline flex-shrink-0">{product.category}</Link>
          <ChevronRight className="w-3 h-3 text-slate-400 flex-shrink-0" />
          <span className="text-[#283621] font-semibold truncate">{product.name}</span>
        </nav>
      </div>

      {/* 4. MAIN PRODUCT GRID */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10 items-start">
          
          {/* GALLERY (Mobile Responsive Stack + Thumbnails) */}
          <div className="lg:col-span-7 space-y-3">
            <div className="aspect-square sm:aspect-[4/5] rounded-2xl sm:rounded-3xl overflow-hidden bg-[#E2D8C3] border border-[#D5C9A6] shadow-sm relative">
              <img 
                src={product.images[selectedImage]} 
                alt={product.name} 
                className="w-full h-full object-cover"
              />
              <span className="absolute top-3 left-3 bg-[#283621] text-[#EFE7D3] text-[9px] sm:text-[10px] font-bold px-2.5 py-1 rounded-md uppercase tracking-wider">
                {product.factoryModel || product.itemCode}
              </span>
            </div>

            {/* Thumbnail Rail */}
            <div className="flex gap-2.5 overflow-x-auto pb-1">
              {product.images.map((img, idx) => (
                <button
                  key={idx}
                  onClick={() => setSelectedImage(idx)}
                  className={`w-16 h-16 sm:w-20 sm:h-20 rounded-xl overflow-hidden border-2 transition bg-[#E2D8C3] flex-shrink-0 ${
                    selectedImage === idx ? 'border-[#283621] ring-2 ring-[#283621]/20' : 'border-transparent opacity-70'
                  }`}
                >
                  <img src={img} alt="thumbnail" className="w-full h-full object-cover" />
                </button>
              ))}
            </div>
          </div>

          {/* BUY BOX (5 Cols) */}
          <div className="lg:col-span-5 bg-[#FAF6EE] rounded-2xl sm:rounded-3xl p-5 sm:p-8 border border-[#DCD0B4] shadow-sm space-y-5 sm:space-y-6">
            
            <div>
              <p className="text-[11px] font-mono text-[#7A7360] uppercase tracking-wider mb-1">
                Item: {product.itemCode} • Model: {product.factoryModel || 'BS-STD-01'}
              </p>
              <h1 className="text-xl sm:text-3xl font-extrabold text-[#283621] tracking-tight leading-snug" style={{ fontFamily: "'Outfit', sans-serif" }}>
                {product.name}
              </h1>
              
              <div className="flex items-center gap-2 mt-2">
                <div className="flex items-center text-[#5B7349]">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-[#5B7349]" />
                  ))}
                </div>
                <span className="text-xs font-bold text-[#283621]">{product.rating}</span>
                <span className="text-xs text-[#7A7360]">({product.reviews} reviews)</span>
              </div>
            </div>

            {/* Price */}
            <div className="border-y border-[#E2D8C3] py-3.5 sm:py-4 flex items-baseline justify-between">
              <span className="text-2xl sm:text-3xl font-black text-[#283621]">£{product.price.toFixed(2)}</span>
              <span className="inline-flex items-center gap-1.5 text-xs font-bold text-emerald-800 bg-emerald-100/80 px-2.5 py-1 rounded-full">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-600 animate-pulse"></span>
                In Stock (UK Warehouse)
              </span>
            </div>

            {/* Color Swatches */}
            {product.colors && (
              <div className="space-y-2">
                <span className="text-xs font-bold text-[#283621]">
                  Colour: <span className="font-normal text-[#5B6D51]">{selectedColor}</span>
                </span>
                <div className="flex flex-wrap gap-2">
                  {product.colors.map((c, i) => (
                    <button
                      key={i}
                      onClick={() => setSelectedColor(c.name)}
                      className={`flex items-center gap-2 px-3 py-1.5 rounded-xl text-xs font-medium border transition ${
                        selectedColor === c.name 
                          ? 'border-[#283621] bg-[#F4EFE6] ring-2 ring-[#283621]/20 font-bold text-[#283621]' 
                          : 'border-[#D5C9A6] bg-white text-slate-700'
                      }`}
                    >
                      <span className="w-3 h-3 rounded-full border border-black/20" style={{ backgroundColor: c.hex }} />
                      <span>{c.name}</span>
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Desktop Add to Bag Row */}
            <div className="space-y-3 pt-2">
              <div className="flex gap-3">
                <div className="flex items-center border border-[#D5C9A6] rounded-xl bg-[#F4EFE6] px-3 py-2">
                  <button onClick={() => setQuantity(q => Math.max(1, q - 1))} className="text-slate-700 font-bold px-2 text-sm">-</button>
                  <span className="px-2 text-xs font-black text-[#283621]">{quantity}</span>
                  <button onClick={() => setQuantity(q => q + 1)} className="text-slate-700 font-bold px-2 text-sm">+</button>
                </div>

                <button
                  onClick={handleAdd}
                  className="flex-1 py-3.5 sm:py-4 bg-[#283621] hover:bg-[#1A2416] text-[#F4EFE6] rounded-xl sm:rounded-2xl font-bold text-xs uppercase tracking-wider transition flex items-center justify-center gap-2 shadow-lg active:scale-95"
                >
                  <ShoppingBag className="w-4 h-4 text-[#EFE7D3]" />
                  <span>Add to Bag • £{(product.price * quantity).toFixed(2)}</span>
                </button>

                <button
                  onClick={() => setIsFavourited(!isFavourited)}
                  className={`p-3.5 sm:p-4 rounded-xl sm:rounded-2xl border transition ${
                    isFavourited ? 'border-rose-500 bg-rose-50 text-rose-600' : 'border-[#D5C9A6] bg-[#F4EFE6] text-slate-700'
                  }`}
                >
                  <Heart className={`w-5 h-5 ${isFavourited ? 'fill-rose-500' : ''}`} />
                </button>
              </div>
            </div>

            {/* Delivery Box */}
            <div className="bg-[#F4EFE6] rounded-2xl p-4 border border-[#DCD0B4] space-y-2.5 text-xs">
              <div className="flex items-start gap-3">
                <Truck className="w-4 h-4 text-[#283621] flex-shrink-0 mt-0.5" />
                <div>
                  <span className="font-bold text-[#283621] block">Home Delivery (UK)</span>
                  <span className="text-[#5B6D51]">Standard delivery (FREE) or Next Day via Amazon Logistics.</span>
                </div>
              </div>
              <div className="flex items-start gap-3 pt-2 border-t border-[#E2D8C3]">
                <ShieldCheck className="w-4 h-4 text-[#283621] flex-shrink-0 mt-0.5" />
                <div>
                  <span className="font-bold text-[#283621] block">30-Day Easy UK Returns</span>
                  <span className="text-[#5B6D51]">Free UK postal returns or exchange within 30 days.</span>
                </div>
              </div>
            </div>

            {/* Specifications Accordion */}
            <div className="border-t border-[#E2D8C3] pt-4 space-y-3 text-xs">
              <div>
                <h3 className="font-extrabold uppercase text-[#283621] tracking-wider mb-2">Description</h3>
                <p className="text-[#52614B] leading-relaxed mb-2">{product.description}</p>
                <ul className="space-y-1 text-[#283621]">
                  {product.features.map((feat, i) => (
                    <li key={i} className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#5B7349]"></span>
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {product.dimensions && (
                <div className="pt-3 border-t border-[#E2D8C3]">
                  <h3 className="font-extrabold uppercase text-[#283621] tracking-wider mb-2">Dimensions & Fit</h3>
                  <div className="grid grid-cols-3 gap-2 bg-[#F4EFE6] p-2.5 rounded-xl text-center">
                    <div>
                      <span className="text-[10px] text-[#7A7360] uppercase block">Height</span>
                      <span className="font-bold text-[#283621]">{product.dimensions.height}</span>
                    </div>
                    <div>
                      <span className="text-[10px] text-[#7A7360] uppercase block">Width</span>
                      <span className="font-bold text-[#283621]">{product.dimensions.width}</span>
                    </div>
                    <div>
                      <span className="text-[10px] text-[#7A7360] uppercase block">Depth</span>
                      <span className="font-bold text-[#283621]">{product.dimensions.depth}</span>
                    </div>
                  </div>
                </div>
              )}

              {product.composition && (
                <div className="pt-3 border-t border-[#E2D8C3]">
                  <h3 className="font-extrabold uppercase text-[#283621] tracking-wider mb-1">Composition</h3>
                  <p className="text-[#52614B]">
                    <strong>Main:</strong> {product.composition.main} • <strong>Care:</strong> {product.composition.care}
                  </p>
                </div>
              )}
            </div>

          </div>

        </div>
      </main>

      {/* 5. STICKY MOBILE BOTTOM "ADD TO BAG" BAR (Mobile Only) */}
      <div className="fixed bottom-0 inset-x-0 z-40 bg-[#FAF6EE]/95 backdrop-blur-md border-t border-[#DCD0B4] p-3 px-4 flex items-center justify-between gap-4 lg:hidden shadow-2xl">
        <div>
          <span className="text-[10px] text-[#7A7360] block font-mono">Item {product.itemCode}</span>
          <span className="text-xl font-black text-[#283621]">£{(product.price * quantity).toFixed(2)}</span>
        </div>
        <button
          onClick={handleAdd}
          className="flex-1 py-3.5 bg-[#283621] active:bg-[#1A2416] text-[#F4EFE6] rounded-xl font-extrabold text-xs uppercase tracking-wider flex items-center justify-center gap-2 shadow-lg"
        >
          <ShoppingBag className="w-4 h-4 text-[#EFE7D3]" />
          <span>Add to Bag</span>
        </button>
      </div>

    </div>
  );
}