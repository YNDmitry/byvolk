<template>
	<section class="section-instagram" v-editable="blok">
		<div class="container">
			<h2 v-if="blok.headline" class="up">{{ blok.headline }}</h2>
			<div 
				class="instagram__photos" 
			>
				<div 
					v-for="item in blok.instagramImages"
					:key="item"
					class="instagram__photos-item"
				>
					<NuxtLink
						class="up"
						to="https://www.instagram.com/byvolk/" 
						target="_blank"
					>
						<img
							:src="item?.filename + '/m/filters:quality(10)'"
							width="350"
							loading="lazy"
						/>
					</NuxtLink>
				</div>
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

	const isMobile = computed(() => {
		if (useMediaQuery('(max-width: 479px)').value) {
			return false
		}
		return true
	})
</script>
