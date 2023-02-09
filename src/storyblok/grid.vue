<template>
	<section v-editable="blok" class="section-grid">
		<div class="container">
			<div class="cards-grid">
				<GridCard
					v-for="card in blok.cards"
					:key="card"
					:content="card"
				></GridCard>
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

<style lang="scss" src="assets/scss/components/_grid.scss"></style>
