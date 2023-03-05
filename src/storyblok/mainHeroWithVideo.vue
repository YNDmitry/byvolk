<template>
	<section v-editable="blok" class="section-hero-main section-hero-main--video">
		<Video
			:video-src="blok.video.filename"
			v-if="blok.video?.filename"
			class="section-hero-main__bg-video fade"
		/>
		<div class="container text-center">
			<div class="hero-main__info-600 up">
				<h1 v-if="blok.headline" class="h-bebas">{{ blok.headline }}</h1>
				<div class="hero-main__body" v-if="blok.body" v-html="richtext"></div>
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
									v-if="button.image?.filename"
									:src="button.image.filename"
									width="172"
								></NuxtImg>
							</NuxtLink>
						</template>
					</div>
				</div>
			</div>
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

	const richtext = computed(() => renderRichText(props.blok.body))
</script>
