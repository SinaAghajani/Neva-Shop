import Link from "next/link";
import { ArrowUpLeft, AtSign, Send } from "lucide-react";
import { ROUTES } from "@/lib/constants";
import { Container } from "@/components/layout/Container";

const links = [
  { label: "محصولات", href: ROUTES.products },
  { label: "دسته‌بندی‌ها", href: ROUTES.categories },
  { label: "علاقه‌مندی‌ها", href: ROUTES.wishlist },
  { label: "سبد خرید", href: ROUTES.cart },
];

export function Footer() {
  return (
    <footer className="w-full border-t border-[#e5e2db] bg-white">
      <Container className="py-14 sm:py-16">
        <div className="grid gap-10 md:grid-cols-[1.5fr_1fr_1fr]">
          <div>
            <Link
              href={ROUTES.home}
              className="inline-block text-3xl font-black tracking-tight text-[#315c4c]"
            >
              Neva
            </Link>

            <p className="mt-5 max-w-md text-sm leading-8 text-[#777b77]">
              Neva تجربه‌ای ساده، مدرن و لذت‌بخش برای انتخاب و خرید محصولات
              منتخب ارائه می‌دهد.
            </p>

            <div className="mt-6 flex items-center gap-2">
              <a
                href="#"
                aria-label="Instagram"
                className="flex size-10 items-center justify-center rounded-xl bg-[#f1f0ec] text-[#555a56] transition-colors hover:bg-[#e7efeb] hover:text-[#315c4c]"
              >
                <AtSign className="size-5" />
              </a>

              <a
                href="#"
                aria-label="Telegram"
                className="flex size-10 items-center justify-center rounded-xl bg-[#f1f0ec] text-[#555a56] transition-colors hover:bg-[#e7efeb] hover:text-[#315c4c]"
              >
                <Send className="size-5" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-sm font-black text-[#17221d]">دسترسی سریع</h3>

            <nav className="mt-5 flex flex-col gap-3.5">
              {links.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-sm text-[#777b77] transition-colors hover:text-[#315c4c]"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          <div>
            <h3 className="text-sm font-black text-[#17221d]">Neva</h3>

            <div className="mt-5 space-y-3.5 text-sm leading-7 text-[#777b77]">
              <p>انتخاب ساده، خرید بهتر.</p>
              <p>تجربه‌ای متفاوت از فروشگاه آنلاین.</p>
            </div>

            <Link
              href={ROUTES.products}
              className="mt-5 inline-flex items-center gap-2 text-sm font-bold text-[#315c4c] transition-colors hover:text-[#24483b]"
            >
              مشاهده محصولات
              <ArrowUpLeft className="size-4" />
            </Link>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-3 border-t border-[#e5e2db] pt-6 text-xs text-[#8a8d89] sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} Neva. تمامی حقوق محفوظ است.</p>

          <p>طراحی شده توسط ❤️ برای شیک پوشان.</p>
        </div>
      </Container>
    </footer>
  );
}
