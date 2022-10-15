<template>
	<div class="community-slide">
		<div class="community-slide__head">
			<h4>{{ content.title }}</h4>
			<p class="mt-xsmall">
				{{ content.description }}
			</p>
		</div>
		<div class="community-slide__body">
			<h6>{{ content.authorName }}</h6>
			<NuxtImg src="stars.svg"></NuxtImg>
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

<style lang="scss">
	.community-slide {
		background-color: #f8f8f8;
		padding: 32px 25px;

		&__body {
			display: flex;
			justify-content: space-between;
			align-items: center;
			gap: 10px;
			margin-top: 64px;
		}
	}
</style>
