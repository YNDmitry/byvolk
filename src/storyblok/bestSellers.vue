<template>
	<section class="section-b-sellers" v-editable="blok">
		<div class="container">
			<div class="b-sellers__wrapper">
				<div class="slider__head">
					<h2 v-if="blok.headline">{{ blok.headline }}</h2>
					<ClientOnly>
						<Teleport to=".b-sellers__wrapper" :disabled="isMobile">
							<div class="slider__nav">
								<button
									type="button"
									id="best-sellers-prev"
									class="slider__nav-button is-prev"
									ref="leftArr"
								>
									<IconsArrowRight></IconsArrowRight>
								</button>
								<button
									type="button"
									id="best-sellers-next"
									class="slider__nav-button is-next"
									ref="rightArr"
								>
									<IconsArrowRight></IconsArrowRight>
								</button>
								<a class="slider__head-button">
									<NuxtLink
										:class="`button-${button.buttonType}`"
										:to="button.link.cached_url"
										v-for="button in blok.button"
										:key="button._uid"
									>
										{{ button.title }}
									</NuxtLink>
								</a>
							</div>
						</Teleport>
					</ClientOnly>
				</div>

				<Swiper
					class="b-sellers__slider"
					:modules="[Navigation]"
					:slides-per-view="'auto'"
					:space-between="35"
					:navigation="{
						nextEl: rightArr,
						prevEl: leftArr,
					}"
				>
					<SwiperSlide
						class="product-card"
						v-for="product in data.collection.products.edges"
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
						></ProductBlock>
					</SwiperSlide>
				</Swiper>
			</div>
		</div>
	</section>
</template>

<script setup>
	import { Navigation } from 'swiper'

	defineProps({
		blok: {
			type: Object,
			default: () => ({}),
		},
	})

	const leftArr = ref(null)
	const rightArr = ref(null)
	const isMobile = computed(() => {
		if (useMediaQuery('(max-width: 479px)').value) {
			return false
		}
		return true
	})

	const { data } = await useAsyncGql({
		operation: 'Collection',
		variables: {
			handle: 'best-sellers',
		},
	})
</script>
