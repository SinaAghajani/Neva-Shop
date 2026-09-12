import { api } from "@/lib/api";
import { API_ENDPOINTS } from "@/lib/constants";
import type { ApiResult } from "@/types/api";
import type {
    LoginCredentials,
    RegisterData,
    User,
} from "@/types/user";

export const authService = {
    login: (
        credentials: LoginCredentials
    ): Promise<ApiResult<User>> =>
        api.post<User>(
            API_ENDPOINTS.login,
            credentials
        ),

    register: (
        data: RegisterData
    ): Promise<ApiResult<User>> =>
        api.post<User>(
            API_ENDPOINTS.register,
            data
        ),

    logout: (): Promise<ApiResult<null>> =>
        api.post<null>(
            API_ENDPOINTS.logout
        ),

    getCurrentUser: (): Promise<ApiResult<User>> =>
        api.get<User>(
            API_ENDPOINTS.me
        ),
};