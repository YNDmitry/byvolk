<template>
	<div class="grid-card">
		<div class="grid-card__picture-wrapper">
			<NuxtImg
				:src="content.image.filename"
				provider="storyblok"
				quality="70"
				width="700"
				class="grid-card__picture"
			></NuxtImg>
		</div>
		<div class="grid-card__info up">
			<h3 v-if="content.headline">{{ content.headline }}</h3>
			<h4 v-if="content.headline2">{{ content.headline2 }}</h4>
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

	const richtext = computed(() => renderRichText(props.content.description))
	const opacity = computed(() => Number(props.content.imageOpacity)).value
</script>
