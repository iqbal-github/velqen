import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="border-t border-[#E4DFD1] bg-white">
      <div className="mx-auto grid max-w-6xl gap-8 px-5 py-12 md:grid-cols-3">
        <div>
          <p className="text-lg font-bold tracking-tight text-[#16233D]">VELQEN</p>
          <p className="mt-3 max-w-xs text-sm text-[#5B6472]">
            Under-sink storage designed around real cabinets — pipes, wobble and all. Built reliable first,
            styled second.
          </p>
        </div>

        <div>
          <p className="text-sm font-semibold text-[#16233D]">Explore</p>
          <ul className="mt-3 space-y-2 text-sm text-[#5B6472]">
            <li><Link href="/product" className="hover:text-[#16233D]">Under-Sink Organiser</Link></li>
            <li><Link href="/about" className="hover:text-[#16233D]">About Velqen</Link></li>
            <li><Link href="/faq" className="hover:text-[#16233D]">Fit &amp; FAQ</Link></li>
            <li><Link href="/contact" className="hover:text-[#16233D]">Contact</Link></li>
          </ul>
        </div>

        <div>
          <p className="text-sm font-semibold text-[#16233D]">Velqen Ltd</p>
          <p className="mt-3 text-sm text-[#5B6472]">
            A UK-focused home organisation brand. Also available on Amazon UK.
          </p>
        </div>
      </div>
      <div className="border-t border-[#E4DFD1] px-5 py-4 text-center text-xs text-[#5B6472]">
        © {new Date().getFullYear()} Velqen. All rights reserved.
      </div>
    </footer>
  );
}
