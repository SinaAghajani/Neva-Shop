import type { Metadata } from "next";
import Link from "next/link";
import { ChevronLeft, Heart } from "lucide-react";
import { Container } from "@/components/layout/Container";
import WishlistGrid from "@/components/account/WishlistGrid";

export const metadata: Metadata = {
  title: "علاقه‌مندی‌ها",
  description: "محصولات موردعلاقه شما در Neva",
};

export default function WishlistPage() {
  return (
    <main className="min-h-screen py-8 sm:py-10">
      <Container>
        <div className="mb-8 flex items-center gap-2 text-xs text-(--muted)">
          <Link href="/" className="hover:text-(--primary)">
            خانه
          </Link>

          <ChevronLeft className="h-3.5 w-3.5" />

          <span className="text-(--foreground)">علاقه‌مندی‌ها</span>
        </div>

        <div className="mb-8 flex items-center gap-4">
          <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-(--primary-light) text-(--primary)">
            <Heart className="h-5 w-5" />
          </div>

          <div>
            <h1 className="text-3xl font-black text-(--foreground)">
              علاقه‌مندی‌های من
            </h1>

            <p className="mt-1 text-sm text-(--muted)">
              محصولاتی که برای خرید بعدی ذخیره کرده‌اید.
            </p>
          </div>
        </div>

        <WishlistGrid />
      </Container>
    </main>
  );
}
