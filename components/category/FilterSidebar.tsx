"use client";

import { useEffect, useState } from "react";
import { RotateCcw, SlidersHorizontal } from "lucide-react";
import type { ProductFilters } from "@/types/product";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import { cn } from "@/lib/utils";

interface FilterSidebarProps {
  filters: ProductFilters;
  onChange: (filters: ProductFilters) => void;
  onReset: () => void;
  className?: string;
}

const ratings = [5, 4, 3, 2, 1];

export function FilterSidebar({
  filters,
  onChange,
  onReset,
  className,
}: FilterSidebarProps) {
  const [minPrice, setMinPrice] = useState(filters.minPrice?.toString() ?? "");
  const [maxPrice, setMaxPrice] = useState(filters.maxPrice?.toString() ?? "");

  useEffect(() => {
    setMinPrice(filters.minPrice?.toString() ?? "");
    setMaxPrice(filters.maxPrice?.toString() ?? "");
  }, [filters.minPrice, filters.maxPrice]);

  const updateFilter = <K extends keyof ProductFilters>(
    key: K,
    value: ProductFilters[K],
  ) => {
    onChange({
      ...filters,
      [key]: value,
      page: 1,
    });
  };

  const applyPrice = () => {
    onChange({
      ...filters,
      minPrice: minPrice ? Number(minPrice) : undefined,
      maxPrice: maxPrice ? Number(maxPrice) : undefined,
      page: 1,
    });
  };

  const hasFilters =
    filters.minPrice !== undefined ||
    filters.maxPrice !== undefined ||
    filters.rating !== undefined;

  return (
    <aside
      className={cn("rounded-2xl border border-[#e5e2db] bg-white", className)}
    >
      <div className="flex items-center justify-between border-b border-[#e5e2db] p-5">
        <div className="flex items-center gap-2">
          <SlidersHorizontal className="size-4 text-[#315c4c]" />
          <h2 className="text-sm font-black text-[#17221d]">فیلتر محصولات</h2>
        </div>

        {hasFilters && (
          <button
            type="button"
            onClick={onReset}
            className="flex items-center gap-1.5 text-xs font-bold text-[#c65b5b] transition-colors hover:text-[#ae4848]"
          >
            <RotateCcw className="size-3.5" />
            حذف فیلترها
          </button>
        )}
      </div>

      <div className="divide-y divide-[#e5e2db]">
        <section className="p-5">
          <h3 className="text-sm font-black text-[#17221d]">محدوده قیمت</h3>

          <div className="mt-4 grid grid-cols-2 gap-2">
            <Input
              value={minPrice}
              onChange={(event) => setMinPrice(event.target.value)}
              type="number"
              inputMode="numeric"
              placeholder="حداقل"
              aria-label="حداقل قیمت"
            />

            <Input
              value={maxPrice}
              onChange={(event) => setMaxPrice(event.target.value)}
              type="number"
              inputMode="numeric"
              placeholder="حداکثر"
              aria-label="حداکثر قیمت"
            />
          </div>

          <Button
            type="button"
            variant="outline"
            size="sm"
            fullWidth
            className="mt-3"
            onClick={applyPrice}
          >
            اعمال قیمت
          </Button>
        </section>

        <section className="p-5">
          <h3 className="text-sm font-black text-[#17221d]">امتیاز کاربران</h3>

          <div className="mt-3 space-y-1">
            {ratings.map((rating) => (
              <button
                key={rating}
                type="button"
                onClick={() =>
                  updateFilter(
                    "rating",
                    filters.rating === rating ? undefined : rating,
                  )
                }
                className={cn(
                  "flex w-full items-center gap-3 rounded-xl px-3 py-2.5 text-sm transition-colors",
                  filters.rating === rating
                    ? "bg-[#e7efeb] text-[#315c4c]"
                    : "text-[#777b77] hover:bg-[#f8f7f4]",
                )}
              >
                <span className="flex items-center gap-0.5 text-[#c8a46b]">
                  {Array.from({ length: 5 }).map((_, index) => (
                    <span key={index}>{index < rating ? "★" : "☆"}</span>
                  ))}
                </span>

                <span className="font-bold">
                  {rating.toLocaleString("fa-IR")} و بالاتر
                </span>
              </button>
            ))}
          </div>
        </section>
      </div>
    </aside>
  );
}
