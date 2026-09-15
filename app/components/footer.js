import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="border-t border-[#262D45] bg-[#0A0E18]">
      <div className="mx-auto grid max-w-6xl gap-8 px-5 py-12 md:grid-cols-3">
        <div>
          <p className="text-lg font-bold tracking-tight text-[#F1EDE4]">VELQEN</p>
          <p className="mt-3 max-w-xs text-sm text-[#98A2B8]">
            Everyday products, engineered around the problems people actually complain about. Built reliable
            first, styled second.
          </p>
        </div>

        <div>
          <p className="text-sm font-semibold text-[#F1EDE4]">Explore</p>
          <ul className="mt-3 space-y-2 text-sm text-[#98A2B8]">
            <li><Link href="/products" className="hover:text-[#F1EDE4]">Shop</Link></li>
            <li><Link href="/about" className="hover:text-[#F1EDE4]">About Velqen</Link></li>
            <li><Link href="/faq" className="hover:text-[#F1EDE4]">FAQ</Link></li>
            <li><Link href="/contact" className="hover:text-[#F1EDE4]">Contact</Link></li>
          </ul>
        </div>

        <div>
          <p className="text-sm font-semibold text-[#F1EDE4]">Velqen Ltd</p>
          <p className="mt-3 text-sm text-[#98A2B8]">
            A UK-based product brand. Also available on Amazon UK.
          </p>
        </div>
      </div>
      <div className="border-t border-[#262D45] px-5 py-4 text-center text-xs text-[#98A2B8]">
        © {new Date().getFullYear()} Velqen. All rights reserved.
      </div>
    </footer>
  );
}
