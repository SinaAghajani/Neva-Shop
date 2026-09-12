import type { Metadata } from "next";
import Link from "next/link";
import { Search, ChevronLeft } from "lucide-react";
import { Container } from "@/components/layout/Container";
import { ProductGrid } from "@/components/product/ProductGrid";
import { products } from "@/data/products";

export const metadata: Metadata = {
  title: "جستجو",
  description: "جستجوی محصولات در فروشگاه Neva",
};

interface SearchPageProps {
  searchParams: Promise<{
    q?: string;
  }>;
}

export default async function SearchPage({ searchParams }: SearchPageProps) {
  const params = await searchParams;
  const query = params.q?.trim() ?? "";

  const normalizedQuery = query.toLowerCase();

  const results = normalizedQuery
    ? products.filter((product) => {
        const searchableContent = [
          product.name,
          product.shortDescription,
          product.description,
          product.sku,
          ...(product.tags ?? []),
        ]
          .join(" ")
          .toLowerCase();

        return searchableContent.includes(normalizedQuery);
      })
    : [];

  return (
    <main className="min-h-screen py-8 sm:py-10">
      <Container>
        <div className="mb-8 flex items-center gap-2 text-xs text-(--muted)">
          <Link href="/" className="hover:text-(--primary)">
            خانه
          </Link>
          <ChevronLeft className="h-3.5 w-3.5" />
          <span className="text-(--foreground)">جستجو</span>
        </div>

        <div className="mb-10">
          <div className="flex items-center gap-3">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-(--primary-light) text-(--primary)">
              <Search className="h-5 w-5" />
            </div>

            <div>
              <h1 className="text-3xl font-black text-(--foreground)">
                نتایج جستجو
              </h1>

              {query ? (
                <p className="mt-1 text-sm text-(--muted)">
                  نتایج برای «{query}»
                </p>
              ) : (
                <p className="mt-1 text-sm text-(--muted)">
                  عبارت موردنظر خود را جستجو کنید.
                </p>
              )}
            </div>
          </div>
        </div>

        {query && results.length > 0 ? (
          <>
            <div className="mb-6 text-sm text-(--muted)">
              {results.length} محصول پیدا شد
            </div>

            <ProductGrid products={results} />
          </>
        ) : (
          <div className="rounded-3xl border border-(--border) bg-white px-6 py-20 text-center">
            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-(--surface-muted) text-(--muted)">
              <Search className="h-7 w-7" />
            </div>

            <h2 className="mt-5 text-xl font-bold text-(--foreground)">
              {query
                ? "محصولی مطابق جستجوی شما پیدا نشد"
                : "جستجوی خود را شروع کنید"}
            </h2>

            <p className="mx-auto mt-2 max-w-md text-sm leading-7 text-(--muted)">
              {query
                ? "عبارت دیگری را امتحان کنید یا از میان محصولات Neva انتخاب کنید."
                : "نام محصول، دسته‌بندی یا ویژگی موردنظر خود را در نوار جستجو وارد کنید."}
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
