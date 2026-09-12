"use client";

import Link from "next/link";
import { Heart, Menu, Search, ShoppingBag } from "lucide-react";
import { useCart } from "@/hooks/useCart";
import { useWishlist } from "@/hooks/useWishlist";
import { useUIStore } from "@/store/ui.store";
import { ROUTES } from "@/lib/constants";

export function MobileHeader() {
  const { itemCount } = useCart();
  const { count: wishlistCount } = useWishlist();

  const toggleSearch = useUIStore((state) => state.toggleSearch);
  const toggleCart = useUIStore((state) => state.toggleCart);
  const toggleWishlist = useUIStore((state) => state.toggleWishlist);
  const toggleMobileMenu = useUIStore((state) => state.toggleMobileMenu);

  return (
    <header className="sticky top-0 z-50 border-b border-[#e5e2db] bg-white shadow-sm shadow-[#17221d]/5 sm:hidden">
      <div className="relative h-17">
        <div className="absolute bottom-0 right-0 h-5 w-10 translate-y-1/2 rounded-tl-full bg-[#f8f7f4]" />
        <div className="absolute bottom-0 left-0 h-5 w-10 translate-y-1/2 rounded-tr-full bg-[#f8f7f4]" />

        <div className="relative flex h-full items-center justify-between px-4">
          <Link
            href={ROUTES.home}
            className="text-2xl font-black tracking-tight text-[#315c4c]"
          >
            Neva
          </Link>

          <div className="flex items-center gap-1">
            <button
              type="button"
              onClick={toggleSearch}
              aria-label="جستجو"
              className="flex size-10 items-center justify-center rounded-xl text-[#555a56] hover:bg-[#f1f0ec]"
            >
              <Search className="size-5" />
            </button>

            <button
              type="button"
              onClick={toggleWishlist}
              aria-label="علاقه‌مندی‌ها"
              className="relative flex size-10 items-center justify-center rounded-xl text-[#555a56] hover:bg-[#f1f0ec]"
            >
              <Heart className="size-5" />

              {wishlistCount > 0 && (
                <span className="absolute right-0 top-0 flex min-w-4 items-center justify-center rounded-full bg-[#315c4c] px-1 text-[9px] font-black leading-4 text-white">
                  {wishlistCount > 99 ? "99+" : wishlistCount}
                </span>
              )}
            </button>

            <button
              type="button"
              onClick={toggleCart}
              aria-label="سبد خرید"
              className="relative flex size-10 items-center justify-center rounded-xl text-[#555a56] hover:bg-[#f1f0ec]"
            >
              <ShoppingBag className="size-5" />

              {itemCount > 0 && (
                <span className="absolute right-0 top-0 flex min-w-4 items-center justify-center rounded-full bg-[#315c4c] px-1 text-[9px] font-black leading-4 text-white">
                  {itemCount > 99 ? "99+" : itemCount}
                </span>
              )}
            </button>

            <button
              type="button"
              onClick={toggleMobileMenu}
              aria-label="منو"
              className="flex size-10 items-center justify-center rounded-xl text-[#555a56] hover:bg-[#f1f0ec]"
            >
              <Menu className="size-5" />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
