<template>
	<section v-editable="blok" class="section-grid">
		<div class="container">
			<div class="cards-grid">
				<GridCard
					v-for="card in blok.cards"
					:key="card"
					:content="card"
				></GridCard>
			</div>
		</div>
	</section>
</template>

<script setup>
	import { gsap, Power1 } from 'gsap'
	import { ScrollTrigger } from 'gsap/ScrollTrigger'

	const props = defineProps({
		blok: {
			type: Object,
			default: () => ({}),
		},
	})

	const animInit = () => {
		const cardsTimeline = gsap.timeline({
			scrollTrigger: {
				trigger: '.cards-grid',
				start: 'top 100%',
				once: true,
			},
		})
		gsap.utils.toArray('.grid-card').forEach((el) => {
			gsap.set(el, {
				css: {
					translateY: '70px',
					opacity: 0,
				},
			})
		})
		gsap.utils.toArray('.grid-card').forEach((el) => {
			cardsTimeline.to(el, {
				css: {
					translateY: '0px',
					opacity: 1,
				},
				duration: 1,
				ease: Power1.easeOut,
			})
		})
	}

	useNuxtApp().hook('app:beforeMount', () => {
		// gsap.registerPlugin(ScrollTrigger)
		gsap.utils.toArray('.grid-card').forEach((el) => {
			gsap.set(el, {
				css: {
					translateY: '70px',
					opacity: 0,
				},
			})
		})
		return animInit()
	})

	useNuxtApp().hook('page:finish', () => {
		return animInit()
	})

	useNuxtApp().hook('page:transition:finish', () => {
		return animInit()
	})
</script>
