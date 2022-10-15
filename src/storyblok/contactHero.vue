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

<style lang="scss">
	.contact-hero {
		min-height: 80vh;
		padding: 10vh 80px;
		display: flex;
		align-items: center;
		background-position: 50% 50%;
		background-repeat: no-repeat;
		background-size: 80%;

		&__container {
			display: inline-block;
			margin: 0 auto;
		}
	}
</style>
