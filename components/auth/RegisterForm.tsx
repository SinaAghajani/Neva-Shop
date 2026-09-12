"use client";

import Link from "next/link";
import { ArrowLeft, LockKeyhole, Phone, User } from "lucide-react";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { registerSchema, type RegisterInput } from "@/lib/validations";
import { useAuthStore } from "@/store/auth.store";
import { ROUTES } from "@/lib/constants";
import { Button } from "@/components/ui/Button";

const inputClass =
  "w-full rounded-2xl border border-[var(--border)] bg-[var(--background)] px-4 py-3 text-sm text-[var(--foreground)] outline-none transition placeholder:text-[var(--muted)] focus:border-[var(--primary)] focus:ring-4 focus:ring-[var(--primary-light)]";

export default function RegisterForm() {
  const router = useRouter();
  const setUser = useAuthStore((state) => state.setUser);

  const [serverError, setServerError] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const form = useForm<RegisterInput>({
    resolver: zodResolver(registerSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      phone: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
  });

  const handleSubmit = async (values: RegisterInput) => {
    setIsSubmitting(true);
    setServerError("");

    try {
      await new Promise((resolve) => setTimeout(resolve, 900));

      const now = new Date().toISOString();

      setUser({
        id: `user-${Date.now()}`,
        username: values.phone,
        profile: {
          firstName: values.firstName,
          lastName: values.lastName,
          phone: values.phone,
          email: values.email || undefined,
        },
        role: "customer",
        status: "active",
        addresses: [],
        createdAt: now,
        updatedAt: now,
      });

      router.push(ROUTES.account);
    } catch {
      setServerError("ثبت‌نام انجام نشد. لطفاً دوباره تلاش کنید.");
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

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label
            htmlFor="firstName"
            className="mb-2 block text-sm font-semibold"
          >
            نام
          </label>

          <div className="relative">
            <User className="absolute right-4 top-1/2 h-5 w-5 -translate-y-1/2 text-(--muted)" />

            <input
              id="firstName"
              autoComplete="given-name"
              placeholder="نام"
              {...form.register("firstName")}
              className={`${inputClass} pr-12`}
            />
          </div>

          {form.formState.errors.firstName?.message && (
            <p className="mt-1.5 text-xs text-(--danger)">
              {form.formState.errors.firstName.message}
            </p>
          )}
        </div>

        <div>
          <label
            htmlFor="lastName"
            className="mb-2 block text-sm font-semibold"
          >
            نام خانوادگی
          </label>

          <input
            id="lastName"
            autoComplete="family-name"
            placeholder="نام خانوادگی"
            {...form.register("lastName")}
            className={inputClass}
          />

          {form.formState.errors.lastName?.message && (
            <p className="mt-1.5 text-xs text-(--danger)">
              {form.formState.errors.lastName.message}
            </p>
          )}
        </div>
      </div>

      <div>
        <label htmlFor="phone" className="mb-2 block text-sm font-semibold">
          شماره موبایل
        </label>

        <div className="relative">
          <Phone className="absolute right-4 top-1/2 h-5 w-5 -translate-y-1/2 text-(--muted)" />

          <input
            id="phone"
            type="tel"
            dir="ltr"
            autoComplete="tel"
            placeholder="09xxxxxxxxx"
            {...form.register("phone")}
            className={`${inputClass} pr-12`}
          />
        </div>

        {form.formState.errors.phone?.message && (
          <p className="mt-1.5 text-xs text-(--danger)">
            {form.formState.errors.phone.message}
          </p>
        )}
      </div>

      <div>
        <label htmlFor="email" className="mb-2 block text-sm font-semibold">
          ایمیل
        </label>

        <input
          id="email"
          type="email"
          dir="ltr"
          autoComplete="email"
          placeholder="example@email.com"
          {...form.register("email")}
          className={inputClass}
        />

        {form.formState.errors.email?.message && (
          <p className="mt-1.5 text-xs text-(--danger)">
            {form.formState.errors.email.message}
          </p>
        )}
      </div>

      <div>
        <label htmlFor="password" className="mb-2 block text-sm font-semibold">
          رمز عبور
        </label>

        <div className="relative">
          <LockKeyhole className="absolute right-4 top-1/2 h-5 w-5 -translate-y-1/2 text-(--muted)" />

          <input
            id="password"
            type="password"
            autoComplete="new-password"
            placeholder="حداقل ۸ کاراکتر"
            {...form.register("password")}
            className={`${inputClass} pr-12`}
          />
        </div>

        {form.formState.errors.password?.message && (
          <p className="mt-1.5 text-xs text-(--danger)">
            {form.formState.errors.password.message}
          </p>
        )}
      </div>

      <div>
        <label
          htmlFor="confirmPassword"
          className="mb-2 block text-sm font-semibold"
        >
          تکرار رمز عبور
        </label>

        <input
          id="confirmPassword"
          type="password"
          autoComplete="new-password"
          placeholder="رمز عبور را دوباره وارد کنید"
          {...form.register("confirmPassword")}
          className={inputClass}
        />

        {form.formState.errors.confirmPassword?.message && (
          <p className="mt-1.5 text-xs text-(--danger)">
            {form.formState.errors.confirmPassword.message}
          </p>
        )}
      </div>

      <Button
        type="submit"
        className="h-13 w-full rounded-2xl"
        loading={isSubmitting}
      >
        {isSubmitting ? "در حال ایجاد حساب..." : "ایجاد حساب کاربری"}

        {!isSubmitting && <ArrowLeft className="h-5 w-5" />}
      </Button>

      <p className="text-center text-sm text-(--muted)">
        قبلاً حساب ساخته‌اید؟{" "}
        <Link
          href={ROUTES.login}
          className="font-bold text-(--primary) hover:text-(--primary-dark)"
        >
          وارد شوید
        </Link>
      </p>
    </form>
  );
}
