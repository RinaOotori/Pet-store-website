import {useAuthStore} from "@/store/modules/authStore.js";

export default function auth({ next, router }) {
    console.log(router)
    if (!useAuthStore().getRefreshToken) {
        return router.push({ path: "/" });
    }

    return next();
}
