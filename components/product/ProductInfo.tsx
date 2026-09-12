"use client";

import { useCallback, useState } from "react";
import { Heart, ShieldCheck, Truck } from "lucide-react";
import type { Product, ProductVariant } from "@/types/product";
import { useWishlist } from "@/hooks/useWishlist";
import { Badge } from "@/components/ui/Badge";
import { ProductPrice } from "@/components/product/ProductPrice";
import { ProductRating } from "@/components/product/ProductRating";
import { ProductOptions } from "@/components/product/ProductOptions";
import { AddToCart } from "@/components/product/AddToCart";
import { cn } from "@/lib/utils";

interface ProductInfoProps {
  product: Product;
}

const badgeLabels = {
  new: "جدید",
  sale: "پیشنهاد ویژه",
  featured: "منتخب",
  bestseller: "پرفروش",
} as const;

export function ProductInfo({ product }: ProductInfoProps) {
  const { has, toggle } = useWishlist();
  const [selectedVariant, setSelectedVariant] = useState<ProductVariant>();

  const isWishlisted = has(product.id);

  const handleVariantChange = useCallback(
    (variant: ProductVariant | undefined) => {
      setSelectedVariant(variant);
    },
    [],
  );

  return (
    <div className="flex flex-col">
      <div className="flex flex-wrap items-center gap-2">
        {product.badges?.map((badge) => (
          <Badge
            key={badge}
            variant={
              badge === "sale"
                ? "danger"
                : badge === "bestseller"
                  ? "secondary"
                  : "primary"
            }
          >
            {badgeLabels[badge]}
          </Badge>
        ))}
      </div>

      <div className="mt-4">
        <h1 className="text-2xl font-black leading-9 text-[#17221d] sm:text-3xl">
          {product.name}
        </h1>

        <p className="mt-3 text-sm leading-7 text-[#777b77]">
          {product.shortDescription}
        </p>
      </div>

      <div className="mt-5 flex flex-wrap items-center gap-4">
        <ProductRating
          average={product.rating.average}
          count={product.rating.count}
        />

        <span className="h-4 w-px bg-[#e5e2db]" />

        <span className="text-xs text-[#777b77]">
          کد محصول:{" "}
          <span className="font-bold text-[#555a56]">{product.sku}</span>
        </span>
      </div>

      <div className="mt-6 rounded-2xl bg-[#f8f7f4] p-4">
        <ProductPrice
          price={selectedVariant?.price ?? product.price}
          compareAtPrice={product.compareAtPrice}
          currency={product.currency}
          size="lg"
        />
      </div>

      <div className="mt-6">
        <ProductOptions
          product={product}
          onVariantChange={handleVariantChange}
        />
      </div>

      <div className="mt-6 flex gap-2">
        <AddToCart product={product} variant={selectedVariant} />

        <button
          type="button"
          aria-label={
            isWishlisted ? "حذف از علاقه‌مندی‌ها" : "افزودن به علاقه‌مندی‌ها"
          }
          onClick={() => toggle(product.id)}
          className={cn(
            "flex size-12 shrink-0 items-center justify-center rounded-xl border transition-all",
            isWishlisted
              ? "border-[#c65b5b] bg-[#f8e7e7] text-[#c65b5b]"
              : "border-[#e5e2db] bg-white text-[#777b77] hover:border-[#315c4c] hover:text-[#315c4c]",
          )}
        >
          <Heart className={cn("size-5", isWishlisted && "fill-current")} />
        </button>
      </div>

      <div className="mt-7 grid gap-3 border-t border-[#e5e2db] pt-6 sm:grid-cols-2">
        <div className="flex items-center gap-3">
          <div className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-[#e7efeb] text-[#315c4c]">
            <Truck className="size-5" />
          </div>

          <div>
            <p className="text-xs font-black text-[#17221d]">ارسال سریع</p>
            <p className="mt-0.5 text-[11px] text-[#777b77]">
              ارسال به سراسر کشور
            </p>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <div className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-[#e7efeb] text-[#315c4c]">
            <ShieldCheck className="size-5" />
          </div>

          <div>
            <p className="text-xs font-black text-[#17221d]">خرید مطمئن</p>
            <p className="mt-0.5 text-[11px] text-[#777b77]">
              ضمانت اصالت و کیفیت
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
