<template>
	<div class="grid-card">
		<div 
			class="grid-card__picture-wrapper" 
			:class="imgEffect"
		>
			<img
				:src="content.image.filename"
				width="700"
				class="grid-card__picture"
			/>
		</div>
		<div class="grid-card__info up">
			<h3 v-if="content.headline">{{ content.headline }}</h3>
			<h4 v-if="content.headline2">{{ content.headline2 }}</h4>
			<div v-html="richtext" v-if="richtext" class="grid-card__rich"></div>
		</div>
	</div>
</template>

<script setup>
	import { gsap } from 'gsap'
	
	const props = defineProps({
		content: {
			type: Object,
			required: true,
			default: () => ({}),
		},
	})

	const isMobile = computed(() => {
		if (useMediaQuery('(max-width: 769px)').value) {
			return false
		}
		return true
	})
	const imgEffect = computed(() => isMobile ? 'parallax' : 'up')

	const richtext = computed(() => renderRichText(props.content.description))
	const opacity = computed(() => Number(props.content.imageOpacity)).value

	useNuxtApp().hook('page:finish', () => {
		setTimeout(() => {	
			gsap.utils.toArray('.parallax').forEach(el => {
				gsap.to(el, {
					scrollTrigger: {
						trigger: el,
						start: 'bottom 80%',
						scrub: 1
					},
					translateY: 80,
					opacity: 0
				})
			})
		}, 400)
	})
</script>
