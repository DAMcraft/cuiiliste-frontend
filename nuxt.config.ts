// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    compatibilityDate: '2024-04-03',
    devtools: {enabled: true},
    modules: ['@nuxtjs/tailwindcss', '@vueuse/nuxt', "@nuxt/icon", "@nuxt/image", '@nuxtjs/device', '@nuxtjs/sitemap', '@nuxtjs/robots'],
    postcss: {
        plugins: {
            tailwindcss: {},
            autoprefixer: {},
        },
    },
    runtimeConfig: {
        public: {
            api_root: 'https://api.cuiiliste.de',
            discord_invite: 'https://discord.gg/mrKTxwHxv7',
            monero_address: '89LWJ7qZzqKRDs1AunkgrijDvCTQ7taVofH6yqGgVFMg8Z6y66RZvbSGYt5B5eUVdJRnLz4UoJ7fPFr3251br72HFPi2Q2V',
            bitcoin_address: 'bc1qqrqp6j064pr6u0u30qvnalfgm7unwcegf42nc0',
            paypal_donate_url: 'https://www.paypal.com/donate/?hosted_button_id=TW4BL9HQK5TLJ'
        }
    },
    routeRules: {
        '/cuii/domain-liste': {redirect: {to: '/domains', statusCode: 301}},
        '/cuii/dns/**': {redirect: {to: '/umgehen', statusCode: 301}},
        '/cuii/pi-hole': {redirect: {to: '/umgehen', statusCode: 301}},
        '/cuii/AdGuard': {redirect: {to: '/umgehen', statusCode: 301}},
        '/cuii/frag-den-staat': {redirect: {to: '/', statusCode: 301}},
        '/cuii/impressum': {redirect: {to: '/about', statusCode: 301}},
        '/cuii/datenschutz': {redirect: {to: '/about', statusCode: 301}},
        '/cuii/kontakt': {redirect: {to: '/about', statusCode: 301}},
        '/cuii/domain-add': {redirect: {to: '/probe', statusCode: 301}},
        '/cuii/news-rund-um-die-welt': {redirect: {to: '/news', statusCode: 301}}
    },
    site: {
        url: 'https://cuiiliste.de',
        name: 'CuiiListe.de',
    },
    robots: {
        rules: {
            UserAgent: '*',
            Allow: '/',
            Sitemap: 'https://cuiiliste.de/sitemap.xml'
        }
    }
})