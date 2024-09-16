import {useAuthStore} from "@/store/modules/authStore.js";


export default function guest({ next, router }) {
  if (useAuthStore().getRefreshToken) {
    return router.push({ path: "/" });
  }

  return next();
}
