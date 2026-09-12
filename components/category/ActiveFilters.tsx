"use client";

import { X } from "lucide-react";
import type { ProductFilters } from "@/types/product";
import { cn } from "@/lib/utils";

interface ActiveFiltersProps {
  filters: ProductFilters;
  onChange: (filters: ProductFilters) => void;
  className?: string;
}

export function ActiveFilters({
  filters,
  onChange,
  className,
}: ActiveFiltersProps) {
  const activeFilters: Array<{
    key: string;
    label: string;
    clear: () => void;
  }> = [];

  if (filters.minPrice !== undefined) {
    activeFilters.push({
      key: "minPrice",
      label: `از ${filters.minPrice.toLocaleString("fa-IR")} تومان`,
      clear: () =>
        onChange({
          ...filters,
          minPrice: undefined,
          page: 1,
        }),
    });
  }

  if (filters.maxPrice !== undefined) {
    activeFilters.push({
      key: "maxPrice",
      label: `تا ${filters.maxPrice.toLocaleString("fa-IR")} تومان`,
      clear: () =>
        onChange({
          ...filters,
          maxPrice: undefined,
          page: 1,
        }),
    });
  }

  if (filters.rating !== undefined) {
    activeFilters.push({
      key: "rating",
      label: `امتیاز ${filters.rating.toLocaleString("fa-IR")} به بالا`,
      clear: () =>
        onChange({
          ...filters,
          rating: undefined,
          page: 1,
        }),
    });
  }

  if (filters.search) {
    activeFilters.push({
      key: "search",
      label: `جستجو: ${filters.search}`,
      clear: () =>
        onChange({
          ...filters,
          search: undefined,
          page: 1,
        }),
    });
  }

  if (filters.brandId) {
    activeFilters.push({
      key: "brandId",
      label: "برند انتخاب شده",
      clear: () =>
        onChange({
          ...filters,
          brandId: undefined,
          page: 1,
        }),
    });
  }

  if (activeFilters.length === 0) return null;

  return (
    <div className={cn("flex flex-wrap items-center gap-2", className)}>
      <span className="text-xs font-bold text-[#777b77]">فیلترهای فعال:</span>

      {activeFilters.map((filter) => (
        <button
          key={filter.key}
          type="button"
          onClick={filter.clear}
          className="inline-flex items-center gap-1.5 rounded-full bg-[#e7efeb] px-3 py-1.5 text-xs font-bold text-[#315c4c] transition-colors hover:bg-[#dce9e3]"
        >
          {filter.label}
          <X className="size-3.5" />
        </button>
      ))}
    </div>
  );
}
