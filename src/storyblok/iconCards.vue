<template>
	<section class="section-icons" v-editable="blok">
		<div class="container">
			<div
				class="icons__grid"
				:style="`grid-template-columns: repeat(${columnCount}, 1fr);`"
				:data-columns="columnCount"
			>
				<div class="icons__card" v-for="(card, idx) in blok.cards" :key="idx">
					<div class="icons__card-icon">
						<NuxtImg
							provider="storyblok"
							v-if="card.image"
							:src="card.image.filename"
							width="140"
							height="100"
							class="icons__card-icon-img"
							loading="lazy"
						></NuxtImg>
					</div>
					<h5 class="fw-600" v-if="card.headline">{{ card.headline }}</h5>
					<p class="p-18" v-if="card.description">{{ card.description }}</p>
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
