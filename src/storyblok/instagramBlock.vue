<template>
	<section class="section-instagram" v-editable="blok">
		<div class="container">
			<h2 v-if="blok.headline">{{ blok.headline }}</h2>
			<Swiper
				class="instagram__photos"
				:modules="[SwiperAutoplay]"
				:loop="true"
				:slides-per-view="'auto'"
				:space-between="35"
				:autoplay="{ delay: 1, disableOnInteraction: false }"
				:speed="8000"
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
		</div>
	</section>
</template>

<script setup>
	defineProps({
		blok: {
			type: Object,
			default: () => ({}),
		},
	})
</script>
