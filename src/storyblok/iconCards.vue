<template>
	<section class="section-icons" v-editable="blok">
		<div class="container">
			<div
				class="icons__grid"
				:style="`grid-template-columns: repeat(${columnCount}, 1fr);`"
			>
				<div class="icons__card" v-for="(card, idx) in blok.cards" :key="idx">
					<div class="icons__card-icon">
						<NuxtImg
							provider="storyblok"
							:src="card.image.filename"
							width="140"
							height="100"
							class="icons__card-icon-img"
						></NuxtImg>
					</div>
					<h5 class="fw-600">{{ card.headline }}</h5>
					<p class="p-18">{{ card.description }}</p>
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

	const columnCount = computedAsync(() => props.blok.columnCount)
</script>

<style lang="scss">
	.icons__grid {
		display: grid;
		padding: 96px 0;
		row-gap: 50px;
		margin-left: -20px;
		margin-right: -20px;
	}

	.icons__card {
		display: flex;
		flex-direction: column;
		align-items: center;
		text-align: center;
		gap: 14px;
		padding: 0 20px;
		border-right: 1px solid #d9d9d9;

		&:last-child {
			border-right: 0;
		}

		&-icon {
			margin-bottom: 8px;

			&-img {
				object-fit: contain;
			}
		}

		& h5 {
			text-transform: none;
		}
	}
</style>
