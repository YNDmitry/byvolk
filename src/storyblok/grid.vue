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

<style lang="scss">
	.section-grid {
		padding: 64px 0px;
	}
	.cards-grid {
		display: flex;
		flex-direction: column;
		gap: 126px;
		margin-top: 72px;

		& .grid-card:nth-child(even) {
			& .grid-card__picture-wrapper {
				margin-left: auto;
			}

			& .grid-card__info {
				left: 0;
				right: auto;

				& .grid-card__rich {
					margin-left: 0;
					margin-right: 80px;
				}
			}
		}
	}
</style>
