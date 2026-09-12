import type { ApiError, ApiResult } from "@/types/api";

const API_URL = process.env.NEXT_PUBLIC_API_URL ?? "";

interface RequestOptions extends RequestInit {
    params?: Record<string, string | number | boolean | undefined | null>;
}

const buildUrl = (
    endpoint: string,
    params?: RequestOptions["params"]
): string => {
    const baseUrl = API_URL.replace(/\/$/, "");
    const path = endpoint.startsWith("/") ? endpoint : `/${endpoint}`;
    const url = new URL(`${baseUrl}${path}`, window.location.origin);

    if (params) {
        Object.entries(params).forEach(([key, value]) => {
            if (value !== undefined && value !== null) {
                url.searchParams.set(key, String(value));
            }
        });
    }

    return API_URL ? url.toString() : `${path}${url.search}`;
};

const parseResponse = async <T>(
    response: Response
): Promise<ApiResult<T>> => {
    let body: unknown;

    try {
        body = await response.json();
    } catch {
        body = null;
    }

    if (!response.ok) {
        const error: ApiError = {
            success: false,
            message:
                typeof body === "object" &&
                    body !== null &&
                    "message" in body &&
                    typeof body.message === "string"
                    ? body.message
                    : "خطایی در ارتباط با سرور رخ داده است.",
            statusCode: response.status,
        };

        if (
            typeof body === "object" &&
            body !== null &&
            "code" in body &&
            typeof body.code === "string"
        ) {
            error.code = body.code;
        }

        if (
            typeof body === "object" &&
            body !== null &&
            "errors" in body &&
            typeof body.errors === "object" &&
            body.errors !== null
        ) {
            error.errors = body.errors as Record<string, string[]>;
        }

        return error;
    }

    if (
        typeof body === "object" &&
        body !== null &&
        "success" in body
    ) {
        return body as ApiResult<T>;
    }

    return {
        success: true,
        data: body as T,
    };
};

const request = async <T>(
    endpoint: string,
    options: RequestOptions = {}
): Promise<ApiResult<T>> => {
    const { params, headers, body, ...rest } = options;

    const response = await fetch(buildUrl(endpoint, params), {
        ...rest,
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
            ...headers,
        },
        credentials: "include",
        body:
            body && typeof body !== "string"
                ? JSON.stringify(body)
                : body,
    });

    return parseResponse<T>(response);
};

export const api = {
    get: <T>(
        endpoint: string,
        params?: RequestOptions["params"]
    ) =>
        request<T>(endpoint, {
            method: "GET",
            params,
        }),

    post: <T>(
        endpoint: string,
        body?: unknown
    ) =>
        request<T>(endpoint, {
            method: "POST",
            body: body === undefined ? undefined : JSON.stringify(body),
        }),

    put: <T>(
        endpoint: string,
        body?: unknown
    ) =>
        request<T>(endpoint, {
            method: "PUT",
            body: body === undefined ? undefined : JSON.stringify(body),
        }),

    patch: <T>(
        endpoint: string,
        body?: unknown
    ) =>
        request<T>(endpoint, {
            method: "PATCH",
            body: body === undefined ? undefined : JSON.stringify(body),
        }),

    delete: <T>(endpoint: string) =>
        request<T>(endpoint, {
            method: "DELETE",
        }),
};