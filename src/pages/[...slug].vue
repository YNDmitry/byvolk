<template>
	<div>
		<Head>
			<Title>{{ story?.content.SEO?.title || 'BYVOLK' }}</Title>
			<Meta :content="story?.content.SEO?.description" name="description"></Meta>
			<Meta property="og:type" content="website"></Meta>
			<Meta :content="story?.content.SEO?.og_title" property="og:title"></Meta>
			<Meta :content="story?.content.SEO?.og_description" property="og:description"></Meta>
			<Meta :content="story?.content.SEO?.og_image" property="og:image"></Meta>
			<Meta :content="story?.content.SEO?.twitter_title" property="twitter:title"></Meta>
			<Meta :content="story?.content.SEO?.twitter_description" property="twitter:description"></Meta>
			<Meta :content="story?.content.SEO?.twitter_image" property="twitter:image"></Meta>
			<Meta content="summary_large_image" name="twitter:card"></Meta>
		</Head>

		<Body :class="story?.content?.page_black ? 'dark' : ''">
			<StoryblokComponent v-if="story" :blok="story.content" />
		</Body>
	</div>
</template>

<script setup>
	// import { gsap, Power3 } from 'gsap'
	// import { ScrollTrigger } from 'gsap/ScrollTrigger';
	
	const config = useRuntimeConfig()

	const { slug } = useRoute().params
	const version =
		config.public.baseUrl === 'https://localhost:3000' ? 'draft' : 'published'

	let story = null

	try {
		story = await useAsyncStoryblok(
			slug && slug.length > 0 ? slug.join('/') : 'home',
			{
				version: version,
			}
		)
	} catch (error) {
		throw createError({
			statusCode: 404,
			statusMessage: 'Page not found or something went wrong...',
		})
	}

	function animFrom(el) {
		gsap.from('.up', {
			scale: 0,
			opacity: 0,
		})
	}

	function animTo(el) {
		gsap.to(el, {
			scale: 1,
			opacity: 1,
			duration: 1,
			ease: Power3.easeInOut,
		})
	}

	function animInit() {
		gsap.utils.toArray('.up').forEach((el) => {
			ScrollTrigger.create({
				trigger: el,
				markers: true,
				start: 'top 80%',
				end: 'bottom 10%',
				once: true,
				onEnter: () => {
					animTo(el)
				},
			})
		})
	}

	onMounted(() => {
		// gsap.registerPlugin(ScrollTrigger)
		// animFrom()
		// animInit()
	})
</script>
