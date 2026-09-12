"use client";

import type { ButtonHTMLAttributes, ReactNode } from "react";
import { Loader2 } from "lucide-react";
import { cn } from "@/lib/utils";

type ButtonVariant =
  | "primary"
  | "secondary"
  | "outline"
  | "ghost"
  | "danger"
  | "link";

type ButtonSize = "sm" | "md" | "lg" | "icon";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children?: ReactNode;
  variant?: ButtonVariant;
  size?: ButtonSize;
  loading?: boolean;
  fullWidth?: boolean;
}

const variants: Record<ButtonVariant, string> = {
  primary:
    "bg-[#315c4c] text-white hover:bg-[#24483b] focus-visible:ring-[#315c4c]/30",
  secondary:
    "bg-[#f4ead8] text-[#17221d] hover:bg-[#eadcc4] focus-visible:ring-[#c8a46b]/30",
  outline:
    "border border-[#e5e2db] bg-white text-[#17221d] hover:border-[#315c4c] hover:text-[#315c4c] focus-visible:ring-[#315c4c]/20",
  ghost:
    "bg-transparent text-[#17221d] hover:bg-[#f1f0ec] focus-visible:ring-[#315c4c]/20",
  danger:
    "bg-[#c65b5b] text-white hover:bg-[#ae4848] focus-visible:ring-[#c65b5b]/30",
  link: "bg-transparent p-0 text-[#315c4c] underline-offset-4 hover:underline focus-visible:ring-0",
};

const sizes: Record<ButtonSize, string> = {
  sm: "h-9 rounded-xl px-3.5 text-xs",
  md: "h-11 rounded-xl px-5 text-sm",
  lg: "h-13 rounded-2xl px-7 text-sm",
  icon: "h-11 w-11 rounded-xl p-0",
};

export function Button({
  children,
  variant = "primary",
  size = "md",
  loading = false,
  fullWidth = false,
  className,
  disabled,
  type = "button",
  ...props
}: ButtonProps) {
  return (
    <button
      type={type}
      disabled={disabled || loading}
      className={cn(
        "inline-flex shrink-0 items-center justify-center gap-2 font-bold",
        "transition-all duration-200",
        "focus-visible:outline-none focus-visible:ring-4",
        "disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50",
        variants[variant],
        sizes[size],
        fullWidth && "w-full",
        className,
      )}
      {...props}
    >
      {loading && <Loader2 className="size-4 animate-spin" />}
      {children}
    </button>
  );
}
