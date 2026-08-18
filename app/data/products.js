export const categoriesData = [
  {
    slug: "crescents",
    name: "Nylon Crescents",
    headline: "The Viral Half-Moon Carry",
    description: "Ultra-lightweight, body-contouring crescent silhouettes designed for hands-free daily movement.",
    image: "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?auto=format&fit=crop&w=800&q=80"
  },
  {
    slug: "totes",
    name: "Shoulder & Totes",
    headline: "Structured Everyday Carry",
    description: "Heavyweight canvas and weather-treated nylon totes designed for laptops, gym, and commute.",
    image: "https://images.unsplash.com/photo-1590874103328-eac38a683ce7?auto=format&fit=crop&w=800&q=80"
  },
  {
    slug: "slings",
    name: "Crossbody Slings",
    headline: "Modular Hands-Free Slings",
    description: "Technical urban slings with quick-access pockets and ergonomic padded straps.",
    image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&w=800&q=80"
  },
  {
    slug: "packs",
    name: "Belt Bags & Packs",
    headline: "Compact Essentials Packs",
    description: "Sleek low-profile waist and chest packs engineered for active routines and travel.",
    image: "https://images.unsplash.com/photo-1622560480605-d83c853bc5c3?auto=format&fit=crop&w=800&q=80"
  }
];

export const products = [
  // --- 1. NYLON CRESCENTS ---
  {
    id: "1",
    itemCode: "VQ-896-301",
    categorySlug: "crescents",
    category: "Nylon Crescents",
    name: "The Cloud Crescent Nylon Sling Bag",
    tagline: "Ergonomic half-moon silhouette designed for everyday hands-free travel.",
    price: 24.00,
    rating: 4.9,
    reviews: 84,
    badge: "Trending in UK",
    colors: [
      { name: "Matcha Olive", hex: "#3B4A34" },
      { name: "Stone Cream", hex: "#EAE4D5" },
      { name: "Midnight Black", hex: "#1C201A" }
    ],
    images: [
      "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1590874103328-eac38a683ce7?auto=format&fit=crop&w=1000&q=80"
    ],
    description: "This viral half-moon crescent bag hugs the contour of your torso comfortably. Features a water-resistant crinkle nylon exterior and smooth-glide Japanese zippers.",
    dimensions: { height: "18cm", width: "31cm", depth: "10cm", strap: "Adjustable 60cm – 110cm" },
    composition: { main: "100% Water-Resistant Crinkle Nylon", lining: "100% Recycled Polyester", care: "Wipe clean only" },
    features: ["Ergonomic body curve", "Dual internal organizer slots", "Smooth Japanese YKK zips", "Featherweight 160g"]
  },
  {
    id: "2",
    itemCode: "VQ-896-302",
    categorySlug: "crescents",
    category: "Nylon Crescents",
    name: "Oversized Studio Dumpling Crescent",
    tagline: "High-capacity slouchy crescent bag fitting tablets, bottles, and daily gear.",
    price: 29.00,
    rating: 4.8,
    reviews: 51,
    badge: "Staff Pick",
    colors: [
      { name: "Stone Cream", hex: "#EAE4D5" },
      { name: "Matcha Olive", hex: "#3B4A34" }
    ],
    images: [
      "https://images.unsplash.com/photo-1591561954557-26941169b49e?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?auto=format&fit=crop&w=1000&q=80"
    ],
    description: "A relaxed, slouchy pleated dumpling crescent bag offering extra depth for daily essentials. Features a wide padded shoulder strap for all-day comfort.",
    dimensions: { height: "24cm", width: "38cm", depth: "13cm", strap: "Padded Adjustable Strap (up to 105cm)" },
    composition: { main: "Heavyweight Crinkle Tech Nylon", lining: "100% Cotton Twill", care: "Wipe clean only" },
    features: ["Fits 11-inch iPad / Tablet", "Wide ergonomic strap", "Magnetic quick snap + zip", "Reinforced stress joints"]
  },
  {
    id: "3",
    itemCode: "VQ-896-303",
    categorySlug: "crescents",
    category: "Nylon Crescents",
    name: "Micro Curve Nylon Mini Bag",
    tagline: "Compact curve silhouette designed for phone, cards, keys, and lip balm.",
    price: 19.00,
    rating: 4.9,
    reviews: 38,
    badge: "Essential",
    colors: [
      { name: "Matcha Olive", hex: "#3B4A34" },
      { name: "Midnight Black", hex: "#1C201A" }
    ],
    images: [
      "https://images.unsplash.com/photo-1544816155-12df9643f363?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?auto=format&fit=crop&w=1000&q=80"
    ],
    description: "The minimalist micro crescent bag for nights out and quick errands. Lightweight water-repellent shell with integrated card slots.",
    dimensions: { height: "14cm", width: "23cm", depth: "7cm", strap: "Detachable Crossbody Cord (120cm)" },
    composition: { main: "100% Recycled Matte Nylon", lining: "100% Recycled Polyester", care: "Wipe clean only" },
    features: ["Ultra-compact 120g", "Integrated RFID card sleeves", "Key leash clip included", "Water-repellent finish"]
  },

  // --- 2. SHOULDER & TOTES ---
  {
    id: "4",
    itemCode: "VQ-442-201",
    categorySlug: "totes",
    category: "Shoulder & Totes",
    name: "Everyday Minimalist Canvas Utility Tote",
    tagline: "Heavy-duty organic canvas tote with padded 15-inch laptop compartment.",
    price: 32.00,
    rating: 4.8,
    reviews: 62,
    badge: "Best Seller",
    colors: [
      { name: "Natural Ecru", hex: "#EBE5D8" },
      { name: "Matcha Olive", hex: "#3B4A34" }
    ],
    images: [
      "https://images.unsplash.com/photo-1590874103328-eac38a683ce7?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1544816155-12df9643f363?auto=format&fit=crop&w=1000&q=80"
    ],
    description: "A structured, heavy-duty 16oz cotton canvas tote bag. Equipped with dual drop shoulder straps and internal compartments for laptops and notebooks.",
    dimensions: { height: "34cm", width: "40cm", depth: "12cm", strap: "Reinforced Dual Handles (28cm drop)" },
    composition: { main: "16oz Organic Cotton Canvas", lining: "100% Cotton Twill", care: "Spot clean with gentle soap" },
    features: ["Dedicated 15\" padded laptop sleeve", "Water bottle interior sleeve", "Reinforced flat base panel", "Magnetic closure"]
  },
  {
    id: "5",
    itemCode: "VQ-442-202",
    categorySlug: "totes",
    category: "Shoulder & Totes",
    name: "Weather-Shield Commuter Zip Tote",
    tagline: "Full-zip technical nylon shoulder bag built for unpredictable UK weather.",
    price: 36.00,
    rating: 4.9,
    reviews: 44,
    badge: "Staff Pick",
    colors: [
      { name: "Midnight Black", hex: "#1C201A" },
      { name: "Matcha Olive", hex: "#3B4A34" }
    ],
    images: [
      "https://images.unsplash.com/photo-1584917865442-de89df76afd3?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1590874103328-eac38a683ce7?auto=format&fit=crop&w=1000&q=80"
    ],
    description: "Engineered for rainy UK commutes, featuring sealed seam zippers and heavy water-resistant matte micro-poly canvas.",
    dimensions: { height: "36cm", width: "42cm", depth: "14cm", strap: "Padded Webbing Shoulder Straps" },
    composition: { main: "Hydrophobic Coated Nylon", lining: "100% Ripstop Polyester", care: "Wipe clean only" },
    features: ["Full top security zipper", "Trolley luggage sleeve", "External umbrella pocket", "Padded base"]
  },
  {
    id: "6",
    itemCode: "VQ-442-203",
    categorySlug: "totes",
    category: "Shoulder & Totes",
    name: "Casual Slouch Shoulder Shopper",
    tagline: "Soft unstructured slouch shoulder bag with minimalist magnetic latch.",
    price: 28.00,
    rating: 4.7,
    reviews: 29,
    badge: "New Release",
    colors: [
      { name: "Stone Cream", hex: "#EAE4D5" },
      { name: "Natural Ecru", hex: "#EBE5D8" }
    ],
    images: [
      "https://images.unsplash.com/photo-1566150905458-1bf1fc113f0d?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1590874103328-eac38a683ce7?auto=format&fit=crop&w=1000&q=80"
    ],
    description: "An effortless oversized shoulder shopper designed for weekend markets, gym gear, or library runs.",
    dimensions: { height: "38cm", width: "36cm", depth: "10cm", strap: "Wide Single Shoulder Strap (32cm drop)" },
    composition: { main: "100% Brushed Cotton Canvas", lining: "Unlined raw interior with zipped pouch", care: "Machine wash cold" },
    features: ["Relaxed draped aesthetic", "Hanging internal zip purse", "Foldable lightweight design", "Reinforced box corners"]
  },

  // --- 3. CROSSBODY SLINGS ---
  {
    id: "7",
    itemCode: "VQ-310-301",
    categorySlug: "slings",
    category: "Crossbody Slings",
    name: "Modular Crossbody Urban Sling",
    tagline: "Hands-free tactical carry engineered with quick-access dividers.",
    price: 28.00,
    rating: 5.0,
    reviews: 110,
    badge: "Top Rated",
    colors: [
      { name: "Matcha Olive", hex: "#3B4A34" },
      { name: "Obsidian Black", hex: "#1C201A" }
    ],
    images: [
      "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1622560480605-d83c853bc5c3?auto=format&fit=crop&w=1000&q=80"
    ],
    description: "Engineered for active city routines with multi-pocket storage, anti-theft hidden passport pocket, and magnetic strap latch.",
    dimensions: { height: "17cm", width: "28cm", depth: "9cm", strap: "Quick-Release Adjustable Strap" },
    composition: { main: "High-Density Ripstop Nylon", lining: "100% Polyester Mesh", care: "Wipe clean only" },
    features: ["Hidden passport pocket", "Honeycomb breathable back mesh", "Magnetic German Fidlock-style clip", "Rubberized zips"]
  },
  {
    id: "8",
    itemCode: "VQ-310-302",
    categorySlug: "slings",
    category: "Crossbody Slings",
    name: "Minimalist Aero Crossbody Pouch",
    tagline: "Featherlight sleek chest sling for phone, passport, and daily tech.",
    price: 23.00,
    rating: 4.8,
    reviews: 53,
    badge: "Essential",
    colors: [
      { name: "Stone Cream", hex: "#EAE4D5" },
      { name: "Matcha Olive", hex: "#3B4A34" }
    ],
    images: [
      "https://images.unsplash.com/photo-1578632767115-351597cf2477?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&w=1000&q=80"
    ],
    description: "A flat aerodynamic crossbody pouch that sits cleanly under jackets or across sweaters without bulging.",
    dimensions: { height: "20cm", width: "15cm", depth: "4cm", strap: "Slim Nylon Webbing (up to 130cm)" },
    composition: { main: "Diamond Ripstop Fabric", lining: "Silky 210D Poly", care: "Wipe clean only" },
    features: ["Low profile 110g weight", "Fleece-lined sunglasses pocket", "Elastic cable management", "Waterproof zip track"]
  },
  {
    id: "9",
    itemCode: "VQ-310-303",
    categorySlug: "slings",
    category: "Crossbody Slings",
    name: "Technical Utility Messenger Sling",
    tagline: "Expanded cross-body messenger sling with padded tech sleeve.",
    price: 34.00,
    rating: 4.9,
    reviews: 67,
    badge: "Staff Pick",
    colors: [
      { name: "Obsidian Black", hex: "#1C201A" },
      { name: "Matcha Olive", hex: "#3B4A34" }
    ],
    images: [
      "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&w=1000&q=80"
    ],
    description: "The big brother of our urban sling. Accommodates 11-inch tablets, headphones, notebooks, and travel cameras with ease.",
    dimensions: { height: "22cm", width: "32cm", depth: "11cm", strap: "Thick Padded Crossbody Strap" },
    composition: { main: "Cordura-Grade 500D Nylon", lining: "High-Vis Safety Orange Lining", care: "Wipe clean only" },
    features: ["Padded tablet pocket", "High-visibility inner lining", "Stabilizer underarm strap", "Dual external bottle loops"]
  },

  // --- 4. BELT BAGS & PACKS ---
  {
    id: "10",
    itemCode: "VQ-118-401",
    categorySlug: "packs",
    category: "Belt Bags & Packs",
    name: "Everyday Ergonomic Utility Belt Bag",
    tagline: "Compact waist and cross-chest pack for essentials-only travel.",
    price: 22.00,
    rating: 4.9,
    reviews: 47,
    badge: "Best Seller",
    colors: [
      { name: "Stone Cream", hex: "#EAE4D5" },
      { name: "Matcha Green", hex: "#3B4A34" },
      { name: "Midnight Black", hex: "#1C201A" }
    ],
    images: [
      "https://images.unsplash.com/photo-1622560480605-d83c853bc5c3?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&w=1000&q=80"
    ],
    description: "Compact and streamlined, this versatile pack can be worn around the waist or across the chest for workouts, walks, or flights.",
    dimensions: { height: "13cm", width: "21cm", depth: "5.5cm", strap: "Adjustable Webbing (up to 125cm)" },
    composition: { main: "Recycled Matte Micro-Poly with DWR Finish", lining: "100% Recycled Polyester", care: "Wipe clean only" },
    features: ["Two-way dual direction zip", "Interior mesh dividers", "Lightweight ergonomic fit (140g)", "Water-repellent finish"]
  },
  {
    id: "11",
    itemCode: "VQ-118-402",
    categorySlug: "packs",
    category: "Belt Bags & Packs",
    name: "Active Run & Hike Waist Pack",
    tagline: "Bounce-free ultra-stretch hydration and phone belt pack.",
    price: 18.00,
    rating: 4.8,
    reviews: 32,
    badge: "Trending in UK",
    colors: [
      { name: "Matcha Green", hex: "#3B4A34" },
      { name: "Midnight Black", hex: "#1C201A" }
    ],
    images: [
      "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1622560480605-d83c853bc5c3?auto=format&fit=crop&w=1000&q=80"
    ],
    description: "Zero-bounce design engineered with 4-way stretch spandex-nylon to securely hold large smartphones, energy gels, and keys.",
    dimensions: { height: "10cm", width: "28cm", depth: "3cm", strap: "Elasticized Custom Fit Strap" },
    composition: { main: "85% Spandex Nylon Blend", lining: "Sweat-proof TPU Barrier", care: "Hand wash cold" },
    features: ["Bounce-free lock fit", "Sweat-proof phone pocket", "Reflective safety piping", "Earphone wire outlet"]
  },
  {
    id: "12",
    itemCode: "VQ-118-403",
    categorySlug: "packs",
    category: "Belt Bags & Packs",
    name: "Dual-Pocket Studio Belt Bag",
    tagline: "Expanded two-tier waist pack with matte metal hardware.",
    price: 25.00,
    rating: 4.9,
    reviews: 58,
    badge: "Staff Pick",
    colors: [
      { name: "Stone Cream", hex: "#EAE4D5" },
      { name: "Matcha Green", hex: "#3B4A34" }
    ],
    images: [
      "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1622560480605-d83c853bc5c3?auto=format&fit=crop&w=1000&q=80"
    ],
    description: "Features dual tiered zippered compartments to separate electronics from keys and cosmetics. Matte olive finish with brushed hardware.",
    dimensions: { height: "15cm", width: "24cm", depth: "7cm", strap: "Heavy Duty Webbing with Metal Slider" },
    composition: { main: "Crinkle Taslan Nylon", lining: "100% Recycled Polyester", care: "Wipe clean only" },
    features: ["Dual tiered zip chambers", "Brushed metal hardware", "Internal secure key clip", "Weatherproof shell"]
  }
];