"use client";

import { useMemo, useState } from "react";
import { Check, Minus, Plus, ShoppingBag } from "lucide-react";
import type { Product, ProductVariant } from "@/types/product";
import type { CartItem } from "@/types/cart";
import { useCart } from "@/hooks/useCart";
import { useUIStore } from "@/store/ui.store";
import { generateId } from "@/lib/utils";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";

interface AddToCartProps {
  product: Product;
  variant?: ProductVariant;
  fullWidth?: boolean;
}

export function AddToCart({
  product,
  variant,
  fullWidth = true,
}: AddToCartProps) {
  const { addToCart, getItem } = useCart();
  const openCart = useUIStore((state) => state.openCart);

  const [quantity, setQuantity] = useState(1);
  const [added, setAdded] = useState(false);

  const stock = variant?.stock ?? product.stock;
  const unitPrice = variant?.price ?? product.price;

  const existingItem = useMemo(
    () => getItem(product.id, variant?.id),
    [getItem, product.id, variant?.id],
  );

  const remainingStock = Math.max(0, stock - (existingItem?.quantity ?? 0));

  const handleAdd = () => {
    if (remainingStock <= 0) return;

    const item: CartItem = {
      id: generateId("cart-item"),
      productId: product.id,
      product,
      quantity,
      variantId: variant?.id,
      variant: variant
        ? {
            name: variant.name,
            value: variant.value,
          }
        : undefined,
      unitPrice,
      totalPrice: quantity * unitPrice,
    };

    addToCart(item);
    setAdded(true);

    window.setTimeout(() => {
      setAdded(false);
    }, 1800);
  };

  if (stock <= 0) {
    return (
      <Button disabled fullWidth={fullWidth} variant="outline">
        ناموجود
      </Button>
    );
  }

  return (
    <div className={cn("flex gap-2", fullWidth && "w-full")}>
      <div className="flex h-12 shrink-0 items-center rounded-xl border border-[#e5e2db] bg-white">
        <button
          type="button"
          aria-label="افزایش تعداد"
          disabled={quantity >= remainingStock}
          onClick={() =>
            setQuantity((current) => Math.min(current + 1, remainingStock))
          }
          className="flex size-11 items-center justify-center text-[#555a56] transition-colors hover:text-[#315c4c] disabled:cursor-not-allowed disabled:opacity-40"
        >
          <Plus className="size-4" />
        </button>

        <span className="w-7 text-center text-sm font-black text-[#17221d]">
          {quantity.toLocaleString("fa-IR")}
        </span>

        <button
          type="button"
          aria-label="کاهش تعداد"
          disabled={quantity <= 1}
          onClick={() => setQuantity((current) => Math.max(current - 1, 1))}
          className="flex size-11 items-center justify-center text-[#555a56] transition-colors hover:text-[#315c4c] disabled:cursor-not-allowed disabled:opacity-40"
        >
          <Minus className="size-4" />
        </button>
      </div>

      <Button
        onClick={handleAdd}
        fullWidth={fullWidth}
        disabled={remainingStock <= 0}
        className="min-w-0"
      >
        {added ? (
          <>
            <Check className="size-4" />
            اضافه شد
          </>
        ) : (
          <>
            <ShoppingBag className="size-4" />
            افزودن به سبد
          </>
        )}
      </Button>

      {added && (
        <button
          type="button"
          onClick={openCart}
          className="hidden shrink-0 rounded-xl border border-[#e5e2db] px-4 text-xs font-bold text-[#315c4c] transition-colors hover:border-[#315c4c] sm:block"
        >
          مشاهده سبد
        </button>
      )}
    </div>
  );
}
