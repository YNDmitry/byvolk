<template>
	<section class="slider" v-editable="blok">
		<div class="container">
			<div class="slider__head">
				<h2>{{ blok.headline }}</h2>
				<div class="slider__nav">
					<div class="slider__nav-button is-prev">
						<IconsArrowRight></IconsArrowRight>
					</div>
					<div class="slider__nav-button is-next">
						<IconsArrowRight></IconsArrowRight>
					</div>
					<div class="slider__head-button">
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
				:slides-per-view="3"
				:space-between="35"
				class="slider__slider mt-large"
			>
				<SwiperSlide v-for="slide in blok.communitySlides" :key="slide._uid">
					<CommunitySlide :content="slide"></CommunitySlide>
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
</script>
