<template>
	<section class="section-hero-main" v-editable="blok">
		<div class="container">
			<div class="hero-main__content">
				<div class="hero-main__info up">
					<h1 v-if="blok.headline">{{ blok.headline }}</h1>
					<div class="hero-main__body">
						<p v-if="blok.description" class="hero-main__p">
							{{ blok.description }}
						</p>
						<div class="hero-main__footer">
							<div class="hero-main__info-buttons">
								<template v-if="blok.buttons.length > 0">
									<NuxtLink
										:class="`button-${button.buttonType}`"
										v-for="button in blok.buttons"
										:key="button"
										:to="button.link.cached_url"
									>
										{{ button.title }}
										<NuxtImg
											v-if="button?.image"
											:src="button.image.filename"
											width="150"
										></NuxtImg>
									</NuxtLink>
								</template>
							</div>
							<NuxtLink
								to="#community"
								class="hero-main__stars"
								v-if="blok.reviewsCount > 1"
							>
								<img src="/stars.svg" alt="Rated excellent - 5 stars" />
								<span>Rated Excellent ({{ blok.reviewsCount }}+ Reviews)</span>
							</NuxtLink>
						</div>
					</div>
				</div>
				<NuxtPicture
					:src="blok?.image?.filename"
					provider="storyblok"
					v-if="blok?.image"
					class="hero-main__img fade"
					:alt="blok?.image?.alt || 'Main image'"
					sizes="xs:100vw sm:100vw md:100vw lg:100vw xl:100vw xxl:100vw 2xl:100vw"
					preload
				></NuxtPicture>
			</div>
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
