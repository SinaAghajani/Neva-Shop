"use client";

import type { UseFormReturn } from "react-hook-form";
import type { CheckoutFormValues } from "./CheckoutForm";

interface AddressFormProps {
  form: UseFormReturn<CheckoutFormValues>;
}

const inputClass =
  "w-full rounded-2xl border border-[var(--border)] bg-[var(--background)] px-4 py-3 text-sm text-[var(--foreground)] outline-none transition placeholder:text-[var(--muted)] focus:border-[var(--primary)] focus:ring-4 focus:ring-[var(--primary-light)]";

export default function AddressForm({ form }: AddressFormProps) {
  const {
    register,
    formState: { errors },
  } = form;

  return (
    <section className="rounded-3xl border border-(--border) bg-white p-5 sm:p-6">
      <div className="mb-6">
        <span className="text-xs font-semibold text-(--primary)">
          مرحله اول
        </span>
        <h2 className="mt-1 text-xl font-bold text-(--foreground)">
          اطلاعات و آدرس ارسال
        </h2>
        <p className="mt-1 text-sm text-(--muted)">
          اطلاعات دریافت سفارش را با دقت وارد کنید.
        </p>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="firstName" className="mb-2 block text-sm font-medium">
            نام
          </label>
          <input
            id="firstName"
            {...register("firstName")}
            placeholder="مثلاً سینا"
            className={inputClass}
          />
          {errors.firstName?.message && (
            <p className="mt-1.5 text-xs text-(--danger)">
              {errors.firstName.message}
            </p>
          )}
        </div>

        <div>
          <label htmlFor="lastName" className="mb-2 block text-sm font-medium">
            نام خانوادگی
          </label>
          <input
            id="lastName"
            {...register("lastName")}
            placeholder="مثلاً آقاجانی"
            className={inputClass}
          />
          {errors.lastName?.message && (
            <p className="mt-1.5 text-xs text-(--danger)">
              {errors.lastName.message}
            </p>
          )}
        </div>

        <div>
          <label htmlFor="phone" className="mb-2 block text-sm font-medium">
            شماره موبایل
          </label>
          <input
            id="phone"
            dir="ltr"
            {...register("phone")}
            placeholder="09xxxxxxxxx"
            className={inputClass}
          />
          {errors.phone?.message && (
            <p className="mt-1.5 text-xs text-(--danger)">
              {errors.phone.message}
            </p>
          )}
        </div>

        <div>
          <label htmlFor="province" className="mb-2 block text-sm font-medium">
            استان
          </label>
          <input
            id="province"
            {...register("province")}
            placeholder="مثلاً گیلان"
            className={inputClass}
          />
          {errors.province?.message && (
            <p className="mt-1.5 text-xs text-(--danger)">
              {errors.province.message}
            </p>
          )}
        </div>

        <div>
          <label htmlFor="city" className="mb-2 block text-sm font-medium">
            شهر
          </label>
          <input
            id="city"
            {...register("city")}
            placeholder="مثلاً رشت"
            className={inputClass}
          />
          {errors.city?.message && (
            <p className="mt-1.5 text-xs text-(--danger)">
              {errors.city.message}
            </p>
          )}
        </div>

        <div>
          <label
            htmlFor="postalCode"
            className="mb-2 block text-sm font-medium"
          >
            کد پستی
          </label>
          <input
            id="postalCode"
            dir="ltr"
            inputMode="numeric"
            {...register("postalCode")}
            placeholder="1234567890"
            className={inputClass}
          />
          {errors.postalCode?.message && (
            <p className="mt-1.5 text-xs text-(--danger)">
              {errors.postalCode.message}
            </p>
          )}
        </div>

        <div className="sm:col-span-2">
          <label htmlFor="address" className="mb-2 block text-sm font-medium">
            آدرس کامل
          </label>
          <textarea
            id="address"
            rows={4}
            {...register("address")}
            placeholder="استان، شهر، خیابان، کوچه، پلاک و واحد..."
            className={`${inputClass} resize-none`}
          />
          {errors.address?.message && (
            <p className="mt-1.5 text-xs text-(--danger)">
              {errors.address.message}
            </p>
          )}
        </div>
      </div>
    </section>
  );
}
