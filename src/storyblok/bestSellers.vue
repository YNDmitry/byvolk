<template>
	<section class="section-b-sellers" v-editable="blok">
		<div class="container">
			<div class="b-sellers__wrapper">
				<div class="slider__head">
					<button
						type="button"
						aria-label="Best sellers slider arrow prev"
						id="best-sellers-prev"
						class="slider__nav-button is-prev up"
						ref="leftArr"
					>
						<IconsArrowRight></IconsArrowRight>
					</button>
					<h2 v-if="blok.headline" class="up">{{ blok.headline }}</h2>
					<button
						type="button"
						aria-label="Best sellers slider arrow next"
						id="best-sellers-next"
						class="slider__nav-button is-next up"
						ref="rightArr"
					>
						<IconsArrowRight></IconsArrowRight>
					</button>
				</div>

				<Swiper
					class="b-sellers__slider mt-medium"
					:modules="[SwiperNavigation]"
					:slides-per-view="slidesPerView"
					:space-between="35"
					:navigation="{
						nextEl: rightArr,
						prevEl: leftArr,
					}"
				>
					<SwiperSlide
						class="product-card"
						v-for="product in productsArr"
						:key="product.node.id"
					>
						<ProductBlock
							:handle="product.node.handle"
							:images="product.node.images.edges"
							:title="product.node.title"
							:currencyCode="
								product.node.priceRange.minVariantPrice.currencyCode
							"
							:minPrice="product.node.priceRange.minVariantPrice.amount"
							:totalInventory="product.node.totalInventory"
							class="up"
						></ProductBlock>
					</SwiperSlide>
				</Swiper>
			</div>
		</div>
	</section>
</template>

<script setup>
	const props = defineProps({
		blok: {
			type: Object,
			default: () => {},
		},
	})

	let productsArr = useState('productArr', () => null)
	const data = await GqlCollection({ handle: 'best-sellers' })
	productsArr.value = data.collection.products.edges
	const leftArr = ref(null)
	const rightArr = ref(null)

	const slidesPerView = computed(() => {
		if (
			useMediaQuery('(max-width: 991px)').value !=
			useMediaQuery('(max-width: 700px)').value
		) {
			return 3
		} else if (
			useMediaQuery('(max-width: 700px)').value !=
			useMediaQuery('(max-width: 479px)').value
		) {
			return 2
		} else if (useMediaQuery('(max-width: 479px)').value) {
			return 1
		} else {
			return 5
		}
	})
</script>
