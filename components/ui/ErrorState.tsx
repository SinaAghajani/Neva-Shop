import type { ReactNode } from "react";
import { AlertCircle, RefreshCw } from "lucide-react";
import { Button } from "@/components/ui/Button";

interface ErrorStateProps {
  title?: string;
  description?: string;
  icon?: ReactNode;
  retry?: () => void;
}

export function ErrorState({
  title = "مشکلی پیش آمده است",
  description = "در دریافت اطلاعات مشکلی رخ داد. لطفاً دوباره تلاش کنید.",
  icon,
  retry,
}: ErrorStateProps) {
  return (
    <div className="flex min-h-80 flex-col items-center justify-center px-6 py-12 text-center">
      <div className="mb-5 flex size-16 items-center justify-center rounded-2xl bg-[#f8e7e7] text-[#c65b5b]">
        {icon ?? <AlertCircle className="size-7" />}
      </div>

      <h2 className="text-lg font-black text-[#17221d]">{title}</h2>

      <p className="mt-2 max-w-md text-sm leading-7 text-[#777b77]">
        {description}
      </p>

      {retry && (
        <Button variant="outline" className="mt-6" onClick={retry}>
          <RefreshCw className="size-4" />
          تلاش دوباره
        </Button>
      )}
    </div>
  );
}
