// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  runtimeConfig: {
    public: {
      emailSendService: process.env.EMAIL_SEND_SERVICE,
      emailSendTemplate: process.env.EMAIL_SEND_TEMPLATE,
      emailSendPublicKey: process.env.EMAIL_SEND_PUBLIC_KEY,
    },
  },
  css: ["~/assets/css/main.css", "vue-final-modal/style.css"],

  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },

  modules: ["@nuxt/ui", "@vue-final-modal/nuxt"],
});
