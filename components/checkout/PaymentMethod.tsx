"use client";

import { Banknote, CheckCircle2, CreditCard } from "lucide-react";

export type PaymentMethodValue = "online" | "cash-on-delivery";

interface PaymentMethodProps {
  value: PaymentMethodValue;
  onChange: (value: PaymentMethodValue) => void;
  error?: string;
}

const methods = [
  {
    value: "online" as const,
    title: "پرداخت آنلاین",
    description: "پرداخت امن از طریق درگاه بانکی",
    icon: CreditCard,
  },
  {
    value: "cash-on-delivery" as const,
    title: "پرداخت در محل",
    description: "پرداخت هنگام تحویل سفارش",
    icon: Banknote,
  },
];

export default function PaymentMethod({
  value,
  onChange,
  error,
}: PaymentMethodProps) {
  return (
    <section className="rounded-3xl border border-(--border) bg-white p-5 sm:p-6">
      <div className="mb-6">
        <span className="text-xs font-semibold text-(--primary)">
          مرحله دوم
        </span>
        <h2 className="mt-1 text-xl font-bold text-(--foreground)">
          روش پرداخت
        </h2>
        <p className="mt-1 text-sm text-(--muted)">
          روش پرداخت موردنظر خود را انتخاب کنید.
        </p>
      </div>

      <div className="grid gap-3 sm:grid-cols-2">
        {methods.map((method) => {
          const Icon = method.icon;
          const selected = value === method.value;

          return (
            <button
              key={method.value}
              type="button"
              onClick={() => onChange(method.value)}
              className={`relative flex items-center gap-4 rounded-2xl border p-4 text-right transition ${
                selected
                  ? "border-(--primary) bg-(--primary-light)"
                  : "border-(--border) bg-white hover:border-(--primary) hover:bg-(--background)"
              }`}
            >
              <span
                className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl ${
                  selected
                    ? "bg-(--primary) text-white"
                    : "bg-(--surface-muted) text-(--foreground)"
                }`}
              >
                <Icon className="h-5 w-5" />
              </span>

              <span className="min-w-0 flex-1">
                <span className="block text-sm font-bold text-(--foreground)">
                  {method.title}
                </span>
                <span className="mt-1 block text-xs leading-5 text-(--muted)">
                  {method.description}
                </span>
              </span>

              {selected && (
                <CheckCircle2 className="absolute left-4 top-4 h-5 w-5 text-(--primary)" />
              )}
            </button>
          );
        })}
      </div>

      {error && <p className="mt-2 text-xs text-(--danger)">{error}</p>}
    </section>
  );
}
