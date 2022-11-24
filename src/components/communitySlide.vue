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
			<img src="../public/stars.svg"/>
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
