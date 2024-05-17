// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ["@nuxtjs/tailwindcss"],
  runtimeConfig: {
    public: {
      appUrl: process.env.APP_URL || "http://localhost:3000"
    }
  },
  tailwindcss: {
    configPath: "tailwind.config.ts"
  }
})