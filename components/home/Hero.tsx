import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, Sparkles } from "lucide-react";
import { featuredBanner } from "@/data/banners";
import { Container } from "@/components/layout/Container";

export function Hero() {
  return (
    <section className="relative overflow-hidden py-6 sm:py-8 lg:py-10">
      <Container>
        <div className="relative min-h-[520px] overflow-hidden rounded-[2.5rem] bg-[#315c4c] shadow-xl shadow-[#315c4c]/10 lg:min-h-[600px]">
          <div className="absolute inset-0">
            <Image
              src={featuredBanner.image}
              alt={featuredBanner.title}
              fill
              priority
              sizes="(max-width: 1280px) 100vw, 1280px"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-l from-[#17221d]/85 via-[#17221d]/55 to-[#17221d]/10" />
          </div>

          <div className="relative z-10 flex min-h-[520px] items-center lg:min-h-[600px]">
            <div className="w-full max-w-2xl px-6 py-14 sm:px-10 lg:px-16">
              <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-2 text-xs font-bold text-white backdrop-blur-md">
                <Sparkles className="size-4" />
                {featuredBanner.badge}
              </div>

              <p className="mb-4 text-sm font-bold text-[#d9c49e] sm:text-base">
                {featuredBanner.subtitle}
              </p>

              <h1 className="text-balance text-4xl font-black leading-[1.25] tracking-tight text-white sm:text-5xl lg:text-6xl">
                {featuredBanner.title}
              </h1>

              <p className="text-pretty mt-6 max-w-xl text-sm leading-8 text-white/75 sm:text-base sm:leading-9">
                {featuredBanner.description}
              </p>

              <Link
                href={featuredBanner.href}
                className="mt-9 inline-flex h-12 items-center justify-center gap-2 rounded-2xl bg-white px-6 text-sm font-black text-[#315c4c] transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#f4ead8] hover:shadow-xl"
              >
                مشاهده کالکشن
                <ArrowLeft className="size-4" />
              </Link>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
