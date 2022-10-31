<template>
	<NuxtLink :to="'/collections/prints/' + handle" class="w-full" @mouseenter="isHoverIn = true" @mouseleave="isHoverIn = false">
		<div class="product-card__head">
			<NuxtImg
				:src="images[0].node.src"
				:srcset="`${images[0].node.src}&width=320 320w, ${images[0].node.src}&width=640 640w, ${images[0].node.src}&width=768 768w, ${images[0].node.src}&width=1024 1024w, ${images[0].node.src}&width=1280 1280w, ${images[0].node.src}&width=1536 1536w, ${images[0].node.src}&width=1536 1536w`"
				sizes="(max-width: 320px) 320px, (max-width: 640px) 640px, (max-width: 768px) 768px, (max-width: 1024px) 1024px, (max-width: 1280px) 1280px, (max-width: 1536px) 1536px, 1536px"
				width="300"
				loading="lazy"
			></NuxtImg>
			<Transition name="fade">
				<NuxtImg
					:src="images[1].node.src"
					:srcset="`${images[1].node.src}&width=320 320w, ${images[1].node.src}&width=640 640w, ${images[1].node.src}&width=768 768w, ${images[1].node.src}&width=1024 1024w, ${images[1].node.src}&width=1280 1280w, ${images[1].node.src}&width=1536 1536w, ${images[1].node.src}&width=1536 1536w`"
					sizes="(max-width: 320px) 320px, (max-width: 640px) 640px, (max-width: 768px) 768px, (max-width: 1024px) 1024px, (max-width: 1280px) 1280px, (max-width: 1536px) 1536px, 1536px"
					width="300"
					loading="lazy"
					v-show="isHoverIn"
				></NuxtImg>
			</Transition>
		</div>
		<div class="product-card__body">
			<h5>{{ title }}</h5>
			<div class="product-card__body-price">
				<div>From <span class="fw-600">{{ price }}</span>
				</div>
				<div>Left <span class="fw-600">{{ totalInventory }}</span>
				</div>
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

const isHoverIn = ref(false)
	const helpers = useHelpersStore()

const price = asyncComputed(() => {
		return helpers.price(props.minPrice, props.currencyCode)
	})
</script>
