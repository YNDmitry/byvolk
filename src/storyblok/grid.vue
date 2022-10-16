<template>
	<section v-editable="blok" class="section-grid">
		<div class="container">
			<h2>{{ blok.headline }}</h2>
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
