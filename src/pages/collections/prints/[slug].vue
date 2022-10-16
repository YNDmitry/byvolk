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
							<div v-for="option in data.productByHandle.options" :key="option">
								<div>Chose {{ option.name }}</div>
								<div class="print__info-body-buttons">
									<label
										class="radio-button"
										v-for="item in option.values"
										:key="item"
									>
										<input
											type="radio"
											:name="option.name"
											:value="item"
											v-model="frame"
										/>
										<span>{{ item }}</span>
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
