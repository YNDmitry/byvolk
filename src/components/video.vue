<template>
	<video playsinline loop="loop" autoplay="autoplay" muted="muted" preload="metadata">
		<source :src="videoSrc" type="video/mp4" />
	</video>
</template>

<script setup>
	const props = defineProps({
		videoSrc: {
			type: String,
		},
	})
</script>
