<template>
	<div class="grid-card fade-card">
		<h4 v-if="content.headline">{{ content.headline }}</h4>
		<div class="grid-card__picture-wrapper">
			<NuxtPicture
				:src="content.image.filename"
				provider="storyblok"
				class="grid-card__picture"
				width="400"
				sizes="xs:100vw sm:100vw md:100vw lg:100vw xl:100vw"
				v-lazy-load
			></NuxtPicture>
		</div>
		<div class="grid-card__info">
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

	const richtext = computed(() => renderRichText(props.content.description))
</script>
