<template>
	<div>
		<Head>
			<Title>{{ story?.content.SEO?.title || 'BYVOLK' }}</Title>
			<Meta
				:content="story?.content.SEO?.description"
				name="description"
			></Meta>
			<Meta property="og:type" content="website"></Meta>
			<Meta :content="story?.content.SEO?.og_title" property="og:title"></Meta>
			<Meta
				:content="story?.content.SEO?.og_description"
				property="og:description"
			></Meta>
			<Meta :content="story?.content.SEO?.og_image" property="og:image"></Meta>
			<Meta
				:content="story?.content.SEO?.twitter_title"
				property="twitter:title"
			></Meta>
			<Meta
				:content="story?.content.SEO?.twitter_description"
				property="twitter:description"
			></Meta>
			<Meta
				:content="story?.content.SEO?.twitter_image"
				property="twitter:image"
			></Meta>
			<Meta content="summary_large_image" name="twitter:card"></Meta>
		</Head>

		<Body>
			<StoryblokComponent :blok="story?.content" />
		</Body>
	</div>
</template>

<script setup>
	const { slug } = useRoute().params
	const version = useRoute().query['_storyblok_tk[token]']
		? 'draft'
		: 'published'
	const story = ref(null)

	onMounted(async () => {
		if (version === 'draft' && state?.story) {
			await useStoryblokBridge(
				story.value.id,
				(evStory) => (story.value = evStory)
			)
		}
	})

	const storyblokApi = await useStoryblokApi()
	const { data } = await useAsyncData(
		'vue',
		async () =>
			await storyblokApi.get(
				`cdn/stories/${slug && slug.length > 0 ? slug.join('/') : 'home'}`,
				{
					version: version,
				}
			)
	)
	story.value = data.value.data.story
</script>
