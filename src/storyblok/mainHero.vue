<template>
	<section class="section-hero" v-editable="blok">
		<div class="container-md">
			<h1 class="up">{{ blok.headline }}</h1>
			<div
				v-if="props.blok.description.content.length > 0"
				v-html="richtext"
				class="mt-small up"
			></div>
		</div>
	</section>
</template>

<script setup>
	const props = defineProps({
		blok: {
			type: Object,
			default: () => ({}),
		},
	})

	const richtext = computed(() => renderRichText(props.blok.description))
</script>
