<template>
	<section v-editable="blok" class="section-video">
		<video playsinline loop="loop" autoplay="autoplay" muted="muted" preload="metadata">
			<source :src="blok.video.url" type="video/mp4">
		</video>
	</section>
</template>

<script setup>
	defineProps({
		blok: {
			type: Object,
			default: () => ({}),
		},
	})
</script>
