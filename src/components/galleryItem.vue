<template>
	<div class="gallery__item up">
		<NuxtImg provider="storyblok" :src="img" width="500"></NuxtImg>
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
