<template>
	<NuxtLink :to="'/collections/prints/' + props?.handle" class="w-full">
		<div class="product-card__head" v-if="images[0].node.src">
			<NuxtImg
				:src="images[0].node.src"
				:srcset="`${images[0].node.src}&width=320 320w, ${images[0].node.src}&width=640 640w`"
				:alt="title"
				sizes="(max-width: 320px) 100vw, (max-width: 640px) 100vw"
				width="180"
				v-lazy-load
			></NuxtImg>
		</div>
		<div class="product-card__body">
			<h5 v-if="title">{{ title }}</h5>
			<div class="product-card__body-price">
				<div v-if="price && totalInventory !== 0">
					From <span class="fw-600">{{ price }}</span>
				</div>
				<div class="product-card__sold-out" v-if="totalInventory === 0">Sold out</div>
			</div>
		</div>
	</NuxtLink>
</template>

<script setup>
	const props = defineProps({
		handle: {
			type: String,
			required: true,
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
		return usePrice(props.minPrice, props.currencyCode)
	})
</script>

<style lang="scss" src="assets/scss/components/_productBlock.scss"></style>
