import { api } from "@/lib/api";
import { API_ENDPOINTS } from "@/lib/constants";
import type {
    Product,
    ProductFilters,
    ProductListResponse,
} from "@/types/product";
import type { ApiResult } from "@/types/api";

const buildProductQuery = (
    filters?: ProductFilters
): Record<string, string | number | boolean | null | undefined> | undefined => {
    if (!filters) {
        return undefined;
    }

    return {
        categoryId: filters.categoryId,
        brandId: filters.brandId,
        minPrice: filters.minPrice,
        maxPrice: filters.maxPrice,
        rating: filters.rating,
        badges: filters.badges?.join(","),
        search: filters.search,
        sort: filters.sort,
        page: filters.page,
        limit: filters.limit,
    };
};

export const productService = {
    getProducts: (
        filters?: ProductFilters
    ): Promise<ApiResult<ProductListResponse>> =>
        api.get<ProductListResponse>(
            API_ENDPOINTS.products,
            buildProductQuery(filters)
        ),

    getProduct: (
        slug: string
    ): Promise<ApiResult<Product>> =>
        api.get<Product>(
            API_ENDPOINTS.product(slug)
        ),

    searchProducts: (
        filters?: ProductFilters
    ): Promise<ApiResult<ProductListResponse>> =>
        api.get<ProductListResponse>(
            API_ENDPOINTS.search,
            buildProductQuery(filters)
        ),
};