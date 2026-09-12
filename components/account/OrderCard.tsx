"use client";

import Image from "next/image";
import Link from "next/link";
import {
  ChevronLeft,
  Clock3,
  PackageCheck,
  Truck,
  XCircle,
} from "lucide-react";
import type { Order } from "@/types/order";
import { formatDate, formatPrice } from "@/lib/utils";
import {
  ORDER_STATUS_LABELS,
  PAYMENT_STATUS_LABELS,
  PAYMENT_METHOD_LABELS,
} from "@/lib/constants";
import { Badge } from "@/components/ui/Badge";

interface OrderCardProps {
  order: Order;
}

const statusConfig: Record<
  Order["status"],
  {
    icon: typeof Clock3;
    variant: "default" | "success" | "danger" | "warning";
  }
> = {
  pending: {
    icon: Clock3,
    variant: "warning",
  },
  confirmed: {
    icon: PackageCheck,
    variant: "success",
  },
  processing: {
    icon: PackageCheck,
    variant: "default",
  },
  shipped: {
    icon: Truck,
    variant: "default",
  },
  delivered: {
    icon: PackageCheck,
    variant: "success",
  },
  cancelled: {
    icon: XCircle,
    variant: "danger",
  },
  refunded: {
    icon: XCircle,
    variant: "warning",
  },
};

export default function OrderCard({ order }: OrderCardProps) {
  const status = statusConfig[order.status];
  const StatusIcon = status.icon;

  return (
    <article className="overflow-hidden rounded-3xl border border-(--border) bg-white">
      <div className="flex flex-col gap-4 border-b border-(--border) p-5 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <div className="flex flex-wrap items-center gap-2">
            <span className="text-sm font-bold text-(--foreground)">
              سفارش #{order.orderNumber}
            </span>
            <Badge variant={status.variant}>
              <StatusIcon className="h-3.5 w-3.5" />
              {ORDER_STATUS_LABELS[order.status]}
            </Badge>
          </div>

          <p className="mt-2 text-xs text-(--muted)">
            ثبت شده در {formatDate(order.createdAt)}
          </p>
        </div>

        <div className="text-right">
          <p className="text-xs text-(--muted)">مبلغ سفارش</p>
          <p className="mt-1 text-lg font-black text-(--primary)">
            {formatPrice(order.total)}
          </p>
        </div>
      </div>

      <div className="p-5">
        <div className="flex gap-3 overflow-x-auto pb-1">
          {order.items.map((item) => (
            <Link
              key={`${order.id}-${item.productId}-${item.variant?.value ?? ""}`}
              href={`/products/${item.productSlug}`}
              className="group shrink-0"
            >
              <div className="relative h-24 w-24 overflow-hidden rounded-2xl bg-(--surface-muted)">
                <Image
                  src={item.productImage ?? "/images/products/product-01.webp"}
                  alt={item.productName}
                  fill
                  sizes="96px"
                  className="object-cover transition duration-300 group-hover:scale-105"
                />
              </div>

              <p className="mt-2 w-24 truncate text-xs font-medium text-(--foreground)">
                {item.productName}
              </p>

              <p className="mt-1 text-[11px] text-(--muted)">
                {item.quantity} عدد
              </p>
            </Link>
          ))}
        </div>

        <div className="mt-5 grid gap-3 rounded-2xl bg-(--background) p-4 sm:grid-cols-3">
          <div>
            <p className="text-xs text-(--muted)">روش پرداخت</p>
            <p className="mt-1 text-xs font-semibold">
              {PAYMENT_METHOD_LABELS[order.paymentMethod]}
            </p>
          </div>

          <div>
            <p className="text-xs text-(--muted)">وضعیت پرداخت</p>
            <p className="mt-1 text-xs font-semibold">
              {PAYMENT_STATUS_LABELS[order.paymentStatus]}
            </p>
          </div>

          <div>
            <p className="text-xs text-(--muted)">تعداد کالا</p>
            <p className="mt-1 text-xs font-semibold">
              {order.items.reduce((sum, item) => sum + item.quantity, 0)} عدد
            </p>
          </div>
        </div>

        <div className="mt-5 flex justify-end">
          <Link
            href={`/account/orders/${order.id}`}
            className="inline-flex items-center gap-1.5 text-sm font-bold text-(--primary) transition hover:text-(--primary-dark)"
          >
            مشاهده جزئیات سفارش
            <ChevronLeft className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </article>
  );
}
