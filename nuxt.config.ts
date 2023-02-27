import { defineNuxtConfig } from 'nuxt/config'

export default defineNuxtConfig({
	telemetry: false,
	srcDir: 'src/',
	css: ['assets/scss/main.scss'],
	components: {
		global: true,
		dirs: ['~/components'],
	},
	vite: {
		css: {
			devSourcemap: true,
		},
	},
	runtimeConfig: {
		siteUrl: process.env.BASE_URL,
		public: {
			baseUrl: process.env.BASE_URL || 'https://localhost:3000',
			recaptchaKey: process.env.RECAPTCHA_KEY,
			storyblokPreview: process.env.STORYBLOK_PREVIEW_ACCESS_TOKEN,
			'graphql-client': {
				clients: {
					default: {
						host: 'https://byvolk.myshopify.com/api/2022-10/graphql.json',
						headers: {
							'X-Shopify-Storefront-Access-Token': process.env.SHOPIFY_ACCESS_TOKEN,
						},
						retainToken: true,
					},
				},
			},
		},
	},
	app: {
		head: {
			title: 'BYVOLK',
			link: [{ rel: 'icon', type: 'image/png', href: '/favicon.png' }],
			noscript: [
				{
					innerHTML:
						'<div class="noscript">This site requires JavaScript to be enabled to work properly</div>',
				},
			],
			htmlAttrs: {
				lang: 'en',
			},
		},
		pageTransition: {
			name: 'page',
			mode: 'out-in',
		},
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
		'nuxt3-lazy-load',
		'@nuxtjs/robots',
	],
	build: {
		transpile: ['zod', '@vee-validate/zod', 'vee-validate', 'vue-recaptcha', 'gsap'],
	},
	postcss: {
		plugins: {
			'postcss-import': {},
			autoprefixer: {
				overrideBrowserslist: ['>1%', 'last 3 versions', 'iOS >=8', 'Safari >=8', 'ie 11'],
			},
		},
	},
	storyblok: {
		accessToken: process.env.STORYBLOK_PUBLIC_ACCESS_TOKEN,
		useApiClient: true,
		apiOptions: {
			cache: { type: 'memory', clear: 'auto' },
			https: true,
		},
		apiPlugin: false,
		bridge: true,
	},
	fontLoader: {
		local: [
			{
				src: '/fonts/Montserrat/Montserrat-Regular.woff2',
				family: 'Montserrat',
				weight: '400',
				display: 'swap',
			},
			{
				src: '/fonts/Montserrat/Montserrat-Medium.woff2',
				family: 'Montserrat',
				weight: '500',
				display: 'swap',
			},
			{
				src: '/fonts/Montserrat/Montserrat-SemiBold.woff2',
				family: 'Montserrat',
				weight: '600',
				display: 'swap',
			},
			{
				src: '/fonts/Montserrat/Montserrat-Bold.woff2',
				family: 'Montserrat',
				weight: '700',
				display: 'swap',
			},
			{
				src: '/fonts/Avenir/AvenirNextCyr-Regular.woff2',
				family: 'Avenir Next',
				weight: '400',
				display: 'swap',
			},
			{
				src: '/fonts/Avenir/AvenirNextCyr-Light.woff2',
				family: 'Avenir Next',
				weight: '300',
				display: 'swap',
			},
			{
				src: '/fonts/Avenir/AvenirNextCyr-Medium.woff2',
				family: 'Avenir Next',
				weight: '500',
				display: 'swap',
			},
			{
				src: '/fonts/Avenir/AvenirNextCyr-Bold.woff2',
				family: 'Avenir Next',
				weight: '700',
				display: 'swap',
			},
			{
				src: '/fonts/Bebas_Neue/BebasNeueBold.woff2',
				family: 'Bebas Neue',
				weight: '700',
				display: 'swap',
				class: 'h-bebas',
				fallback: 'sans-serif',
			},
		],
	},
	sitemap: {
		hostname: process.env.BASE_URL,
	},
	robots: {
		configPath: './robots.config.ts',
	},
	nitro: {
		prerender: {
			crawlLinks: true,
			routes: ['/'],
		},
	},
	image: {
		dir: 'public',
		storyblok: {
			baseURL: 'https://a.storyblok.com',
			modifiers: {
				effect: 'sharpen:100',
				quality: 'auto:best',
			},
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
