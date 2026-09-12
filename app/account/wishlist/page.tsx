import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Heart } from "lucide-react";
import AccountSidebar from "@/components/account/AccountSidebar";
import WishlistGrid from "@/components/account/WishlistGrid";
import { Container } from "@/components/layout/Container";

export const metadata: Metadata = {
  title: "علاقه‌مندی‌ها",
  description: "محصولات مورد علاقه شما در Neva",
};

export default function AccountWishlistPage() {
  return (
    <main className="min-h-screen py-8 md:py-12">
      <Container>
        <div className="mb-6 flex items-center gap-2 text-sm text-(--muted)">
          <Link href="/" className="hover:text-(--primary)">
            خانه
          </Link>
          <ArrowRight className="h-4 w-4" />
          <Link href="/account" className="hover:text-(--primary)">
            حساب کاربری
          </Link>
          <ArrowRight className="h-4 w-4" />
          <span className="text-(--foreground)">علاقه‌مندی‌ها</span>
        </div>

        <div className="grid gap-6 lg:grid-cols-[260px_minmax(0,1fr)]">
          <AccountSidebar />

          <div className="min-w-0">
            <div className="mb-6 flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-(--primary-light) text-(--primary)">
                <Heart className="h-6 w-6" />
              </div>

              <div>
                <h1 className="text-2xl font-bold text-(--foreground)">
                  علاقه‌مندی‌ها
                </h1>
                <p className="mt-1 text-sm text-(--muted)">
                  محصولاتی که برای خرید بعدی ذخیره کرده‌اید.
                </p>
              </div>
            </div>

            <WishlistGrid />
          </div>
        </div>
      </Container>
    </main>
  );
}
