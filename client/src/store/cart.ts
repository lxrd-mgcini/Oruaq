import { create } from 'zustand';
import { persist } from 'zustand/middleware';

export type CartItem = {
  _id: string;
  name: string;
  price: number;
  quantity: number;
};

type CartState = {
  count: number;
  cart: CartItem[];
  addCart: (item: CartItem) => void;
  removeCart: (id: string) => void;
};

export const useCart = create<CartState>()(
// add this
  persist(
    (set) => ({
      count: 0,
      cart: [],
      addCart: (item) =>
        set((state) => {
          const existingItem = state.cart.find(
            (cartItem) => cartItem._id === item._id
          );
          if (existingItem) {
            return {
              count: state.count + 1,
              cart: state.cart.map((cartItem) =>
                cartItem._id === item._id
                  ? { ...cartItem, quantity: cartItem.quantity + 1 }
                  : cartItem
              ),
            };
          }
          return {
            count: state.count + 1,
            cart: [...state.cart, { ...item, quantity: 1 }],
          };
        }),
      removeCart: (id) =>
        set((state) => {
          const existingItem = state.cart.find((item) => item._id === id);
          if (existingItem && existingItem.quantity > 1) {
            return {
              count: state.count - 1,
              cart: state.cart.map((cartItem) =>
                cartItem._id === id
                  ? { ...cartItem, quantity: cartItem.quantity - 1 }
                  : cartItem
              ),
            };
          }
          return {
            count: state.count - 1,
            cart: state.cart.filter((item) => item._id !== id),
          };
        }),
    }),
// add this
    { name: 'cart-storage' }
  )
);
