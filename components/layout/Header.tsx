"use client";

import Link from "next/link";
import { Heart, Menu, Search, ShoppingBag, UserRound } from "lucide-react";
import { useCart } from "@/hooks/useCart";
import { useWishlist } from "@/hooks/useWishlist";
import { useUIStore } from "@/store/ui.store";
import { ROUTES } from "@/lib/constants";
import { Container } from "@/components/layout/Container";

const navItems = [
  { label: "خانه", href: ROUTES.home },
  { label: "محصولات", href: ROUTES.products },
  { label: "دسته‌بندی‌ها", href: ROUTES.categories },
];

export function Header() {
  const { itemCount } = useCart();
  const { count: wishlistCount } = useWishlist();

  const toggleSearch = useUIStore((state) => state.toggleSearch);
  const toggleCart = useUIStore((state) => state.toggleCart);
  const toggleWishlist = useUIStore((state) => state.toggleWishlist);
  const toggleMobileMenu = useUIStore((state) => state.toggleMobileMenu);

  return (
    <header className="sticky top-0 z-50 w-full">
      <div className="overflow-hidden bg-transparent">
        <div className="relative border-b border-[#e5e2db]/80 bg-white shadow-sm shadow-[#17221d]/5">
          <div className="absolute bottom-0 right-0 h-6 w-12 translate-y-1/2 rounded-tl-full bg-[#f8f7f4]" />
          <div className="absolute bottom-0 left-0 h-6 w-12 translate-y-1/2 rounded-tr-full bg-[#f8f7f4]" />

          <Container className="relative flex h-19 items-center justify-between gap-6">
            <div className="flex items-center gap-8">
              <Link
                href={ROUTES.home}
                className="group shrink-0"
                aria-label="Neva"
              >
                <span className="text-2xl font-black tracking-tight text-[#315c4c] transition-colors group-hover:text-[#24483b]">
                  Neva
                </span>
              </Link>

              <nav className="hidden items-center gap-7 lg:flex">
                {navItems.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="text-sm font-bold text-[#555a56] transition-colors hover:text-[#315c4c]"
                  >
                    {item.label}
                  </Link>
                ))}
              </nav>
            </div>

            <div className="hidden items-center gap-2 sm:flex">
              <HeaderAction label="جستجو" onClick={toggleSearch}>
                <Search className="size-5" />
              </HeaderAction>

              <HeaderAction
                label="علاقه‌مندی‌ها"
                onClick={toggleWishlist}
                badge={wishlistCount}
              >
                <Heart className="size-5" />
              </HeaderAction>

              <HeaderAction
                label="سبد خرید"
                onClick={toggleCart}
                badge={itemCount}
              >
                <ShoppingBag className="size-5" />
              </HeaderAction>

              <Link
                href={ROUTES.account}
                aria-label="حساب کاربری"
                className="flex size-11 items-center justify-center rounded-xl text-[#555a56] transition-colors hover:bg-[#f1f0ec] hover:text-[#315c4c]"
              >
                <UserRound className="size-5" />
              </Link>
            </div>

            <div className="flex items-center gap-2 sm:hidden">
              <button
                type="button"
                aria-label="جستجو"
                onClick={toggleSearch}
                className="flex size-10 items-center justify-center rounded-xl text-[#555a56] hover:bg-[#f1f0ec]"
              >
                <Search className="size-5" />
              </button>

              <button
                type="button"
                aria-label="سبد خرید"
                onClick={toggleCart}
                className="relative flex size-10 items-center justify-center rounded-xl text-[#555a56] hover:bg-[#f1f0ec]"
              >
                <ShoppingBag className="size-5" />
                {itemCount > 0 && (
                  <span className="absolute -right-0.5 -top-0.5 flex min-w-4 items-center justify-center rounded-full bg-[#315c4c] px-1 text-[9px] font-black leading-4 text-white">
                    {itemCount > 99 ? "99+" : itemCount}
                  </span>
                )}
              </button>

              <button
                type="button"
                aria-label="منو"
                onClick={toggleMobileMenu}
                className="flex size-10 items-center justify-center rounded-xl text-[#555a56] hover:bg-[#f1f0ec]"
              >
                <Menu className="size-5" />
              </button>
            </div>
          </Container>
        </div>
      </div>
    </header>
  );
}

interface HeaderActionProps {
  label: string;
  children: React.ReactNode;
  onClick: () => void;
  badge?: number;
}

function HeaderAction({
  label,
  children,
  onClick,
  badge = 0,
}: HeaderActionProps) {
  return (
    <button
      type="button"
      aria-label={label}
      onClick={onClick}
      className="relative flex size-11 items-center justify-center rounded-xl text-[#555a56] transition-colors hover:bg-[#f1f0ec] hover:text-[#315c4c]"
    >
      {children}

      {badge > 0 && (
        <span className="absolute -right-0.5 -top-0.5 flex min-w-4 items-center justify-center rounded-full bg-[#315c4c] px-1 text-[9px] font-black leading-4 text-white">
          {badge > 99 ? "99+" : badge}
        </span>
      )}
    </button>
  );
}
