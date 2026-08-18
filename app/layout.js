import './globals.css';
import { CartProvider } from '@/app/context/cart-context';

export const metadata = {
  title: 'Velqen | Everyday Carry & Streetwear Silhouettes UK',
  description: 'Ultra-lightweight nylon crescent bags, canvas utility totes, and slings engineered in the UK.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@300;400;500;600;700;800&family=Syne:wght@700;800&display=swap" rel="stylesheet" />
      </head>
      <body className="bg-[#F7F4EE] text-[#222820] antialiased" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
        <CartProvider>
          {children}
        </CartProvider>
      </body>
    </html>
  );
}