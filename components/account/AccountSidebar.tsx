"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import {
  Heart,
  LogOut,
  MapPin,
  Package,
  Settings,
  ShoppingBag,
  UserRound,
} from "lucide-react";
import { useAuthStore } from "@/store/auth.store";
import { ROUTES } from "@/lib/constants";
import { cn } from "@/lib/utils";

const navigation = [
  {
    href: ROUTES.account,
    label: "پروفایل",
    icon: UserRound,
    exact: true,
  },
  {
    href: ROUTES.orders,
    label: "سفارش‌های من",
    icon: Package,
  },
  {
    href: ROUTES.wishlist,
    label: "علاقه‌مندی‌ها",
    icon: Heart,
  },
  {
    href: ROUTES.addresses,
    label: "آدرس‌ها",
    icon: MapPin,
  },
  {
    href: ROUTES.settings,
    label: "تنظیمات",
    icon: Settings,
  },
];

export default function AccountSidebar() {
  const pathname = usePathname();
  const router = useRouter();

  const user = useAuthStore((state) => state.user);
  const logout = useAuthStore((state) => state.logout);

  const handleLogout = () => {
    logout();
    router.push(ROUTES.login);
  };

  const fullName =
    user?.profile?.firstName || user?.profile?.lastName
      ? `${user.profile.firstName ?? ""} ${user.profile.lastName ?? ""}`.trim()
      : "کاربر Neva";

  const phone = user?.profile?.phone ?? "";

  return (
    <aside className="space-y-4 lg:sticky lg:top-24 lg:self-start">
      <div className="overflow-hidden rounded-3xl border border-(--border) bg-white">
        <div className="bg-(--primary) px-5 py-6 text-white">
          <div className="flex items-center gap-4">
            <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-white/15 text-lg font-black backdrop-blur-sm">
              {fullName.charAt(0)}
            </div>

            <div className="min-w-0">
              <p className="truncate font-bold">{fullName}</p>

              {phone && (
                <p className="mt-1 text-xs text-white/70" dir="ltr">
                  {phone}
                </p>
              )}
            </div>
          </div>
        </div>

        <nav className="p-3">
          {navigation.map((item) => {
            const Icon = item.icon;

            const isActive = item.exact
              ? pathname === item.href
              : pathname.startsWith(item.href);

            return (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "mb-1 flex items-center gap-3 rounded-2xl px-4 py-3 text-sm font-semibold transition last:mb-0",
                  isActive
                    ? "bg-(--primary-light) text-(--primary)"
                    : "text-(--foreground) hover:bg-(--surface-muted)",
                )}
              >
                <Icon className="h-5 w-5 shrink-0" />
                <span>{item.label}</span>
              </Link>
            );
          })}
        </nav>
      </div>

      <div className="overflow-hidden rounded-3xl border border-(--border) bg-white p-3">
        <Link
          href={ROUTES.cart}
          className="mb-1 flex items-center gap-3 rounded-2xl px-4 py-3 text-sm font-semibold text-(--foreground) transition hover:bg-(--surface-muted)"
        >
          <ShoppingBag className="h-5 w-5" />
          <span>سبد خرید</span>
        </Link>

        <button
          type="button"
          onClick={handleLogout}
          className="flex w-full items-center gap-3 rounded-2xl px-4 py-3 text-sm font-semibold text-(--danger) transition hover:bg-red-50"
        >
          <LogOut className="h-5 w-5" />
          <span>خروج از حساب</span>
        </button>
      </div>
    </aside>
  );
}
