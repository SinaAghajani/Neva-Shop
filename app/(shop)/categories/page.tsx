import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, Grid2X2 } from "lucide-react";
import { Container } from "@/components/layout/Container";
import { Badge } from "@/components/ui/Badge";
import { categories } from "@/data/categories";

export const metadata: Metadata = {
  title: "دسته‌بندی محصولات",
  description:
    "دسته‌بندی محصولات Neva را ببینید و از میان پوشاک، کفش، کیف، اکسسوری، زیبایی و سبک زندگی محصول موردنظر خود را پیدا کنید.",
  alternates: {
    canonical: "/categories",
  },
  openGraph: {
    title: "دسته‌بندی محصولات | Neva",
    description:
      "محصولات Neva را بر اساس دسته‌بندی مرور کنید و انتخاب موردنظر خود را ساده‌تر انجام دهید.",
    url: "/categories",
    siteName: "Neva",
    locale: "fa_IR",
    type: "website",
  },
};

export default function CategoriesPage() {
  const visibleCategories = categories.filter(
    (category) => category.featured !== false,
  );

  return (
    <div className="min-h-screen bg-(--background)">
      <section className="border-b border-(--border) bg-(--surface)">
        <Container>
          <div className="py-12 sm:py-16 lg:py-20">
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 rounded-full bg-(--primary-light) px-3.5 py-2 text-xs font-bold text-(--primary)">
                <Grid2X2 className="size-4" />
                دسته‌بندی محصولات
              </div>

              <h1 className="mt-5 text-3xl font-black tracking-tight text-(--foreground) sm:text-4xl lg:text-5xl">
                چیزی که می‌خواهید،
                <span className="text-(--primary)"> راحت‌تر پیدا کنید.</span>
              </h1>

              <p className="mt-5 max-w-2xl text-sm leading-8 text-(--muted) sm:text-base">
                محصولات Neva را بر اساس دسته‌بندی مرور کنید و مجموعه‌ای از
                انتخاب‌های جدید و کاربردی را در یک نگاه ببینید.
              </p>
            </div>
          </div>
        </Container>
      </section>

      <section className="py-12 sm:py-16 lg:py-20">
        <Container>
          {visibleCategories.length > 0 ? (
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {visibleCategories.map((category, index) => (
                <Link
                  key={category.id}
                  href={`/categories/${category.slug}`}
                  className="group relative overflow-hidden rounded-4xl border border-(--border) bg-(--surface) transition-all duration-300 hover:-translate-y-1 hover:border-(--primary) hover:shadow-[0_18px_50px_rgba(23,34,29,0.08)]"
                >
                  <div className="relative aspect-4/3 overflow-hidden bg-(--surface-muted)">
                    {category.image?.url ? (
                      <img
                        src={category.image.url}
                        alt={category.image.alt || category.name}
                        className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                    ) : (
                      <div className="flex h-full items-center justify-center">
                        <Grid2X2 className="size-12 text-(--muted)" />
                      </div>
                    )}

                    <div className="absolute inset-0 bg-linear-to-t from-black/55 via-black/5 to-transparent" />

                    <div className="absolute right-5 top-5">
                      <Badge variant="secondary">
                        {String(index + 1).padStart(2, "0")}
                      </Badge>
                    </div>

                    <div className="absolute inset-x-5 bottom-5 flex items-end justify-between gap-4">
                      <div>
                        <h2 className="text-xl font-black text-white sm:text-2xl">
                          {category.name}
                        </h2>

                        {category.productCount !== undefined && (
                          <p className="mt-1 text-xs font-medium text-white/75">
                            {category.productCount.toLocaleString("fa-IR")}{" "}
                            محصول
                          </p>
                        )}
                      </div>

                      <span className="flex size-11 shrink-0 items-center justify-center rounded-full bg-white text-(--primary) shadow-lg transition-transform duration-300 group-hover:-translate-x-1">
                        <ArrowLeft className="size-5" />
                      </span>
                    </div>
                  </div>

                  <div className="flex min-h-20 items-center justify-between gap-4 px-5 py-4">
                    <div>
                      <p className="text-sm font-bold text-(--foreground)">
                        مشاهده محصولات
                      </p>

                      {category.description && (
                        <p className="mt-1 line-clamp-1 text-xs text-(--muted)">
                          {category.description}
                        </p>
                      )}
                    </div>

                    <ArrowLeft className="size-4 shrink-0 text-(--muted) transition-transform duration-300 group-hover:-translate-x-1 group-hover:text-(--primary)" />
                  </div>
                </Link>
              ))}
            </div>
          ) : (
            <div className="rounded-4xl border border-(--border) bg-(--surface) px-6 py-16 text-center">
              <div className="mx-auto flex size-14 items-center justify-center rounded-2xl bg-(--surface-muted) text-(--muted)">
                <Grid2X2 className="size-6" />
              </div>

              <h2 className="mt-5 text-xl font-black text-(--foreground)">
                دسته‌بندی‌ای پیدا نشد
              </h2>

              <p className="mx-auto mt-2 max-w-md text-sm leading-7 text-(--muted)">
                در حال حاضر دسته‌بندی قابل نمایشی برای محصولات وجود ندارد.
              </p>

              <Link
                href="/products"
                className="mt-6 inline-flex h-11 items-center justify-center rounded-xl bg-(--primary) px-5 text-sm font-bold text-white transition-colors hover:bg-(--primary-dark)"
              >
                مشاهده محصولات
              </Link>
            </div>
          )}
        </Container>
      </section>

      <section className="pb-14 sm:pb-20">
        <Container>
          <div className="overflow-hidden rounded-4xl bg-(--primary) px-6 py-10 sm:px-10 lg:px-14">
            <div className="flex flex-col items-start justify-between gap-6 lg:flex-row lg:items-center">
              <div>
                <p className="text-xs font-bold text-white/60">
                  هنوز انتخاب نکرده‌اید؟
                </p>

                <h2 className="mt-2 text-2xl font-black text-white sm:text-3xl">
                  همه محصولات را یکجا ببینید.
                </h2>

                <p className="mt-3 max-w-xl text-sm leading-7 text-white/70">
                  جدیدترین محصولات، پرفروش‌ها و انتخاب‌های ویژه Neva را مرور
                  کنید.
                </p>
              </div>

              <Link
                href="/products"
                className="inline-flex h-12 shrink-0 items-center gap-2 rounded-xl bg-white px-6 text-sm font-bold text-(--primary) transition-colors hover:bg-(--secondary-light)"
              >
                مشاهده همه محصولات
                <ArrowLeft className="size-4" />
              </Link>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
}
