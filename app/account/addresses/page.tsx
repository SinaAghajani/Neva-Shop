import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, MapPin, Plus } from "lucide-react";
import AccountSidebar from "@/components/account/AccountSidebar";
import AddressCard from "@/components/account/AddressCard";
import { Container } from "@/components/layout/Container";

export const metadata: Metadata = {
  title: "آدرس‌های من",
  description: "مدیریت آدرس‌های ارسال در Neva",
};

export default function AddressesPage() {
  return (
    <main className="min-h-screen py-8 md:py-12">
      <Container>
        <div className="mb-6 flex items-center gap-2 text-sm text-(--muted)">
          <Link href="/" className="hover:text-(--primary)">
            خانه
          </Link>
          <ArrowRight className="h-4 w-4" />
          <Link href="/account" className="hover:text-(--primary)">
            حساب کاربری
          </Link>
          <ArrowRight className="h-4 w-4" />
          <span className="text-(--foreground)">آدرس‌ها</span>
        </div>

        <div className="grid gap-6 lg:grid-cols-[260px_minmax(0,1fr)]">
          <AccountSidebar />

          <div className="min-w-0">
            <div className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              <div className="flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-(--primary-light) text-(--primary)">
                  <MapPin className="h-6 w-6" />
                </div>

                <div>
                  <h1 className="text-2xl font-bold text-(--foreground)">
                    آدرس‌های من
                  </h1>
                  <p className="mt-1 text-sm text-(--muted)">
                    آدرس‌های ارسال خود را مدیریت کنید.
                  </p>
                </div>
              </div>

              <button
                type="button"
                className="inline-flex h-11 items-center justify-center gap-2 rounded-xl bg-(--primary) px-5 text-sm font-semibold text-white transition-colors hover:bg-(--primary-dark)"
              >
                <Plus className="h-5 w-5" />
                افزودن آدرس
              </button>
            </div>

            <div className="grid gap-4">
              <AddressCard
                address={{
                  id: "address-1",
                  title: "آدرس اصلی",
                  firstName: "کاربر",
                  lastName: "Neva",
                  phone: "09120000000",
                  province: "تهران",
                  city: "تهران",
                  postalCode: "1234567890",
                  address: "آدرس نمونه برای نمایش رابط کاربری فروشگاه",
                  isDefault: true,
                }}
              />
            </div>
          </div>
        </div>
      </Container>
    </main>
  );
}
