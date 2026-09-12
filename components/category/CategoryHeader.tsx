import Image from "next/image";
import Link from "next/link";
import { ChevronLeft, Package } from "lucide-react";
import type { Category } from "@/types/category";
import { Container } from "@/components/layout/Container";

interface CategoryHeaderProps {
  category: Category;
  productCount?: number;
}

export function CategoryHeader({
  category,
  productCount,
}: CategoryHeaderProps) {
  return (
    <section className="border-b border-[#e5e2db] bg-white">
      <Container className="py-8 sm:py-10">
        <div className="mb-6 flex items-center gap-2 text-xs text-[#777b77]">
          <Link href="/" className="transition-colors hover:text-[#315c4c]">
            خانه
          </Link>

          <ChevronLeft className="size-3.5" />

          <Link
            href="/categories"
            className="transition-colors hover:text-[#315c4c]"
          >
            دسته‌بندی‌ها
          </Link>

          <ChevronLeft className="size-3.5" />

          <span className="font-bold text-[#555a56]">{category.name}</span>
        </div>

        <div className="relative overflow-hidden rounded-4xl bg-[#315c4c]">
          {category.image && (
            <div className="absolute inset-0">
              <Image
                src={category.image.url}
                alt={category.image.alt}
                fill
                sizes="100vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-linear-to-l from-[#17221d]/90 via-[#17221d]/65 to-[#17221d]/20" />
            </div>
          )}

          <div className="relative flex min-h-62.5 items-end p-6 sm:min-h-72.5 sm:p-10">
            <div className="max-w-2xl">
              <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1.5 text-xs font-bold text-white backdrop-blur-md">
                <Package className="size-3.5" />
                دسته‌بندی محصولات
              </span>

              <h1 className="mt-5 text-3xl font-black text-white sm:text-4xl">
                {category.name}
              </h1>

              {category.description && (
                <p className="mt-3 max-w-xl text-sm leading-7 text-white/75 sm:text-base">
                  {category.description}
                </p>
              )}

              {productCount !== undefined && (
                <p className="mt-5 text-xs font-bold text-white/65">
                  {productCount.toLocaleString("fa-IR")} محصول
                </p>
              )}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
