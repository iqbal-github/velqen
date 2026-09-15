export const products = [
  {
    slug: 'under-sink-organiser',
    category: 'Home & Kitchen',
    name: 'Velqen Adjustable 2-Tier Under-Sink Organiser',
    shortName: 'Under-Sink Organiser',
    price: 29.99,
    currency: 'GBP',
    tagline: 'Pull-out storage built around your pipes, not against them.',
    cardBlurb: 'Adjustable pull-out storage designed around your pipes, not against them.',
    intro:
      "Most under-sink organisers fight the plumbing instead of working around it. Velqen's adjustable frame is built to fit your cabinet width, clear the U-bend, and stay stable even fully loaded and pulled all the way out.",
    lifestyleImage: '/products/under-sink-organiser/lifestyle.jpg',
    colors: [
      { name: 'Black', hex: '#1C1C1C', image: '/products/under-sink-organiser/black.jpg' },
      { name: 'White', hex: '#F2F2F0', image: '/products/under-sink-organiser/white.jpg' },
      { name: 'Grey', hex: '#8A8D91', image: '/products/under-sink-organiser/grey.jpg' },
      { name: 'Navy Blue', hex: '#2B3A55', image: '/products/under-sink-organiser/navy.jpg' },
      { name: 'Sage Green', hex: '#7C9070', image: '/products/under-sink-organiser/sage-green.jpg' },
      { name: 'Mustard', hex: '#D8A62A', image: '/products/under-sink-organiser/mustard.jpg' },
      { name: 'Purple', hex: '#8B7BB8', image: '/products/under-sink-organiser/purple.jpg' },
    ],
    problems: [
      {
        title: 'Poor cabinet fit',
        detail:
          'Fixed-width organisers either jam against the cabinet sides or leave awkward gaps. Ours adjusts to fit.',
      },
      {
        title: 'Pipes in the way',
        detail:
          'The U-bend eats into a fixed shelf. Velqen is designed with clearance for central and offset plumbing.',
      },
      {
        title: 'Tipping when pulled out',
        detail:
          'A loaded drawer becomes a lever arm. The rigid central frame keeps the unit stable at full extension.',
      },
      {
        title: 'Rails that stick or jam',
        detail:
          "Cheap slides work empty and fail under load. We test rails loaded and offset, not just empty.",
      },
    ],
    features: [
      {
        title: 'Adjustable width',
        desc: 'Expands 360–540mm to fit most kitchen and bathroom cabinets without cutting or forcing.',
      },
      {
        title: 'Plumbing clearance',
        desc: 'Frame and tray layout are designed around the U-bend, so you keep usable storage, not wasted space.',
      },
      {
        title: 'Anti-tip stability',
        desc: 'A rigid central structure keeps the unit steady even when a tray is fully loaded and extended.',
      },
      {
        title: 'Reinforced pull-out rails',
        desc: "Slides are checked under normal and uneven loads so they don't catch or stick over time.",
      },
      {
        title: 'Two-tier tray layout',
        desc: 'A taller lower tray for bottles and sprays, a shallower upper tray for smaller everyday items.',
      },
      {
        title: 'Powder-coated metal frame',
        desc: 'A durable, rust-resistant finish with anti-slip contact points on cabinet-facing surfaces.',
      },
    ],
    specs: [
      { label: 'Adjustable width', value: '360–540 mm' },
      { label: 'Depth', value: '480 mm or less' },
      { label: 'Height', value: '300–400 mm' },
      { label: 'Frame material', value: 'Powder-coated metal' },
      { label: 'Assembly', value: 'Simple, tool-light assembly' },
      { label: 'Suitable for', value: 'Kitchen and bathroom cabinets' },
    ],
    fitGuidance: [
      'Measure the internal width of your cabinet at its narrowest point, not the door opening.',
      'Note where the U-bend and any shut-off valves sit relative to the cabinet centre.',
      'Measure the usable height above the cabinet floor, including any fixed shelf you plan to remove.',
      "If you're between sizes, choose the narrower fit — the frame adjusts up but not beyond its maximum width.",
    ],
  },
];

export function getProductBySlug(slug) {
  return products.find((p) => p.slug === slug);
}
