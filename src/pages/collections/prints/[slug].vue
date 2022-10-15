<template>
	<div v-if="data">
		<section class="section-print">
			<div class="container">
				<div class="print__wrapper">
					<div class="print__left">
						<Swiper class="print__slider" :slides-per-view="1">
							<SwiperSlide
								class="print__slider-slide"
								v-for="image in data.productByHandle?.images?.edges"
								:key="image"
							>
								<NuxtImg :src="image.node.src"></NuxtImg>
							</SwiperSlide>
						</Swiper>
						<div class="print__faq"></div>
					</div>
					<div class="print__info">
						<div class="print__info-head">
							<h2>
								{{ data.productByHandle.title }}
							</h2>
							<p class="mt-small" v-if="data.productByHandle.description">
								{{ data.productByHandle.description }}
							</p>
						</div>

						<div class="print__info-body">
							<div>
								<div>Chose Frame</div>
								<div class="print__info-body-buttons">
									<label class="radio-button">
										<input type="radio" name="frame" value="0" />
										<span>Black</span>
									</label>
								</div>
							</div>

							<div class="mt-medium">
								<div>Select Size</div>
								<div class="print__info-body-buttons">
									<label class="radio-button">
										<input type="radio" name="frame" value="0" />
										<span>A3</span>
									</label>
								</div>
							</div>
						</div>

						<div class="print__info-footer">
							<div class="print__info-footer-col-1">
								<span class="print__info-price">
									Price:
									<strong>{{ price }}</strong>
								</span>
								<div>
									<IconsHearth></IconsHearth>
									<IconsShare></IconsShare>
								</div>
							</div>

							<div class="print__info-footer-buttons">
								<button type="submit" class="button-primary w-full">
									Add To Cart
								</button>
								<a href="#" class="print__info-footer-a m-auto mt-small"
									>Ask a question</a
								>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
		<section class="section-prints">
			<div class="container">
				<h2>You May Also Like</h2>
				<!-- <div class="grid-3-col mt-large">
					<ProductBlock></ProductBlock>
					<ProductBlock></ProductBlock>
					<ProductBlock></ProductBlock>
				</div> -->
			</div>
		</section>
	</div>
</template>

<script setup>
	const { slug } = useRoute().params

	const { data } = await useAsyncGql({
		operation: 'ProductByHandle',
		variables: {
			handle: slug,
		},
	})

	await useHead({
		title: data.value?.productByHandle?.title + ' - byvolk',
	})

	const price = asyncComputed(() => {
		return new Intl.NumberFormat('en-US', {
			style: 'currency',
			currency:
				data.value.productByHandle.priceRange.minVariantPrice.currencyCode,
		}).format(data.value.productByHandle.priceRange.minVariantPrice.amount)
	})
</script>

<style lang="scss">
	.section-print {
		padding-bottom: 96px;
	}
	.section-prints {
		padding: 96px 0;
	}
	.print {
		&__wrapper {
			display: grid;
			grid-template-columns: repeat(2, 1fr);
			align-items: flex-start;
			column-gap: 48px;
		}

		&__left {
			max-width: 750px;
		}

		&__info {
			margin-top: 84px;
			position: sticky;
			top: 150px;

			&-price {
				font-family: 'Montserrat';
				font-weight: 400;
				font-size: 25px;
				line-height: 120%;

				& strong {
					font-weight: 500;
				}
			}
			&-head {
			}

			&-body {
				margin: 50px 0;

				&-buttons {
					margin-top: 10px;
					display: flex;
					gap: 15px;
				}
			}

			&-footer {
				&-col-1 {
					display: flex;
					justify-content: space-between;
					align-items: center;
					margin-bottom: 12px;
				}

				&-buttons {
					display: flex;
					flex-direction: column;

					.print__info-footer-a {
						font-size: 16px;
						line-height: 140%;
						color: rgba(25, 26, 25, 0.5);
						text-decoration: underline;
					}
				}
			}
		}

		&__slider {
			background-color: #f8f8f8;
			height: 700px;

			&-slide {
				display: flex;
				align-items: center;
				justify-content: center;

				& img {
					width: 100%;
					object-fit: contain;
				}
			}

			&-slide:nth-child(1) {
				padding: 64px;
				& img {
					max-width: 450px;
				}
			}

			&-slide:nth-child(2) {
				& img {
					object-fit: cover;
				}
			}
		}
	}
</style>
