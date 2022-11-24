<template>
	<div class="grid-card">
		<div class="grid-card__picture-wrapper">
			<img
				:src="content.image.filename"
				width="700"
				class="grid-card__picture up"
			/>
		</div>
		<div class="grid-card__info up">
			<h4 v-if="content.headline">{{ content.headline }}</h4>
			<h6 v-if="content.headline2">{{ content.headline2 }}</h6>
			<div v-html="richtext" v-if="richtext" class="grid-card__rich"></div>
		</div>
	</div>
</template>

<script setup>
	const props = defineProps({
		content: {
			type: Object,
			required: true,
			default: () => ({}),
		},
	})

	const isMobile = computed(() => {
		if (useMediaQuery('(max-width: 769px)').value) {
			return false
		}
		return true
	})

	const richtext = computed(() => renderRichText(props.content.description))
</script>
