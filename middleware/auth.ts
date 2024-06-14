import axios, { AxiosError } from "axios";

export default defineNuxtRouteMiddleware(async (to, from) => {
  const { initUser, user } = useAuth();
  await initUser();
  if (!user.value) {
    return navigateTo("/login");
  }
});
