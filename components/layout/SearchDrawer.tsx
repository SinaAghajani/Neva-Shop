"use client";

import { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowLeft, Search, X } from "lucide-react";
import { products } from "@/data/products";
import { useUIStore } from "@/store/ui.store";
import { formatPrice } from "@/lib/utils";
import { ROUTES } from "@/lib/constants";

export function SearchDrawer() {
  const isSearchOpen = useUIStore((state) => state.isSearchOpen);
  const closeSearch = useUIStore((state) => state.closeSearch);

  const [query, setQuery] = useState("");

  useEffect(() => {
    if (!isSearchOpen) {
      setQuery("");
      return;
    }

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        closeSearch();
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [isSearchOpen, closeSearch]);

  const results = useMemo(() => {
    const normalizedQuery = query.trim().toLowerCase();

    if (!normalizedQuery) {
      return products.slice(0, 6);
    }

    return products
      .filter((product) => {
        const searchableText = [
          product.name,
          product.shortDescription,
          product.description,
          ...(product.tags ?? []),
        ]
          .join(" ")
          .toLowerCase();

        return searchableText.includes(normalizedQuery);
      })
      .slice(0, 8);
  }, [query]);

  return (
    <AnimatePresence>
      {isSearchOpen && (
        <>
          <motion.button
            type="button"
            aria-label="بستن جستجو"
            className="fixed inset-0 z-90 bg-[#17221d]/35 backdrop-blur-[2px]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeSearch}
          />

          <motion.div
            initial={{ y: "-100%" }}
            animate={{ y: 0 }}
            exit={{ y: "-100%" }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="fixed inset-x-0 top-0 z-100 bg-[#f8f7f4] shadow-2xl"
            dir="rtl"
          >
            <div className="mx-auto max-h-[90dvh] w-full max-w-5xl overflow-y-auto px-4 py-5 sm:px-6 lg:px-8">
              <div className="flex items-center justify-between gap-4">
                <div>
                  <p className="text-xs font-bold text-[#777b77]">
                    جستجوی Neva
                  </p>
                  <h2 className="mt-1 text-xl font-black text-[#17221d]">
                    دنبال چه چیزی هستید؟
                  </h2>
                </div>

                <button
                  type="button"
                  onClick={closeSearch}
                  aria-label="بستن"
                  className="flex size-10 shrink-0 items-center justify-center rounded-xl text-[#555a56] transition hover:bg-white hover:text-[#315c4c]"
                >
                  <X className="size-5" />
                </button>
              </div>

              <div className="relative mt-5">
                <Search className="pointer-events-none absolute right-4 top-1/2 size-5 -translate-y-1/2 text-[#777b77]" />

                <input
                  type="search"
                  autoFocus
                  value={query}
                  onChange={(event) => setQuery(event.target.value)}
                  placeholder="نام محصول، دسته‌بندی یا عبارت موردنظر..."
                  className="h-14 w-full rounded-2xl border border-[#e5e2db] bg-white pr-12 pl-12 text-sm font-medium text-[#17221d] outline-none transition placeholder:text-[#999d98] focus:border-[#315c4c] focus:ring-4 focus:ring-[#315c4c]/10"
                />

                {query && (
                  <button
                    type="button"
                    onClick={() => setQuery("")}
                    aria-label="پاک کردن جستجو"
                    className="absolute left-4 top-1/2 flex size-7 -translate-y-1/2 items-center justify-center rounded-lg text-[#777b77] hover:bg-[#f1f0ec] hover:text-[#315c4c]"
                  >
                    <X className="size-4" />
                  </button>
                )}
              </div>

              <div className="mt-6">
                <div className="mb-3 flex items-center justify-between">
                  <h3 className="text-sm font-black text-[#17221d]">
                    {query.trim() ? "نتایج جستجو" : "محصولات پیشنهادی"}
                  </h3>

                  {query.trim() && (
                    <span className="text-xs text-[#777b77]">
                      {results.length} نتیجه
                    </span>
                  )}
                </div>

                {results.length > 0 ? (
                  <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
                    {results.map((product) => (
                      <Link
                        key={product.id}
                        href={`/products/${product.slug}`}
                        onClick={closeSearch}
                        className="group flex gap-3 rounded-2xl border border-[#e5e2db] bg-white p-3 transition hover:-translate-y-0.5 hover:border-[#315c4c]/30 hover:shadow-md"
                      >
                        <div className="relative size-16 shrink-0 overflow-hidden rounded-xl bg-[#f1f0ec]">
                          <Image
                            src={product.images[0]?.url || ""}
                            alt={product.images[0]?.alt || product.name}
                            fill
                            sizes="64px"
                            className="object-cover transition duration-300 group-hover:scale-105"
                          />
                        </div>

                        <div className="min-w-0">
                          <h4 className="line-clamp-2 text-xs font-bold leading-5 text-[#17221d] transition group-hover:text-[#315c4c]">
                            {product.name}
                          </h4>

                          <p className="mt-1 text-xs font-black text-[#315c4c]">
                            {formatPrice(product.price)}
                          </p>
                        </div>
                      </Link>
                    ))}
                  </div>
                ) : (
                  <div className="rounded-2xl border border-dashed border-[#e5e2db] bg-white px-5 py-12 text-center">
                    <div className="mx-auto flex size-14 items-center justify-center rounded-2xl bg-[#f1f0ec] text-[#777b77]">
                      <Search className="size-6" />
                    </div>

                    <h3 className="mt-4 text-sm font-black text-[#17221d]">
                      محصولی پیدا نشد
                    </h3>

                    <p className="mt-2 text-xs leading-6 text-[#777b77]">
                      عبارت دیگری را امتحان کنید.
                    </p>
                  </div>
                )}
              </div>

              <div className="mt-5 border-t border-[#e5e2db] pt-5">
                <Link
                  href={
                    query.trim()
                      ? `${ROUTES.search}?search=${encodeURIComponent(query.trim())}`
                      : ROUTES.products
                  }
                  onClick={closeSearch}
                  className="inline-flex items-center gap-2 text-sm font-black text-[#315c4c] transition hover:text-[#24483b]"
                >
                  مشاهده همه محصولات
                  <ArrowLeft className="size-4" />
                </Link>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
