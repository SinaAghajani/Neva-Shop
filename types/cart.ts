import type { Product } from "./product";

export interface CartItem {
    id: string;
    productId: string;
    product: Product;
    quantity: number;
    variantId?: string;
    variant?: {
        name: string;
        value: string;
    };
    unitPrice: number;
    totalPrice: number;
}

export interface Cart {
    id: string;
    items: CartItem[];
    subtotal: number;
    discount: number;
    shipping: number;
    tax: number;
    total: number;
    couponCode?: string;
    updatedAt: string;
}

export interface AddToCartInput {
    productId: string;
    quantity?: number;
    variantId?: string;
}

export interface UpdateCartItemInput {
    itemId: string;
    quantity: number;
}

export interface CartSummary {
    itemCount: number;
    subtotal: number;
    discount: number;
    shipping: number;
    tax: number;
    total: number;
}
