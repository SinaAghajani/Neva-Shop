export const APP_NAME = "Neva";

export const APP_DESCRIPTION =
    "Neva یک فروشگاه آنلاین مدرن برای تجربه‌ای ساده، سریع و لذت‌بخش در خرید است.";

export const DEFAULT_CURRENCY = "تومان";

export const DEFAULT_PAGE = 1;

export const DEFAULT_PAGE_SIZE = 12;

export const MAX_PAGE_SIZE = 48;

export const ROUTES = {
    home: "/",
    products: "/products",
    categories: "/categories",
    search: "/search",
    wishlist: "/wishlist",
    cart: "/cart",
    checkout: "/checkout",
    checkoutSuccess: "/checkout/success",
    login: "/auth/login",
    register: "/auth/register",
    forgotPassword: "/auth/forgot-password",
    account: "/account",
    orders: "/account/orders",
    addresses: "/account/addresses",
    settings: "/account/settings",
} as const;

export const STORAGE_KEYS = {
    cart: "Neva-cart",
    wishlist: "Neva-wishlist",
    auth: "Neva-auth",
} as const;

export const API_ENDPOINTS = {
    products: "/products",
    product: (slug: string) => `/products/${slug}`,
    categories: "/categories",
    category: (slug: string) => `/categories/${slug}`,
    search: "/products/search",
    login: "/auth/login",
    register: "/auth/register",
    logout: "/auth/logout",
    me: "/auth/me",
    cart: "/cart",
    cartItems: "/cart/items",
    orders: "/orders",
    order: (id: string) => `/orders/${id}`,
    profile: "/users/me",
    addresses: "/users/me/addresses",
    address: (id: string) => `/users/me/addresses/${id}`,
} as const;

export const PRODUCT_SORT_OPTIONS = [
    {
        value: "newest",
        label: "جدیدترین",
    },
    {
        value: "popular",
        label: "پربازدیدترین",
    },
    {
        value: "rating",
        label: "بیشترین امتیاز",
    },
    {
        value: "price-asc",
        label: "ارزان‌ترین",
    },
    {
        value: "price-desc",
        label: "گران‌ترین",
    },
] as const;

export const ORDER_STATUS_LABELS = {
    pending: "در انتظار",
    confirmed: "تأیید شده",
    processing: "در حال پردازش",
    shipped: "ارسال شده",
    delivered: "تحویل شده",
    cancelled: "لغو شده",
    refunded: "مرجوع شده",
} as const;

export const PAYMENT_STATUS_LABELS = {
    pending: "در انتظار پرداخت",
    paid: "پرداخت شده",
    failed: "ناموفق",
    refunded: "بازپرداخت شده",
} as const;

export const PAYMENT_METHOD_LABELS = {
    online: "پرداخت آنلاین",
    "cash-on-delivery": "پرداخت در محل",
} as const;