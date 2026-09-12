export type ProductStatus = "active" | "draft" | "archived";

export type ProductBadge = "new" | "sale" | "featured" | "bestseller";

export interface ProductImage {
    id: string;
    url: string;
    alt: string;
    width?: number;
    height?: number;
}

export interface ProductVariant {
    id: string;
    name: string;
    value: string;
    price?: number;
    stock: number;
    sku?: string;
}

export interface ProductRating {
    average: number;
    count: number;
}

export interface ProductReview {
    id: string;
    userId: string;
    userName: string;
    rating: number;
    title?: string;
    comment: string;
    createdAt: string;
}

export interface Product {
    id: string;
    slug: string;
    name: string;
    shortDescription: string;
    description: string;
    price: number;
    compareAtPrice?: number;
    currency: string;
    images: ProductImage[];
    categoryId: string;
    brandId?: string;
    variants?: ProductVariant[];
    rating: ProductRating;
    reviews?: ProductReview[];
    stock: number;
    sku: string;
    badges?: ProductBadge[];
    tags?: string[];
    status: ProductStatus;
    featured: boolean;
    createdAt: string;
    updatedAt: string;
}

export interface ProductFilters {
    categoryId?: string;
    brandId?: string;
    minPrice?: number;
    maxPrice?: number;
    rating?: number;
    badges?: ProductBadge[];
    search?: string;
    sort?: ProductSort;
    page?: number;
    limit?: number;
}

export type ProductSort =
    | "newest"
    | "oldest"
    | "price-asc"
    | "price-desc"
    | "rating"
    | "popular";

export interface ProductQuery {
    filters?: ProductFilters;
}

export interface ProductListResponse {
    products: Product[];
    total: number;
    page: number;
    limit: number;
    totalPages: number;
}
