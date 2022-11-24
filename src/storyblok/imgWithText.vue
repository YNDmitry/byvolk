<template>
	<section class="section-iwt" v-editable="blok">
		<div class="container">
			<div class="iwt__items">
				<img
					:src="blok.image.filename"
					class="iwt__img up"
					loading="lazy"
					:style="{ order: blok.imageOrder }"
					width="350"
				/>
				<div class="iwt__info up">
					<div v-html="richtext" class="iwt__info-rich"></div>
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
