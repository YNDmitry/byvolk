<template>
	<section
		class="contact-hero"
		v-editable="blok"
		:style="`background-image:url(${blok.backgroundImage.filename})`"
	>
		<div class="contact-hero__container">
			<div class="contact-hero__social">
				<NuxtLink
					class="contact-hero__social-link"
					to="https://www.instagram.com/byvolk/"
					target="_blank"
				>
					<IconsSocialInstagram width="50" height="50"></IconsSocialInstagram>
				</NuxtLink>
				<NuxtLink class="contact-hero__social-link" target="_blank">
					<IconsSocialWhatsapp width="50" height="50"></IconsSocialWhatsapp>
				</NuxtLink>
				<NuxtLink class="contact-hero__social-link" to="mailto:info@byvolk.com">
					<IconsSocialEmail width="50" height="50"></IconsSocialEmail>
				</NuxtLink>
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
