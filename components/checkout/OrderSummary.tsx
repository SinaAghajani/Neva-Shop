"use client";

import Image from "next/image";
import Link from "next/link";
import { ShieldCheck, Truck } from "lucide-react";
import type { CartItem } from "@/types/cart";
import { formatPrice } from "@/lib/utils";
import type { PaymentMethodValue } from "./PaymentMethod";

interface OrderSummaryProps {
  items: CartItem[];
  subtotal: number;
  paymentMethod: PaymentMethodValue;
  shipping?: number;
  discount?: number;
  tax?: number;
}

export default function OrderSummary({
  items,
  subtotal,
  paymentMethod,
  shipping = 0,
  discount = 0,
  tax = 0,
}: OrderSummaryProps) {
  const total = Math.max(0, subtotal + shipping + tax - discount);

  return (
    <aside className="lg:sticky lg:top-24 lg:self-start">
      <div className="overflow-hidden rounded-3xl border border-(--border) bg-white">
        <div className="border-b border-(--border) p-5 sm:p-6">
          <h2 className="text-xl font-bold text-(--foreground)">خلاصه سفارش</h2>
          <p className="mt-1 text-sm text-(--muted)">
            {items.length} محصول در سفارش شما
          </p>
        </div>

        <div className="max-h-90 space-y-4 overflow-y-auto p-5 sm:p-6">
          {items.map((item) => (
            <div key={item.id} className="flex gap-3">
              <Link
                href={`/products/${item.product.slug}`}
                className="relative h-20 w-20 shrink-0 overflow-hidden rounded-2xl bg-(--surface-muted)"
              >
                <Image
                  src={
                    item.product.images[0]?.url ??
                    "/images/products/product-01.webp"
                  }
                  alt={item.product.images[0]?.alt ?? item.product.name}
                  fill
                  sizes="80px"
                  className="object-cover"
                />
              </Link>

              <div className="min-w-0 flex-1">
                <Link
                  href={`/products/${item.product.slug}`}
                  className="line-clamp-2 text-sm font-semibold text-(--foreground) transition hover:text-(--primary)"
                >
                  {item.product.name}
                </Link>

                {item.variant && (
                  <p className="mt-1 text-xs text-(--muted)">
                    {item.variant.name}: {item.variant.value}
                  </p>
                )}

                <div className="mt-2 flex items-center justify-between gap-2">
                  <span className="text-xs text-(--muted)">
                    تعداد: {item.quantity}
                  </span>
                  <span className="text-sm font-bold text-(--foreground)">
                    {formatPrice(item.totalPrice)}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="space-y-3 border-t border-(--border) p-5 sm:p-6">
          <div className="flex items-center justify-between text-sm">
            <span className="text-(--muted)">جمع محصولات</span>
            <span className="font-semibold">{formatPrice(subtotal)}</span>
          </div>

          <div className="flex items-center justify-between text-sm">
            <span className="text-(--muted)">هزینه ارسال</span>
            <span className="font-semibold">
              {shipping === 0 ? "رایگان" : formatPrice(shipping)}
            </span>
          </div>

          {discount > 0 && (
            <div className="flex items-center justify-between text-sm">
              <span className="text-(--muted)">تخفیف</span>
              <span className="font-semibold text-(--success)">
                -{formatPrice(discount)}
              </span>
            </div>
          )}

          {tax > 0 && (
            <div className="flex items-center justify-between text-sm">
              <span className="text-(--muted)">مالیات</span>
              <span className="font-semibold">{formatPrice(tax)}</span>
            </div>
          )}

          <div className="mt-4 flex items-end justify-between border-t border-(--border) pt-4">
            <span className="font-bold text-(--foreground)">مبلغ نهایی</span>
            <span className="text-xl font-black text-(--primary)">
              {formatPrice(total)}
            </span>
          </div>

          <div className="mt-5 space-y-3 rounded-2xl bg-(--background) p-4">
            <div className="flex items-center gap-3">
              <Truck className="h-5 w-5 text-(--primary)" />
              <div>
                <p className="text-xs font-bold">ارسال مطمئن</p>
                <p className="mt-0.5 text-[11px] text-(--muted)">
                  تحویل سریع و پیگیری سفارش
                </p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <ShieldCheck className="h-5 w-5 text-(--primary)" />
              <div>
                <p className="text-xs font-bold">
                  {paymentMethod === "online"
                    ? "پرداخت امن"
                    : "پرداخت هنگام تحویل"}
                </p>
                <p className="mt-0.5 text-[11px] text-(--muted)">
                  اطلاعات شما نزد Neva محفوظ است
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </aside>
  );
}
