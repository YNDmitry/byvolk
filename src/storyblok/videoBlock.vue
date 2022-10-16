<template>
	<section v-editable="blok" class="section-video">
		<video
			:src="blok.video.url"
			playsinline
			loop="loop"
			autoplay="autoplay"
			muted="muted"
		></video>
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
