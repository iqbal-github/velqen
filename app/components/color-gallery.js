'use client';

import { useState } from 'react';
import Image from 'next/image';

export default function ColorGallery({ product }) {
  const colors = product.colors ?? [];
  const [selected, setSelected] = useState(colors[0]);

  if (!selected) return null;

  return (
    <div>
      <div className="relative aspect-[11/10] overflow-hidden rounded-2xl border border-[#E4DFD1] bg-white">
        <Image
          src={selected.image}
          alt={`${product.name} in ${selected.name}`}
          fill
          sizes="(min-width: 768px) 50vw, 100vw"
          className="object-cover"
          priority
        />
      </div>

      {colors.length > 1 && (
        <div className="mt-4">
          <p className="text-sm text-[#5B6472]">
            Colour: <span className="font-medium text-[#16233D]">{selected.name}</span>
          </p>
          <div className="mt-3 flex flex-wrap gap-3">
            {colors.map((color) => (
              <button
                key={color.name}
                type="button"
                onClick={() => setSelected(color)}
                aria-label={color.name}
                aria-pressed={selected.name === color.name}
                title={color.name}
                className={`h-9 w-9 rounded-full border-2 transition ${
                  selected.name === color.name
                    ? 'border-[#C1712F]'
                    : 'border-transparent hover:border-[#E4DFD1]'
                }`}
              >
                <span
                  className="block h-full w-full rounded-full border border-black/10"
                  style={{ backgroundColor: color.hex }}
                />
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
