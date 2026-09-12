import { create } from "zustand";
import { persist } from "zustand/middleware";

interface WishlistStore {
    productIds: string[];
    add: (productId: string) => void;
    remove: (productId: string) => void;
    toggle: (productId: string) => void;
    has: (productId: string) => boolean;
    clear: () => void;
}

export const useWishlistStore = create<WishlistStore>()(
    persist(
        (set, get) => ({
            productIds: [],

            add: (productId) => {
                set((state) => {
                    if (state.productIds.includes(productId)) {
                        return state;
                    }

                    return {
                        productIds: [...state.productIds, productId],
                    };
                });
            },

            remove: (productId) => {
                set((state) => ({
                    productIds: state.productIds.filter((id) => id !== productId),
                }));
            },

            toggle: (productId) => {
                if (get().has(productId)) {
                    get().remove(productId);
                    return;
                }

                get().add(productId);
            },

            has: (productId) => {
                return get().productIds.includes(productId);
            },

            clear: () => {
                set({ productIds: [] });
            },
        }),
        {
            name: "Neva-wishlist",
        }

    )
);
