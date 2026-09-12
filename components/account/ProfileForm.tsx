"use client";

import { useEffect, useState } from "react";
import { CheckCircle2, Save } from "lucide-react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  updateProfileSchema,
  type UpdateProfileInput,
} from "@/lib/validations";
import { useAuthStore } from "@/store/auth.store";
import { Button } from "@/components/ui/Button";

const inputClass =
  "w-full rounded-2xl border border-[var(--border)] bg-[var(--background)] px-4 py-3 text-sm text-[var(--foreground)] outline-none transition placeholder:text-[var(--muted)] focus:border-[var(--primary)] focus:ring-4 focus:ring-[var(--primary-light)]";

export default function ProfileForm() {
  const user = useAuthStore((state) => state.user);
  const setUser = useAuthStore((state) => state.setUser);

  const [saved, setSaved] = useState(false);
  const [serverError, setServerError] = useState("");

  const form = useForm<UpdateProfileInput>({
    resolver: zodResolver(updateProfileSchema),
    defaultValues: {
      firstName: user?.profile?.firstName ?? "",
      lastName: user?.profile?.lastName ?? "",
      phone: user?.profile?.phone ?? "",
      email: user?.profile?.email ?? "",
    },
  });

  useEffect(() => {
    form.reset({
      firstName: user?.profile?.firstName ?? "",
      lastName: user?.profile?.lastName ?? "",
      phone: user?.profile?.phone ?? "",
      email: user?.profile?.email ?? "",
    });
  }, [user, form]);

  const handleSubmit = async (values: UpdateProfileInput) => {
    if (!user) return;

    setSaved(false);
    setServerError("");

    try {
      await new Promise((resolve) => setTimeout(resolve, 700));

      const now = new Date().toISOString();

      setUser({
        ...user,
        profile: {
          ...user.profile,
          firstName: values.firstName,
          lastName: values.lastName,
          phone: values.phone,
          email: values.email || undefined,
        },
        updatedAt: now,
      });

      setSaved(true);

      setTimeout(() => {
        setSaved(false);
      }, 2500);
    } catch {
      setServerError("ذخیره اطلاعات انجام نشد. دوباره تلاش کنید.");
    }
  };

  return (
    <form
      onSubmit={form.handleSubmit(handleSubmit)}
      className="rounded-3xl border border-(--border) bg-white p-5 sm:p-6"
      noValidate
    >
      <div className="mb-7">
        <h2 className="text-xl font-bold text-(--foreground)">اطلاعات شخصی</h2>

        <p className="mt-1 text-sm text-(--muted)">
          اطلاعات حساب کاربری خود را مدیریت کنید.
        </p>
      </div>

      {serverError && (
        <div className="mb-5 rounded-2xl border border-red-100 bg-red-50 px-4 py-3 text-sm text-(--danger)">
          {serverError}
        </div>
      )}

      {saved && (
        <div className="mb-5 flex items-center gap-2 rounded-2xl border border-green-100 bg-green-50 px-4 py-3 text-sm text-(--success)">
          <CheckCircle2 className="h-5 w-5 shrink-0" />
          اطلاعات پروفایل با موفقیت ذخیره شد.
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

          <input
            id="firstName"
            autoComplete="given-name"
            placeholder="نام"
            {...form.register("firstName")}
            className={inputClass}
          />

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

        <div>
          <label htmlFor="phone" className="mb-2 block text-sm font-semibold">
            شماره موبایل
          </label>

          <input
            id="phone"
            type="tel"
            dir="ltr"
            autoComplete="tel"
            placeholder="09xxxxxxxxx"
            {...form.register("phone")}
            className={inputClass}
          />

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
      </div>

      <div className="mt-6 flex justify-end">
        <Button type="submit" loading={form.formState.isSubmitting}>
          {form.formState.isSubmitting ? "در حال ذخیره..." : "ذخیره تغییرات"}

          {!form.formState.isSubmitting && <Save className="h-4 w-4" />}
        </Button>
      </div>
    </form>
  );
}
