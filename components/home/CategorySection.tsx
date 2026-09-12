import Image from "next/image";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { categories } from "@/data/categories";
import { Container } from "@/components/layout/Container";

export function CategorySection() {
  const featuredCategories = categories.filter((category) => category.featured);

  return (
    <section className="py-14 sm:py-16">
      <Container>
        <div className="mb-8 flex items-end justify-between gap-4">
          <div>
            <span className="text-xs font-black text-[#315c4c]">
              انتخاب کنید
            </span>

            <h2 className="mt-2 text-2xl font-black text-[#17221d] sm:text-3xl">
              دسته‌بندی‌های محبوب
            </h2>

            <p className="mt-2 text-sm text-[#777b77]">
              از میان دسته‌های منتخب Neva انتخاب کنید.
            </p>
          </div>

          <Link
            href="/categories"
            className="hidden items-center gap-2 text-sm font-bold text-[#315c4c] transition-colors hover:text-[#24483b] sm:flex"
          >
            همه دسته‌بندی‌ها
            <ArrowLeft className="size-4" />
          </Link>
        </div>

        <div className="grid grid-cols-2 gap-3 sm:grid-cols-4 sm:gap-4 lg:grid-cols-4">
          {featuredCategories.map((category) => (
            <Link
              key={category.id}
              href={`/categories/${category.slug}`}
              className="group relative overflow-hidden rounded-3xl bg-[#f1f0ec]"
            >
              <div className="relative aspect-[1/1.15] overflow-hidden">
                {category.image && (
                  <Image
                    src={category.image.url}
                    alt={category.image.alt}
                    fill
                    sizes="(max-width: 640px) 50vw, (max-width: 1024px) 25vw, 320px"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                )}

                <div className="absolute inset-0 bg-linear-to-t from-[#17221d]/75 via-[#17221d]/15 to-transparent" />

                <div className="absolute inset-x-0 bottom-0 p-4 sm:p-5">
                  <h3 className="text-base font-black text-white sm:text-lg">
                    {category.name}
                  </h3>

                  {category.productCount !== undefined && (
                    <p className="mt-1 text-xs text-white/70">
                      {category.productCount.toLocaleString("fa-IR")} محصول
                    </p>
                  )}
                </div>
              </div>
            </Link>
          ))}
        </div>

        <Link
          href="/categories"
          className="mt-5 flex h-11 items-center justify-center gap-2 rounded-xl border border-[#e5e2db] bg-white text-sm font-bold text-[#315c4c] transition-colors hover:border-[#315c4c] sm:hidden"
        >
          مشاهده همه دسته‌بندی‌ها
          <ArrowLeft className="size-4" />
        </Link>
      </Container>
    </section>
  );
}
