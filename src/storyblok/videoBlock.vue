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

<style lang="scss" scoped>
	.section-video {
		position: relative;
		height: 490px;
		overflow: hidden;
		margin-top: 96px;

		& video {
			width: 100%;
			height: 100%;
			object-fit: cover;
			object-position: 50% 50%;
			filter: grayscale(100%);
		}
	}
</style>
