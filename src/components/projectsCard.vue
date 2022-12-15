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
						width="500"
					></NuxtPicture>
				</SwiperSlide>
			</Swiper>
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
