<template>
	<section
		class="contact-hero"
		v-editable="blok"
		:style="`background-image:url(${blok.backgroundImage.filename})`"
	>
		<div class="contact-hero__container">
			<h5>{{ blok.email }}</h5>
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
