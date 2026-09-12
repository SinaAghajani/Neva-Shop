"use client";

import { forwardRef, type InputHTMLAttributes, type ReactNode } from "react";
import { cn } from "@/lib/utils";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
  hint?: string;
  startIcon?: ReactNode;
  endIcon?: ReactNode;
  containerClassName?: string;
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  (
    {
      label,
      error,
      hint,
      startIcon,
      endIcon,
      className,
      containerClassName,
      id,
      ...props
    },
    ref,
  ) => {
    const inputId = id ?? props.name;

    return (
      <div className={cn("w-full", containerClassName)}>
        {label && (
          <label
            htmlFor={inputId}
            className="mb-2 block text-sm font-bold text-[#17221d]"
          >
            {label}
          </label>
        )}

        <div className="relative">
          {startIcon && (
            <span className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-[#777b77]">
              {startIcon}
            </span>
          )}

          <input
            ref={ref}
            id={inputId}
            className={cn(
              "h-12 w-full rounded-xl border bg-white px-4 text-sm text-[#17221d]",
              "outline-none transition-all duration-200",
              "placeholder:text-[#a2a49f]",
              "focus:border-[#315c4c] focus:ring-4 focus:ring-[#315c4c]/10",
              "disabled:cursor-not-allowed disabled:bg-[#f1f0ec] disabled:opacity-60",
              Boolean(startIcon) && "pr-11",
              Boolean(endIcon) && "pl-11",
              error
                ? "border-[#c65b5b] focus:border-[#c65b5b] focus:ring-[#c65b5b]/10"
                : "border-[#e5e2db]",
              className,
            )}
            {...props}
          />

          {endIcon && (
            <span className="absolute left-4 top-1/2 -translate-y-1/2 text-[#777b77]">
              {endIcon}
            </span>
          )}
        </div>

        {error ? (
          <p className="mt-2 text-xs font-medium text-[#c65b5b]">{error}</p>
        ) : hint ? (
          <p className="mt-2 text-xs text-[#777b77]">{hint}</p>
        ) : null}
      </div>
    );
  },
);

Input.displayName = "Input";
