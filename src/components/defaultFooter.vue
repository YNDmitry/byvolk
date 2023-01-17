<template>
	<footer class="footer fade">
		<div class="container">
			<div class="footer__grid">
				<div class="footer__soc">
					<NuxtLink
						class="footer__soc-link"
						to="https://www.instagram.com/byvolk/"
						target="_blank"
						aria-label="Instagram link"
					>
						<IconsSocialInstagram></IconsSocialInstagram>
					</NuxtLink>
					<NuxtLink
						class="footer__soc-link"
						target="_blank"
						aria-label="WhatsApp link"
						href="https://wa.me/message/FB7YI2TL5L6WC1"
					>
						<IconsSocialWhatsapp></IconsSocialWhatsapp>
					</NuxtLink>
					<NuxtLink
						class="footer__soc-link"
						to="mailto:info@byvolk.com"
						aria-label="Email link"
					>
						<IconsSocialEmail></IconsSocialEmail>
					</NuxtLink>
				</div>
			</div>
		</div>
		<div class="footer__links-wrapper">
			<div class="container">
				<div class="footer__links-grid">
					<a
						href="https://www.trustpilot.com/review/byvolk.com"
						class="footer__trustpilot"
						target="_blank"
					>
						<img src="/trustpilot.png" width="150" />
					</a>
					<ul class="footer__links list-unstyled">
						<li
							v-for="link in data.data.datasource_entries.slice(
								0,
								data.data.datasource_entries.length / 2
							)"
							:key="link.id"
						>
							<NuxtLink :to="link.value" class="footer__link">
								{{ link.name }}
							</NuxtLink>
						</li>
						<li class="footer__link center">
							© 2022 VOLK | ALL RIGHTS RESERVED
						</li>
						<li
							v-for="link in data.data.datasource_entries.slice(
								data.data.datasource_entries.length / 2,
								data.data.datasource_entries.length
							)"
							:key="link.id"
						>
							<NuxtLink :to="link.value" class="footer__link">
								{{ link.name }}
							</NuxtLink>
						</li>
					</ul>
					<div class="footer__payments">
						<IconsApplePay></IconsApplePay>
						<IconsPaypal></IconsPaypal>
						<IconsKlarna></IconsKlarna>
					</div>
				</div>
			</div>
		</div>
	</footer>
</template>

<script setup>
	const { data } = await useAsyncData('footer', () => {
		return useStoryblokApi().get(
			'cdn/datasource_entries?datasource=footer-links',
			{
				version: 'published',
			}
		)
	})
</script>
