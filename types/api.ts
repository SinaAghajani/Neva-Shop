export interface ApiResponse<T> {
    success: boolean;
    data: T;
    message?: string;
}

export interface ApiError {
    success: false;
    message: string;
    code?: string;
    statusCode?: number;
    errors?: Record<string, string[]>;
}

export interface ApiPagination {
    page: number;
    limit: number;
    total: number;
    totalPages: number;
}

export interface PaginatedResponse<T> {
    success: true;
    data: T[];
    pagination: ApiPagination;
}

export type ApiResult<T> = ApiResponse<T> | ApiError;
