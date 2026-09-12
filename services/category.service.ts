import { api } from "@/lib/api";
import { API_ENDPOINTS } from "@/lib/constants";
import type { ApiResult } from "@/types/api";
import type { Category, CategoryTree } from "@/types/category";
import type { ProductListResponse } from "@/types/product";

export const categoryService = {
    getCategories: (): Promise<ApiResult<Category[]>> =>
        api.get<Category[]>(
            API_ENDPOINTS.categories
        ),

    getCategory: (
        slug: string
    ): Promise<ApiResult<Category>> =>
        api.get<Category>(
            API_ENDPOINTS.category(slug)
        ),

    getCategoryProducts: (
        slug: string,
        params?: {
            page?: number;
            limit?: number;
        }
    ): Promise<ApiResult<ProductListResponse>> =>
        api.get<ProductListResponse>(
            `${API_ENDPOINTS.category(slug)}/products`,
            params
        ),

    getCategoryTree: (): Promise<ApiResult<CategoryTree[]>> =>
        api.get<CategoryTree[]>(
            `${API_ENDPOINTS.categories}/tree`
        ),
};