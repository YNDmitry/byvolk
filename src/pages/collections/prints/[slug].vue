<template>
	<div>
		<section class="section-print">
			<div class="container">
				<div class="print__wrapper" id="wrapper">
					<div class="print__left">
						<div class="print__slider">
							<button
								type="button"
								aria-label="Product slider arrow next"
								class="slider__nav-button print__slider-arrow"
								id="arrow-next"
								ref="arrowNext"
							>
								<IconsArrowRight></IconsArrowRight>
							</button>
							<button
								type="button"
								aria-label="Product slider arrow prev"
								class="slider__nav-button print__slider-arrow"
								id="arrow-prev"
								ref="arrowPrev"
							>
								<IconsArrowRight></IconsArrowRight>
							</button>
							<Swiper
								class="print__slider"
								:modules="[SwiperNavigation, SwiperHashNavigation]"
								:slides-per-view="1"
								:navigation="{
									nextEl: arrowNext,
									prevEl: arrowPrev,
								}"
							>
								<SwiperSlide class="print__slider-slide" :data-hash="'slide0'">
									<div
										class="product-card__frame"
										:style="{
											'border-color': frameColors[frameColor],
											transform: `scale(${sizes[frameSize]})`,
										}"
									>
										<NuxtPicture
											:src="product.images.edges[0].node.src"
											loading="lazy"
											class="product-card__img"
										></NuxtPicture>
									</div>
								</SwiperSlide>
								<SwiperSlide class="print__slider-slide" :data-hash="'slide1'">
									<div
										class="product-card__frame product-card__frame--decor"
										:style="{
											'border-color': frameColors[frameColor],
											transform: `scale(${sizes[frameSize]})`,
										}"
									>
										<NuxtPicture
											:src="product.images.edges[0].node.src"
											loading="lazy"
											class="product-card__img"
										></NuxtPicture>
									</div>
									<NuxtPicture :src="product.images.edges[1].node.src" loading="lazy"></NuxtPicture>
								</SwiperSlide>
							</Swiper>
						</div>
						<div class="print__faq phone-hide">
							<Dropdown>
								<template #head>
									<h5>Printing & Framing</h5>
								</template>
								<template #body>
									<p>
										Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sapiente,
										dignissimos.Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sapiente,
										dignissimos.Lorem, ipsum dolor
									</p>
								</template>
							</Dropdown>
							<Dropdown>
								<template #head>
									<h5>Shipping & returns</h5>
								</template>
								<template #body>
									<p>Body</p>
								</template>
							</Dropdown>
						</div>
					</div>
					<div class="print__info">
						<div class="print__info-head">
							<h2 v-if="product.title">
								{{ product.title }}
							</h2>
							<p class="mt-small" v-if="product.description">
								{{ product.description }}
							</p>
						</div>

						<div class="print__info-body">
							<div>
								<div>Chose {{ product.options[0].name }}</div>
								<div class="print__info-body-buttons">
									<label
										class="radio-button"
										:class="{ 'is-active': frameColor === item }"
										v-for="item in product.options[0].values"
										:key="item"
									>
										<input
											type="radio"
											:name="product.options[0].name"
											:value="item"
											v-model="frameColor"
										/>
										<span>{{ item }}</span>
									</label>
								</div>
							</div>
							<div>
								<div>Chose {{ product.options[1].name }}</div>
								<div class="print__info-body-buttons">
									<label
										class="radio-button"
										:class="{ 'is-active': frameSize === item }"
										v-for="item in product.options[1].values"
										:key="item"
									>
										<input
											type="radio"
											:name="product.options[1].name"
											:value="item"
											v-model="frameSize"
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
									<strong>{{
										usePrice(
											currentProductVariant.price.amount,
											currentProductVariant.price.currencyCode
										)
									}}</strong>
								</span>
								<div>
									<IconsShare v-if="isSupported" @click="startShare()"></IconsShare>
								</div>
							</div>

							<div class="print__info-footer-buttons">
								<button
									type="button"
									class="button-primary w-full"
									@click="
										addToCart({
											...currentProductVariant,
											title: product.title,
											description: product.description,
											image: product.images.edges[0].node.src,
											price: currentProductVariant.price.amount,
											currencyCode: currentProductVariant.price.currencyCode,
											variant: {
												frame: frameColor,
												size: frameSize,
											},
										})
									"
									:disabled="!currentProductVariant.availableForSale"
								>
									{{ currentProductVariant.availableForSale ? 'Add to cart' : 'Sold out' }}
								</button>
								<NuxtLink
									to="https://wa.me/message/FB7YI2TL5L6WC1"
									target="_blank"
									class="print__info-footer-a m-auto mt-small"
								>
									Ask a question
								</NuxtLink>
							</div>
						</div>
					</div>
					<div class="print__faq hide">
						<Dropdown>
							<template #head>
								<h5>Printing & Framing</h5>
							</template>
							<template #body>
								<p>
									Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sapiente,
									dignissimos.Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sapiente,
									dignissimos.Lorem, ipsum dolor
								</p>
							</template>
						</Dropdown>
						<Dropdown>
							<template #head>
								<h5>Shipping & returns</h5>
							</template>
							<template #body>
								<p>Body</p>
							</template>
						</Dropdown>
					</div>
				</div>
			</div>
		</section>
		<sectionPrints :handle="product.id"></sectionPrints>
	</div>
</template>

<script setup>
	import { useCartStore } from '../../../store/cart'

	const { slug } = useRoute().params

	const product = await useAsyncGql({
		operation: 'ProductByHandle',
		variables: {
			handle: slug,
		},
	}).then((res) => res.data.value.productByHandle)

	await useStoryblokHead(product)

	const { share, isSupported } = useShare()

	const frameColor = ref(product.options[0].values[0])
	const frameColors = ref({
		Black: '#000000',
		White: '#F0F0F0',
		Natural: '#8B5A2B',
		'No Frame': 'transparent',
	})

	const frameSize = ref(product.options[1].values[0])
	const sizes = ref({ A1: '1', A2: '0.8', A3: '0.6' })

	const currentProductVariant = ref(null)

	asyncComputed(() => {
		return product.variants.edges.find((el) => {
			el.node.selectedOptions[0].value === frameColor.value &&
			el.node.selectedOptions[1].value === frameSize.value
				? (currentProductVariant.value = el.node)
				: ''
		})
	})

	function startShare() {
		share({
			title: product.title,
			text: product.description,
			url: product.href,
		})
	}

	const addToCart = (item) => useCartStore().addToCart(item)

	const arrowPrev = ref(null)
	const arrowNext = ref(null)
</script>

<style lang="scss" src="assets/scss/pages/_prints.scss"></style>
