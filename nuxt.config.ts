import { defineNuxtConfig } from 'nuxt/config'

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
	srcDir: 'src/',
	components: {
		global: true,
		dirs: ['~/components'],
	},
	modules: [
		'@nuxt/image-edge',
		[
			'@pinia/nuxt',
			{
				autoImports: [
					['defineStore', 'definePiniaStore'],
				],
			},
		],
		'@storyblok/nuxt',
		'@vueuse/nuxt',
		'nuxt-swiper',
		'nuxt-graphql-client',
	],
	storyblok: {
		accessToken: process.env.STORYBLOK_ACCESS_TOKEN,
		cacheProvider: 'memory',
	},
	css: ['~/assets/scss/main.scss'],
	app: {
		head: {
			title: 'BYVOLK',
			link: [{ rel: 'icon', type: 'image/png', href: '/favicon.png' }],
			noscript: [{ children: 'Javascript is required' }],
			htmlAttrs: {
				lang: 'en',
			},
		},
	},
	pageTransition: {
		name: 'page',
	},
	runtimeConfig: {
		// Config within public will be also exposed to the client
		public: {
			baseUrl: process.env.BASE_URL || 'https://localhost:3000',
			'graphql-client': {
				clients: {
					default: {
						host: 'https://byvolk.myshopify.com/api/2022-10/graphql.json',
						headers: {
							'X-Shopify-Storefront-Access-Token':
								process.env.SHOPIFY_ACCESS_TOKEN,
						},
						retainToken: true,
					},
				},
			},
		},
	},
	build: {
		postcss: {
			postcssOptions: {
				plugins: {
					autoprefixer: {},
				},
			},
		},
	},
	image: {
		dir: 'public',
		storyblok: {
			baseURL: 'https://a.storyblok.com',
		},
		screens: {
			xs: 320,
			sm: 640,
			md: 768,
			lg: 1024,
			xl: 1280,
			xxl: 1536,
			'2xl': 1536,
		},
	},
})
