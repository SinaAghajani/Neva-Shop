"use client";

import { ShoppingBag } from "lucide-react";
import type { CartItem as CartItemType } from "@/types/cart";
import { CartItem } from "@/components/cart/CartItem";
import { EmptyState } from "@/components/ui/EmptyState";

interface CartListProps {
  items: CartItemType[];
}

export function CartList({ items }: CartListProps) {
  if (items.length === 0) {
    return (
      <EmptyState
        title="سبد خرید شما خالی است"
        description="محصولات موردعلاقه خود را پیدا کنید و برای خرید به سبد اضافه کنید."
        icon={<ShoppingBag className="size-7" />}
      />
    );
  }

  return (
    <div className="rounded-2xl border border-[#e5e2db] bg-white p-5 sm:p-6">
      <div className="mb-5 flex items-center justify-between border-b border-[#e5e2db] pb-5">
        <div>
          <h2 className="text-lg font-black text-[#17221d]">سبد خرید</h2>

          <p className="mt-1 text-xs text-[#777b77]">
            {items.length.toLocaleString("fa-IR")} محصول
          </p>
        </div>
      </div>

      <div>
        {items.map((item) => (
          <CartItem key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
}
