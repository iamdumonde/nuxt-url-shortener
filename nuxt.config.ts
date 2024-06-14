// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ["@nuxtjs/tailwindcss", "nuxt-icon", "@formkit/nuxt"],
  runtimeConfig: {
    public: {
      appUrl: process.env.APP_URL || "http://localhost:3000",
      apiUrl: process.env.API_URL || "http://localhost:8000",
    }
  },
  tailwindcss: {
    configPath: "tailwind.config.ts"
  }
})
