import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { featuredProducts } from "@/data/products";
import { Container } from "@/components/layout/Container";
import { ProductCard } from "@/components/product/ProductCard";

export function FeaturedProducts() {
  return (
    <section className="bg-white py-14 sm:py-16">
      <Container>
        <div className="mb-8 flex items-end justify-between gap-4">
          <div>
            <span className="text-xs font-black text-[#315c4c]">
              پیشنهاد Neva
            </span>

            <h2 className="mt-2 text-2xl font-black text-[#17221d] sm:text-3xl">
              محصولات منتخب
            </h2>

            <p className="mt-2 text-sm text-[#777b77]">
              محصولاتی که برای تجربه بهتر خرید انتخاب کرده‌ایم.
            </p>
          </div>

          <Link
            href="/products"
            className="hidden items-center gap-2 text-sm font-bold text-[#315c4c] transition-colors hover:text-[#24483b] sm:flex"
          >
            مشاهده همه
            <ArrowLeft className="size-4" />
          </Link>
        </div>

        <div className="grid grid-cols-2 gap-3 sm:grid-cols-2 sm:gap-5 lg:grid-cols-4">
          {featuredProducts.slice(0, 4).map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        <Link
          href="/products"
          className="mt-6 flex h-11 items-center justify-center gap-2 rounded-xl border border-[#e5e2db] bg-[#f8f7f4] text-sm font-bold text-[#315c4c] transition-colors hover:border-[#315c4c] sm:hidden"
        >
          مشاهده همه محصولات
          <ArrowLeft className="size-4" />
        </Link>
      </Container>
    </section>
  );
}
