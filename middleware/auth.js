// middleware/auth.js
import { useAuthStore } from "~/stores/authStore";
export default defineNuxtRouteMiddleware((to, from) => {
  const authStore = useAuthStore();
  const isLoggedIn = authStore.isLoggedIn;

  if (!isLoggedIn && to.path !== "/login" && to.path !== "/register") {
    return navigateTo("/login");
  } else if (isLoggedIn && (to.path === "/login" || to.path === "/register")) {
    return navigateTo("/profile");
  }
});
