import {defineStore} from "pinia";
import router from "@/router";

interface State {
    accessToken: string | null,
    refreshToken: string | null,
}

export const useAuthStore = defineStore(
    'token',
    {
        state: (): State => (
            {
                accessToken: null,
                refreshToken: null,
            }
        ),
        getters: {
            getAccessToken(state: State): string | null {
                const accessToken: string | null = state.accessToken;
                if (!accessToken) {
                    const refreshToken: string | null = state.refreshToken;
                    if (!refreshToken) {
                        router.push({name: 'Login'});
                    } else {
                        useAuthStore().refreshToken();
                    }
                }

                return accessToken;
            },
            getRefreshToken: (state: State) => state.refreshToken,
        },
        actions: {
            refreshToken(): void {

            }
        },
    }
);
