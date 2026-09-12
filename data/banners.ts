export type Banner = {
    id: string;
    title: string;
    subtitle: string;
    description?: string;
    image: string;
    href: string;
    badge?: string;
    priority: number;
};

export const banners: Banner[] = [
    {
        id: "banner-1",
        title: "سادگی، انتخابی برای همیشه",
        subtitle: "کالکشن جدید Neva",
        description:
            "محصولات منتخب فصل را با طراحی مینیمال و کیفیت متفاوت کشف کنید.",
        image: "/images/banners/hero-01.webp",
        href: "/products?sort=newest",
        badge: "جدید",
        priority: 1,
    },
    {
        id: "banner-2",
        title: "انتخاب‌های محبوب شما",
        subtitle: "پرفروش‌ترین‌ها",
        description:
            "محصولاتی که بیشترین استقبال را از طرف کاربران Neva داشته‌اند.",
        image: "/images/banners/hero-02.webp",
        href: "/products?sort=popular",
        badge: "محبوب",
        priority: 2,
    },
    {
        id: "banner-3",
        title: "فرصت‌های محدود",
        subtitle: "پیشنهادهای ویژه",
        description:
            "محصولات منتخب را با قیمت ویژه برای مدت محدود تهیه کنید.",
        image: "/images/banners/hero-03.webp",
        href: "/products?sort=price-desc",
        badge: "ویژه",
        priority: 3,
    },
];

export const featuredBanner = banners[0];