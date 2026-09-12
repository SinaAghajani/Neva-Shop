"use client";

import { useEffect, type ReactNode } from "react";
import { X } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface ModalProps {
  open: boolean;
  onClose: () => void;
  children: ReactNode;
  title?: string;
  description?: string;
  className?: string;
  showCloseButton?: boolean;
  closeOnOverlay?: boolean;
}

export function Modal({
  open,
  onClose,
  children,
  title,
  description,
  className,
  showCloseButton = true,
  closeOnOverlay = true,
}: ModalProps) {
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

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="fixed inset-0 z-100 flex items-center justify-center p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <button
            type="button"
            aria-label="بستن"
            className="absolute inset-0 cursor-default bg-[#17221d]/45 backdrop-blur-sm"
            onClick={closeOnOverlay ? onClose : undefined}
          />

          <motion.div
            role="dialog"
            aria-modal="true"
            initial={{ opacity: 0, scale: 0.96, y: 12 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.96, y: 12 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className={cn(
              "relative z-10 max-h-[90vh] w-full max-w-lg overflow-y-auto rounded-3xl border border-[#e5e2db] bg-white shadow-2xl",
              className,
            )}
          >
            {(title || description || showCloseButton) && (
              <div className="flex items-start justify-between gap-4 border-b border-[#e5e2db] p-5 sm:p-6">
                <div className="min-w-0">
                  {title && (
                    <h2 className="text-lg font-black text-[#17221d]">
                      {title}
                    </h2>
                  )}

                  {description && (
                    <p className="mt-1.5 text-sm leading-6 text-[#777b77]">
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

            <div className="p-5 sm:p-6">{children}</div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
