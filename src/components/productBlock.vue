<template>
	<NuxtLink 
		:to="'/collections/prints/' + handle" 
		class="w-full" 
		:disabled="totalInventory === 0 ? true : false"
	>
		<div class="product-card__head">
			<img
				:src="images[0].node.src"
				:srcset="`${images[0].node.src}&width=479 479w, ${images[0].node.src}&width=600 600w`"
				sizes="(max-width: 479px) 479px, (max-width: 1536px) 600px, 600px"
				width="300"
				loading="lazy" />
		</div>
		<div class="product-card__body">
			<h5>{{ title }}</h5>
			<div class="product-card__body-price">
				<div v-if="price">From <span class="fw-600">{{ price }}</span></div>
			</div>
		</div>
	</NuxtLink>
</template>

<script setup>
import { useHelpersStore } from '../store/helpers';

	const props = defineProps({
		handle: {
			type: String,
		},
		images: {
			type: Array,
		},
		title: {
			type: String,
		},
		minPrice: {
			type: String,
		},
		currencyCode: {
			type: String,
		},
		totalInventory: {
			type: Number,
		},
	})

	const helpers = useHelpersStore()

	const price = asyncComputed(() => {
		return helpers.price(props.minPrice, props.currencyCode)
	})
</script>
