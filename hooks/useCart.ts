"use client";

import { useCallback, useMemo } from "react";
import { useCartStore } from "@/store/cart.store";
import type { CartItem } from "@/types/cart";

export function useCart() {
    const items = useCartStore((state) => state.items);
    const addItem = useCartStore((state) => state.addItem);
    const removeItem = useCartStore((state) => state.removeItem);
    const updateQuantity = useCartStore(
        (state) => state.updateQuantity
    );
    const clearCart = useCartStore((state) => state.clearCart);

    const itemCount = useMemo(
        () => items.reduce((total, item) => total + item.quantity, 0),
        [items]
    );

    const subtotal = useMemo(
        () =>
            items.reduce(
                (total, item) => total + item.totalPrice,
                0
            ),
        [items]
    );

    const getItem = useCallback(
        (productId: string, variantId?: string) =>
            items.find(
                (item) =>
                    item.productId === productId &&
                    item.variantId === variantId
            ),
        [items]
    );

    const isInCart = useCallback(
        (productId: string, variantId?: string) =>
            Boolean(getItem(productId, variantId)),
        [getItem]
    );

    const addToCart = useCallback(
        (item: CartItem) => {
            addItem(item);
        },
        [addItem]
    );

    const increment = useCallback(
        (itemId: string) => {
            const item = items.find((current) => current.id === itemId);

            if (item) {
                updateQuantity(itemId, item.quantity + 1);
            }
        },
        [items, updateQuantity]
    );

    const decrement = useCallback(
        (itemId: string) => {
            const item = items.find((current) => current.id === itemId);

            if (item) {
                updateQuantity(itemId, item.quantity - 1);
            }
        },
        [items, updateQuantity]
    );

    return {
        items,
        itemCount,
        subtotal,
        isEmpty: items.length === 0,
        addToCart,
        removeItem,
        updateQuantity,
        increment,
        decrement,
        clearCart,
        getItem,
        isInCart,
    };
}