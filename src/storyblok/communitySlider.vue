<template>
	<section class="slider" v-editable="blok" id="community">
		<div class="container">
			<div class="slider__head">
				<button
					type="button"
					aria-label="Community slider arrow prev"
					id="community-prev"
					class="slider__nav-button is-prev up"
					ref="leftArr"
				>
					<IconsArrowRight></IconsArrowRight>
				</button>
				<h2 v-if="blok.headline" class="up">{{ blok.headline }}</h2>
				<button
					type="button"
					aria-label="Community slider arrow next"
					id="community-next"
					class="slider__nav-button is-next up"
					ref="rightArr"
				>
					<IconsArrowRight></IconsArrowRight>
				</button>
			</div>
			<Swiper
				:modules="[SwiperNavigation]"
				:slides-per-view="'auto'"
				:centered-slides="true"
				:space-between="35"
				:loop="true"
				:grabCursor="true"
				:navigation="{
					nextEl: rightArr,
					prevEl: leftArr,
				}"
				class="slider__slider mt-medium"
			>
				<SwiperSlide
					v-for="slide in blok.communitySlides"
					:key="slide._uid"
					class="slider__slider-slide"
				>
					<CommunitySlide :content="slide" class="up"></CommunitySlide>
				</SwiperSlide>
			</Swiper>
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

	const leftArr = ref(null)
	const rightArr = ref(null)
</script>

<style lang="scss" src="assets/scss/components/_communitySlider.scss"></style>
