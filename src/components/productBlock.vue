<template>
	<NuxtLink :to="'/collections/prints/' + handle" class="w-full">
		<div class="product-card__head">
			<NuxtImg
				:src="image.node.src"
				v-for="image in images"
				:key="image"
				width="300"
			></NuxtImg>
		</div>
		<div class="product-card__body">
			<h5>{{ title }}</h5>
			<div class="product-card__body-price">
				<div>
					From
					<span class="fw-600">{{ price }}</span>
				</div>
				<div>
					Left
					<span class="fw-600">{{ totalInventory }}</span>
				</div>
			</div>
		</div>
	</NuxtLink>
</template>

<script setup>
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

	const price = asyncComputed(() => {
		return new Intl.NumberFormat('en-US', {
			style: 'currency',
			currency: props.currencyCode,
		}).format(props.minPrice)
	})
</script>
