<template>
	<div>
		<Head>
			<Title>{{ story?.content.SEO?.title || 'BYVOLK' }}</Title>
		</Head>

		<Body :class="story.content.page_black ? 'dark' : ''">
			<StoryblokComponent v-if="story" :blok="story.content" />
		</Body>

		<!-- <page-transition></page-transition> -->
	</div>
</template>

<script setup>
	const config = useRuntimeConfig()
	const { slug } = useRoute().params

	onBeforeMount(() => {
		useState('locale').value = 'de-de'
	})

	const version =
		config.public.baseUrl === 'https://localhost:3000' || ''
			? 'draft'
			: 'published'

	const story = await useAsyncStoryblok(
		slug && slug.length > 0 ? slug.join('/') : 'home',
		{
			version: version,
			language: 'de-de',
		}
	)
</script>
