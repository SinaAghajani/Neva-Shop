"use client";

import { Check, MapPin, Pencil, Trash2 } from "lucide-react";
import type { UserAddress } from "@/types/user";
import { Button } from "@/components/ui/Button";

interface AddressCardProps {
  address: UserAddress;
  onEdit?: (address: UserAddress) => void;
  onDelete?: (address: UserAddress) => void;
  onSetDefault?: (address: UserAddress) => void;
}

export default function AddressCard({
  address,
  onEdit,
  onDelete,
  onSetDefault,
}: AddressCardProps) {
  return (
    <article
      className={`rounded-3xl border bg-white p-5 transition ${
        address.isDefault
          ? "border-(--primary) ring-1 ring-(--primary)"
          : "border-(--border)"
      }`}
    >
      <div className="flex items-start justify-between gap-4">
        <div className="flex min-w-0 items-start gap-3">
          <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-(--primary-light) text-(--primary)">
            <MapPin className="h-5 w-5" />
          </div>

          <div className="min-w-0">
            <div className="flex flex-wrap items-center gap-2">
              <h3 className="font-bold text-(--foreground)">{address.title}</h3>

              {address.isDefault && (
                <span className="inline-flex items-center gap-1 rounded-full bg-(--primary-light) px-2.5 py-1 text-[10px] font-bold text-(--primary)">
                  <Check className="h-3 w-3" />
                  پیش‌فرض
                </span>
              )}
            </div>

            <p className="mt-2 text-sm font-medium text-(--foreground)">
              {address.firstName} {address.lastName}
            </p>
          </div>
        </div>

        <div className="flex shrink-0 items-center gap-1">
          {onEdit && (
            <button
              type="button"
              onClick={() => onEdit(address)}
              aria-label="ویرایش آدرس"
              className="flex h-9 w-9 items-center justify-center rounded-xl text-(--muted) transition hover:bg-(--surface-muted) hover:text-(--primary)"
            >
              <Pencil className="h-4 w-4" />
            </button>
          )}

          {onDelete && (
            <button
              type="button"
              onClick={() => onDelete(address)}
              aria-label="حذف آدرس"
              className="flex h-9 w-9 items-center justify-center rounded-xl text-(--muted) transition hover:bg-red-50 hover:text-(--danger)"
            >
              <Trash2 className="h-4 w-4" />
            </button>
          )}
        </div>
      </div>

      <div className="mt-5 rounded-2xl bg-(--background) p-4">
        <p className="text-sm leading-7 text-(--foreground)">
          {address.province}، {address.city}، {address.address}
          {address.plaque ? `، پلاک ${address.plaque}` : ""}
          {address.unit ? `، واحد ${address.unit}` : ""}
        </p>

        <div className="mt-3 flex flex-wrap gap-x-5 gap-y-2 text-xs text-(--muted)">
          <span>
            کد پستی:{" "}
            <b className="font-semibold text-(--foreground)">
              {address.postalCode}
            </b>
          </span>

          <span dir="ltr">{address.phone}</span>
        </div>
      </div>

      {!address.isDefault && onSetDefault && (
        <div className="mt-4">
          <Button
            type="button"
            variant="outline"
            size="sm"
            onClick={() => onSetDefault(address)}
          >
            انتخاب به‌عنوان آدرس پیش‌فرض
          </Button>
        </div>
      )}
    </article>
  );
}
