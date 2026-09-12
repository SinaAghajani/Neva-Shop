"use client";

import { Minus, Plus } from "lucide-react";
import { cn } from "@/lib/utils";

interface QuantitySelectorProps {
  value: number;
  onChange: (value: number) => void;
  min?: number;
  max?: number;
  size?: "sm" | "md";
  disabled?: boolean;
}

export function QuantitySelector({
  value,
  onChange,
  min = 1,
  max = 99,
  size = "md",
  disabled = false,
}: QuantitySelectorProps) {
  const isSmall = size === "sm";

  return (
    <div
      className={cn(
        "flex items-center rounded-xl border border-[#e5e2db] bg-white",
        isSmall ? "h-9" : "h-11",
      )}
    >
      <button
        type="button"
        aria-label="افزایش تعداد"
        disabled={disabled || value >= max}
        onClick={() => onChange(Math.min(value + 1, max))}
        className={cn(
          "flex items-center justify-center text-[#555a56] transition-colors hover:text-[#315c4c] disabled:cursor-not-allowed disabled:opacity-40",
          isSmall ? "size-8" : "size-10",
        )}
      >
        <Plus className={isSmall ? "size-3.5" : "size-4"} />
      </button>

      <span
        className={cn(
          "text-center font-black text-[#17221d]",
          isSmall ? "w-6 text-xs" : "w-7 text-sm",
        )}
      >
        {value.toLocaleString("fa-IR")}
      </span>

      <button
        type="button"
        aria-label="کاهش تعداد"
        disabled={disabled || value <= min}
        onClick={() => onChange(Math.max(value - 1, min))}
        className={cn(
          "flex items-center justify-center text-[#555a56] transition-colors hover:text-[#315c4c] disabled:cursor-not-allowed disabled:opacity-40",
          isSmall ? "size-8" : "size-10",
        )}
      >
        <Minus className={isSmall ? "size-3.5" : "size-4"} />
      </button>
    </div>
  );
}
