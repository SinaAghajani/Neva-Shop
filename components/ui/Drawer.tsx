"use client";

import { useEffect, type ReactNode } from "react";
import { X } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface DrawerProps {
  open: boolean;
  onClose: () => void;
  children: ReactNode;
  title?: string;
  description?: string;
  side?: "left" | "right";
  width?: string;
  className?: string;
  showCloseButton?: boolean;
  closeOnOverlay?: boolean;
}

export function Drawer({
  open,
  onClose,
  children,
  title,
  description,
  side = "right",
  width = "420px",
  className,
  showCloseButton = true,
  closeOnOverlay = true,
}: DrawerProps) {
  useEffect(() => {
    if (!open) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
    };

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [open, onClose]);

  const isRight = side === "right";

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="fixed inset-0 z-[90]"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <button
            type="button"
            aria-label="بستن"
            className="absolute inset-0 cursor-default bg-[#17221d]/40 backdrop-blur-sm"
            onClick={closeOnOverlay ? onClose : undefined}
          />

          <motion.aside
            initial={{ x: isRight ? "100%" : "-100%" }}
            animate={{ x: 0 }}
            exit={{ x: isRight ? "100%" : "-100%" }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            style={{ width }}
            className={cn(
              "absolute inset-y-0 bg-white shadow-2xl",
              isRight ? "right-0" : "left-0",
              "flex max-w-[calc(100%-1rem)] flex-col",
              className,
            )}
          >
            {(title || description || showCloseButton) && (
              <div className="flex shrink-0 items-start justify-between gap-4 border-b border-[#e5e2db] p-5">
                <div className="min-w-0">
                  {title && (
                    <h2 className="text-lg font-black text-[#17221d]">
                      {title}
                    </h2>
                  )}

                  {description && (
                    <p className="mt-1 text-sm leading-6 text-[#777b77]">
                      {description}
                    </p>
                  )}
                </div>

                {showCloseButton && (
                  <button
                    type="button"
                    onClick={onClose}
                    aria-label="بستن"
                    className="flex size-9 shrink-0 items-center justify-center rounded-xl text-[#777b77] transition-colors hover:bg-[#f1f0ec] hover:text-[#17221d]"
                  >
                    <X className="size-5" />
                  </button>
                )}
              </div>
            )}

            <div className="min-h-0 flex-1 overflow-y-auto">{children}</div>
          </motion.aside>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
