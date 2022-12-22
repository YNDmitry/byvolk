<template>
	<div class="projects__card">
		<div class="projects__card-info up" v-html="body"></div>
		<div
			class="projects__card-slider-wrapper up"
			:style="{
				maxWidth: width + 'px',
				height: height + 'px',
			}"
		>
			<button
				type="button"
				class="slider__nav-button is-prev"
				id="arrow-next"
				ref="arrowNext"
			>
				<IconsArrowRight></IconsArrowRight>
			</button>
			<Swiper
				class="projects__card-slider"
				:modules="[SwiperAutoplay, SwiperNavigation]"
				:loop="loop"
				:autoplay="{
					delay: 3000,
					disableOnInteraction: false,
				}"
				:navigation="{
					nextEl: arrowNext,
					prevEl: arrowPrev,
				}"
			>
				<SwiperSlide v-for="img in images" :key="img">
					<NuxtPicture
						provider="storyblok"
						:src="img.filename"
						sizes="xs:100vw sm:100vw md:100vw lg:100vw xl:100vw xxl:100vw 2xl:100vw"
					></NuxtPicture>
				</SwiperSlide>
			</Swiper>
			<button
				type="button"
				class="slider__nav-button is-next"
				id="arrow-prev"
				ref="arrowPrev"
			>
				<IconsArrowRight></IconsArrowRight>
			</button>
		</div>
	</div>
</template>

<script setup>
	const props = defineProps({
		images: {
			type: Array,
		},
		body: {
			type: String,
		},
		width: {
			type: String,
		},
		height: {
			type: String,
		},
	})

	const loop = ref(true)
	const arrowNext = ref(null)
	const arrowPrev = ref(null)
</script>
