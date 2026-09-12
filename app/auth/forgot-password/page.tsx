import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, KeyRound } from "lucide-react";
import ForgotPasswordForm from "@/components/auth/ForgotPasswordForm";

export const metadata: Metadata = {
  title: "بازیابی رمز عبور",
  description: "بازیابی رمز عبور حساب کاربری Neva",
};

export default function ForgotPasswordPage() {
  return (
    <main className="min-h-screen py-10 md:py-16">
      <div className="mx-auto w-full max-w-md px-4">
        <Link
          href="/auth/login"
          className="mb-8 inline-flex items-center gap-2 text-sm text-(--muted) transition-colors hover:text-(--primary)"
        >
          <ArrowRight className="h-4 w-4" />
          بازگشت به ورود
        </Link>

        <div className="surface rounded-3xl p-6 md:p-8">
          <div className="mb-8 text-center">
            <div className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-(--secondary-light) text-(--foreground)">
              <KeyRound className="h-7 w-7" />
            </div>

            <h1 className="text-2xl font-bold text-(--foreground)">
              بازیابی رمز عبور
            </h1>

            <p className="mt-2 text-sm leading-6 text-(--muted)">
              شماره موبایل یا ایمیل حساب خود را وارد کنید تا مراحل بازیابی را
              انجام دهید.
            </p>
          </div>

          <ForgotPasswordForm />
        </div>
      </div>
    </main>
  );
}
