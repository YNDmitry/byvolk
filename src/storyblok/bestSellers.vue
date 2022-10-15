<template>
	<section class="section-b-sellers" v-editable="blok">
		<div class="container">
			<div class="b-sellers__wrapper">
				<div class="slider__head">
					<h2>{{ blok.headline }}</h2>
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
					:slides-per-view="3"
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

<style lang="scss">
	.section-b-sellers {
		padding: 124px 0;
		overflow: hidden;
	}

	.b-sellers__wrapper {
		display: flex;
		flex-direction: column;
		gap: 50px;
	}

	.b-sellers__slider {
		width: 100%;
		overflow: visible;
	}

	.b-sellers__head {
		display: flex;
		align-items: center;
		justify-content: space-between;
	}

	.product-card {
		&:hover {
			& .product-card__head {
				& img:nth-child(2) {
					opacity: 1;
				}
			}
		}
		&__head {
			position: relative;
			background-color: #f8f8f8;
			display: flex;
			align-items: center;
			justify-content: center;
			padding: 42px;
			height: 400px;
			overflow: hidden;

			& img:nth-child(1) {
				height: 100%;
				object-fit: contain;
			}

			& img:nth-child(2) {
				position: absolute;
				height: 100%;
				width: 100%;
				object-fit: cover;
				opacity: 0;
				transition: all 200ms ease-in-out;
			}
		}

		&__body {
			margin-top: 14px;

			&-price {
				margin-top: 10px;
				display: flex;
				align-items: center;
				justify-content: space-between;
				gap: 10px;
			}
		}
	}
</style>
