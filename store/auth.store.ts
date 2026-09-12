import { create } from "zustand";
import { persist } from "zustand/middleware";
import type { User } from "../types/user";

interface AuthStore {
    user: User | null;
    isAuthenticated: boolean;
    isLoading: boolean;
    setUser: (user: User | null) => void;
    setLoading: (isLoading: boolean) => void;
    logout: () => void;
}

export const useAuthStore = create<AuthStore>()(
    persist(
        (set) => ({
            user: null,
            isAuthenticated: false,
            isLoading: false,

            setUser: (user) => {
                set({
                    user,
                    isAuthenticated: Boolean(user),
                });
            },

            setLoading: (isLoading) => {
                set({ isLoading });
            },

            logout: () => {
                set({
                    user: null,
                    isAuthenticated: false,
                    isLoading: false,
                });
            },
        }),
        {
            name: "Neva-auth",
            partialize: (state) => ({
                user: state.user,
                isAuthenticated: state.isAuthenticated,
            }),
        }

    )
);
