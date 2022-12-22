<template>
	<section v-editable="blok" class="section-grid-v2">
		<div class="container">
			<div class="grid-v2" :class="{ 'mt-large': blok.headline }">
				<Gridv2Card
					v-for="card in blok.cards"
					:key="card"
					:img="card.image"
					:description="card.body"
				></Gridv2Card>
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
