export type UserRole = "customer" | "admin";

export type UserStatus = "active" | "inactive" | "blocked";

export interface UserAddress {
    id: string;
    title: string;
    firstName: string;
    lastName: string;
    phone: string;
    province: string;
    city: string;
    postalCode: string;
    address: string;
    unit?: string;
    plaque?: string;
    isDefault: boolean;
}

export interface UserProfile {
    firstName: string;
    lastName: string;
    avatar?: string;
    phone: string;
    email?: string;
}

export interface User {
    id: string;
    username?: string;
    profile: UserProfile;
    role: UserRole;
    status: UserStatus;
    addresses: UserAddress[];
    createdAt: string;
    updatedAt: string;
}

export interface LoginCredentials {
    phoneOrEmail: string;
    password: string;
    rememberMe?: boolean;
}

export interface RegisterData {
    firstName: string;
    lastName: string;
    phone: string;
    email?: string;
    password: string;
    confirmPassword: string;
}

export interface UpdateProfileData {
    firstName: string;
    lastName: string;
    email?: string;
    phone: string;
}

export interface ChangePasswordData {
    currentPassword: string;
    newPassword: string;
    confirmPassword: string;
}
