<template>
	<section class="section-instagram" v-editable="blok">
		<div class="container">
			<h2 v-if="blok.headline">{{ blok.headline }}</h2>
			<Swiper
				class="instagram__photos"
				:modules="[SwiperAutoplay]"
				:loop="true"
				:slides-per-view="3"
				:space-between="35"
				:autoplay="{ delay: 1, disableOnInteraction: true }"
				:speed="8000"
				:allowTouchMove="false"
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
							alt=""
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

<style lang="scss">
	.section-instagram {
		padding-top: 96px;
		overflow: hidden;

		& .swiper-wrapper {
			transition-timing-function: linear !important;
		}

		& .instagram__photos {
			margin-top: 64px;
			height: 350px;
			overflow: visible;

			&-item {
				display: flex;
				& a {
					width: 100%;
				}
				& img {
					width: 100%;
					height: 100%;
					object-fit: cover;
					pointer-events: none;

					&::selection {
						pointer-events: none;
					}
				}
			}
		}
	}
</style>
