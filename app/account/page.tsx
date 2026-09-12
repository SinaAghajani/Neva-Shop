import type { Metadata } from "next";
import Link from "next/link";
import {
  ChevronLeft,
  Heart,
  MapPin,
  Package,
  Settings,
  UserRound,
} from "lucide-react";
import AccountSidebar from "@/components/account/AccountSidebar";
import { Container } from "@/components/layout/Container";

export const metadata: Metadata = {
  title: "حساب کاربری",
  description: "مدیریت حساب کاربری در Neva",
};

const quickLinks = [
  {
    title: "سفارش‌های من",
    description: "مشاهده و پیگیری سفارش‌ها",
    href: "/account/orders",
    icon: Package,
  },
  {
    title: "علاقه‌مندی‌ها",
    description: "محصولات ذخیره‌شده شما",
    href: "/account/wishlist",
    icon: Heart,
  },
  {
    title: "آدرس‌ها",
    description: "مدیریت آدرس‌های ارسال",
    href: "/account/addresses",
    icon: MapPin,
  },
  {
    title: "تنظیمات حساب",
    description: "ویرایش اطلاعات حساب",
    href: "/account/settings",
    icon: Settings,
  },
];

export default function AccountPage() {
  return (
    <main className="min-h-screen py-8 md:py-12">
      <Container>
        <div className="grid gap-6 lg:grid-cols-[260px_minmax(0,1fr)]">
          <AccountSidebar />

          <div className="min-w-0">
            <div className="surface rounded-3xl p-6 md:p-8">
              <div className="flex flex-col gap-5 sm:flex-row sm:items-center">
                <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-(--primary-light) text-(--primary)">
                  <UserRound className="h-8 w-8" />
                </div>

                <div>
                  <p className="text-sm text-(--muted)">خوش آمدید</p>
                  <h1 className="mt-1 text-2xl font-bold text-(--foreground)">
                    حساب کاربری من
                  </h1>
                  <p className="mt-2 text-sm text-(--muted)">
                    از این بخش می‌توانید اطلاعات حساب و سفارش‌های خود را مدیریت
                    کنید.
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              {quickLinks.map((item) => {
                const Icon = item.icon;

                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="surface group rounded-3xl p-5 transition-all hover:-translate-y-0.5 hover:shadow-lg"
                  >
                    <div className="flex items-start justify-between gap-4">
                      <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-(--primary-light) text-(--primary)">
                        <Icon className="h-5 w-5" />
                      </div>

                      <ChevronLeft className="h-5 w-5 text-(--muted) transition-transform group-hover:-translate-x-1 group-hover:text-(--primary)" />
                    </div>

                    <h2 className="mt-5 font-bold text-(--foreground)">
                      {item.title}
                    </h2>

                    <p className="mt-2 text-sm text-(--muted)">
                      {item.description}
                    </p>
                  </Link>
                );
              })}
            </div>
          </div>
        </div>
      </Container>
    </main>
  );
}
