import { Inter, Outfit } from 'next/font/google';
import './globals.css';
import { CartProvider } from '@/app/context/cart-context';
import Header from '@/app/components/header';
import Footer from '@/app/components/footer';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter', display: 'swap' });
const outfit = Outfit({
  subsets: ['latin'],
  weight: ['500', '600', '700', '800'],
  variable: '--font-outfit',
  display: 'swap',
});

export const metadata = {
  title: 'Velqen | Adjustable 2-Tier Under-Sink Organiser',
  description:
    'Pull-out under-sink storage built around your pipes. Adjustable width, anti-tip frame, reinforced rails. Designed for UK kitchen and bathroom cabinets.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${inter.variable} ${outfit.variable}`}>
      <body className="antialiased">
        <CartProvider>
          <Header />
          <main>{children}</main>
          <Footer />
        </CartProvider>
      </body>
    </html>
  );
}
