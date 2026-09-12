import type { Product } from "@/types/product";

const products: Product[] = [
    {
        id: "product-1",
        slug: "minimal-linen-shirt",
        name: "پیراهن لینن مینیمال",
        shortDescription: "پیراهن لینن سبک و راحت برای استفاده روزمره",
        description:
            "پیراهن لینن با طراحی مینیمال، مناسب استفاده روزمره و استایل‌های ساده و مدرن.",
        price: 1290000,
        compareAtPrice: 1590000,
        currency: "تومان",
        images: [
            {
                id: "product-1-image-1",
                url: "/images/products/product-01.webp",
                alt: "پیراهن لینن مینیمال",
            },
        ],
        categoryId: "cat-1",
        brandId: "brand-1",
        variants: [
            {
                id: "product-1-s",
                name: "سایز",
                value: "S",
                stock: 8,
                sku: "Neva-SHIRT-S",
            },
            {
                id: "product-1-m",
                name: "سایز",
                value: "M",
                stock: 14,
                sku: "Neva-SHIRT-M",
            },
            {
                id: "product-1-l",
                name: "سایز",
                value: "L",
                stock: 10,
                sku: "Neva-SHIRT-L",
            },
        ],
        rating: {
            average: 4.8,
            count: 42,
        },
        stock: 32,
        sku: "Neva-SHIRT-001",
        badges: ["new", "featured"],
        tags: ["لینن", "پیراهن", "مینیمال"],
        status: "active",
        featured: true,
        createdAt: "2026-08-01T00:00:00.000Z",
        updatedAt: "2026-08-01T00:00:00.000Z",
    },
    {
        id: "product-2",
        slug: "classic-leather-sneakers",
        name: "کتانی چرمی کلاسیک",
        shortDescription: "کتانی چرمی با طراحی ساده و کاربردی",
        description:
            "کتانی کلاسیک با رویه چرمی و طراحی مینیمال که برای استفاده روزمره انتخابی ایده‌آل است.",
        price: 2490000,
        compareAtPrice: 2890000,
        currency: "تومان",
        images: [
            {
                id: "product-2-image-1",
                url: "/images/products/product-02.webp",
                alt: "کتانی چرمی کلاسیک",
            },
        ],
        categoryId: "cat-2",
        brandId: "brand-2",
        variants: [
            {
                id: "product-2-40",
                name: "سایز",
                value: "40",
                stock: 5,
                sku: "Neva-SHOE-40",
            },
            {
                id: "product-2-41",
                name: "سایز",
                value: "41",
                stock: 9,
                sku: "Neva-SHOE-41",
            },
            {
                id: "product-2-42",
                name: "سایز",
                value: "42",
                stock: 12,
                sku: "Neva-SHOE-42",
            },
        ],
        rating: {
            average: 4.7,
            count: 67,
        },
        stock: 26,
        sku: "Neva-SHOE-001",
        badges: ["bestseller", "sale"],
        tags: ["کفش", "کتانی", "چرمی"],
        status: "active",
        featured: true,
        createdAt: "2026-07-20T00:00:00.000Z",
        updatedAt: "2026-07-20T00:00:00.000Z",
    },
    {
        id: "product-3",
        slug: "structured-tote-bag",
        name: "کیف دستی ساختاری",
        shortDescription: "کیف دستی با طراحی مدرن و فضای کاربردی",
        description:
            "کیف دستی با فرم ساختاری و طراحی ساده که برای استفاده روزمره و محیط کاری مناسب است.",
        price: 1890000,
        currency: "تومان",
        images: [
            {
                id: "product-3-image-1",
                url: "/images/products/product-03.webp",
                alt: "کیف دستی ساختاری",
            },
        ],
        categoryId: "cat-3",
        brandId: "brand-3",
        rating: {
            average: 4.6,
            count: 31,
        },
        stock: 18,
        sku: "Neva-BAG-001",
        badges: ["new"],
        tags: ["کیف", "دستی", "مینیمال"],
        status: "active",
        featured: true,
        createdAt: "2026-08-12T00:00:00.000Z",
        updatedAt: "2026-08-12T00:00:00.000Z",
    },
    {
        id: "product-4",
        slug: "minimal-watch",
        name: "ساعت مینیمال",
        shortDescription: "ساعت کلاسیک با صفحه ساده و بند چرمی",
        description:
            "ساعت مینیمال با طراحی کلاسیک، مناسب استایل‌های رسمی و روزمره.",
        price: 3190000,
        compareAtPrice: 3590000,
        currency: "تومان",
        images: [
            {
                id: "product-4-image-1",
                url: "/images/products/product-04.webp",
                alt: "ساعت مینیمال",
            },
        ],
        categoryId: "cat-4",
        brandId: "brand-4",
        rating: {
            average: 4.9,
            count: 83,
        },
        stock: 11,
        sku: "Neva-WATCH-001",
        badges: ["bestseller", "featured"],
        tags: ["ساعت", "اکسسوری", "مینیمال"],
        status: "active",
        featured: true,
        createdAt: "2026-07-10T00:00:00.000Z",
        updatedAt: "2026-07-10T00:00:00.000Z",
    },
    {
        id: "product-5",
        slug: "everyday-oversized-hoodie",
        name: "هودی اورسایز روزمره",
        shortDescription: "هودی نرم و راحت با فرم آزاد",
        description:
            "هودی اورسایز با پارچه نرم و طراحی ساده، مناسب روزهای خنک و استایل روزمره.",
        price: 1690000,
        currency: "تومان",
        images: [
            {
                id: "product-5-image-1",
                url: "/images/products/product-05.webp",
                alt: "هودی اورسایز روزمره",
            },
        ],
        categoryId: "cat-1",
        brandId: "brand-1",
        variants: [
            {
                id: "product-5-m",
                name: "سایز",
                value: "M",
                stock: 11,
                sku: "Neva-HOODIE-M",
            },
            {
                id: "product-5-l",
                name: "سایز",
                value: "L",
                stock: 13,
                sku: "Neva-HOODIE-L",
            },
            {
                id: "product-5-xl",
                name: "سایز",
                value: "XL",
                stock: 7,
                sku: "Neva-HOODIE-XL",
            },
        ],
        rating: {
            average: 4.5,
            count: 28,
        },
        stock: 31,
        sku: "Neva-HOODIE-001",
        badges: ["new"],
        tags: ["هودی", "اورسایز", "روزمره"],
        status: "active",
        featured: false,
        createdAt: "2026-08-18T00:00:00.000Z",
        updatedAt: "2026-08-18T00:00:00.000Z",
    },
    {
        id: "product-6",
        slug: "leather-card-holder",
        name: "جاکارتی چرمی",
        shortDescription: "جاکارتی باریک و کاربردی از چرم طبیعی",
        description:
            "جاکارتی مینیمال با فرم باریک و فضای مناسب برای کارت‌های روزمره.",
        price: 690000,
        currency: "تومان",
        images: [
            {
                id: "product-6-image-1",
                url: "/images/products/product-06.webp",
                alt: "جاکارتی چرمی",
            },
        ],
        categoryId: "cat-4",
        brandId: "brand-2",
        rating: {
            average: 4.7,
            count: 19,
        },
        stock: 42,
        sku: "Neva-CARD-001",
        badges: ["bestseller"],
        tags: ["جاکارتی", "چرم", "اکسسوری"],
        status: "active",
        featured: false,
        createdAt: "2026-07-28T00:00:00.000Z",
        updatedAt: "2026-07-28T00:00:00.000Z",
    },
    {
        id: "product-7",
        slug: "everyday-crossbody-bag",
        name: "کیف دوشی روزمره",
        shortDescription: "کیف دوشی سبک با طراحی مینیمال",
        description:
            "کیف دوشی سبک و جادار برای استفاده روزمره با طراحی ساده و مدرن.",
        price: 1390000,
        compareAtPrice: 1590000,
        currency: "تومان",
        images: [
            {
                id: "product-7-image-1",
                url: "/images/products/product-07.webp",
                alt: "کیف دوشی روزمره",
            },
        ],
        categoryId: "cat-3",
        brandId: "brand-3",
        rating: {
            average: 4.4,
            count: 36,
        },
        stock: 17,
        sku: "Neva-BAG-002",
        badges: ["sale"],
        tags: ["کیف", "دوشی", "روزمره"],
        status: "active",
        featured: false,
        createdAt: "2026-07-05T00:00:00.000Z",
        updatedAt: "2026-07-05T00:00:00.000Z",
    },
    {
        id: "product-8",
        slug: "classic-sunglasses",
        name: "عینک آفتابی کلاسیک",
        shortDescription: "عینک آفتابی با فرم کلاسیک و سبک",
        description:
            "عینک آفتابی با طراحی کلاسیک و فریم سبک برای استفاده روزمره.",
        price: 1190000,
        currency: "تومان",
        images: [
            {
                id: "product-8-image-1",
                url: "/images/products/product-08.webp",
                alt: "عینک آفتابی کلاسیک",
            },
        ],
        categoryId: "cat-4",
        brandId: "brand-4",
        rating: {
            average: 4.5,
            count: 24,
        },
        stock: 25,
        sku: "Neva-SUN-001",
        badges: ["new"],
        tags: ["عینک", "آفتابی", "اکسسوری"],
        status: "active",
        featured: false,
        createdAt: "2026-08-20T00:00:00.000Z",
        updatedAt: "2026-08-20T00:00:00.000Z",
    },
    {
        id: "product-9",
        slug: "daily-minimal-perfume",
        name: "عطر مینیمال روزمره",
        shortDescription: "عطر ملایم و مدرن برای استفاده روزمره",
        description:
            "عطر مینیمال با رایحه‌ای متعادل و ظریف که برای استفاده روزمره و موقعیت‌های مختلف طراحی شده است.",
        price: 1790000,
        compareAtPrice: 2090000,
        currency: "تومان",
        images: [
            {
                id: "product-9-image-1",
                url: "/images/products/product-09.webp",
                alt: "عطر مینیمال روزمره",
            },
        ],
        categoryId: "cat-5",
        brandId: "brand-5",
        rating: {
            average: 4.8,
            count: 38,
        },
        stock: 16,
        sku: "Neva-BEAUTY-001",
        badges: ["new", "featured"],
        tags: ["عطر", "زیبایی", "رایحه", "مینیمال"],
        status: "active",
        featured: true,
        createdAt: "2026-08-22T00:00:00.000Z",
        updatedAt: "2026-08-22T00:00:00.000Z",
    },
    {
        id: "product-10",
        slug: "daily-skincare-set",
        name: "ست مراقبت پوست",
        shortDescription: "مجموعه‌ای کاربردی برای روتین روزانه پوست",
        description:
            "ست مراقبت پوست با طراحی ساده و کاربردی، مناسب استفاده روزانه و ایجاد یک روتین منظم.",
        price: 1490000,
        currency: "تومان",
        images: [
            {
                id: "product-10-image-1",
                url: "/images/products/product-10.webp",
                alt: "ست مراقبت پوست",
            },
        ],
        categoryId: "cat-5",
        brandId: "brand-5",
        rating: {
            average: 4.6,
            count: 27,
        },
        stock: 21,
        sku: "Neva-BEAUTY-002",
        badges: ["bestseller"],
        tags: ["مراقبت پوست", "زیبایی", "اسکین‌کر"],
        status: "active",
        featured: false,
        createdAt: "2026-08-15T00:00:00.000Z",
        updatedAt: "2026-08-15T00:00:00.000Z",
    },
    {
        id: "product-11",
        slug: "minimal-ceramic-mug",
        name: "ماگ سرامیکی مینیمال",
        shortDescription: "ماگ سرامیکی ساده برای میز کار و استفاده روزمره",
        description:
            "ماگ سرامیکی با فرم ساده و مینیمال که برای میز کار، مطالعه و لحظات روزمره انتخابی کاربردی است.",
        price: 490000,
        currency: "تومان",
        images: [
            {
                id: "product-11-image-1",
                url: "/images/products/product-11.webp",
                alt: "ماگ سرامیکی مینیمال",
            },
        ],
        categoryId: "cat-6",
        brandId: "brand-1",
        rating: {
            average: 4.7,
            count: 34,
        },
        stock: 35,
        sku: "Neva-LIFE-001",
        badges: ["new"],
        tags: ["ماگ", "سرامیک", "لایف‌استایل", "مینیمال"],
        status: "active",
        featured: true,
        createdAt: "2026-08-25T00:00:00.000Z",
        updatedAt: "2026-08-25T00:00:00.000Z",
    },
    {
        id: "product-12",
        slug: "scented-minimal-candle",
        name: "شمع معطر مینیمال",
        shortDescription: "شمع معطر با طراحی ساده برای فضای آرام خانه",
        description:
            "شمع معطر با رایحه‌ای آرامش‌بخش و طراحی مینیمال که برای دکور خانه و ایجاد فضایی دلنشین مناسب است.",
        price: 590000,
        compareAtPrice: 690000,
        currency: "تومان",
        images: [
            {
                id: "product-12-image-1",
                url: "/images/products/product-12.webp",
                alt: "شمع معطر مینیمال",
            },
        ],
        categoryId: "cat-6",
        brandId: "brand-3",
        rating: {
            average: 4.8,
            count: 41,
        },
        stock: 28,
        sku: "Neva-LIFE-002",
        badges: ["bestseller", "sale"],
        tags: ["شمع", "معطر", "خانه", "لایف‌استایل"],
        status: "active",
        featured: false,
        createdAt: "2026-08-10T00:00:00.000Z",
        updatedAt: "2026-08-10T00:00:00.000Z",
    },
];

export { products };

export const featuredProducts = products.filter(
    (product) => product.featured
);

export const newProducts = products.filter((product) =>
    product.badges?.includes("new")
);

export const saleProducts = products.filter((product) =>
    product.badges?.includes("sale")
);

export const bestsellerProducts = products.filter((product) =>
    product.badges?.includes("bestseller")
);