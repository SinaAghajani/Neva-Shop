"use client";

import Link from "next/link";
import { ArrowLeft, Phone } from "lucide-react";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { loginSchema, type LoginInput } from "@/lib/validations";
import { useAuthStore } from "@/store/auth.store";
import { ROUTES } from "@/lib/constants";
import { Button } from "@/components/ui/Button";

const inputClass =
  "w-full rounded-2xl border border-[var(--border)] bg-[var(--background)] px-4 py-3 text-sm text-[var(--foreground)] outline-none transition placeholder:text-[var(--muted)] focus:border-[var(--primary)] focus:ring-4 focus:ring-[var(--primary-light)]";

export default function LoginForm() {
  const router = useRouter();
  const setUser = useAuthStore((state) => state.setUser);

  const [serverError, setServerError] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const form = useForm<LoginInput>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      phoneOrEmail: "",
      password: "",
      rememberMe: false,
    },
  });

  const handleSubmit = async (values: LoginInput) => {
    setIsSubmitting(true);
    setServerError("");

    try {
      await new Promise((resolve) => setTimeout(resolve, 800));

      const now = new Date().toISOString();

      setUser({
        id: "user-demo",
        username: values.phoneOrEmail,
        profile: {
          firstName: "کاربر",
          lastName: "Neva",
          phone: values.phoneOrEmail,
          email: values.phoneOrEmail.includes("@")
            ? values.phoneOrEmail
            : undefined,
        },
        role: "customer",
        status: "active",
        addresses: [],
        createdAt: now,
        updatedAt: now,
      });

      router.push(ROUTES.account);
    } catch {
      setServerError("ورود انجام نشد. لطفاً دوباره تلاش کنید.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form
      onSubmit={form.handleSubmit(handleSubmit)}
      className="space-y-5"
      noValidate
    >
      {serverError && (
        <div className="rounded-2xl border border-red-100 bg-red-50 px-4 py-3 text-sm text-(--danger)">
          {serverError}
        </div>
      )}

      <div>
        <label
          htmlFor="phoneOrEmail"
          className="mb-2 block text-sm font-semibold"
        >
          شماره موبایل یا ایمیل
        </label>

        <div className="relative">
          <Phone className="absolute right-4 top-1/2 h-5 w-5 -translate-y-1/2 text-(--muted)" />

          <input
            id="phoneOrEmail"
            type="text"
            dir="ltr"
            autoComplete="username"
            placeholder="09xxxxxxxxx یا example@email.com"
            {...form.register("phoneOrEmail")}
            className={`${inputClass} pr-12`}
          />
        </div>

        {form.formState.errors.phoneOrEmail?.message && (
          <p className="mt-1.5 text-xs text-(--danger)">
            {form.formState.errors.phoneOrEmail.message}
          </p>
        )}
      </div>

      <div>
        <div className="mb-2 flex items-center justify-between gap-3">
          <label htmlFor="password" className="text-sm font-semibold">
            رمز عبور
          </label>

          <Link
            href={ROUTES.forgotPassword}
            className="text-xs font-semibold text-(--primary) transition hover:text-(--primary-dark)"
          >
            رمز عبور را فراموش کرده‌اید؟
          </Link>
        </div>

        <input
          id="password"
          type="password"
          autoComplete="current-password"
          placeholder="رمز عبور خود را وارد کنید"
          {...form.register("password")}
          className={inputClass}
        />

        {form.formState.errors.password?.message && (
          <p className="mt-1.5 text-xs text-(--danger)">
            {form.formState.errors.password.message}
          </p>
        )}
      </div>

      <label className="flex cursor-pointer items-center gap-2 text-sm text-(--muted)">
        <input
          type="checkbox"
          {...form.register("rememberMe")}
          className="size-4 rounded border-(--border) accent-(--primary)"
        />

        <span>مرا به خاطر بسپار</span>
      </label>

      <Button
        type="submit"
        className="h-13 w-full rounded-2xl"
        loading={isSubmitting}
      >
        {isSubmitting ? "در حال ورود..." : "ورود به حساب"}

        {!isSubmitting && <ArrowLeft className="h-5 w-5" />}
      </Button>

      <p className="text-center text-sm text-(--muted)">
        حساب کاربری ندارید؟{" "}
        <Link
          href={ROUTES.register}
          className="font-bold text-(--primary) hover:text-(--primary-dark)"
        >
          ثبت‌نام کنید
        </Link>
      </p>
    </form>
  );
}
