<template>
	<section class="section-prints">
		<div class="container">
			<div class="slider__head">
				<button
					type="button"
					class="slider__nav-button is-prev up"
					id="prints-prev"
					ref="leftArr"
				>
					<IconsArrowRight></IconsArrowRight>
				</button>
				<h2>You May Also Like</h2>
				<button
					type="button"
					id="prints-next"
					class="slider__nav-button is-next up"
					ref="rightArr"
				>
					<IconsArrowRight></IconsArrowRight>
				</button>
			</div>

			<Swiper
				class="b-sellers__slider mt-large"
				:modules="[Navigation]"
				:navigation="{
					nextEl: rightArr,
					prevEl: leftArr,
				}"
				:slides-per-view="slidesPerView"
				:space-between="35"
				ref="swiper"
			>
				<SwiperSlide
					class="product-card up"
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

	const leftArr = ref(null)
const rightArr = ref(null)

	const slidesPerView = asyncComputed(() => {
		if (useMediaQuery('(max-width: 991px)').value != useMediaQuery('(max-width: 700px)').value) {
			return 3
		} else if (useMediaQuery('(max-width: 700px)').value != useMediaQuery('(max-width: 479px)').value) {
			return 2
		} else if (useMediaQuery('(max-width: 479px)').value) {
			return 'auto'
		} else {
			return data.value.productRecommendations.length
		}
	})
</script>
