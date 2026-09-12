"use client";

import { useEffect, useMemo, useState } from "react";
import type { Product, ProductVariant } from "@/types/product";
import { cn } from "@/lib/utils";

interface ProductOptionsProps {
  product: Product;
  onVariantChange?: (variant: ProductVariant | undefined) => void;
}

export function ProductOptions({
  product,
  onVariantChange,
}: ProductOptionsProps) {
  const variants = product.variants ?? [];

  const availableVariants = useMemo(
    () => variants.filter((variant) => variant.stock > 0),
    [variants],
  );

  const [selectedVariantId, setSelectedVariantId] = useState<
    string | undefined
  >(availableVariants[0]?.id);

  const selectedVariant = availableVariants.find(
    (variant) => variant.id === selectedVariantId,
  );

  useEffect(() => {
    onVariantChange?.(selectedVariant);
  }, [selectedVariant, onVariantChange]);

  if (variants.length === 0) return null;

  return (
    <div className="space-y-4">
      <div>
        <div className="mb-3 flex items-center justify-between gap-3">
          <span className="text-sm font-black text-[#17221d]">
            {variants[0]?.name}
          </span>

          {selectedVariant && (
            <span className="text-xs text-[#777b77]">
              انتخاب شده:{" "}
              <span className="font-bold text-[#315c4c]">
                {selectedVariant.value}
              </span>
            </span>
          )}
        </div>

        <div className="flex flex-wrap gap-2">
          {variants.map((variant) => {
            const isSelected = variant.id === selectedVariantId;
            const isDisabled = variant.stock <= 0;

            return (
              <button
                key={variant.id}
                type="button"
                disabled={isDisabled}
                onClick={() => setSelectedVariantId(variant.id)}
                className={cn(
                  "min-w-14 rounded-xl border px-4 py-2.5 text-sm font-bold transition-all",
                  isSelected && "border-[#315c4c] bg-[#315c4c] text-white",
                  !isSelected &&
                    !isDisabled &&
                    "border-[#e5e2db] bg-white text-[#17221d] hover:border-[#315c4c] hover:text-[#315c4c]",
                  isDisabled &&
                    "cursor-not-allowed border-[#eeeeeb] bg-[#f1f0ec] text-[#b4b5b1] line-through",
                )}
              >
                {variant.value}
              </button>
            );
          })}
        </div>
      </div>

      {selectedVariant && (
        <div className="flex items-center justify-between rounded-xl bg-[#f8f7f4] px-4 py-3 text-xs">
          <span className="text-[#777b77]">موجودی</span>
          <span className="font-bold text-[#315c4c]">
            {selectedVariant.stock.toLocaleString("fa-IR")} عدد
          </span>
        </div>
      )}
    </div>
  );
}
