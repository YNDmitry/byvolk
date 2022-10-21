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
						<ClientOnly>
							<Teleport
								:to="
									useMediaQuery('(max-width: 771px)').value
										? '.print__wrapper'
										: '.print__left'
								"
							>
								<div class="print__faq">
									<Dropdown>
										<template #head>
											<h5>Printing & Framing</h5>
										</template>
										<template #body>
											<p>
												Lorem, ipsum dolor sit amet consectetur adipisicing
												elit. Sapiente, dignissimos.Lorem, ipsum dolor sit amet
												consectetur adipisicing elit. Sapiente,
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
							</Teleport>
						</ClientOnly>
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
									<IconsHearth></IconsHearth>
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
										})
									"
								>
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
		<sectionPrints :handle="data.productByHandle.id"></sectionPrints>
	</div>
</template>

<script setup>
	import { useCartStore } from '../../../store/cart'

	const { share, isSupported } = useShare()
	const { slug } = useRoute().params

	const { data } = await useAsyncGql({
		operation: 'ProductByHandle',
		variables: {
			handle: slug,
		},
	})

	const frameVal = ref(data.value.productByHandle.options[0].values[0])
	const sizeVal = ref(data.value.productByHandle.options[1].values[0])
	const currentProductVariant = ref(null)

	await useHead({
		title: data.value?.productByHandle?.title + ' - byvolk',
		meta: [
			{
				name: 'description',
				content: data.value?.productByHandle?.description,
			},
		],
	})

	asyncComputed(() => {
		data.value.productByHandle.variants.edges.find((el) => {
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
</script>
