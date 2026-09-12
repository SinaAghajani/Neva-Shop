"use client";

import { useEffect } from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowLeft, Minus, Plus, ShoppingBag, Trash2, X } from "lucide-react";
import Image from "next/image";
import { useCart } from "@/hooks/useCart";
import { useUIStore } from "@/store/ui.store";
import { formatPrice } from "@/lib/utils";
import { ROUTES } from "@/lib/constants";

export function CartDrawer() {
  const isCartOpen = useUIStore((state) => state.isCartOpen);
  const closeCart = useUIStore((state) => state.closeCart);

  const { items, itemCount, subtotal, increment, decrement, removeItem } =
    useCart();

  useEffect(() => {
    if (!isCartOpen) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        closeCart();
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [isCartOpen, closeCart]);

  return (
    <AnimatePresence>
      {isCartOpen && (
        <>
          <motion.button
            type="button"
            aria-label="بستن سبد خرید"
            className="fixed inset-0 z-90 bg-[#17221d]/35 backdrop-blur-[2px]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeCart}
          />

          <motion.aside
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.28, ease: "easeOut" }}
            className="fixed right-0 top-0 z-100 flex h-dvh w-full max-w-md flex-col bg-[#f8f7f4] shadow-2xl"
            dir="rtl"
            aria-label="سبد خرید"
          >
            <div className="flex h-20 shrink-0 items-center justify-between border-b border-[#e5e2db] bg-white px-5">
              <div>
                <h2 className="text-lg font-black text-[#17221d]">سبد خرید</h2>

                <p className="mt-1 text-xs text-[#777b77]">
                  {itemCount > 0
                    ? `${itemCount} کالا در سبد خرید`
                    : "سبد خرید شما خالی است"}
                </p>
              </div>

              <button
                type="button"
                onClick={closeCart}
                aria-label="بستن"
                className="flex size-10 items-center justify-center rounded-xl text-[#555a56] transition hover:bg-[#f1f0ec] hover:text-[#315c4c]"
              >
                <X className="size-5" />
              </button>
            </div>

            <div className="min-h-0 flex-1 overflow-y-auto px-4 py-5">
              {items.length === 0 ? (
                <div className="flex h-full min-h-80 flex-col items-center justify-center text-center">
                  <div className="flex size-20 items-center justify-center rounded-3xl bg-[#e7efeb] text-[#315c4c]">
                    <ShoppingBag className="size-9" />
                  </div>

                  <h3 className="mt-6 text-lg font-black text-[#17221d]">
                    سبد خرید خالی است
                  </h3>

                  <p className="mt-2 max-w-xs text-sm leading-7 text-[#777b77]">
                    هنوز محصولی به سبد خرید خود اضافه نکرده‌اید.
                  </p>

                  <Link
                    href={ROUTES.products}
                    onClick={closeCart}
                    className="mt-6 inline-flex h-11 items-center gap-2 rounded-xl bg-[#315c4c] px-5 text-sm font-black text-white! transition hover:bg-[#24483b]"
                  >
                    مشاهده محصولات
                    <ArrowLeft className="size-4 text-white!" />
                  </Link>
                </div>
              ) : (
                <div className="space-y-3">
                  {items.map((item) => (
                    <div
                      key={item.id}
                      className="rounded-2xl border border-[#e5e2db] bg-white p-3"
                    >
                      <div className="flex gap-3">
                        <Link
                          href={`/products/${item.product.slug}`}
                          onClick={closeCart}
                          className="relative size-20 shrink-0 overflow-hidden rounded-xl bg-[#f1f0ec]"
                        >
                          <Image
                            src={item.product.images[0]?.url || ""}
                            alt={
                              item.product.images[0]?.alt || item.product.name
                            }
                            fill
                            sizes="80px"
                            className="object-cover"
                          />
                        </Link>

                        <div className="min-w-0 flex-1">
                          <div className="flex items-start justify-between gap-2">
                            <Link
                              href={`/products/${item.product.slug}`}
                              onClick={closeCart}
                              className="line-clamp-2 text-sm font-bold leading-6 text-[#17221d] transition hover:text-[#315c4c]"
                            >
                              {item.product.name}
                            </Link>

                            <button
                              type="button"
                              onClick={() => removeItem(item.id)}
                              aria-label={`حذف ${item.product.name}`}
                              className="shrink-0 text-[#999d98] transition hover:text-[#c65b5b]"
                            >
                              <Trash2 className="size-4" />
                            </button>
                          </div>

                          <p className="mt-2 text-sm font-black text-[#315c4c]">
                            {formatPrice(item.unitPrice)}
                          </p>

                          <div className="mt-3 flex items-center justify-between">
                            <div className="flex h-9 items-center rounded-xl border border-[#e5e2db] bg-[#f8f7f4]">
                              <button
                                type="button"
                                onClick={() => decrement(item.id)}
                                aria-label="کاهش تعداد"
                                className="flex size-8 items-center justify-center text-[#555a56] transition hover:text-[#315c4c]"
                              >
                                <Minus className="size-3.5" />
                              </button>

                              <span className="min-w-7 text-center text-xs font-black text-[#17221d]">
                                {item.quantity}
                              </span>

                              <button
                                type="button"
                                onClick={() => increment(item.id)}
                                aria-label="افزایش تعداد"
                                className="flex size-8 items-center justify-center text-[#555a56] transition hover:text-[#315c4c]"
                              >
                                <Plus className="size-3.5" />
                              </button>
                            </div>

                            <span className="text-xs font-bold text-[#777b77]">
                              {formatPrice(item.totalPrice)}
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {items.length > 0 && (
              <div className="shrink-0 border-t border-[#e5e2db] bg-white p-5">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-[#777b77]">جمع محصولات</span>

                  <span className="font-black text-[#17221d]">
                    {formatPrice(subtotal)}
                  </span>
                </div>

                <div className="mt-4 grid grid-cols-2 gap-3">
                  <Link
                    href={ROUTES.cart}
                    onClick={closeCart}
                    className="flex h-12 items-center justify-center rounded-xl border border-[#315c4c] text-sm font-black text-[#315c4c] transition hover:bg-[#e7efeb]"
                  >
                    مشاهده سبد
                  </Link>

                  <Link
                    href={ROUTES.checkout}
                    onClick={closeCart}
                    className="flex h-12 items-center justify-center gap-2 rounded-xl bg-[#315c4c] text-sm font-black text-white! transition hover:bg-[#24483b]"
                  >
                    تسویه حساب
                    <ArrowLeft className="size-4 text-white!" />
                  </Link>
                </div>
              </div>
            )}
          </motion.aside>
        </>
      )}
    </AnimatePresence>
  );
}
