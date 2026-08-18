import './globals.css';
import { CartProvider } from '@/app/context/CartContext';

export const metadata = {
  title: 'Velqen | Effortless Carry & Everyday Silhouettes UK',
  description: 'Ultra-lightweight nylon crescents, canvas totes, and crossbodies engineered in the UK.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <CartProvider>
          {children}
        </CartProvider>
      </body>
    </html>
  );
}