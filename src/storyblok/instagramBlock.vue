<template>
	<section class="section-instagram" v-editable="blok">
		<div class="container">
			<h2 v-if="blok.headline" class="up">{{ blok.headline }}</h2>
			<div
				class="instagram__photos"
			>
				<NuxtLink
					class="instagram__photos-item up"
					to="https://www.instagram.com/byvolk/" 
					target="_blank"
					v-for="item in blok.instagramImages"
					:key="item.id"
				>
					<NuxtPicture
						provider="storyblok"
						quality="30"
						:src="item?.filename"
						:modifiers="{ smart: true }"
						width="350"
						loading="lazy"
					/>
				</NuxtLink>
			</div>
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

	let loop = ref(true)
	let swiper = ref(null)

	function update() {
		loop.value = false
		loop.value = true
		swiper.value = null
	}
</script>
