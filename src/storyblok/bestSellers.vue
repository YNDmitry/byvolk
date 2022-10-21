<template>
	<section class="section-b-sellers" v-editable="blok">
		<div class="container">
			<div class="b-sellers__wrapper">
				<div class="slider__head">
					<h2 v-if="blok.headline">{{ blok.headline }}</h2>
					<div class="slider__nav">
						<div class="slider__nav-button is-prev">
							<IconsArrowRight></IconsArrowRight>
						</div>
						<div class="slider__nav-button is-next">
							<IconsArrowRight></IconsArrowRight>
						</div>
						<div class="slider__head-button">
							<NuxtLink
								:class="`button-${button.buttonType}`"
								:to="button.link.cached_url"
								v-for="button in blok.button"
								:key="button"
							>
								{{ button.title }}
							</NuxtLink>
						</div>
					</div>
				</div>

				<Swiper
					class="b-sellers__slider"
					v-if="data"
					:slides-per-view="'auto'"
					:space-between="35"
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
	defineProps({
		blok: {
			type: Object,
			default: () => ({}),
		},
	})

	const { data } = await useAsyncGql({
		operation: 'Collection',
		variables: {
			handle: 'best-sellers',
		},
	})
</script>
