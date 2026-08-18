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
  {
    id: "1",
    itemCode: "VQ-896-308",
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
    description: "This crescent sling bag is a practical and stylish choice for keeping your essentials secure on the go. The adjustable body strap allows for an ergonomic custom fit across the chest or over the shoulder.",
    dimensions: {
      height: "18cm",
      width: "31cm",
      depth: "10cm",
      strap: "Adjustable 60cm – 110cm"
    },
    composition: {
      main: "100% Water-Resistant Crinkle Nylon",
      lining: "100% Recycled Polyester",
      care: "Wipe clean with a damp cloth only"
    },
    features: [
      "Smooth glide Japanese zipper closure",
      "Internal zip pocket & dual phone slots",
      "Ultra-lightweight featherweight build (160g)",
      "Weatherproof exterior finish"
    ]
  },
  {
    id: "2",
    itemCode: "VQ-442-105",
    categorySlug: "totes",
    category: "Shoulder & Totes",
    name: "Minimalist Utility Shoulder Tote",
    tagline: "Structured daily canvas carry designed for work, gym, and commute.",
    price: 32.00,
    rating: 4.8,
    reviews: 62,
    badge: "Staff Pick",
    colors: [
      { name: "Natural Ecru", hex: "#EBE5D8" },
      { name: "Matcha Olive", hex: "#3B4A34" }
    ],
    images: [
      "https://images.unsplash.com/photo-1590874103328-eac38a683ce7?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?auto=format&fit=crop&w=1000&q=80"
    ],
    description: "A spacious and durable everyday tote crafted from heavy-duty organic canvas. Features reinforced shoulder drop straps and dedicated compartments for daily tech essentials.",
    dimensions: {
      height: "34cm",
      width: "40cm",
      depth: "12cm",
      strap: "Dual Shoulder Straps (28cm drop)"
    },
    composition: {
      main: "16oz Organic Cotton Canvas & Matte Trim",
      lining: "100% Cotton Twill",
      care: "Spot clean with gentle soap"
    },
    features: [
      "Dedicated padded 15-inch laptop sleeve",
      "Internal zipped security compartment",
      "Magnetic quick-snap top closure",
      "Reinforced flat bottom panel"
    ]
  },
  {
    id: "3",
    itemCode: "VQ-310-779",
    categorySlug: "slings",
    category: "Crossbody Slings",
    name: "Modular Crossbody Urban Sling",
    tagline: "Hands-free tactical carry engineered with quick-access dividers.",
    price: 28.00,
    rating: 5.0,
    reviews: 110,
    badge: "Fast Dispatch",
    colors: [
      { name: "Matcha Olive", hex: "#3B4A34" },
      { name: "Obsidian Black", hex: "#1C201A" }
    ],
    images: [
      "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1622560480605-d83c853bc5c3?auto=format&fit=crop&w=1000&q=80"
    ],
    description: "Engineered for active city routines, this modular sling features quick-access zip pockets, ergonomic back padding, and durable weatherproof nylon.",
    dimensions: {
      height: "17cm",
      width: "28cm",
      depth: "9cm",
      strap: "Adjustable Webbing with Magnetic Buckle"
    },
    composition: {
      main: "High-Density Ripstop Technical Nylon",
      lining: "100% Polyester Mesh",
      care: "Wipe clean only"
    },
    features: [
      "Hidden anti-theft back passport sleeve",
      "Breathable honeycomb mesh backing",
      "Water-repellent rubberised zips",
      "Quick-release magnetic buckle"
    ]
  },
  {
    id: "4",
    itemCode: "VQ-118-920",
    categorySlug: "packs",
    category: "Belt Bags & Packs",
    name: "Everyday Ergonomic Belt Pack",
    tagline: "Compact waist and cross-chest pack for essentials-only travel.",
    price: 22.00,
    rating: 4.9,
    reviews: 47,
    badge: "Essential",
    colors: [
      { name: "Stone Cream", hex: "#EAE4D5" },
      { name: "Matcha Green", hex: "#3B4A34" }
    ],
    images: [
      "https://images.unsplash.com/photo-1622560480605-d83c853bc5c3?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&w=1000&q=80"
    ],
    description: "Compact and streamlined, this versatile pack can be worn around the waist or across the chest. Ideal for travel, exercise, or minimalist everyday errands.",
    dimensions: {
      height: "13cm",
      width: "21cm",
      depth: "5.5cm",
      strap: "Adjustable Strap (up to 125cm)"
    },
    composition: {
      main: "Recycled Matte Micro-Poly with DWR Finish",
      lining: "100% Recycled Polyester",
      care: "Wipe clean only"
    },
    features: [
      "Two-way dual direction zip",
      "Interior mesh key & card dividers",
      "Lightweight ergonomic fit",
      "Water-resistant lining"
    ]
  }
];