import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import type { Product } from "@/types/product";
import { products } from "@/data/products";
import { Container } from "@/components/layout/Container";
import { ProductGrid } from "@/components/product/ProductGrid";

interface RelatedProductsProps {
  product: Product;
  limit?: number;
}

export function RelatedProducts({ product, limit = 4 }: RelatedProductsProps) {
  const relatedProducts = products
    .filter(
      (item) =>
        item.id !== product.id &&
        item.categoryId === product.categoryId &&
        item.status === "active",
    )
    .slice(0, limit);

  if (relatedProducts.length === 0) return null;

  return (
    <section className="border-t border-[#e5e2db] py-14 sm:py-16">
      <Container>
        <div className="mb-8 flex items-end justify-between gap-4">
          <div>
            <span className="text-xs font-black text-[#315c4c]">
              شاید بپسندید
            </span>

            <h2 className="mt-2 text-2xl font-black text-[#17221d] sm:text-3xl">
              محصولات مرتبط
            </h2>
          </div>

          <Link
            href={`/products?categoryId=${product.categoryId}`}
            className="hidden items-center gap-2 text-sm font-bold text-[#315c4c] transition-colors hover:text-[#24483b] sm:flex"
          >
            مشاهده همه
            <ArrowLeft className="size-4" />
          </Link>
        </div>

        <ProductGrid products={relatedProducts} />

        <Link
          href={`/products?categoryId=${product.categoryId}`}
          className="mt-7 flex h-11 items-center justify-center gap-2 rounded-xl border border-[#e5e2db] bg-white text-sm font-bold text-[#315c4c] transition-colors hover:border-[#315c4c] sm:hidden"
        >
          مشاهده محصولات مرتبط
          <ArrowLeft className="size-4" />
        </Link>
      </Container>
    </section>
  );
}
