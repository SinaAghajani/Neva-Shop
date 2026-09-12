import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Settings } from "lucide-react";
import AccountSidebar from "@/components/account/AccountSidebar";
import ProfileForm from "@/components/account/ProfileForm";
import { Container } from "@/components/layout/Container";

export const metadata: Metadata = {
  title: "تنظیمات حساب",
  description: "مدیریت اطلاعات حساب کاربری در Neva",
};

export default function AccountSettingsPage() {
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
          <span className="text-(--foreground)">تنظیمات</span>
        </div>

        <div className="grid gap-6 lg:grid-cols-[260px_minmax(0,1fr)]">
          <AccountSidebar />

          <div className="min-w-0">
            <div className="mb-6 flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-(--primary-light) text-(--primary)">
                <Settings className="h-6 w-6" />
              </div>

              <div>
                <h1 className="text-2xl font-bold text-(--foreground)">
                  تنظیمات حساب
                </h1>
                <p className="mt-1 text-sm text-(--muted)">
                  اطلاعات شخصی حساب خود را مدیریت کنید.
                </p>
              </div>
            </div>

            <div className="surface rounded-3xl p-6 md:p-8">
              <ProfileForm />
            </div>
          </div>
        </div>
      </Container>
    </main>
  );
}
