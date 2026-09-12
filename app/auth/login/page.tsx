import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, ShieldCheck } from "lucide-react";
import LoginForm from "@/components/auth/LoginForm";

export const metadata: Metadata = {
  title: "ورود",
  description: "ورود به حساب کاربری Neva",
};

export default function LoginPage() {
  return (
    <main className="min-h-screen py-10 md:py-16">
      <div className="mx-auto w-full max-w-md px-4">
        <Link
          href="/"
          className="mb-8 inline-flex items-center gap-2 text-sm text-(--muted) transition-colors hover:text-(--primary)"
        >
          <ArrowRight className="h-4 w-4" />
          بازگشت به فروشگاه
        </Link>

        <div className="surface rounded-3xl p-6 md:p-8">
          <div className="mb-8 text-center">
            <div className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-(--primary-light) text-(--primary)">
              <ShieldCheck className="h-7 w-7" />
            </div>

            <h1 className="text-2xl font-bold text-(--foreground)">
              ورود به حساب
            </h1>

            <p className="mt-2 text-sm text-(--muted)">
              برای ادامه خرید وارد حساب کاربری خود شوید.
            </p>
          </div>

          <LoginForm />
        </div>

        <p className="mt-6 text-center text-sm text-(--muted)">
          حساب کاربری ندارید؟
          <Link
            href="/auth/register"
            className="font-semibold text-(--primary) hover:text-(--primary-dark)"
          >
            ثبت‌نام کنید
          </Link>
        </p>
      </div>
    </main>
  );
}
