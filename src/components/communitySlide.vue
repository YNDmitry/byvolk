<template>
	<div class="community-slide">
		<div class="community-slide__head">
			<h4>{{ content.title }}</h4>
			<p class="mt-xsmall">
				{{ content.description }}
				<NuxtLink :to="content.link.url" v-if="content.link" target="_blank"
					>View more...</NuxtLink
				>
			</p>
		</div>
		<div class="community-slide__body">
			<h6>{{ content.authorName }}</h6>
			<NuxtImg
				src="https://a.storyblok.com/f/152732/500x178/a794883631/trustpilot.png"
				alt="Rated excellent - 5 stars"
				width="60"
			></NuxtImg>
		</div>
	</div>
</template>

<script setup>
	const props = defineProps({
		content: {
			type: Object,
		},
	})
</script>
