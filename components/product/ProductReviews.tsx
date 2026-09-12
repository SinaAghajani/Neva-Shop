"use client";

import { useMemo } from "react";
import { MessageSquare, Star } from "lucide-react";
import type { ProductReview } from "@/types/product";
import { formatDate } from "@/lib/utils";
import { ProductRating } from "@/components/product/ProductRating";
import { EmptyState } from "@/components/ui/EmptyState";

interface ProductReviewsProps {
  reviews?: ProductReview[];
  rating: {
    average: number;
    count: number;
  };
}

export function ProductReviews({ reviews = [], rating }: ProductReviewsProps) {
  const distribution = useMemo(() => {
    return [5, 4, 3, 2, 1].map((value) => ({
      rating: value,
      count: reviews.filter((review) => review.rating === value).length,
    }));
  }, [reviews]);

  const reviewCount = reviews.length;

  return (
    <section className="border-t border-[#e5e2db] pt-10">
      <div className="flex flex-col gap-8 lg:flex-row">
        <div className="w-full shrink-0 lg:w-72">
          <h2 className="text-xl font-black text-[#17221d]">نظرات کاربران</h2>

          <div className="mt-6 rounded-2xl bg-[#f8f7f4] p-5">
            <div className="text-4xl font-black text-[#17221d]">
              {rating.average.toLocaleString("fa-IR")}
            </div>

            <div className="mt-2">
              <ProductRating average={rating.average} count={rating.count} />
            </div>

            <p className="mt-3 text-xs leading-6 text-[#777b77]">
              بر اساس {rating.count.toLocaleString("fa-IR")} امتیاز ثبت‌شده
            </p>
          </div>

          {reviewCount > 0 && (
            <div className="mt-5 space-y-2">
              {distribution.map((item) => {
                const percentage =
                  reviewCount > 0 ? (item.count / reviewCount) * 100 : 0;

                return (
                  <div key={item.rating} className="flex items-center gap-2">
                    <span className="w-5 text-xs font-bold text-[#777b77]">
                      {item.rating.toLocaleString("fa-IR")}
                    </span>

                    <Star className="size-3 fill-[#c8a46b] text-[#c8a46b]" />

                    <div className="h-1.5 flex-1 overflow-hidden rounded-full bg-[#e5e2db]">
                      <div
                        className="h-full rounded-full bg-[#c8a46b]"
                        style={{ width: `${percentage}%` }}
                      />
                    </div>

                    <span className="w-5 text-left text-[10px] text-[#9b9e99]">
                      {item.count.toLocaleString("fa-IR")}
                    </span>
                  </div>
                );
              })}
            </div>
          )}
        </div>

        <div className="min-w-0 flex-1">
          {reviews.length === 0 ? (
            <EmptyState
              title="هنوز نظری ثبت نشده است"
              description="اولین نفری باشید که تجربه خود را درباره این محصول ثبت می‌کند."
              icon={<MessageSquare className="size-7" />}
            />
          ) : (
            <div className="space-y-4">
              {reviews.map((review) => (
                <article
                  key={review.id}
                  className="rounded-2xl border border-[#e5e2db] bg-white p-5"
                >
                  <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                    <div>
                      <div className="flex items-center gap-3">
                        <div className="flex size-9 items-center justify-center rounded-full bg-[#e7efeb] text-xs font-black text-[#315c4c]">
                          {review.userName.charAt(0)}
                        </div>

                        <div>
                          <p className="text-sm font-black text-[#17221d]">
                            {review.userName}
                          </p>

                          <p className="mt-0.5 text-[10px] text-[#9b9e99]">
                            {formatDate(review.createdAt)}
                          </p>
                        </div>
                      </div>
                    </div>

                    <ProductRating
                      average={review.rating}
                      showCount={false}
                      size="sm"
                    />
                  </div>

                  {review.title && (
                    <h3 className="mt-5 text-sm font-black text-[#17221d]">
                      {review.title}
                    </h3>
                  )}

                  <p className="mt-2 text-sm leading-7 text-[#777b77]">
                    {review.comment}
                  </p>
                </article>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
