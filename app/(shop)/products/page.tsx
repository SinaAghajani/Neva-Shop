import type { Metadata } from "next";
import Link from "next/link";
import { ChevronLeft, SlidersHorizontal } from "lucide-react";
import { Container } from "@/components/layout/Container";
import { ProductGrid } from "@/components/product/ProductGrid";
import { products } from "@/data/products";
import { categories } from "@/data/categories";
import { PRODUCT_SORT_OPTIONS } from "@/lib/constants";

export const metadata: Metadata = {
  title: "محصولات",
  description: "مشاهده و خرید محصولات Neva",
};

interface ProductsPageProps {
  searchParams: Promise<{
    category?: string;
    sort?: string;
    search?: string;
    minPrice?: string;
    maxPrice?: string;
  }>;
}

export default async function ProductsPage({
  searchParams,
}: ProductsPageProps) {
  const params = await searchParams;

  const categorySlug = params.category;
  const search = params.search?.trim().toLowerCase();
  const minPrice = Number(params.minPrice) || 0;
  const maxPrice = Number(params.maxPrice) || 0;

  const selectedCategory = categories.find(
    (category) => category.slug === categorySlug,
  );

  const sort = PRODUCT_SORT_OPTIONS.some(
    (option) => option.value === params.sort,
  )
    ? params.sort
    : "newest";

  let filteredProducts = products.filter((product) => {
    const matchesCategory = selectedCategory
      ? product.categoryId === selectedCategory.id
      : true;

    const matchesSearch = search
      ? `${product.name} ${product.shortDescription} ${product.description} ${(
          product.tags ?? []
        ).join(" ")}`
          .toLowerCase()
          .includes(search)
      : true;

    const matchesMinPrice = minPrice ? product.price >= minPrice : true;
    const matchesMaxPrice = maxPrice ? product.price <= maxPrice : true;

    return (
      matchesCategory && matchesSearch && matchesMinPrice && matchesMaxPrice
    );
  });

  filteredProducts = [...filteredProducts].sort((a, b) => {
    switch (sort) {
      case "oldest":
        return (
          new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime()
        );

      case "price-asc":
        return a.price - b.price;

      case "price-desc":
        return b.price - a.price;

      case "rating":
        return b.rating.average - a.rating.average;

      case "popular":
        return b.rating.count - a.rating.count;

      case "newest":
      default:
        return (
          new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
        );
    }
  });

  return (
    <main className="min-h-screen py-8 sm:py-10">
      <Container>
        <div className="mb-8 flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <div className="mb-3 flex items-center gap-2 text-xs text-(--muted)">
              <Link href="/" className="transition hover:text-(--primary)">
                خانه
              </Link>
              <ChevronLeft className="h-3.5 w-3.5" />
              <span className="text-(--foreground)">محصولات</span>
            </div>

            <h1 className="text-3xl font-black tracking-tight text-(--foreground) sm:text-4xl">
              {selectedCategory?.name ?? "همه محصولات"}
            </h1>

            <p className="mt-2 max-w-2xl text-sm leading-7 text-(--muted)">
              {selectedCategory?.description ??
                "مجموعه‌ای از محصولات منتخب Neva با طراحی مدرن، کیفیت بالا و انتخابی ساده برای سبک زندگی شما."}
            </p>
          </div>

          <div className="flex items-center gap-2 rounded-2xl bg-white px-4 py-3 text-sm text-(--muted) shadow-sm ring-1 ring-(--border)">
            <SlidersHorizontal className="h-4 w-4" />
            <span>{filteredProducts.length} محصول</span>
          </div>
        </div>

        <div className="mb-8 flex gap-2 overflow-x-auto pb-2">
          <Link
            href="/products"
            className={`shrink-0 rounded-full px-4 py-2 text-sm font-semibold transition ${
              !categorySlug
                ? "bg-(--primary) text-white"
                : "bg-white text-(--foreground) ring-1 ring-(--border) hover:border-(--primary)"
            }`}
          >
            همه
          </Link>

          {categories.map((category) => (
            <Link
              key={category.id}
              href={`/products?category=${category.slug}`}
              className={`shrink-0 rounded-full px-4 py-2 text-sm font-semibold transition ${
                categorySlug === category.slug
                  ? "bg-(--primary) text-white"
                  : "bg-white text-(--foreground) ring-1 ring-(--border) hover:border-(--primary)"
              }`}
            >
              {category.name}
            </Link>
          ))}
        </div>

        {filteredProducts.length > 0 ? (
          <ProductGrid products={filteredProducts} />
        ) : (
          <div className="rounded-3xl border border-(--border) bg-white px-6 py-20 text-center">
            <h2 className="text-xl font-bold text-(--foreground)">
              محصولی پیدا نشد
            </h2>
            <p className="mx-auto mt-2 max-w-md text-sm leading-6 text-(--muted)">
              با تغییر فیلترها یا جستجوی عبارت دیگری، محصولات موردنظر خود را
              پیدا کنید.
            </p>

            <Link
              href="/products"
              className="mt-6 inline-flex rounded-2xl bg-(--primary) px-6 py-3 text-sm font-bold text-white transition hover:bg-(--primary-dark)"
            >
              مشاهده همه محصولات
            </Link>
          </div>
        )}
      </Container>
    </main>
  );
}
