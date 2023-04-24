import { defineNuxtConfig } from 'nuxt/config'
import { motionSettings } from './src/config/motion.config'
import { fontsConfig } from './src/config/fonts.config'
import { imageConfig } from './src/config/image.config'
import { appConfig } from './src/config/app.config'

export default defineNuxtConfig({
  telemetry: false,
  srcDir: 'src/',
  css: ['assets/scss/main.scss'],
  components: {
    global: true,
    dirs: ['~/components']
  },
  vite: {
    css: { devSourcemap: true }
  },
  typescript: { strict: true },
  runtimeConfig: {
    public: {
      'graphql-client': {
        clients: {
          default: {
            host: 'https://byvolk.myshopify.com/api/2022-10/graphql.json',
            headers: {
              'X-Shopify-Storefront-Access-Token': process.env.NUXT_SHOPIFY_ACCESS_TOKEN
            },
            retainToken: true
          }
        }
      },
      storyblokVersion: process.env.NUXT_STORYBLOK_VERSION,
      baseUrl: process.env.NUXT_BASE_URL || 'https://localhost:3000',
      recaptchaKey: process.env.NUXT_RECAPTCHA_KEY
    }
  },
  app: appConfig,
  modules: [
    ['@pinia/nuxt', { autoImports: ['defineStore', 'definePiniaStore'] }],
    '@storyblok/nuxt',
    '@vueuse/nuxt',
    'nuxt-swiper',
    'nuxt-graphql-client',
    'nuxt-font-loader',
    '@nuxt/image-edge',
    'nuxt-simple-sitemap',
    ['nuxt3-lazy-load', { directiveOnly: true }],
    '@nuxtjs/robots',
    '@vueuse/motion/nuxt'
  ],
  build: {
    transpile: ['zod', '@vee-validate/zod', 'vee-validate', 'vue-recaptcha']
  },
  postcss: {
    plugins: {
      'postcss-import': {},
      ...(process.env.NODE_ENV === 'production' && {
        autoprefixer: {
          overrideBrowserslist: ['>1%', 'last 3 versions', 'iOS >=8', 'Safari >=8', 'ie 11']
        }
      })
    }
  },
  storyblok: {
    accessToken: process.env.NUXT_STORYBLOK_ACCESS_TOKEN,
    useApiClient: true,
    apiOptions: { cache: { type: 'memory' }, https: true },
    apiPlugin: true,
    bridge: process.env.NODE_ENV !== 'production',
    devtools: true
  },
  fontLoader: { local: fontsConfig },
  sitemap: { hostname: process.env.NUXT_BASE_URL },
  robots: { configPath: './src/config/robots.config.ts' },
  nitro: { prerender: { crawlLinks: true, routes: ['/'] } },
  image: imageConfig,
  motion: motionSettings
})
