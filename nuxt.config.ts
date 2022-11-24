import { defineNuxtConfig } from 'nuxt/config'

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
	srcDir: 'src/',
	css: ['~/assets/scss/main.scss'],
	components: {
		global: true,
		dirs: ['~/components'],
	},
	modules: [
		[
			'@pinia/nuxt',
			{
				autoImports: [['defineStore', 'definePiniaStore']],
			},
		],
		'@storyblok/nuxt',
		'@vueuse/nuxt',
		'nuxt-swiper',
		'nuxt-graphql-client',
	],
	build: {
		transpile: ['gsap'],
	},
	storyblok: {
		accessToken: process.env.STORYBLOK_ACCESS_TOKEN,
		useApiClient: true,
	},
	app: {
		head: {
			title: 'BYVOLK',
			link: [{ rel: 'icon', type: 'image/png', href: '/favicon.png' }],
			noscript: [{ children: 'Javascript is required' }],
			htmlAttrs: {
				lang: 'en',
			},
		},
		pageTransition: {
			name: 'page',
			mode: 'out-in',
		},
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
	// image: {
	// 	dir: 'public',
	// 	storyblok: {
	// 		baseURL: 'https://a.storyblok.com',
	// 	},
	// 	screens: {
	// 		xs: 320,
	// 		sm: 640,
	// 		md: 768,
	// 		lg: 1024,
	// 		xl: 1280,
	// 		xxl: 1536,
	// 		'2xl': 1536,
	// 	},
	// },
})
