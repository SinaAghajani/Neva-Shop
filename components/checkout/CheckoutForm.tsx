"use client";

import { useState } from "react";
import { ArrowLeft, CheckCircle2 } from "lucide-react";
import { useRouter } from "next/navigation";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "@/components/ui/Button";
import AddressForm from "./AddressForm";
import PaymentMethod from "./PaymentMethod";
import OrderSummary from "./OrderSummary";
import { useCart } from "@/hooks/useCart";
import { useAuthStore } from "@/store/auth.store";
import { ROUTES } from "@/lib/constants";

const checkoutSchema = z.object({
  firstName: z.string().min(2, "نام را وارد کنید"),
  lastName: z.string().min(2, "نام خانوادگی را وارد کنید"),
  phone: z.string().min(10, "شماره موبایل معتبر وارد کنید"),
  province: z.string().min(2, "استان را انتخاب کنید"),
  city: z.string().min(2, "شهر را وارد کنید"),
  address: z.string().min(10, "آدرس کامل را وارد کنید"),
  postalCode: z.string().min(10, "کد پستی معتبر وارد کنید"),
  notes: z.string().optional(),
  paymentMethod: z.enum(["online", "cash-on-delivery"]),
});

export type CheckoutFormValues = z.infer<typeof checkoutSchema>;

export default function CheckoutForm() {
  const router = useRouter();
  const { items, itemCount, subtotal, clearCart } = useCart();
  const user = useAuthStore((state) => state.user);

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isCompleted, setIsCompleted] = useState(false);

  const form = useForm<CheckoutFormValues>({
    resolver: zodResolver(checkoutSchema),
    defaultValues: {
      firstName: user?.profile?.firstName ?? "",
      lastName: user?.profile?.lastName ?? "",
      phone: user?.profile?.phone ?? "",
      province: "",
      city: "",
      address: "",
      postalCode: "",
      notes: "",
      paymentMethod: "online",
    },
  });

  const paymentMethod = form.watch("paymentMethod");

  const handleSubmit = async (values: CheckoutFormValues) => {
    if (!items.length) {
      router.push(ROUTES.cart);
      return;
    }

    setIsSubmitting(true);

    try {
      await new Promise((resolve) => setTimeout(resolve, 900));

      const orderId = `Neva-${Date.now().toString().slice(-8)}`;

      sessionStorage.setItem(
        "Neva-last-order",
        JSON.stringify({
          id: orderId,
          customer: values,
          items,
          itemCount,
          subtotal,
          createdAt: new Date().toISOString(),
        }),
      );

      clearCart();
      setIsCompleted(true);

      setTimeout(() => {
        router.push(`${ROUTES.checkoutSuccess}?order=${orderId}`);
      }, 700);
    } finally {
      setIsSubmitting(false);
    }
  };

  if (!items.length && !isCompleted) {
    return (
      <div className="rounded-3xl border border-(--border) bg-white p-8 text-center">
        <h2 className="text-xl font-bold text-(--foreground)">
          سبد خرید شما خالی است
        </h2>

        <p className="mt-2 text-sm text-(--muted)">
          برای ادامه فرایند خرید، ابتدا محصولی به سبد خرید اضافه کنید.
        </p>

        <div className="mt-6">
          <Button type="button" onClick={() => router.push(ROUTES.products)}>
            مشاهده محصولات
            <ArrowLeft className="h-4 w-4" />
          </Button>
        </div>
      </div>
    );
  }

  if (isCompleted) {
    return (
      <div className="flex min-h-90 items-center justify-center rounded-3xl border border-(--border) bg-white p-8">
        <div className="text-center">
          <CheckCircle2 className="mx-auto h-16 w-16 text-(--success)" />

          <h2 className="mt-5 text-2xl font-bold text-(--foreground)">
            سفارش شما با موفقیت ثبت شد
          </h2>

          <p className="mt-2 text-sm text-(--muted)">
            در حال انتقال به صفحه سفارش هستید...
          </p>
        </div>
      </div>
    );
  }

  return (
    <form
      onSubmit={form.handleSubmit(handleSubmit)}
      className="grid gap-6 lg:grid-cols-[minmax(0,1fr)_380px]"
    >
      <div className="space-y-6">
        <AddressForm form={form} />

        <PaymentMethod
          value={paymentMethod}
          onChange={(value) => form.setValue("paymentMethod", value)}
          error={form.formState.errors.paymentMethod?.message}
        />

        <div className="rounded-3xl border border-(--border) bg-white p-5 sm:p-6">
          <label
            htmlFor="notes"
            className="mb-2 block text-sm font-semibold text-(--foreground)"
          >
            توضیحات سفارش
          </label>

          <textarea
            id="notes"
            {...form.register("notes")}
            rows={4}
            placeholder="اگر توضیح خاصی درباره سفارش دارید، اینجا بنویسید..."
            className="w-full resize-none rounded-2xl border border-(--border) bg-(--background) px-4 py-3 text-sm text-(--foreground) outline-none transition placeholder:text-(--muted) focus:border-(--primary) focus:ring-4 focus:ring-(--primary-light)"
          />
        </div>

        <Button
          type="submit"
          className="h-14 w-full rounded-2xl text-base"
          loading={isSubmitting}
        >
          {isSubmitting ? "در حال ثبت سفارش..." : "ثبت نهایی سفارش"}

          {!isSubmitting && <ArrowLeft className="h-5 w-5" />}
        </Button>
      </div>

      <OrderSummary
        items={items}
        subtotal={subtotal}
        paymentMethod={paymentMethod}
      />
    </form>
  );
}
