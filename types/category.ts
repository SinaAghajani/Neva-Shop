export interface CategoryImage {
    url: string;
    alt: string;
}

export interface Category {
    id: string;
    slug: string;
    name: string;
    description?: string;
    image?: CategoryImage;
    parentId?: string;
    productCount?: number;
    featured?: boolean;
    createdAt: string;
    updatedAt: string;
}

export interface CategoryTree extends Category {
    children: CategoryTree[];
}
