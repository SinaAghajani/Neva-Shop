import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowLeft,
  Check,
  Home,
  PackageCheck,
  ShoppingBag,
} from "lucide-react";
import { Container } from "@/components/layout/Container";

export const metadata: Metadata = {
  title: "سفارش با موفقیت ثبت شد",
  description: "سفارش شما با موفقیت در Neva ثبت شد.",
};

export default function CheckoutSuccessPage() {
  return (
    <main className="min-h-screen py-12 md:py-20">
      <Container>
        <div className="mx-auto max-w-2xl">
          <div className="surface overflow-hidden rounded-3xl">
            <div className="px-6 py-12 text-center md:px-10 md:py-16">
              <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-(--primary-light) text-(--primary)">
                <Check className="h-10 w-10" strokeWidth={2.5} />
              </div>

              <span className="mb-3 inline-flex items-center gap-2 rounded-full bg-(--secondary-light) px-4 py-2 text-xs font-semibold text-(--foreground)">
                <PackageCheck className="h-4 w-4" />
                سفارش ثبت شد
              </span>

              <h1 className="mt-4 text-2xl font-bold text-(--foreground) md:text-3xl">
                سفارش شما با موفقیت ثبت شد
              </h1>

              <p className="mx-auto mt-4 max-w-lg text-sm leading-7 text-(--muted) md:text-base">
                از خرید شما متشکریم. سفارش شما با موفقیت ثبت شده و پس از پردازش
                برای ارسال آماده خواهد شد.
              </p>

              <div className="mt-8 rounded-2xl bg-(--surface-muted) p-5 text-right">
                <div className="flex items-center justify-between gap-4">
                  <span className="text-sm text-(--muted)">وضعیت سفارش</span>
                  <span className="rounded-full bg-(--primary-light) px-3 py-1.5 text-xs font-semibold text-(--primary)">
                    در انتظار پردازش
                  </span>
                </div>
              </div>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:justify-center">
                <Link
                  href="/account/orders"
                  className="inline-flex h-12 items-center justify-center gap-2 rounded-2xl bg-(--primary) px-6 text-sm font-semibold text-white transition-colors hover:bg-(--primary-dark)"
                >
                  <ShoppingBag className="h-5 w-5" />
                  مشاهده سفارش‌ها
                </Link>

                <Link
                  href="/"
                  className="inline-flex h-12 items-center justify-center gap-2 rounded-2xl border border-(--border) bg-(--surface) px-6 text-sm font-semibold text-(--foreground) transition-colors hover:bg-(--surface-muted)"
                >
                  <Home className="h-5 w-5" />
                  بازگشت به خانه
                </Link>
              </div>
            </div>
          </div>

          <Link
            href="/products"
            className="mx-auto mt-6 flex w-fit items-center gap-2 text-sm font-medium text-(--primary) transition-colors hover:text-(--primary-dark)"
          >
            ادامه خرید
            <ArrowLeft className="h-4 w-4" />
          </Link>
        </div>
      </Container>
    </main>
  );
}
