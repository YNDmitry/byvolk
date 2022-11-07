<template>
	<section class="section-hero-main" v-editable="blok">
		<div class="hero-main__img-wrapper">
			<NuxtPicture
				:src="blok.bgImage?.filename"
				v-if="blok.bgImage"
				provider="storyblok"
				quality="70"
				class="hero-main__img"
			></NuxtPicture>
		</div>
		<div class="container">
			<div class="hero-main__content">
				<div class="hero-main__info">
					<h1 v-if="blok.headline" class="g-up">{{ blok.headline }}</h1>
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
									</NuxtLink>
								</template>
							</div>
							<div class="hero-main__stars" v-if="blok.reviewsCount > 1">
								<NuxtImg src="stars.svg"></NuxtImg>
								<span>Rated Excellent ({{ blok.reviewsCount }}+ Reviews)</span>
							</div>
						</div>
					</div>
				</div>
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
