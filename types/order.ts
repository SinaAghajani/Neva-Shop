import type { UserAddress } from "./user";

export type OrderStatus =
    | "pending"
    | "confirmed"
    | "processing"
    | "shipped"
    | "delivered"
    | "cancelled"
    | "refunded";

export type PaymentStatus =
    | "pending"
    | "paid"
    | "failed"
    | "refunded";

export type PaymentMethod = "online" | "cash-on-delivery";

export interface OrderItem {
    id: string;
    productId: string;
    productName: string;
    productSlug: string;
    productImage?: string;
    quantity: number;
    unitPrice: number;
    totalPrice: number;
    variant?: {
        name: string;
        value: string;
    };
}

export interface Order {
    id: string;
    orderNumber: string;
    userId: string;
    items: OrderItem[];
    shippingAddress: UserAddress;
    paymentMethod: PaymentMethod;
    paymentStatus: PaymentStatus;
    status: OrderStatus;
    subtotal: number;
    discount: number;
    shipping: number;
    tax: number;
    total: number;
    couponCode?: string;
    createdAt: string;
    updatedAt: string;
}

export interface CreateOrderInput {
    items: Array<{
        productId: string;
        quantity: number;
        variantId?: string;
    }>;
    shippingAddressId: string;
    paymentMethod: PaymentMethod;
    couponCode?: string;
}

export interface OrderListResponse {
    orders: Order[];
    total: number;
    page: number;
    limit: number;
    totalPages: number;
}
