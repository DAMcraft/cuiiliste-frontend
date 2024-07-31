// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    compatibilityDate: '2024-04-03',
    devtools: {enabled: true},
    modules: [
        '@nuxtjs/tailwindcss',
        '@vueuse/nuxt',
        "@nuxt/icon",
        "@nuxt/image",
        '@nuxtjs/device'
    ],
    postcss: {
        plugins: {
            tailwindcss: {},
            autoprefixer: {},
        },
    },
    runtimeConfig: {
        public: {
            api_root: 'https://api.cuiiliste.de'
        }
    },
    routeRules: {
        '/cuii/domain-liste': {redirect: '/domains'},
        '/cuii/dns/**': {redirect: '/umgehen'},
        '/cuii/pi-hole': {redirect: '/umgehen'},
        '/cuii/AdGuard': {redirect: '/umgehen'},
        '/cuii/frag-den-staat': {redirect: '/'},
        '/cuii/impressum': {redirect: '/about'},
        '/cuii/datenschutz': {redirect: '/about'},
        '/cuii/kontakt': {redirect: '/about'},
        '/cuii/domain-add': {redirect: '/probe'},
        '/cuii/news-rund-um-die-welt': {redirect: '/news'},
    }
})