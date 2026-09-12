export interface Brand {
    id: string;
    slug: string;
    name: string;
    logo: string;
    description?: string;
    featured: boolean;
}

export const brands: Brand[] = [
    {
        id: "brand-1",
        slug: "Neva",
        name: "Neva",
        logo: "/images/brands/Neva.svg",
        description: "انتخاب‌های مینیمال برای زندگی مدرن",
        featured: true,
    },
    {
        id: "brand-2",
        slug: "arven",
        name: "Arven",
        logo: "/images/brands/arven.svg",
        description: "طراحی ساده و ماندگار",
        featured: true,
    },
    {
        id: "brand-3",
        slug: "vela",
        name: "Vela",
        logo: "/images/brands/vela.svg",
        description: "ترکیبی از کیفیت و زیبایی",
        featured: true,
    },
    {
        id: "brand-4",
        slug: "nora",
        name: "Nora",
        logo: "/images/brands/nora.svg",
        description: "سبک متفاوت برای انتخاب متفاوت",
        featured: true,
    },
    {
        id: "brand-5",
        slug: "avena",
        name: "Avena",
        logo: "/images/brands/avena.svg",
        description: "محصولات منتخب و کاربردی",
        featured: false,
    },
];