export function cn(
    ...classes: Array<string | false | null | undefined>
): string {
    return classes.filter(Boolean).join(" ");
}

export function formatPrice(
    price: number,
    currency = "تومان"
): string {
    return `${new Intl.NumberFormat("fa-IR").format(price)} ${currency}`;
}

export function formatNumber(value: number): string {
    return new Intl.NumberFormat("fa-IR").format(value);
}

export function formatDate(
    date: string | Date,
    options?: Intl.DateTimeFormatOptions
): string {
    return new Intl.DateTimeFormat("fa-IR", {
        year: "numeric",
        month: "long",
        day: "numeric",
        ...options,
    }).format(new Date(date));
}

export function formatDateTime(date: string | Date): string {
    return new Intl.DateTimeFormat("fa-IR", {
        year: "numeric",
        month: "long",
        day: "numeric",
        hour: "2-digit",
        minute: "2-digit",
    }).format(new Date(date));
}

export function calculateDiscount(
    price: number,
    compareAtPrice?: number
): number {
    if (
        !compareAtPrice ||
        compareAtPrice <= price ||
        compareAtPrice <= 0
    ) {
        return 0;
    }

    return Math.round(((compareAtPrice - price) / compareAtPrice) * 100);
}

export function isValidUrl(value: string): boolean {
    try {
        new URL(value);
        return true;
    } catch {
        return false;
    }
}

export function truncate(
    value: string,
    length: number
): string {
    if (value.length <= length) {
        return value;
    }

    return `${value.slice(0, length).trim()}...`;
}

export function generateId(prefix = "Neva"): string {
    return `${prefix}-${crypto.randomUUID()}`;
}

export function sleep(milliseconds: number): Promise<void> {
    return new Promise((resolve) => {
        setTimeout(resolve, milliseconds);
    });
}