<template>
	<section class="slider" v-editable="blok">
		<div class="container">
			<div class="slider__head">
				<h2 v-if="blok.headline" class="up">{{ blok.headline }}</h2>
				<div class="slider__nav">
					<button
						type="button"
						id="community-prev"
						class="slider__nav-button is-prev up"
						ref="leftArr"
					>
						<IconsArrowRight></IconsArrowRight>
					</button>
					<button
						type="button"
						id="community-next"
						class="slider__nav-button is-next up"
						ref="rightArr"
					>
						<IconsArrowRight></IconsArrowRight>
					</button>
					<div class="slider__head-button up">
						<a
							:href="item.link.cached_url"
							v-for="item in blok.button"
							:key="item"
							:class="`button-${item.buttonType}`"
							target="_blank"
							>{{ item.title }}</a
						>
					</div>
				</div>
			</div>
			<Swiper
				:modules="[Navigation]"
				:slides-per-view="'auto'"
				:centered-slides="true"
				:space-between="35"
				:loop="true"
				:grabCursor="true"
				:navigation="{
					nextEl: rightArr,
					prevEl: leftArr,
				}"
				class="slider__slider mt-large"
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
	import { Navigation } from 'swiper'
	const props = defineProps({
		blok: {
			type: Object,
			default: () => ({}),
		},
	})

	const leftArr = ref(null)
	const rightArr = ref(null)
</script>
