import { createContext, useState, useContext, ReactNode } from "react";

// Define types
export interface CartItem {
  id: number;
  name: string;
  price: number;
  quantity: number;
  image?: string;
}

export interface CartContextType {
  items: CartItem[];
  addItem: (item: Omit<CartItem, "quantity">) => void;
  removeItem: (id: number) => void;
  updateQuantity: (id: number, quantity: number) => void;
  clearCart: () => void;
  totalItems: number;
  totalAmount: number;
}

// Create context
export const CartContext = createContext<CartContextType | undefined>(
  undefined
);

// Provider component
export function CartProvider({ children }: { children: ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([]);

  // Add item to cart
  const addItem = (product: Omit<CartItem, "quantity">) => {
    setItems((currentItems) => {
      const existingItem = currentItems.find((item) => item.id === product.id);

      if (existingItem) {
        return currentItems.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }

      return [...currentItems, { ...product, quantity: 1 }];
    });
  };

  // Remove item from cart
  const removeItem = (id: number) => {
    setItems((items) => items.filter((item) => item.id !== id));
  };

  // Update quantity
  const updateQuantity = (id: number, quantity: number) => {
    if (quantity <= 0) {
      removeItem(id);
      return;
    }

    setItems((items) =>
      items.map((item) => (item.id === id ? { ...item, quantity } : item))
    );
  };

  // Clear cart
  const clearCart = () => {
    setItems([]);
  };

  // Calculate totals
  const totalItems = items.reduce((total, item) => total + item.quantity, 0);
  const totalAmount = items.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  const value = {
    items,
    addItem,
    removeItem,
    updateQuantity,
    clearCart,
    totalItems,
    totalAmount,
  };
  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}
