<template>
	<section class="section-prints">
		<div class="container">
			<div class="slider__head">
				<h2>You May Also Like</h2>
				<div class="slider__nav">
					<button
						type="button"
						class="slider__nav-button is-prev"
						id="prints-prev"
					>
						<IconsArrowRight></IconsArrowRight>
					</button>
					<button
						type="button"
						id="prints-next"
						class="slider__nav-button is-next"
					>
						<IconsArrowRight></IconsArrowRight>
					</button>
				</div>
			</div>

			<Swiper
				class="b-sellers__slider mt-large"
				:modules="[Navigation]"
				:navigation="{
					nextEl: '#prints-next',
					prevEl: '#prints-prev',
				}"
				:slides-per-view="'auto'"
				:space-between="35"
				ref="swiper"
			>
				<SwiperSlide
					class="product-card"
					v-for="product in data.productRecommendations"
					:key="product"
				>
					<ProductBlock
						:handle="product.handle"
						:images="product.images.edges"
						:title="product.title"
						:currencyCode="product.priceRange.minVariantPrice.currencyCode"
						:minPrice="product.priceRange.minVariantPrice.amount"
						:totalInventory="product.totalInventory"
					></ProductBlock>
				</SwiperSlide>
			</Swiper>
		</div>
	</section>
</template>

<script setup>
	import { Navigation } from 'swiper'
	const props = defineProps({
		handle: {
			type: String,
		},
	})

	const { data } = await useAsyncGql({
		operation: 'ProductRecommendations',
		variables: {
			productId: props.handle,
		},
	})
</script>
