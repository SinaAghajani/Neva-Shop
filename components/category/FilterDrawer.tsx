"use client";

import { FilterSidebar } from "@/components/category/FilterSidebar";
import { Drawer } from "@/components/ui/Drawer";
import type { ProductFilters } from "@/types/product";

interface FilterDrawerProps {
  open: boolean;
  onClose: () => void;
  filters: ProductFilters;
  onChange: (filters: ProductFilters) => void;
  onReset: () => void;
}

export function FilterDrawer({
  open,
  onClose,
  filters,
  onChange,
  onReset,
}: FilterDrawerProps) {
  return (
    <Drawer
      open={open}
      onClose={onClose}
      title="فیلتر محصولات"
      description="محصولات موردنظر خود را سریع‌تر پیدا کنید."
      side="right"
      width="420px"
    >
      <div className="p-4">
        <FilterSidebar
          filters={filters}
          onChange={onChange}
          onReset={onReset}
          className="border-0"
        />

        <button
          type="button"
          onClick={onClose}
          className="mt-4 h-12 w-full rounded-xl bg-[#315c4c] text-sm font-black text-white transition-colors hover:bg-[#24483b]"
        >
          نمایش محصولات
        </button>
      </div>
    </Drawer>
  );
}
