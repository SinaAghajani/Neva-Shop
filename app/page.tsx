import type { Metadata } from "next";
import { Hero } from "@/components/home/Hero";
import { CategorySection } from "@/components/home/CategorySection";
import { FeaturedProducts } from "@/components/home/FeaturedProducts";
import { NewArrivals } from "@/components/home/NewArrivals";
import { PromoBanner } from "@/components/home/PromoBanner";
import { Newsletter } from "@/components/home/Newsletter";

export const metadata: Metadata = {
  title: "فروشگاه مدرن",
  description:
    "Neva؛ فروشگاهی مدرن برای کشف و خرید محصولات منتخب با تجربه‌ای ساده و لذت‌بخش.",
};

export default function HomePage() {
  return (
    <div className="overflow-hidden">
      <Hero />

      <CategorySection />

      <FeaturedProducts />

      <PromoBanner />

      <NewArrivals />

      <Newsletter />
    </div>
  );
}
