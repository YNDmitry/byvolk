<template>
	<section v-editable="blok" class="gallery">
		<div class="container">
			<h2 class="text-center up" v-if="blok.Heading">{{ blok.Heading }}</h2>
			<Swiper
				:slides-per-view="3"
				:space-between="30"
				:breakpoints="{
					770: {
						slidesPerView: 3,
					},
					220: {
						slidesPerView: 'auto',
					},
				}"
				class="gallery__wrapper mt-medium"
			>
				<SwiperSlide v-for="img in blok.galleryBlocks" :key="img">
					<GalleryItem :img="img.img.filename"></GalleryItem>
				</SwiperSlide>
			</Swiper>
		</div>
	</section>
</template>

<script setup>
	const props = defineProps({
		blok: {
			type: Object,
			default: () => {},
		},
	})
</script>

<style lang="scss" src="../assets/scss/components/_gallery.scss"></style>
