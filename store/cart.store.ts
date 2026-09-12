import { create } from "zustand";
import { persist } from "zustand/middleware";
import type { CartItem } from "../types/cart";

interface CartStore {
    items: CartItem[];
    addItem: (item: CartItem) => void;
    removeItem: (itemId: string) => void;
    updateQuantity: (itemId: string, quantity: number) => void;
    clearCart: () => void;
    getItemCount: () => number;
    getSubtotal: () => number;
}

export const useCartStore = create<CartStore>()(
    persist(
        (set, get) => ({
            items: [],

            addItem: (item) => {
                set((state) => {
                    const existingItem = state.items.find(
                        (currentItem) =>
                            currentItem.productId === item.productId &&
                            currentItem.variantId === item.variantId
                    );

                    if (existingItem) {
                        return {
                            items: state.items.map((currentItem) =>
                                currentItem.id === existingItem.id
                                    ? {
                                        ...currentItem,
                                        quantity: currentItem.quantity + item.quantity,
                                        totalPrice:
                                            (currentItem.quantity + item.quantity) *
                                            currentItem.unitPrice,
                                    }
                                    : currentItem
                            ),
                        };
                    }

                    return {
                        items: [...state.items, item],
                    };
                });
            },

            removeItem: (itemId) => {
                set((state) => ({
                    items: state.items.filter((item) => item.id !== itemId),
                }));
            },

            updateQuantity: (itemId, quantity) => {
                if (quantity <= 0) {
                    get().removeItem(itemId);
                    return;
                }

                set((state) => ({
                    items: state.items.map((item) =>
                        item.id === itemId
                            ? {
                                ...item,
                                quantity,
                                totalPrice: quantity * item.unitPrice,
                            }
                            : item
                    ),
                }));
            },

            clearCart: () => {
                set({ items: [] });
            },

            getItemCount: () => {
                return get().items.reduce((total, item) => total + item.quantity, 0);
            },

            getSubtotal: () => {
                return get().items.reduce(
                    (total, item) => total + item.totalPrice,
                    0
                );
            },
        }),
        {
            name: "Neva-cart",
        }

    )
);
