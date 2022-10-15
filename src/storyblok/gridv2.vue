<template>
	<section v-editable="blok" class="section-grid-v2">
		<div class="container">
			<h2 v-if="blok.headline">{{ blok.headline }}</h2>
			<div class="grid-v2" :class="{ 'mt-large': blok.headline }">
				<CollectionCard
					v-for="card in blok.cards"
					:key="card"
					:blok="card"
				></CollectionCard>
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
</script>

<style lang="scss">
	.grid-v2 {
		display: grid;
		grid-template-columns: repeat(2, 1fr);
		column-gap: 35px;
		row-gap: 50px;
	}
</style>
