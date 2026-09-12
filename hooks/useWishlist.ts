"use client";

import { useCallback, useMemo } from "react";
import { useWishlistStore } from "@/store/wishlist.store";

export function useWishlist() {
    const productIds = useWishlistStore(
        (state) => state.productIds
    );
    const add = useWishlistStore((state) => state.add);
    const remove = useWishlistStore((state) => state.remove);
    const toggle = useWishlistStore((state) => state.toggle);
    const clear = useWishlistStore((state) => state.clear);

    const count = useMemo(
        () => productIds.length,
        [productIds]
    );

    const has = useCallback(
        (productId: string) =>
            productIds.includes(productId),
        [productIds]
    );

    const toggleWishlist = useCallback(
        (productId: string) => {
            toggle(productId);
        },
        [toggle]
    );

    const addToWishlist = useCallback(
        (productId: string) => {
            add(productId);
        },
        [add]
    );

    const removeFromWishlist = useCallback(
        (productId: string) => {
            remove(productId);
        },
        [remove]
    );

    return {
        productIds,
        count,
        isEmpty: productIds.length === 0,
        has,
        add: addToWishlist,
        remove: removeFromWishlist,
        toggle: toggleWishlist,
        clear,
    };
}