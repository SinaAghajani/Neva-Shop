"use client";

import { useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight, Maximize2 } from "lucide-react";
import type { ProductImage } from "@/types/product";
import { cn } from "@/lib/utils";

interface ProductGalleryProps {
  images: ProductImage[];
  productName: string;
}

export function ProductGallery({ images, productName }: ProductGalleryProps) {
  const safeImages = images.length > 0 ? images : [];
  const [activeIndex, setActiveIndex] = useState(0);

  const activeImage = safeImages[activeIndex];

  const goNext = () => {
    setActiveIndex((current) =>
      current === safeImages.length - 1 ? 0 : current + 1,
    );
  };

  const goPrevious = () => {
    setActiveIndex((current) =>
      current === 0 ? safeImages.length - 1 : current - 1,
    );
  };

  if (!activeImage) {
    return (
      <div className="flex aspect-square items-center justify-center rounded-3xl bg-[#f1f0ec] text-sm text-[#777b77]">
        تصویری برای این محصول وجود ندارد.
      </div>
    );
  }

  return (
    <div className="space-y-3">
      <div className="group relative aspect-square overflow-hidden rounded-3xl bg-[#f1f0ec]">
        <Image
          src={activeImage.url}
          alt={activeImage.alt || productName}
          fill
          priority
          sizes="(max-width: 1024px) 100vw, 55vw"
          className="object-cover transition-transform duration-500 group-hover:scale-[1.02]"
        />

        {safeImages.length > 1 && (
          <>
            <button
              type="button"
              onClick={goNext}
              aria-label="تصویر بعدی"
              className="absolute right-4 top-1/2 flex size-10 -translate-y-1/2 items-center justify-center rounded-full bg-white/90 text-[#17221d] opacity-0 shadow-lg backdrop-blur-sm transition-opacity group-hover:opacity-100"
            >
              <ChevronRight className="size-5" />
            </button>

            <button
              type="button"
              onClick={goPrevious}
              aria-label="تصویر قبلی"
              className="absolute left-4 top-1/2 flex size-10 -translate-y-1/2 items-center justify-center rounded-full bg-white/90 text-[#17221d] opacity-0 shadow-lg backdrop-blur-sm transition-opacity group-hover:opacity-100"
            >
              <ChevronLeft className="size-5" />
            </button>
          </>
        )}

        <button
          type="button"
          aria-label="نمایش تصویر"
          className="absolute left-4 top-4 flex size-10 items-center justify-center rounded-xl bg-white/90 text-[#555a56] opacity-0 shadow-md backdrop-blur-sm transition-opacity group-hover:opacity-100"
        >
          <Maximize2 className="size-4" />
        </button>
      </div>

      {safeImages.length > 1 && (
        <div className="grid grid-cols-5 gap-2 sm:grid-cols-6">
          {safeImages.map((image, index) => (
            <button
              key={image.id}
              type="button"
              onClick={() => setActiveIndex(index)}
              className={cn(
                "relative aspect-square overflow-hidden rounded-xl border-2 bg-[#f1f0ec] transition-all",
                index === activeIndex
                  ? "border-[#315c4c]"
                  : "border-transparent hover:border-[#d5d1c8]",
              )}
            >
              <Image
                src={image.url}
                alt={image.alt || `${productName} ${index + 1}`}
                fill
                sizes="120px"
                className="object-cover"
              />
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
