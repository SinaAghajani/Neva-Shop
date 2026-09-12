"use client";

import Link from "next/link";
import { Heart, Home, Search, ShoppingBag, UserRound } from "lucide-react";
import { usePathname } from "next/navigation";
import { useCart } from "@/hooks/useCart";
import { useWishlist } from "@/hooks/useWishlist";
import { useUIStore } from "@/store/ui.store";
import { ROUTES } from "@/lib/constants";
import { cn } from "@/lib/utils";

const items = [
  {
    label: "خانه",
    href: ROUTES.home,
    icon: Home,
  },
  {
    label: "جستجو",
    action: "search",
    icon: Search,
  },
  {
    label: "سبد",
    action: "cart",
    icon: ShoppingBag,
  },
  {
    label: "علاقه‌مندی",
    action: "wishlist",
    icon: Heart,
  },
  {
    label: "حساب",
    href: ROUTES.account,
    icon: UserRound,
  },
] as const;

export function MobileNavigation() {
  const pathname = usePathname();

  const { itemCount } = useCart();
  const { count: wishlistCount } = useWishlist();

  const toggleSearch = useUIStore((state) => state.toggleSearch);
  const toggleCart = useUIStore((state) => state.toggleCart);
  const toggleWishlist = useUIStore((state) => state.toggleWishlist);

  return (
    <nav className="fixed inset-x-0 bottom-0 z-50 border-t border-[#e5e2db] bg-white/95 pb-[env(safe-area-inset-bottom)] shadow-[0_-8px_30px_rgba(23,34,29,0.06)] backdrop-blur-md sm:hidden">
      <div className="grid h-16 grid-cols-5">
        {items.map((item) => {
          const Icon = item.icon;
          const action = "action" in item ? item.action : undefined;

          const isActive =
            "href" in item
              ? item.href === ROUTES.home
                ? pathname === ROUTES.home
                : pathname.startsWith(item.href)
              : false;

          const content = (
            <>
              <span className="relative">
                <Icon className="size-5" />

                {action === "cart" && itemCount > 0 && (
                  <span className="absolute -right-2.5 -top-2 flex min-w-4 items-center justify-center rounded-full bg-[#315c4c] px-1 text-[8px] font-black leading-4 text-white">
                    {itemCount > 99 ? "99+" : itemCount}
                  </span>
                )}

                {action === "wishlist" && wishlistCount > 0 && (
                  <span className="absolute -right-2.5 -top-2 flex min-w-4 items-center justify-center rounded-full bg-[#315c4c] px-1 text-[8px] font-black leading-4 text-white">
                    {wishlistCount > 99 ? "99+" : wishlistCount}
                  </span>
                )}
              </span>

              <span className="text-[10px] font-bold">{item.label}</span>
            </>
          );

          if ("href" in item) {
            return (
              <Link
                key={item.label}
                href={item.href}
                className={cn(
                  "flex flex-col items-center justify-center gap-1 transition-colors",
                  isActive
                    ? "text-[#315c4c]"
                    : "text-[#777b77] hover:text-[#315c4c]",
                )}
              >
                {content}
              </Link>
            );
          }

          const actionHandler =
            action === "search"
              ? toggleSearch
              : action === "cart"
                ? toggleCart
                : toggleWishlist;

          return (
            <button
              key={item.label}
              type="button"
              onClick={actionHandler}
              className="flex flex-col items-center justify-center gap-1 text-[#777b77] transition-colors hover:text-[#315c4c]"
            >
              {content}
            </button>
          );
        })}
      </div>
    </nav>
  );
}
