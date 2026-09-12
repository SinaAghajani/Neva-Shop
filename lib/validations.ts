import { z } from "zod";

export const phoneSchema = z
    .string()
    .trim()
    .regex(/^(\+98|0098|98|0)?9\d{9}$/, "شماره موبایل معتبر نیست.");

export const emailSchema = z
    .string()
    .trim()
    .email("ایمیل معتبر نیست.");

export const passwordSchema = z
    .string()
    .min(8, "رمز عبور باید حداقل ۸ کاراکتر باشد.")
    .max(100, "رمز عبور بیش از حد طولانی است.");

export const loginSchema = z.object({
    phoneOrEmail: z
        .string()
        .trim()
        .min(1, "شماره موبایل یا ایمیل را وارد کنید."),
    password: z
        .string()
        .min(1, "رمز عبور را وارد کنید."),
    rememberMe: z.boolean(),
});

export const registerSchema = z
    .object({
        firstName: z
            .string()
            .trim()
            .min(2, "نام باید حداقل ۲ کاراکتر باشد.")
            .max(50, "نام بیش از حد طولانی است."),
        lastName: z
            .string()
            .trim()
            .min(2, "نام خانوادگی باید حداقل ۲ کاراکتر باشد.")
            .max(70, "نام خانوادگی بیش از حد طولانی است."),
        phone: phoneSchema,
        email: emailSchema.optional().or(z.literal("")),
        password: passwordSchema,
        confirmPassword: z.string(),
    })
    .refine(
        (data) => data.password === data.confirmPassword,
        {
            message: "تکرار رمز عبور صحیح نیست.",
            path: ["confirmPassword"],
        }
    );

export const updateProfileSchema = z.object({
    firstName: z
        .string()
        .trim()
        .min(2, "نام باید حداقل ۲ کاراکتر باشد.")
        .max(50),
    lastName: z
        .string()
        .trim()
        .min(2, "نام خانوادگی باید حداقل ۲ کاراکتر باشد.")
        .max(70),
    phone: phoneSchema,
    email: emailSchema.optional().or(z.literal("")),
});

export const changePasswordSchema = z
    .object({
        currentPassword: z
            .string()
            .min(1, "رمز عبور فعلی را وارد کنید."),
        newPassword: passwordSchema,
        confirmPassword: z.string(),
    })
    .refine(
        (data) => data.newPassword === data.confirmPassword,
        {
            message: "تکرار رمز عبور صحیح نیست.",
            path: ["confirmPassword"],
        }
    );

export const addressSchema = z.object({
    title: z
        .string()
        .trim()
        .min(1, "عنوان آدرس را وارد کنید.")
        .max(50),
    firstName: z
        .string()
        .trim()
        .min(2, "نام را وارد کنید.")
        .max(50),
    lastName: z
        .string()
        .trim()
        .min(2, "نام خانوادگی را وارد کنید.")
        .max(70),
    phone: phoneSchema,
    province: z
        .string()
        .trim()
        .min(2, "استان را وارد کنید."),
    city: z
        .string()
        .trim()
        .min(2, "شهر را وارد کنید."),
    postalCode: z
        .string()
        .trim()
        .regex(/^\d{10}$/, "کد پستی باید ۱۰ رقم باشد."),
    address: z
        .string()
        .trim()
        .min(10, "آدرس کامل را وارد کنید.")
        .max(500),
    unit: z.string().trim().max(20).optional(),
    plaque: z.string().trim().max(20).optional(),
    isDefault: z.boolean().optional().default(false),
});

export const productFilterSchema = z.object({
    categoryId: z.string().optional(),
    brandId: z.string().optional(),
    minPrice: z.coerce.number().min(0).optional(),
    maxPrice: z.coerce.number().min(0).optional(),
    rating: z.coerce.number().min(0).max(5).optional(),
    search: z.string().trim().optional(),
    sort: z
        .enum([
            "newest",
            "oldest",
            "price-asc",
            "price-desc",
            "rating",
            "popular",
        ])
        .optional(),
    page: z.coerce.number().int().positive().optional(),
    limit: z.coerce.number().int().positive().max(48).optional(),
});

export const addToCartSchema = z.object({
    productId: z.string().min(1),
    quantity: z.coerce.number().int().positive().max(99),
    variantId: z.string().optional(),
});

export const updateCartItemSchema = z.object({
    itemId: z.string().min(1),
    quantity: z.coerce.number().int().min(0).max(99),
});

export const createOrderSchema = z.object({
    items: z
        .array(
            z.object({
                productId: z.string().min(1),
                quantity: z.coerce.number().int().positive().max(99),
                variantId: z.string().optional(),
            })
        )
        .min(1, "سبد خرید نمی‌تواند خالی باشد."),
    shippingAddressId: z.string().min(1),
    paymentMethod: z.enum(["online", "cash-on-delivery"]),
    couponCode: z.string().trim().optional(),
});

export const forgotPasswordSchema = z.object({
    phone: phoneSchema,
});

export type ForgotPasswordInput = z.infer<typeof forgotPasswordSchema>;
export type LoginInput = z.infer<typeof loginSchema>;
export type RegisterInput = z.infer<typeof registerSchema>;
export type UpdateProfileInput = z.infer<typeof updateProfileSchema>;
export type ChangePasswordInput = z.infer<typeof changePasswordSchema>;
export type AddressInput = z.infer<typeof addressSchema>;
export type ProductFilterInput = z.infer<typeof productFilterSchema>;
export type AddToCartInput = z.infer<typeof addToCartSchema>;
export type UpdateCartItemInput = z.infer<typeof updateCartItemSchema>;
export type CreateOrderInput = z.infer<typeof createOrderSchema>;