<template>
	<div class="gridv2-card">
		<ClientOnly>
			<h2 v-if="heading && useIsMobile">
				<strong>{{ heading }}</strong>
			</h2>
		</ClientOnly>
		<NuxtPicture
			provider="storyblok"
			:src="img.filename"
			v-if="img"
			sizes="md:100vw"
			width="720"
			quality="80"
			class="up"
		></NuxtPicture>
		<div class="gridv2-card__rich-wrapper">
			<ClientOnly>
				<h2 v-if="heading && !useIsMobile">
					<strong>{{ heading }}</strong>
				</h2>
			</ClientOnly>
			<div v-html="richtext" v-if="description" class="gridv2-card__rich up"></div>
		</div>
	</div>
</template>

<script setup>
	const props = defineProps({
		img: {
			type: Object,
		},
		heading: {
			type: String,
		},
		description: {
			type: Object,
		},
	})

	const richtext = asyncComputed(() => renderRichText(props.description))
</script>

<style lang="scss" src="assets/scss/components/_gridv2Card.scss"></style>
