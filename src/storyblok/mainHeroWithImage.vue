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
									</NuxtLink>
								</template>
							</div>
							<NuxtLink
								to="#community"
								class="hero-main__stars"
								v-if="blok.reviewsCount > 1"
							>
								<img src="/stars.svg" />
								<span>Rated Excellent ({{ blok.reviewsCount }}+ Reviews)</span>
							</NuxtLink>
						</div>
					</div>
				</div>
				<NuxtPicture
					:src="blok?.image?.filename"
					provider="storyblok"
					width="720"
					v-if="blok?.image"
					class="hero-main__img fade"
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
