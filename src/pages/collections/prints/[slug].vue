<template>
	<div>
		<section class="section-print">
			<div class="container">
				<div class="print__wrapper" id="wrapper">
					<div class="print__left">
						<div class="print__slider">
							<button
								type="button"
								class="print__slider-arrow"
								id="arrow-next"
								ref="arrowNext"
							>
								<IconsSliderArrow></IconsSliderArrow>
							</button>
							<button
								type="button"
								class="print__slider-arrow"
								id="arrow-prev"
								ref="arrowPrev"
							>
								<IconsSliderArrow></IconsSliderArrow>
							</button>
							<Swiper
								class="print__slider"
								:modules="[SwiperNavigation, SwiperHashNavigation]"
								:slides-per-view="1"
								:navigation="{
									nextEl: arrowNext,
									prevEl: arrowPrev,
								}"
								:hashNavigation="{
									replaceState: true,
									watchState: true,
								}"
							>
								<SwiperSlide
									class="print__slider-slide"
									v-for="(image, index) in data.productByHandle?.images?.edges"
									:key="index"
									:data-hash="'slide' + index"
								>
									<NuxtPicture
										:src="image.node.src"
										loading="lazy"
									></NuxtPicture>
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
										Lorem, ipsum dolor sit amet consectetur adipisicing elit.
										Sapiente, dignissimos.Lorem, ipsum dolor sit amet
										consectetur adipisicing elit. Sapiente, dignissimos.Lorem,
										ipsum dolor
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
							<h2 v-if="data.productByHandle.title">
								{{ data.productByHandle.title }}
							</h2>
							<p class="mt-small" v-if="data.productByHandle.description">
								{{ data.productByHandle.description }}
							</p>
						</div>

						<div class="print__info-body">
							<div>
								<div>Chose {{ data.productByHandle.options[0].name }}</div>
								<div class="print__info-body-buttons">
									<label
										class="radio-button"
										:class="{ 'is-active': frameVal === item }"
										v-for="item in data.productByHandle.options[0].values"
										:key="item"
									>
										<input
											type="radio"
											:name="data.productByHandle.options[0].name"
											:value="item"
											v-model="frameVal"
										/>
										<span>{{ item }}</span>
									</label>
								</div>
							</div>
							<div>
								<div>Chose {{ data.productByHandle.options[1].name }}</div>
								<div class="print__info-body-buttons">
									<label
										class="radio-button"
										:class="{ 'is-active': sizeVal === item }"
										v-for="item in data.productByHandle.options[1].values"
										:key="item"
										@click.once="onSliderChange()"
									>
										<input
											type="radio"
											:name="data.productByHandle.options[1].name"
											:value="item"
											v-model="sizeVal"
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
										price(
											currentProductVariant.price.amount,
											currentProductVariant.price.currencyCode
										)
									}}</strong>
								</span>
								<div>
									<IconsShare
										v-if="isSupported"
										@click="startShare()"
									></IconsShare>
								</div>
							</div>

							<div class="print__info-footer-buttons">
								<button
									type="button"
									class="button-primary w-full"
									@click="
										addToCart({
											...currentProductVariant,
											title: data.productByHandle.title,
											description: data.productByHandle.description,
											image: data.productByHandle.images.edges[0].node.src,
											price: currentProductVariant.price.amount,
											currencyCode: currentProductVariant.price.currencyCode,
											variant: {
												frame: frameVal,
												size: sizeVal,
											},
										})
									"
									:disabled="!currentProductVariant.availableForSale"
								>
									{{
										currentProductVariant.availableForSale
											? 'Add to cart'
											: 'Sold out'
									}}
								</button>
								<a href="#" class="print__info-footer-a m-auto mt-small"
									>Ask a question</a
								>
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
									Lorem, ipsum dolor sit amet consectetur adipisicing elit.
									Sapiente, dignissimos.Lorem, ipsum dolor sit amet consectetur
									adipisicing elit. Sapiente, dignissimos.Lorem, ipsum dolor
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
		<sectionPrints :handle="data.productByHandle.id"></sectionPrints>
	</div>
</template>

<script setup>
	import { useCartStore } from '../../../store/cart'

	const { slug } = useRoute().params

	const { data } = await useAsyncGql({
		operation: 'ProductByHandle',
		variables: {
			handle: slug,
		},
	})

	await useHead({
		title: data.value?.productByHandle?.title + ' - byvolk',
		meta: [
			{
				name: 'description',
				content: data.value?.productByHandle?.description,
			},
			{
				name: 'og:type',
				content: 'website',
			},
			{
				property: 'og:title',
				content: data.value?.productByHandle.title,
			},
			{
				property: 'og:description',
				content: data.value?.productByHandle.description,
			},
			{
				property: 'og:image',
				content: data.value?.productByHandle.images.edges[0].node.src,
			},
			{
				property: 'twitter:title',
				content: data.value?.productByHandle.title,
			},
			{
				property: 'twitter:description',
				content: data.value?.productByHandle.description,
			},
			{
				property: 'twitter:image',
				content: data.value?.productByHandle.images.edges[0].node.src,
			},
			{
				name: 'twitter:card',
				content: 'summary_large_image',
			},
		],
	})

	const { share, isSupported } = useShare()

	const frameVal = ref(data.value.productByHandle.options[0].values[0])
	const sizeVal = ref(data.value.productByHandle.options[1].values[0])
	const currentProductVariant = ref(null)

	asyncComputed(() => {
		return data.value.productByHandle.variants.edges.find((el) => {
			el.node.selectedOptions[0].value === frameVal.value &&
			el.node.selectedOptions[1].value === sizeVal.value
				? (currentProductVariant.value = el.node)
				: ''
		})
	})

	const price = (amount, currencyCode) => {
		return new Intl.NumberFormat('en-US', {
			style: 'currency',
			currency: currencyCode,
		}).format(amount)
	}

	function startShare() {
		share({
			title: data.value?.productByHandle?.title,
			text: data.value?.productByHandle?.description,
			url: location.href,
		})
	}

	const addToCart = (item) => useCartStore().addToCart(item)

	const arrowPrev = ref(null)
	const arrowNext = ref(null)

	const onSliderChange = () => {
		return (window.location.hash = 'slide1')
	}
</script>
