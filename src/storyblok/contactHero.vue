<template>
	<section
		class="contact-hero"
		v-editable="blok"
	>
		<div class="contact-hero__container">
			<div class="contact-hero__social">
				<NuxtLink class="contact-hero__social-link up" target="_blank">
					<IconsSocialWhatsapp width="50" height="50"></IconsSocialWhatsapp>
				</NuxtLink>
				<NuxtLink class="contact-hero__link up" to="https://www.instagram.com/byvolk/" target="_blank">
					<div>@BYVOLK</div>
				</NuxtLink>
				<NuxtLink class="contact-hero__link up" to="mailto:info@byvolk.com">
					<div>info@byvolk.com</div>
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
</script>
