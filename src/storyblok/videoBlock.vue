<template>
	<section v-editable="blok" class="section-video">
		<Video :video-src="blok.video.url" />
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

<style lang="scss" src="../assets/scss/components/_videoBlock.scss"></style>
