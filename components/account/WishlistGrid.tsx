"use client";

import { Heart } from "lucide-react";
import { useRouter } from "next/navigation";
import { useWishlist } from "@/hooks/useWishlist";
import { products } from "@/data/products";
import { ProductGrid } from "@/components/product/ProductGrid";
import { EmptyState } from "@/components/ui/EmptyState";
import { ROUTES } from "@/lib/constants";

export default function WishlistGrid() {
  const router = useRouter();
  const { productIds } = useWishlist();

  const wishlistProducts = productIds
    .map((id) => products.find((product) => product.id === id))
    .filter((product): product is (typeof products)[number] =>
      Boolean(product),
    );

  if (!wishlistProducts.length) {
    return (
      <EmptyState
        icon={<Heart className="h-7 w-7" />}
        title="لیست علاقه‌مندی‌ها خالی است"
        description="محصولاتی که دوست دارید را به لیست علاقه‌مندی‌ها اضافه کنید تا بعداً سریع‌تر به آن‌ها دسترسی داشته باشید."
        action={{
          label: "مشاهده محصولات",
          onClick: () => router.push(ROUTES.products),
        }}
      />
    );
  }

  return (
    <div className="space-y-5">
      <div>
        <h2 className="text-xl font-bold text-(--foreground)">
          علاقه‌مندی‌های من
        </h2>

        <p className="mt-1 text-sm text-(--muted)">
          {wishlistProducts.length} محصول در لیست علاقه‌مندی‌های شما قرار دارد.
        </p>
      </div>

      <ProductGrid products={wishlistProducts} />
    </div>
  );
}
