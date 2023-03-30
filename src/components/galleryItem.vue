<template>
	<div class="gallery__item up">
		<NuxtPicture
			provider="storyblok"
			:src="img"
			alt="Gallery picture"
			width="500"
			sizes="xs:100vw sm:100vw md:100vw lg:100vw xl:100vw xxl:100vw 2xl:100vw"
			v-lazy-load
		></NuxtPicture>
	</div>
</template>

<script setup>
	const props = defineProps({
		img: {
			type: String,
			required: true,
		},
	})
</script>
