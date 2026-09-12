import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Package } from "lucide-react";
import AccountSidebar from "@/components/account/AccountSidebar";
import OrderCard from "@/components/account/OrderCard";
import { Container } from "@/components/layout/Container";

export const metadata: Metadata = {
  title: "سفارش‌های من",
  description: "مشاهده و پیگیری سفارش‌های شما در Neva",
};

export default function OrdersPage() {
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
          <span className="text-(--foreground)">سفارش‌ها</span>
        </div>

        <div className="grid gap-6 lg:grid-cols-[260px_minmax(0,1fr)]">
          <AccountSidebar />

          <div className="min-w-0">
            <div className="mb-6 flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-(--primary-light) text-(--primary)">
                <Package className="h-6 w-6" />
              </div>

              <div>
                <h1 className="text-2xl font-bold text-(--foreground)">
                  سفارش‌های من
                </h1>
                <p className="mt-1 text-sm text-(--muted)">
                  تاریخچه سفارش‌ها و وضعیت ارسال را مشاهده کنید.
                </p>
              </div>
            </div>

            <div className="surface rounded-3xl p-6 text-center">
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-(--surface-muted) text-(--muted)">
                <Package className="h-7 w-7" />
              </div>

              <h2 className="mt-5 font-bold text-(--foreground)">
                هنوز سفارشی ثبت نکرده‌اید
              </h2>

              <p className="mt-2 text-sm text-(--muted)">
                پس از ثبت سفارش، اطلاعات آن در این بخش نمایش داده می‌شود.
              </p>

              <Link
                href="/products"
                className="mt-6 inline-flex h-11 items-center justify-center rounded-xl bg-(--primary) px-6 text-sm font-semibold text-white transition-colors hover:bg-(--primary-dark)"
              >
                مشاهده محصولات
              </Link>
            </div>
          </div>
        </div>
      </Container>
    </main>
  );
}
