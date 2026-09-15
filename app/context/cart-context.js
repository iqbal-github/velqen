'use client';

import { createContext, useCallback, useContext, useEffect, useMemo, useState } from 'react';

const CartContext = createContext(null);
const STORAGE_KEY = 'velqen-cart';

export function CartProvider({ children }) {
  const [items, setItems] = useState([]);
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    try {
      const raw = window.localStorage.getItem(STORAGE_KEY);
      // eslint-disable-next-line react-hooks/set-state-in-effect -- one-time hydration from a client-only store (localStorage) on mount
      if (raw) setItems(JSON.parse(raw));
    } catch {
      // ignore unavailable/blocked storage
    }
    setHydrated(true);
  }, []);

  useEffect(() => {
    if (!hydrated) return;
    try {
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
    } catch {
      // ignore unavailable/blocked storage
    }
  }, [items, hydrated]);

  const addItem = useCallback((product, qty = 1) => {
    setItems((prev) => {
      const existing = prev.find((i) => i.id === product.slug);
      if (existing) {
        return prev.map((i) => (i.id === product.slug ? { ...i, qty: i.qty + qty } : i));
      }
      return [...prev, { id: product.slug, name: product.name, price: product.price, qty }];
    });
  }, []);

  const updateQty = useCallback((id, qty) => {
    setItems((prev) => {
      if (qty <= 0) return prev.filter((i) => i.id !== id);
      return prev.map((i) => (i.id === id ? { ...i, qty } : i));
    });
  }, []);

  const removeItem = useCallback((id) => {
    setItems((prev) => prev.filter((i) => i.id !== id));
  }, []);

  const clearCart = useCallback(() => setItems([]), []);

  const { count, subtotal } = useMemo(
    () =>
      items.reduce(
        (acc, i) => {
          acc.count += i.qty;
          acc.subtotal += i.qty * i.price;
          return acc;
        },
        { count: 0, subtotal: 0 }
      ),
    [items]
  );

  const value = useMemo(
    () => ({ items, addItem, updateQty, removeItem, clearCart, count, subtotal, hydrated }),
    [items, addItem, updateQty, removeItem, clearCart, count, subtotal, hydrated]
  );

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export function useCart() {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error('useCart must be used within CartProvider');
  return ctx;
}
