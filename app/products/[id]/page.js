'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import { products } from '@/app/data/products';
import { useCart } from '@/app/context/cart-context';
import { 
  ShoppingBag, Star, Truck, ShieldCheck, Heart, 
  ChevronRight, Check, ChevronDown, ChevronUp, Package 
} from 'lucide-react';

export default function NextStyleProductPage() {
  const params = useParams();
  const product = products.find(p => p.id === params.id) || products[0];

  const { addToCart, totalItems, setIsCartOpen } = useCart();
  const [selectedImage, setSelectedImage] = useState(0);
  const [selectedColor, setSelectedColor] = useState(product.colors ? product.colors[0].name : "Standard");
  const [quantity, setQuantity] = useState(1);
  const [isFavourited, setIsFavourited] = useState(false);
  const [activeTab, setActiveTab] = useState('description');

  const handleAdd = () => {
    addToCart(product, quantity);
  };

  return (
    <div className="min-h-screen bg-[#F4EFE6] text-[#151C12]">
      
      {/* 1. TOP UTILITY BAR (Next.co.uk Style) */}
      <div className="bg-[#283621] text-[#EFE7D3] text-xs py-2 px-4 text-center font-medium tracking-wide flex justify-center items-center gap-6">
        <span>🇬🇧 UK Free Standard Delivery over £20</span>
        <span className="opacity-30">•</span>
        <span>Next Day Delivery Available via Amazon Logistics</span>
        <span className="opacity-30">•</span>
        <span>Hassle-Free 30-Day Returns</span>
      </div>

      {/* 2. HEADER */}
      <header className="sticky top-0 z-30 bg-[#F4EFE6]/95 backdrop-blur-md border-b border-[#E2D8C3]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          <Link href="/" className="text-2xl sm:text-3xl font-extrabold tracking-tight text-[#283621]" style={{ fontFamily: "'Outfit', sans-serif" }}>
            VELQEN<span className="text-[#849B72]">.</span>
          </Link>
          
          <div className="flex items-center gap-4">
            <Link href="/" className="text-xs font-bold text-[#283621] hover:text-[#5B7349] uppercase tracking-wider hidden sm:block">
              All Collections
            </Link>
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

      {/* 3. BREADCRUMB NAVIGATION */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <nav className="flex items-center gap-2 text-xs text-[#6B7963]">
          <Link href="/" className="hover:underline">Home</Link>
          <ChevronRight className="w-3 h-3 text-slate-400" />
          <Link href="/" className="hover:underline">{product.category}</Link>
          <ChevronRight className="w-3 h-3 text-slate-400" />
          <span className="text-[#283621] font-semibold truncate max-w-xs">{product.name}</span>
        </nav>
      </div>

      {/* 4. MAIN PRODUCT GRID (Next.co.uk 2-Column Split) */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* LEFT: GALLERY WITH THUMBNAIL RAIL (7 Cols) */}
          <div className="lg:col-span-7 flex flex-col-reverse sm:flex-row gap-4">
            
            {/* Vertical Thumbnail Strip */}
            <div className="flex sm:flex-col gap-3 overflow-x-auto sm:overflow-y-auto sm:w-24 flex-shrink-0">
              {product.images.map((img, idx) => (
                <button
                  key={idx}
                  onClick={() => setSelectedImage(idx)}
                  className={`w-16 h-20 sm:w-24 sm:h-28 rounded-xl overflow-hidden border-2 transition bg-[#E2D8C3] flex-shrink-0 ${
                    selectedImage === idx ? 'border-[#283621] ring-2 ring-[#283621]/20' : 'border-transparent opacity-70 hover:opacity-100'
                  }`}
                >
                  <img src={img} alt="thumbnail" className="w-full h-full object-cover" />
                </button>
              ))}
            </div>

            {/* Main Featured Photo */}
            <div className="flex-1 aspect-[4/5] rounded-3xl overflow-hidden bg-[#E2D8C3] border border-[#D5C9A6] shadow-sm relative">
              <img 
                src={product.images[selectedImage]} 
                alt={product.name} 
                className="w-full h-full object-cover"
              />
              <span className="absolute top-4 left-4 bg-[#283621] text-[#EFE7D3] text-[10px] font-bold px-3 py-1 rounded-md uppercase tracking-wider">
                Official UK Release
              </span>
            </div>

          </div>

          {/* RIGHT: BUY BOX & PRODUCT DETAILS (5 Cols) */}
          <div className="lg:col-span-5 bg-[#FAF6EE] rounded-3xl p-6 sm:p-8 border border-[#DCD0B4] shadow-sm space-y-6">
            
            {/* Title & Product Code */}
            <div>
              <p className="text-[11px] font-mono text-[#7A7360] uppercase tracking-wider mb-1">
                Item: {product.itemCode}
              </p>
              <h1 className="text-2xl sm:text-3xl font-extrabold text-[#283621] tracking-tight leading-snug" style={{ fontFamily: "'Outfit', sans-serif" }}>
                {product.name}
              </h1>
              
              {/* Rating */}
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

            {/* Price Display */}
            <div className="border-y border-[#E2D8C3] py-4 flex items-baseline justify-between">
              <div>
                <span className="text-3xl font-black text-[#283621]">£{product.price.toFixed(2)}</span>
              </div>
              <div className="text-right">
                <span className="inline-flex items-center gap-1.5 text-xs font-bold text-emerald-800 bg-emerald-100/80 px-2.5 py-1 rounded-full">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-600 animate-pulse"></span>
                  In Stock
                </span>
              </div>
            </div>

            {/* Colour Selector (Next UK Swatches) */}
            <div className="space-y-2.5">
              <div className="flex justify-between text-xs">
                <span className="font-bold text-[#283621]">Colour: <span className="font-normal text-[#5B6D51]">{selectedColor}</span></span>
              </div>
              <div className="flex gap-2.5">
                {product.colors.map((c, i) => (
                  <button
                    key={i}
                    onClick={() => setSelectedColor(c.name)}
                    className={`flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs font-medium border transition ${
                      selectedColor === c.name 
                        ? 'border-[#283621] bg-[#F4EFE6] ring-2 ring-[#283621]/20 font-bold text-[#283621]' 
                        : 'border-[#D5C9A6] bg-white text-slate-700 hover:border-[#283621]'
                    }`}
                  >
                    <span className="w-3.5 h-3.5 rounded-full border border-black/20" style={{ backgroundColor: c.hex }} />
                    <span>{c.name}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Size Selector */}
            <div className="space-y-2">
              <span className="text-xs font-bold text-[#283621]">Size</span>
              <div>
                <span className="inline-block px-4 py-2 bg-[#F4EFE6] border-2 border-[#283621] rounded-xl text-xs font-extrabold text-[#283621]">
                  ONE SIZE ({product.dimensions.width} x {product.dimensions.height})
                </span>
              </div>
            </div>

            {/* Add to Bag & Wishlist Buttons */}
            <div className="space-y-3 pt-2">
              <div className="flex gap-3">
                
                {/* Quantity */}
                <div className="flex items-center border border-[#D5C9A6] rounded-2xl bg-[#F4EFE6] px-3 py-2">
                  <button 
                    onClick={() => setQuantity(q => Math.max(1, q - 1))}
                    className="text-slate-700 font-bold px-2 hover:text-black"
                  >
                    -
                  </button>
                  <span className="px-3 text-xs font-black text-[#283621]">{quantity}</span>
                  <button 
                    onClick={() => setQuantity(q => q + 1)}
                    className="text-slate-700 font-bold px-2 hover:text-black"
                  >
                    +
                  </button>
                </div>

                {/* Primary Add to Bag */}
                <button
                  onClick={handleAdd}
                  className="flex-1 py-4 bg-[#283621] hover:bg-[#1A2416] text-[#F4EFE6] rounded-2xl font-bold text-xs uppercase tracking-wider transition flex items-center justify-center gap-2 shadow-lg"
                >
                  <ShoppingBag className="w-4 h-4 text-[#EFE7D3]" />
                  <span>Add to Bag • £{(product.price * quantity).toFixed(2)}</span>
                </button>

                {/* Wishlist Button */}
                <button
                  onClick={() => setIsFavourited(!isFavourited)}
                  className={`p-4 rounded-2xl border transition ${
                    isFavourited 
                      ? 'border-rose-500 bg-rose-50 text-rose-600' 
                      : 'border-[#D5C9A6] bg-[#F4EFE6] text-slate-700 hover:border-[#283621]'
                  }`}
                >
                  <Heart className={`w-5 h-5 ${isFavourited ? 'fill-rose-500' : ''}`} />
                </button>
              </div>

              {/* Verified Marketplaces Bar */}
              <div className="bg-[#F4EFE6] p-3 rounded-xl border border-[#DCD0B4] flex items-center justify-between text-xs">
                <span className="text-xs text-[#5B6D51]">Official storefronts:</span>
                <div className="flex gap-2">
                  <span className="px-2.5 py-1 bg-white border border-[#D5C9A6] rounded text-[11px] font-bold text-slate-800">Amazon UK</span>
                  <span className="px-2.5 py-1 bg-white border border-[#D5C9A6] rounded text-[11px] font-bold text-slate-800">eBay UK</span>
                </div>
              </div>
            </div>

            {/* Delivery & Services Box (Next UK Style) */}
            <div className="bg-[#F4EFE6] rounded-2xl p-4 border border-[#DCD0B4] space-y-3 text-xs">
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
                  <span className="font-bold text-[#283621] block">30-Day Easy Returns</span>
                  <span className="text-[#5B6D51]">Free UK postal returns or exchange within 30 days.</span>
                </div>
              </div>
            </div>

            {/* Next.co.uk Style Accordion Info */}
            <div className="border-t border-[#E2D8C3] pt-4 space-y-4 text-xs">
              
              {/* Description */}
              <div>
                <h3 className="font-extrabold uppercase text-[#283621] tracking-wider mb-2" style={{ fontFamily: "'Outfit', sans-serif" }}>
                  Description
                </h3>
                <p className="text-[#52614B] leading-relaxed mb-3">
                  {product.description}
                </p>
                <ul className="space-y-1.5 text-[#283621]">
                  {product.features.map((feat, i) => (
                    <li key={i} className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#5B7349]"></span>
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Dimensions */}
              <div className="pt-3 border-t border-[#E2D8C3]">
                <h3 className="font-extrabold uppercase text-[#283621] tracking-wider mb-2" style={{ fontFamily: "'Outfit', sans-serif" }}>
                  Dimensions & Fit
                </h3>
                <div className="grid grid-cols-3 gap-2 bg-[#F4EFE6] p-3 rounded-xl text-center">
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

              {/* Composition & Care */}
              <div className="pt-3 border-t border-[#E2D8C3]">
                <h3 className="font-extrabold uppercase text-[#283621] tracking-wider mb-2" style={{ fontFamily: "'Outfit', sans-serif" }}>
                  Composition & Care
                </h3>
                <p className="text-[#52614B]">
                  <strong>Main:</strong> {product.composition.main} <br />
                  <strong>Lining:</strong> {product.composition.lining} <br />
                  <strong>Care:</strong> {product.composition.care}
                </p>
              </div>

            </div>

          </div>

        </div>
      </main>

      {/* 5. FOOTER */}
      <footer className="bg-[#202C1B] text-[#D0C7B0] py-14 text-xs border-t border-[#2E3D27]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-3">
          <span className="text-2xl font-extrabold text-[#EFE7D3] tracking-tight uppercase" style={{ fontFamily: "'Outfit', sans-serif" }}>
            VELQEN<span className="text-[#849B72]">.</span>
          </span>
          <p className="text-xs text-[#A8A08A]">Everyday carry silhouettes engineered for modern UK youth lifestyle.</p>
          <p className="text-[11px] text-[#7A7360]">© {new Date().getFullYear()} Velqen.co.uk. All rights reserved.</p>
        </div>
      </footer>

    </div>
  );
}