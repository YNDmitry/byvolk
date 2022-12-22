<template>
	<section class="section-instagram" v-editable="blok">
		<div class="container">
			<h2 v-if="blok.headline" class="up">{{ blok.headline }}</h2>
			<Swiper
				class="instagram__photos"
				:slides-per-view="'auto'"
				:space-between="35"
				:class="blok.headline.length === 0 ? '' : 'mt-medium'"
			>
				<SwiperSlide v-for="item in blok.cards" :key="item">
					<NuxtLink
						to="https://www.instagram.com/byvolk/"
						target="_blank"
						class="instagram__photos-item up"
					>
						<div class="instagram__photos-item-head">
							<div class="instagram__photos-item-info">
								<div class="instagram__photos-item-avatar">
									<NuxtImg
										provider="storyblok"
										:src="item.avatar.filename"
										v-if="item.avatar.filename"
										width="30"
										height="30"
										loading="lazy"
										alt="Instagram avatar"
									></NuxtImg>
								</div>
								<div class="instagram__photos-item-user">
									<div v-if="item.name">{{ item.name }}</div>
									<div v-if="item.nickname">{{ item.nickname }}</div>
								</div>
							</div>
							<IconsMore class="instagram__photos-item-head-icon"></IconsMore>
						</div>
						<div class="instagram__photos-item-img-wrapper">
							<NuxtPicture
								:src="item?.image.filename"
								provider="storyblok"
								loading="lazy"
								v-if="item?.image"
								alt="Instagram picture"
								sizes="xs:100vw sm:100vw md:100vw lg:100vw xl:100vw xxl:100vw 2xl:100vw"
							></NuxtPicture>
						</div>
					</NuxtLink>
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

	const isMobile = computed(() => {
		if (useMediaQuery('(max-width: 479px)').value) {
			return false
		}
		return true
	})
</script>
