import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, Tag } from "lucide-react";
import { banners } from "@/data/banners";
import { Container } from "@/components/layout/Container";

export function PromoBanner() {
  const banner = banners[2];

  return (
    <section className="py-4 sm:py-6">
      <Container>
        <div className="relative overflow-hidden rounded-4xl bg-[#f4ead8]">
          <div className="absolute inset-y-0 left-0 hidden w-2/5 sm:block">
            <Image
              src={banner.image}
              alt={banner.title}
              fill
              sizes="40vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-linear-to-l from-[#f4ead8] via-[#f4ead8]/20 to-transparent" />
          </div>

          <div className="relative z-10 flex min-h-70 items-center">
            <div className="w-full max-w-2xl px-6 py-10 sm:px-10 lg:px-14">
              <span className="inline-flex items-center gap-2 rounded-full bg-white/70 px-3 py-1.5 text-xs font-black text-[#806334]">
                <Tag className="size-3.5" />
                {banner.badge}
              </span>

              <p className="mt-5 text-sm font-bold text-[#806334]">
                {banner.subtitle}
              </p>

              <h2 className="mt-2 text-2xl font-black leading-8 text-[#17221d] sm:text-3xl">
                {banner.title}
              </h2>

              <p className="mt-3 max-w-lg text-sm leading-7 text-[#777b77]">
                {banner.description}
              </p>

              <Link
                href={banner.href}
                className="mt-6 inline-flex h-11 items-center gap-2 rounded-xl bg-[#315c4c] px-5 text-sm font-black text-white! transition-all hover:bg-[#24483b] hover:shadow-lg"
              >
                مشاهده پیشنهادها
                <ArrowLeft className="size-4 text-white!" />
              </Link>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
