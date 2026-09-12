import { Star } from "lucide-react";
import { cn } from "@/lib/utils";

interface ProductRatingProps {
  average: number;
  count?: number;
  showCount?: boolean;
  size?: "sm" | "md" | "lg";
}

const sizes = {
  sm: "size-3",
  md: "size-4",
  lg: "size-5",
};

export function ProductRating({
  average,
  count,
  showCount = true,
  size = "md",
}: ProductRatingProps) {
  const normalizedRating = Math.min(5, Math.max(0, average));

  return (
    <div className="flex items-center gap-2">
      <div
        className="flex items-center gap-0.5"
        aria-label={`امتیاز ${normalizedRating} از ۵`}
      >
        {[1, 2, 3, 4, 5].map((star) => (
          <Star
            key={star}
            className={cn(
              sizes[size],
              star <= Math.round(normalizedRating)
                ? "fill-[#c8a46b] text-[#c8a46b]"
                : "text-[#d8d6cf]",
            )}
          />
        ))}
      </div>

      <span className="text-xs font-bold text-[#777b77]">
        {normalizedRating.toLocaleString("fa-IR")}
      </span>

      {showCount && count !== undefined && (
        <span className="text-xs text-[#9b9e99]">
          ({count.toLocaleString("fa-IR")})
        </span>
      )}
    </div>
  );
}
