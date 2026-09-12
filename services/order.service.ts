import { api } from "@/lib/api";
import { API_ENDPOINTS } from "@/lib/constants";
import type { ApiResult } from "@/types/api";
import type {
    CreateOrderInput,
    Order,
    OrderListResponse,
} from "@/types/order";

export const orderService = {
    getOrders: (
        params?: {
            page?: number;
            limit?: number;
        }
    ): Promise<ApiResult<OrderListResponse>> =>
        api.get<OrderListResponse>(
            API_ENDPOINTS.orders,
            params
        ),

    getOrder: (
        id: string
    ): Promise<ApiResult<Order>> =>
        api.get<Order>(
            API_ENDPOINTS.order(id)
        ),

    createOrder: (
        data: CreateOrderInput
    ): Promise<ApiResult<Order>> =>
        api.post<Order>(
            API_ENDPOINTS.orders,
            data
        ),

    cancelOrder: (
        id: string
    ): Promise<ApiResult<Order>> =>
        api.patch<Order>(
            API_ENDPOINTS.order(id),
            {
                status: "cancelled",
            }
        ),
};