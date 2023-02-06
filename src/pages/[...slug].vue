<template>
	<div>
		<Head>
			<Title>{{ story?.content?.SEO?.title || 'BYVOLK' }}</Title>
			<Meta :content="story?.SEO?.description" name="description" />
			<Meta property="og:type" content="website" />
			<Meta :content="story?.SEO?.og_title" property="og:title" />
			<Meta
				:content="story?.content?.SEO?.og_description"
				property="og:description"
			/>
			<Meta :content="story?.content?.SEO?.og_image" property="og:image" />
			<Meta
				:content="story?.content?.SEO?.twitter_title"
				property="twitter:title"
			/>
			<Meta
				:content="story?.content?.SEO?.twitter_description"
				property="twitter:description"
			/>
			<Meta
				:content="story?.content?.SEO?.twitter_image"
				property="twitter:image"
			/>
			<Meta content="summary_large_image" name="twitter:card"></Meta>
		</Head>

		<Body>
			<Page :blok="story?.content" v-if="story" />
			<div v-if="!story" class="error text-center">
				<h1 class="error__h">404</h1>
				<p>Page not found or something went wrong</p>
				<NuxtLink to="/" class="button-primary">Go to the home page</NuxtLink>
			</div>
		</Body>
	</div>
</template>

<script setup>
	const currentSlug = useRoute().path
	const story = await useStoryblokFetch(currentSlug)
</script>
