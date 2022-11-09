<template>
	<section
		class="contact-hero"
		v-editable="blok"
		:style="{
			'background-image': isPhoneScreen.value
				? `url(${mobileBgImg})`
				: `url(${deskBgImg})`,
		}"
	>
		<div class="contact-hero__container">
			<div class="contact-hero__social">
				<div class="up">
					<NuxtLink
						class="contact-hero__social-link"
						to="https://www.instagram.com/byvolk/"
						target="_blank"
					>
						<IconsSocialInstagram width="50" height="50"></IconsSocialInstagram>
					</NuxtLink>
				</div>
				<div class="up">
					<NuxtLink class="contact-hero__social-link" target="_blank">
						<IconsSocialWhatsapp width="50" height="50"></IconsSocialWhatsapp>
					</NuxtLink>
				</div>
				<div class="up">
					<NuxtLink class="contact-hero__social-link" to="mailto:info@byvolk.com">
						<IconsSocialEmail width="50" height="50"></IconsSocialEmail>
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

	const isPhoneScreen = useMediaQuery('(max-width: 771px)')
	const deskBgImg = props.blok.backgroundImage.filename
	const mobileBgImg = props.blok.mobileBackgroundImage.filename
</script>
