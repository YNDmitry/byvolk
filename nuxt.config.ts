import { defineNuxtConfig } from 'nuxt/config'

export default defineNuxtConfig({
	telemetry: false,
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
				autoImports: ['defineStore', 'definePiniaStore'],
			},
		],
		'@storyblok/nuxt',
		'@vueuse/nuxt',
		'nuxt-swiper',
		'nuxt-graphql-client',
		'nuxt-font-loader',
		'@nuxt/image-edge',
		'nuxt-simple-sitemap',
	],
	build: {
		transpile: ['gsap'],
	},
	postcss: {
		plugins: {
			'postcss-import': {},
			autoprefixer: {
				overrideBrowserslist: ['last 10 versions'],
			},
		},
	},
	storyblok: {
		accessToken: process.env.STORYBLOK_ACCESS_TOKEN,
		useApiClient: true,
		apiOptions: { cache: { type: 'memory' } },
		bride: true,
	},
	fontLoader: {
		local: [
			{
				src: '/fonts/Montserrat/Montserrat-Regular.woff2',
				family: 'Montserrat',
				weight: '400',
			},
			{
				src: '/fonts/Montserrat/Montserrat-Medium.woff2',
				family: 'Montserrat',
				weight: '500',
			},
			{
				src: '/fonts/Montserrat/Montserrat-SemiBold.woff2',
				family: 'Montserrat',
				weight: '600',
			},
			{
				src: '/fonts/Montserrat/Montserrat-Bold.woff2',
				family: 'Montserrat',
				weight: '700',
			},
			{
				src: '/fonts/Avenir/AvenirNextCyr-Regular.woff2',
				family: 'Avenir Next',
				weight: '400',
			},
			{
				src: '/fonts/Avenir/AvenirNextCyr-Light.woff2',
				family: 'Avenir Next',
				weight: '300',
			},
			{
				src: '/fonts/Avenir/AvenirNextCyr-Medium.woff2',
				family: 'Avenir Next',
				weight: '500',
			},
			{
				src: '/fonts/Avenir/AvenirNextCyr-Bold.woff2',
				family: 'Avenir Next',
				weight: '700',
			},
		],
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
	sitemap: {
		hostname: process.env.BASE_URL,
	},
	nitro: {
		prerender: {
			routes: [
				'/',
				'/collections',
				'/projects',
				'/commission',
				'/materials',
				'/contact',
			],
		},
	},
	runtimeConfig: {
		siteUrl: process.env.BASE_URL,
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
