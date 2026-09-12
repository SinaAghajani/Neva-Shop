"use client";

import Image from "next/image";
import Link from "next/link";
import { Trash2 } from "lucide-react";
import type { CartItem as CartItemType } from "@/types/cart";
import { useCart } from "@/hooks/useCart";
import { ProductPrice } from "@/components/product/ProductPrice";
import { QuantitySelector } from "@/components/cart/QuantitySelector";

interface CartItemProps {
  item: CartItemType;
}

export function CartItem({ item }: CartItemProps) {
  const { updateQuantity, removeItem } = useCart();

  const maxQuantity =
    item.variantId && item.product.variants
      ? (item.product.variants.find((variant) => variant.id === item.variantId)
          ?.stock ?? item.product.stock)
      : item.product.stock;

  return (
    <article className="flex gap-4 border-b border-[#e5e2db] py-5 first:pt-0 last:border-b-0 last:pb-0 sm:gap-5">
      <Link
        href={`/products/${item.product.slug}`}
        className="relative size-24 shrink-0 overflow-hidden rounded-2xl bg-[#f1f0ec] sm:size-28"
      >
        <Image
          src={
            item.product.images[0]?.url ?? "/images/products/product-01.webp"
          }
          alt={item.product.images[0]?.alt ?? item.product.name}
          fill
          sizes="112px"
          className="object-cover"
        />
      </Link>

      <div className="min-w-0 flex-1">
        <div className="flex items-start justify-between gap-3">
          <div className="min-w-0">
            <Link
              href={`/products/${item.product.slug}`}
              className="line-clamp-2 text-sm font-black leading-6 text-[#17221d] transition-colors hover:text-[#315c4c]"
            >
              {item.product.name}
            </Link>

            {item.variant && (
              <p className="mt-1 text-xs text-[#777b77]">
                {item.variant.name}:{" "}
                <span className="font-bold text-[#555a56]">
                  {item.variant.value}
                </span>
              </p>
            )}
          </div>

          <button
            type="button"
            onClick={() => removeItem(item.id)}
            aria-label="حذف محصول"
            className="flex size-9 shrink-0 items-center justify-center rounded-xl text-[#9b9e99] transition-colors hover:bg-[#f8e7e7] hover:text-[#c65b5b]"
          >
            <Trash2 className="size-4" />
          </button>
        </div>

        <div className="mt-4 flex flex-wrap items-end justify-between gap-3">
          <QuantitySelector
            value={item.quantity}
            max={Math.max(1, maxQuantity)}
            onChange={(quantity) => updateQuantity(item.id, quantity)}
            size="sm"
          />

          <ProductPrice
            price={item.unitPrice}
            currency={item.product.currency}
            size="sm"
          />
        </div>
      </div>
    </article>
  );
}
