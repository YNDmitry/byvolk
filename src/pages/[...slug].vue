<template>
	<div>
		<Head>
			<Title>{{ story?.content.SEO?.title || 'BYVOLK' }}</Title>
		</Head>

		<Body :class="story?.content?.page_black ? 'dark' : ''">
			<StoryblokComponent v-if="story" :blok="story.content" />
		</Body>

		<!-- <page-transition></page-transition> -->
	</div>
</template>

<script setup>
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
				language: useState('locale').value,
			}
		)
	} catch (error) {
		throw createError({
			statusCode: 404,
			statusMessage: 'Page not found or something went wrong...',
		})
	}
</script>
