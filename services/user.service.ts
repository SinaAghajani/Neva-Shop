import { api } from "@/lib/api";
import { API_ENDPOINTS } from "@/lib/constants";
import type { ApiResult } from "@/types/api";
import type {
    ChangePasswordData,
    UpdateProfileData,
    User,
    UserAddress,
} from "@/types/user";

export const userService = {
    getProfile: (): Promise<ApiResult<User>> =>
        api.get<User>(
            API_ENDPOINTS.profile
        ),

    updateProfile: (
        data: UpdateProfileData
    ): Promise<ApiResult<User>> =>
        api.patch<User>(
            API_ENDPOINTS.profile,
            data
        ),

    changePassword: (
        data: ChangePasswordData
    ): Promise<ApiResult<null>> =>
        api.patch<null>(
            `${API_ENDPOINTS.profile}/password`,
            data
        ),

    getAddresses: (): Promise<ApiResult<UserAddress[]>> =>
        api.get<UserAddress[]>(
            API_ENDPOINTS.addresses
        ),

    createAddress: (
        data: Omit<UserAddress, "id">
    ): Promise<ApiResult<UserAddress>> =>
        api.post<UserAddress>(
            API_ENDPOINTS.addresses,
            data
        ),

    updateAddress: (
        id: string,
        data: Partial<UserAddress>
    ): Promise<ApiResult<UserAddress>> =>
        api.patch<UserAddress>(
            API_ENDPOINTS.address(id),
            data
        ),

    deleteAddress: (
        id: string
    ): Promise<ApiResult<null>> =>
        api.delete<null>(
            API_ENDPOINTS.address(id)
        ),
};