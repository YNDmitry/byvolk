<template>
	<section class="section-instagram" v-editable="blok">
		<div class="container">
			<h2 v-if="blok.headline">{{ blok.headline }}</h2>
			<LazyClientOnly>
				<Swiper
					class="instagram__photos"
					ref="swiper"
					:modules="[SwiperAutoplay]"
					:loop="loop"
					:slides-per-view="'auto'"
					:space-between="35"
					:autoplay="{ delay: 1, disableOnInteraction: false }"
					:speed="8000"
					:centeredSlides="true"
					@init="update()"
				>
					<SwiperSlide
						class="instagram__photos-item"
						v-for="item in blok.instagram_images"
						:key="item.id"
					>
						<NuxtLink to="https://www.instagram.com/byvolk/" target="_blank">
							<NuxtPicture
								provider="storyblok"
								quality="30"
								:src="item?.filename"
								:modifiers="{ smart: true }"
								width="350"
								loading="lazy"
							/>
						</NuxtLink>
					</SwiperSlide>
				</Swiper>
			</LazyClientOnly>
		</div>
	</section>
</template>

<script setup>
	const props = defineProps({
		blok: {
			type: Object,
			default: () => ({}),
		},
	})

	let loop = ref(true)
	let swiper = ref(null)

	function update() {
		loop.value = false
		loop.value = true
		swiper.value = null
	}
</script>
