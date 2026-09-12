import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Container } from "@/components/layout/Container";
import { CategoryHeader } from "@/components/category/CategoryHeader";
import { ProductGrid } from "@/components/product/ProductGrid";
import { categories } from "@/data/categories";
import { products } from "@/data/products";

interface CategoryPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  return categories.map((category) => ({
    slug: category.slug,
  }));
}

export async function generateMetadata({
  params,
}: CategoryPageProps): Promise<Metadata> {
  const { slug } = await params;
  const category = categories.find((item) => item.slug === slug);

  if (!category) {
    return {
      title: "دسته‌بندی پیدا نشد",
    };
  }

  return {
    title: category.name,
    description:
      category.description ??
      `مشاهده محصولات دسته‌بندی ${category.name} در Neva`,
  };
}

export default async function CategoryPage({ params }: CategoryPageProps) {
  const { slug } = await params;

  const category = categories.find((item) => item.slug === slug);

  if (!category) {
    notFound();
  }

  const categoryProducts = products.filter(
    (product) => product.categoryId === category.id,
  );

  return (
    <main className="min-h-screen py-8 sm:py-10">
      <Container>
        <CategoryHeader category={category} />

        <div className="mt-10">
          <div className="mb-6 flex items-end justify-between gap-4">
            <div>
              <h2 className="text-2xl font-black text-(--foreground)">
                محصولات {category.name}
              </h2>
              <p className="mt-1 text-sm text-(--muted)">
                {categoryProducts.length} محصول برای این دسته‌بندی
              </p>
            </div>
          </div>

          {categoryProducts.length > 0 ? (
            <ProductGrid products={categoryProducts} />
          ) : (
            <div className="rounded-3xl border border-(--border) bg-white px-6 py-20 text-center">
              <h3 className="text-xl font-bold text-(--foreground)">
                هنوز محصولی در این دسته‌بندی وجود ندارد
              </h3>
              <p className="mt-2 text-sm text-(--muted)">
                به‌زودی محصولات جدیدی به این دسته‌بندی اضافه خواهد شد.
              </p>
            </div>
          )}
        </div>
      </Container>
    </main>
  );
}
