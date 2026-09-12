import type { HTMLAttributes, ReactNode } from "react";
import { cn } from "@/lib/utils";

type BadgeVariant =
  | "default"
  | "primary"
  | "secondary"
  | "success"
  | "danger"
  | "warning"
  | "outline";

interface BadgeProps extends HTMLAttributes<HTMLSpanElement> {
  children: ReactNode;
  variant?: BadgeVariant;
}

const variants: Record<BadgeVariant, string> = {
  default: "bg-[#f1f0ec] text-[#555a56]",
  primary: "bg-[#e7efeb] text-[#315c4c]",
  secondary: "bg-[#f4ead8] text-[#806334]",
  success: "bg-[#e6f1ea] text-[#3d7a5b]",
  danger: "bg-[#f8e7e7] text-[#c65b5b]",
  warning: "bg-[#fff1d9] text-[#956d29]",
  outline: "border border-[#e5e2db] bg-white text-[#555a56]",
};

export function Badge({
  children,
  variant = "default",
  className,
  ...props
}: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center justify-center rounded-full px-3 py-1 text-xs font-bold leading-5",
        variants[variant],
        className,
      )}
      {...props}
    >
      {children}
    </span>
  );
}
