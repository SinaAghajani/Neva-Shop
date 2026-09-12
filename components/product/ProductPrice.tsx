import { calculateDiscount, formatPrice } from "@/lib/utils";

interface ProductPriceProps {
  price: number;
  compareAtPrice?: number;
  currency?: string;
  size?: "sm" | "md" | "lg";
}

const sizes = {
  sm: {
    price: "text-sm",
    compare: "text-xs",
    badge: "text-[9px]",
  },
  md: {
    price: "text-base",
    compare: "text-xs",
    badge: "text-[10px]",
  },
  lg: {
    price: "text-2xl sm:text-3xl",
    compare: "text-sm",
    badge: "text-xs",
  },
};

export function ProductPrice({
  price,
  compareAtPrice,
  currency = "تومان",
  size = "md",
}: ProductPriceProps) {
  const discount = calculateDiscount(price, compareAtPrice);
  const styles = sizes[size];

  return (
    <div className="flex flex-wrap items-center gap-x-2 gap-y-1.5">
      <span className={`font-black text-[#315c4c] ${styles.price}`}>
        {formatPrice(price, currency)}
      </span>

      {compareAtPrice && compareAtPrice > price && (
        <>
          <span className={`text-[#9b9e99] line-through ${styles.compare}`}>
            {formatPrice(compareAtPrice, currency)}
          </span>

          {discount > 0 && (
            <span
              className={`rounded-full bg-[#f8e7e7] px-2 py-0.5 font-black text-[#c65b5b] ${styles.badge}`}
            >
              {discount.toLocaleString("fa-IR")}٪
            </span>
          )}
        </>
      )}
    </div>
  );
}
