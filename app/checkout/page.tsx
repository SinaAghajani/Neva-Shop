import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, LockKeyhole } from "lucide-react";
import CheckoutForm from "@/components/checkout/CheckoutForm";
import OrderSummary from "@/components/checkout/OrderSummary";
import { Container } from "@/components/layout/Container";

export const metadata: Metadata = {
  title: "تکمیل سفارش",
  description: "تکمیل اطلاعات و ثبت سفارش در Neva",
};

export default function CheckoutPage() {
  return (
    <main className="min-h-screen py-8 md:py-12">
      <Container>
        <div className="mb-8 flex items-center gap-3 text-sm text-(--muted)">
          <Link href="/" className="transition-colors hover:text-(--primary)">
            خانه
          </Link>
          <ArrowRight className="h-4 w-4" />
          <Link
            href="/cart"
            className="transition-colors hover:text-(--primary)"
          >
            سبد خرید
          </Link>
          <ArrowRight className="h-4 w-4" />
          <span className="text-(--foreground)">تکمیل سفارش</span>
        </div>

        <div className="mb-8">
          <h1 className="text-2xl font-bold text-(--foreground) md:text-3xl">
            تکمیل سفارش
          </h1>
          <p className="mt-2 text-sm text-(--muted)">
            اطلاعات ارسال و روش پرداخت را وارد کنید.
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-[minmax(0,1fr)_380px] lg:items-start">
          <CheckoutForm />

          <div className="space-y-4">
            <OrderSummary items={[]} subtotal={0} paymentMethod={"online"} />

            <div className="flex items-center gap-3 rounded-2xl border border-(--border) bg-(--surface) p-4 text-sm text-(--muted)">
              <LockKeyhole className="h-5 w-5 shrink-0 text-(--primary)" />
              <span>
                اطلاعات شما در فرایند ثبت سفارش با امنیت کامل محافظت می‌شود.
              </span>
            </div>
          </div>
        </div>
      </Container>
    </main>
  );
}
