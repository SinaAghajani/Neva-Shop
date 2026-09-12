import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, ShoppingBag } from "lucide-react";
import { CartList } from "@/components/cart/CartList";
import { CartSummary } from "@/components/cart/CartSummary";
import { Container } from "@/components/layout/Container";

export const metadata: Metadata = {
  title: "سبد خرید",
  description: "سبد خرید محصولات انتخاب‌شده در Neva",
};

export default function CartPage() {
  return (
    <main className="min-h-screen py-8 md:py-12">
      <Container>
        <div className="mb-8 flex items-center gap-3 text-sm text-(--muted)">
          <Link href="/" className="transition-colors hover:text-(--primary)">
            خانه
          </Link>
          <ArrowRight className="h-4 w-4" />
          <span className="text-(--foreground)">سبد خرید</span>
        </div>

        <div className="mb-8 flex items-center gap-3">
          <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-(--primary-light) text-(--primary)">
            <ShoppingBag className="h-6 w-6" />
          </div>

          <div>
            <h1 className="text-2xl font-bold text-(--foreground) md:text-3xl">
              سبد خرید
            </h1>
            <p className="mt-1 text-sm text-(--muted)">
              محصولات انتخاب‌شده خود را بررسی کنید.
            </p>
          </div>
        </div>

        <div className="grid gap-6 lg:grid-cols-[minmax(0,1fr)_380px] lg:items-start">
          <CartList items={[]} />
          <CartSummary />
        </div>
      </Container>
    </main>
  );
}
