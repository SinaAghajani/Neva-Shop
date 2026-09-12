import type { Product } from "@/types/product";
import { ProductCard } from "@/components/product/ProductCard";
import { EmptyState } from "@/components/ui/EmptyState";

interface ProductGridProps {
  products: Product[];
  priorityCount?: number;
}

export function ProductGrid({ products, priorityCount = 4 }: ProductGridProps) {
  if (products.length === 0) {
    return (
      <EmptyState
        title="محصولی پیدا نشد"
        description="در حال حاضر محصولی مطابق فیلترهای انتخاب‌شده وجود ندارد."
      />
    );
  }

  return (
    <div className="grid grid-cols-2 gap-x-3 gap-y-8 sm:grid-cols-2 sm:gap-x-5 sm:gap-y-10 lg:grid-cols-3 xl:grid-cols-4">
      {products.map((product, index) => (
        <ProductCard
          key={product.id}
          product={product}
          priority={index < priorityCount}
        />
      ))}
    </div>
  );
}
