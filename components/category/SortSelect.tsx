"use client";

import { ChevronDown } from "lucide-react";
import { PRODUCT_SORT_OPTIONS } from "@/lib/constants";
import type { ProductSort } from "@/types/product";

interface SortSelectProps {
  value?: ProductSort;
  onChange: (value: ProductSort) => void;
  className?: string;
}

export function SortSelect({
  value = "newest",
  onChange,
  className = "",
}: SortSelectProps) {
  return (
    <div className={`relative ${className}`}>
      <label htmlFor="product-sort" className="sr-only">
        مرتب‌سازی محصولات
      </label>

      <select
        id="product-sort"
        value={value}
        onChange={(event) => onChange(event.target.value as ProductSort)}
        className="h-11 appearance-none rounded-xl border border-[#e5e2db] bg-white py-0 pl-10 pr-4 text-sm font-bold text-[#555a56] outline-none transition-colors focus:border-[#315c4c] focus:ring-4 focus:ring-[#315c4c]/10"
      >
        {PRODUCT_SORT_OPTIONS.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>

      <ChevronDown className="pointer-events-none absolute left-3 top-1/2 size-4 -translate-y-1/2 text-[#777b77]" />
    </div>
  );
}
