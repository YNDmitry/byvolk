<template>
	<main class="main">
		<Body>
			<StoryblokComponent :blok="story?.content" v-if="story?.content" />
			<div v-if="!story" class="error text-center">
				<h1 class="error__h">404</h1>
				<p>Page not found or something went wrong</p>
				<NuxtLink to="/" class="button-primary">Go to the home page</NuxtLink>
			</div>
		</Body>
	</main>
</template>

<script setup>
	const currentSlug = useRoute().path
	const story = await useStoryblokFetch(currentSlug)
	await useStoryblokHead(story?.content?.SEO)
</script>
