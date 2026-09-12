"use client";

import Link from "next/link";
import { ArrowLeft, ShieldCheck, Truck } from "lucide-react";
import { useCart } from "@/hooks/useCart";
import { formatPrice } from "@/lib/utils";
import { Button } from "@/components/ui/Button";

interface CartSummaryProps {
  shipping?: number;
  discount?: number;
  tax?: number;
  checkoutHref?: string;
}

export function CartSummary({
  shipping = 0,
  discount = 0,
  tax = 0,
  checkoutHref = "/checkout",
}: CartSummaryProps) {
  const { itemCount, subtotal, isEmpty } = useCart();

  const total = Math.max(0, subtotal - discount + shipping + tax);

  return (
    <aside className="rounded-2xl border border-[#e5e2db] bg-white p-5 sm:p-6">
      <h2 className="text-lg font-black text-[#17221d]">خلاصه سفارش</h2>

      <div className="mt-6 space-y-4">
        <div className="flex items-center justify-between gap-4 text-sm">
          <span className="text-[#777b77]">مجموع محصولات</span>
          <span className="font-bold text-[#17221d]">
            {formatPrice(subtotal)}
          </span>
        </div>

        {discount > 0 && (
          <div className="flex items-center justify-between gap-4 text-sm">
            <span className="text-[#777b77]">تخفیف</span>
            <span className="font-bold text-[#c65b5b]">
              - {formatPrice(discount)}
            </span>
          </div>
        )}

        <div className="flex items-center justify-between gap-4 text-sm">
          <span className="text-[#777b77]">هزینه ارسال</span>
          <span className="font-bold text-[#17221d]">
            {shipping === 0 ? "رایگان" : formatPrice(shipping)}
          </span>
        </div>

        {tax > 0 && (
          <div className="flex items-center justify-between gap-4 text-sm">
            <span className="text-[#777b77]">مالیات</span>
            <span className="font-bold text-[#17221d]">{formatPrice(tax)}</span>
          </div>
        )}
      </div>

      <div className="my-5 border-t border-dashed border-[#e5e2db]" />

      <div className="flex items-center justify-between gap-4">
        <span className="text-sm font-black text-[#17221d]">
          مبلغ قابل پرداخت
        </span>

        <span className="text-xl font-black text-[#315c4c]">
          {formatPrice(total)}
        </span>
      </div>

      <Button
        fullWidth
        size="lg"
        className="mt-6"
        disabled={isEmpty}
        onClick={() => {
          window.location.href = checkoutHref;
        }}
      >
        ادامه فرآیند خرید
        <ArrowLeft className="size-4" />
      </Button>

      <div className="mt-5 grid gap-3 border-t border-[#e5e2db] pt-5">
        <div className="flex items-center gap-3">
          <div className="flex size-9 items-center justify-center rounded-xl bg-[#e7efeb] text-[#315c4c]">
            <Truck className="size-4" />
          </div>

          <div>
            <p className="text-xs font-black text-[#17221d]">ارسال سریع</p>
            <p className="mt-0.5 text-[10px] text-[#777b77]">
              ارسال به سراسر کشور
            </p>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <div className="flex size-9 items-center justify-center rounded-xl bg-[#e7efeb] text-[#315c4c]">
            <ShieldCheck className="size-4" />
          </div>

          <div>
            <p className="text-xs font-black text-[#17221d]">پرداخت امن</p>
            <p className="mt-0.5 text-[10px] text-[#777b77]">
              اطلاعات شما محفوظ می‌ماند
            </p>
          </div>
        </div>
      </div>

      {itemCount > 0 && (
        <p className="mt-5 text-center text-[11px] text-[#9b9e99]">
          {itemCount.toLocaleString("fa-IR")} عدد محصول در سبد شما قرار دارد.
        </p>
      )}
    </aside>
  );
}
