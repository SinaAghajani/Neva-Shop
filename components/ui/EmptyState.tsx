import type { ReactNode } from "react";
import { Inbox } from "lucide-react";
import { Button } from "@/components/ui/Button";

interface EmptyStateProps {
  title: string;
  description?: string;
  icon?: ReactNode;
  action?: {
    label: string;
    onClick: () => void;
  };
}

export function EmptyState({
  title,
  description,
  icon,
  action,
}: EmptyStateProps) {
  return (
    <div className="flex min-h-80 flex-col items-center justify-center px-6 py-12 text-center">
      <div className="mb-5 flex size-16 items-center justify-center rounded-2xl bg-[#e7efeb] text-[#315c4c]">
        {icon ?? <Inbox className="size-7" />}
      </div>

      <h2 className="text-lg font-black text-[#17221d]">{title}</h2>

      {description && (
        <p className="mt-2 max-w-md text-sm leading-7 text-[#777b77]">
          {description}
        </p>
      )}

      {action && (
        <Button className="mt-6" onClick={action.onClick}>
          {action.label}
        </Button>
      )}
    </div>
  );
}
