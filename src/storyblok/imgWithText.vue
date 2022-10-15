<template>
	<section class="section-iwt" v-editable="blok">
		<div class="container">
			<div class="grid-2-col iwt__items">
				<NuxtPicture
					:src="blok.image.filename"
					provider="storyblok"
					class="iwt__img"
					loading="lazy"
				></NuxtPicture>
				<div class="iwt__info">
					<div v-html="richtext"></div>
					<NuxtLink
						:to="button.link.cached_url"
						v-for="button in blok.button"
						:key="button"
						:class="[`button-${button.buttonType}`, 'mt-medium']"
						>Projects</NuxtLink
					>
				</div>
			</div>
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

<style lang="scss">
	.section-iwt {
		padding: 64px 0;
	}
	.iwt__items {
		align-items: center;
	}
</style>
