import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, Clock3 } from "lucide-react";
import { newProducts } from "@/data/products";
import { Container } from "@/components/layout/Container";
import { formatPrice, calculateDiscount } from "@/lib/utils";

export function NewArrivals() {
  return (
    <section className="py-14 sm:py-16">
      <Container>
        <div className="mb-8 flex items-end justify-between gap-4">
          <div>
            <span className="inline-flex items-center gap-1.5 text-xs font-black text-[#315c4c]">
              <Clock3 className="size-3.5" />
              تازه رسیده
            </span>

            <h2 className="mt-2 text-2xl font-black text-[#17221d] sm:text-3xl">
              جدیدترین محصولات
            </h2>

            <p className="mt-2 text-sm text-[#777b77]">
              جدیدترین انتخاب‌های Neva را زودتر از بقیه ببینید.
            </p>
          </div>

          <Link
            href="/products?sort=newest"
            className="hidden items-center gap-2 text-sm font-bold text-[#315c4c] transition-colors hover:text-[#24483b] sm:flex"
          >
            جدیدترین‌ها
            <ArrowLeft className="size-4" />
          </Link>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {newProducts.slice(0, 3).map((product) => {
            const discount = calculateDiscount(
              product.price,
              product.compareAtPrice,
            );

            return (
              <Link
                key={product.id}
                href={`/products/${product.slug}`}
                className="group flex overflow-hidden rounded-3xl border border-[#e5e2db] bg-white transition-all duration-300 hover:-translate-y-1 hover:border-[#d5d1c8] hover:shadow-xl hover:shadow-[#17221d]/5"
              >
                <div className="relative aspect-square w-2/5 shrink-0 overflow-hidden bg-[#f1f0ec]">
                  <Image
                    src={product.images[0].url}
                    alt={product.images[0].alt}
                    fill
                    sizes="(max-width: 640px) 40vw, 220px"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>

                <div className="flex min-w-0 flex-1 flex-col justify-center p-4 sm:p-5">
                  <span className="mb-2 w-fit rounded-full bg-[#e7efeb] px-2.5 py-1 text-[10px] font-black text-[#315c4c]">
                    جدید
                  </span>

                  <h3 className="line-clamp-2 text-sm font-black leading-6 text-[#17221d] sm:text-base">
                    {product.name}
                  </h3>

                  <p className="mt-2 line-clamp-2 text-xs leading-5 text-[#777b77]">
                    {product.shortDescription}
                  </p>

                  <div className="mt-4 flex flex-wrap items-center gap-2">
                    <span className="text-sm font-black text-[#315c4c]">
                      {formatPrice(product.price, product.currency)}
                    </span>

                    {product.compareAtPrice && (
                      <>
                        <span className="text-[11px] text-[#9b9e99] line-through">
                          {formatPrice(
                            product.compareAtPrice,
                            product.currency,
                          )}
                        </span>

                        {discount > 0 && (
                          <span className="rounded-full bg-[#f8e7e7] px-2 py-0.5 text-[9px] font-black text-[#c65b5b]">
                            {discount.toLocaleString("fa-IR")}٪
                          </span>
                        )}
                      </>
                    )}
                  </div>
                </div>
              </Link>
            );
          })}
        </div>

        <Link
          href="/products?sort=newest"
          className="mt-6 flex h-11 items-center justify-center gap-2 rounded-xl border border-[#e5e2db] bg-white text-sm font-bold text-[#315c4c] transition-colors hover:border-[#315c4c] sm:hidden"
        >
          مشاهده جدیدترین محصولات
          <ArrowLeft className="size-4" />
        </Link>
      </Container>
    </section>
  );
}
