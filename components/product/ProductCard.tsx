"use client";

import Link from "next/link";
import Image from "next/image";
import { Heart, ShoppingBag } from "lucide-react";
import type { Product } from "@/types/product";
import { useWishlist } from "@/hooks/useWishlist";
import { useCart } from "@/hooks/useCart";
import { generateId } from "@/lib/utils";
import { Badge } from "@/components/ui/Badge";
import { ProductPrice } from "@/components/product/ProductPrice";
import { ProductRating } from "@/components/product/ProductRating";
import { cn } from "@/lib/utils";

interface ProductCardProps {
  product: Product;
  priority?: boolean;
}

const badgeLabels = {
  new: "جدید",
  sale: "ویژه",
  featured: "منتخب",
  bestseller: "پرفروش",
} as const;

export function ProductCard({ product, priority = false }: ProductCardProps) {
  const { has, toggle } = useWishlist();
  const { addToCart, isInCart } = useCart();

  const wishlisted = has(product.id);
  const inCart = isInCart(product.id);

  const handleAddToCart = () => {
    if (product.stock <= 0) return;

    addToCart({
      id: generateId("cart-item"),
      productId: product.id,
      product,
      quantity: 1,
      unitPrice: product.price,
      totalPrice: product.price,
    });
  };

  return (
    <article className="group min-w-0">
      <div className="relative overflow-hidden rounded-3xl bg-[#f1f0ec]">
        <Link
          href={`/products/${product.slug}`}
          className="relative block aspect-4/5"
        >
          <Image
            src={product.images[0]?.url ?? "/images/products/product-01.webp"}
            alt={product.images[0]?.alt ?? product.name}
            fill
            priority={priority}
            sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />
        </Link>

        <div className="absolute right-3 top-3 flex max-w-[75%] flex-wrap gap-1.5">
          {product.badges?.slice(0, 2).map((badge) => (
            <Badge
              key={badge}
              variant={
                badge === "sale"
                  ? "danger"
                  : badge === "bestseller"
                    ? "secondary"
                    : "primary"
              }
              className="bg-white/90 backdrop-blur-sm"
            >
              {badgeLabels[badge]}
            </Badge>
          ))}
        </div>

        <button
          type="button"
          aria-label={
            wishlisted ? "حذف از علاقه‌مندی‌ها" : "افزودن به علاقه‌مندی‌ها"
          }
          onClick={() => toggle(product.id)}
          className={cn(
            "absolute left-3 top-3 flex size-10 items-center justify-center rounded-full bg-white/90 backdrop-blur-sm transition-all duration-200",
            wishlisted
              ? "text-[#c65b5b] shadow-md"
              : "text-[#777b77] hover:text-[#c65b5b] hover:shadow-md",
          )}
        >
          <Heart className={cn("size-4.5", wishlisted && "fill-current")} />
        </button>

        <button
          type="button"
          aria-label="افزودن به سبد خرید"
          onClick={handleAddToCart}
          disabled={product.stock <= 0}
          className={cn(
            "absolute bottom-3 left-3 flex size-10 items-center justify-center rounded-xl bg-white text-[#315c4c] shadow-md transition-all duration-200",
            "translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100",
            "hover:bg-[#315c4c] hover:text-white",
            "disabled:cursor-not-allowed disabled:opacity-50",
          )}
        >
          <ShoppingBag className="size-4" />
        </button>
      </div>

      <div className="px-1 pt-4">
        <Link href={`/products/${product.slug}`}>
          <h3 className="line-clamp-2 min-h-12 text-sm font-black leading-6 text-[#17221d] transition-colors hover:text-[#315c4c]">
            {product.name}
          </h3>
        </Link>

        <div className="mt-2">
          <ProductRating
            average={product.rating.average}
            count={product.rating.count}
            size="sm"
          />
        </div>

        <div className="mt-3 flex items-center justify-between gap-2">
          <ProductPrice
            price={product.price}
            compareAtPrice={product.compareAtPrice}
            currency={product.currency}
            size="sm"
          />

          {inCart && (
            <span className="shrink-0 text-[10px] font-bold text-[#3d7a5b]">
              در سبد
            </span>
          )}
        </div>
      </div>
    </article>
  );
}
