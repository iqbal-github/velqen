import './globals.css';
import { CartProvider } from '@/app/context/cart-context';

export const metadata = {
  title: 'Velqen | Effortless Everyday Carry UK',
  description: 'Ultra-lightweight nylon crescents, minimalist totes, and crossbody slings engineered in the UK.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <title>Velqen | Effortless Everyday Carry UK</title>
      </head>
      <body>
        <CartProvider>
          {children}
        </CartProvider>
      </body>
    </html>
  );
}