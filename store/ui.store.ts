import { create } from "zustand";

interface UIStore {
    isCartOpen: boolean;
    isMobileMenuOpen: boolean;
    isSearchOpen: boolean;
    isWishlistOpen: boolean;
    openCart: () => void;
    closeCart: () => void;
    toggleCart: () => void;
    openMobileMenu: () => void;
    closeMobileMenu: () => void;
    toggleMobileMenu: () => void;
    openSearch: () => void;
    closeSearch: () => void;
    toggleSearch: () => void;
    openWishlist: () => void;
    closeWishlist: () => void;
    toggleWishlist: () => void;
    closeAll: () => void;
}

export const useUIStore = create<UIStore>((set) => ({
    isCartOpen: false,
    isMobileMenuOpen: false,
    isSearchOpen: false,
    isWishlistOpen: false,

    openCart: () => {
        set({
            isCartOpen: true,
            isMobileMenuOpen: false,
            isSearchOpen: false,
            isWishlistOpen: false,
        });
    },

    closeCart: () => {
        set({ isCartOpen: false });
    },

    toggleCart: () => {
        set((state) => ({
            isCartOpen: !state.isCartOpen,
            isMobileMenuOpen: false,
            isSearchOpen: false,
            isWishlistOpen: false,
        }));
    },

    openMobileMenu: () => {
        set({
            isMobileMenuOpen: true,
            isCartOpen: false,
            isSearchOpen: false,
            isWishlistOpen: false,
        });
    },

    closeMobileMenu: () => {
        set({ isMobileMenuOpen: false });
    },

    toggleMobileMenu: () => {
        set((state) => ({
            isMobileMenuOpen: !state.isMobileMenuOpen,
            isCartOpen: false,
            isSearchOpen: false,
            isWishlistOpen: false,
        }));
    },

    openSearch: () => {
        set({
            isSearchOpen: true,
            isCartOpen: false,
            isMobileMenuOpen: false,
            isWishlistOpen: false,
        });
    },

    closeSearch: () => {
        set({ isSearchOpen: false });
    },

    toggleSearch: () => {
        set((state) => ({
            isSearchOpen: !state.isSearchOpen,
            isCartOpen: false,
            isMobileMenuOpen: false,
            isWishlistOpen: false,
        }));
    },

    openWishlist: () => {
        set({
            isWishlistOpen: true,
            isCartOpen: false,
            isMobileMenuOpen: false,
            isSearchOpen: false,
        });
    },

    closeWishlist: () => {
        set({ isWishlistOpen: false });
    },

    toggleWishlist: () => {
        set((state) => ({
            isWishlistOpen: !state.isWishlistOpen,
            isCartOpen: false,
            isMobileMenuOpen: false,
            isSearchOpen: false,
        }));
    },

    closeAll: () => {
        set({
            isCartOpen: false,
            isMobileMenuOpen: false,
            isSearchOpen: false,
            isWishlistOpen: false,
        });
    },
}));
