<template>
	<div class="collection-card">
		<div class="collection-card__img-mask">
			<NuxtImg
				:src="blok.image.filename"
				class="collection-card__img"
			></NuxtImg>
		</div>
		<div class="collection-card__info">
			<h4>{{ blok.headline }}</h4>
			<NuxtLink
				:class="`button-${button.buttonType}`"
				v-for="button in blok.button"
				:key="button"
				:to="button.url"
			>
				{{ button.title }}
			</NuxtLink>
		</div>
	</div>
</template>

<script setup>
	const props = defineProps({
		blok: {
			type: Object,
			default: () => ({}),
		},
	})
</script>
