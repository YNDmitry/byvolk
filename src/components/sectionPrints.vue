<template>
	<section class="section-prints">
		<div class="container">
			<ClientOnly>
				<div class="slider__head">
					<button
						type="button"
						aria-label="You may also like slider arrow prev"
						class="slider__nav-button is-prev up"
						id="prints-prev"
						ref="leftArr"
						v-if="products.length > slidesPerView"
					>
						<IconsArrowRight></IconsArrowRight>
					</button>
					<h2 class="text-center">You May Also Like</h2>
					<button
						type="button"
						aria-label="You may also like slider arrow next"
						id="prints-next"
						class="slider__nav-button is-next up"
						ref="rightArr"
						v-if="products.length > slidesPerView"
					>
						<IconsArrowRight></IconsArrowRight>
					</button>
				</div>
			</ClientOnly>

			<Swiper
				class="b-sellers__slider mt-medium"
				:modules="[SwiperNavigation]"
				:navigation="{
					nextEl: rightArr,
					prevEl: leftArr,
				}"
				:slides-per-view="slidesPerView"
				:space-between="35"
				ref="swiper"
			>
				<SwiperSlide class="product-card up" v-for="product in products" :key="product">
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
	const props = defineProps({
		handle: {
			type: String,
		},
	})

	const products = await useAsyncGql({
		operation: 'ProductRecommendations',
		variables: {
			productId: props.handle,
		},
	}).then((res) => res.data.value.productRecommendations)

	const leftArr = ref(null)
	const rightArr = ref(null)

	const slidesPerView = asyncComputed(() => {
		if (useMediaQuery('(max-width: 991px)').value != useMediaQuery('(max-width: 700px)').value) {
			return 3
		} else if (
			useMediaQuery('(max-width: 700px)').value != useMediaQuery('(max-width: 479px)').value
		) {
			return 2
		} else if (useMediaQuery('(max-width: 479px)').value) {
			return 'auto'
		} else {
			return products.length
		}
	})
</script>
