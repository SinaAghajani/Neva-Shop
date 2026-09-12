"use client";

import Link from "next/link";
import { ArrowLeft, CheckCircle2, Phone } from "lucide-react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  forgotPasswordSchema,
  type ForgotPasswordInput,
} from "@/lib/validations";
import { ROUTES } from "@/lib/constants";
import { Button } from "@/components/ui/Button";

const inputClass =
  "w-full rounded-2xl border border-[var(--border)] bg-[var(--background)] px-4 py-3 text-sm text-[var(--foreground)] outline-none transition placeholder:text-[var(--muted)] focus:border-[var(--primary)] focus:ring-4 focus:ring-[var(--primary-light)]";

export default function ForgotPasswordForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSent, setIsSent] = useState(false);
  const [serverError, setServerError] = useState("");

  const form = useForm<ForgotPasswordInput>({
    resolver: zodResolver(forgotPasswordSchema),
    defaultValues: {
      phone: "",
    },
  });

  const handleSubmit = async (values: ForgotPasswordInput) => {
    setIsSubmitting(true);
    setServerError("");

    try {
      await new Promise((resolve) => setTimeout(resolve, 900));

      void values;
      setIsSent(true);
    } catch {
      setServerError("ارسال درخواست انجام نشد. دوباره تلاش کنید.");
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSent) {
    return (
      <div className="rounded-3xl border border-(--border) bg-white p-7 text-center sm:p-8">
        <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-(--primary-light)">
          <CheckCircle2 className="h-8 w-8 text-(--primary)" />
        </div>

        <h2 className="mt-5 text-xl font-bold text-(--foreground)">
          درخواست شما ثبت شد
        </h2>

        <p className="mx-auto mt-2 max-w-sm text-sm leading-6 text-(--muted)">
          اگر شماره موبایل واردشده متعلق به حسابی در Neva باشد، دستورالعمل
          بازیابی رمز عبور برای شما ارسال خواهد شد.
        </p>

        <div className="mt-6">
          <Link
            href={ROUTES.login}
            className="inline-flex h-12 items-center justify-center gap-2 rounded-2xl bg-(--primary) px-6 text-sm font-bold text-white transition hover:bg-(--primary-dark)"
          >
            بازگشت به ورود
            <ArrowLeft className="h-4 w-4" />
          </Link>
        </div>
      </div>
    );
  }

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

      <Button
        type="submit"
        className="h-13 w-full rounded-2xl"
        loading={isSubmitting}
      >
        {isSubmitting ? "در حال ارسال..." : "ارسال درخواست بازیابی"}

        {!isSubmitting && <ArrowLeft className="h-5 w-5" />}
      </Button>

      <p className="text-center text-sm text-(--muted)">
        رمز عبور را به خاطر آوردید؟{" "}
        <Link
          href={ROUTES.login}
          className="font-bold text-(--primary) hover:text-(--primary-dark)"
        >
          ورود به حساب
        </Link>
      </p>
    </form>
  );
}
