import { api } from "@/lib/api";
import { API_ENDPOINTS } from "@/lib/constants";
import type { ApiResult } from "@/types/api";
import type {
    AddToCartInput,
    Cart,
    UpdateCartItemInput,
} from "@/types/cart";

export const cartService = {
    getCart: (): Promise<ApiResult<Cart>> =>
        api.get<Cart>(
            API_ENDPOINTS.cart
        ),

    addItem: (
        data: AddToCartInput
    ): Promise<ApiResult<Cart>> =>
        api.post<Cart>(
            API_ENDPOINTS.cartItems,
            data
        ),

    updateItem: (
        data: UpdateCartItemInput
    ): Promise<ApiResult<Cart>> =>
        api.patch<Cart>(
            `${API_ENDPOINTS.cartItems}/${data.itemId}`,
            {
                quantity: data.quantity,
            }
        ),

    removeItem: (
        itemId: string
    ): Promise<ApiResult<Cart>> =>
        api.delete<Cart>(
            `${API_ENDPOINTS.cartItems}/${itemId}`
        ),

    clearCart: (): Promise<ApiResult<null>> =>
        api.delete<null>(
            API_ENDPOINTS.cartItems
        ),
};