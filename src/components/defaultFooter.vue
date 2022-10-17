<template>
	<footer class="footer">
		<div class="container">
			<div class="footer__grid">
				<div class="footer__first">
					<NuxtLink to="/">
						<IconsLogo :width="150" :height="102.87"></IconsLogo>
					</NuxtLink>
				</div>
				<ul class="footer__links list-unstyled">
					<li v-for="link in data.data.datasource_entries" :key="link.id">
						<NuxtLink :to="link.value" class="footer__link">
							{{ link.name }}
						</NuxtLink>
					</li>
				</ul>
				<div class="footer__last">
					<FormNewsletter title="Subscribe for spam"></FormNewsletter>

					<div class="footer__soc-wrapper">
						<h5>Connect</h5>
						<div class="footer__soc">
							<NuxtLink
								class="footer__soc-link"
								to="https://www.instagram.com/byvolk/"
								target="_blank"
							>
								<IconsSocialInstagram></IconsSocialInstagram>
							</NuxtLink>
							<NuxtLink class="footer__soc-link" target="_blank">
								<IconsSocialWhatsapp></IconsSocialWhatsapp>
							</NuxtLink>
							<NuxtLink class="footer__soc-link" to="mailto:info@byvolk.com">
								<IconsSocialEmail></IconsSocialEmail>
							</NuxtLink>
						</div>
					</div>

					<!-- <div class="footer__lang-select"><div>ENG</div></div> -->
				</div>
			</div>
			<div class="footer__bottom">
				<div class="footer__bottom-copy">© 2022 VOLK</div>
				<div class="footer__payments">
					<IconsVisa></IconsVisa>
					<IconsMastercard></IconsMastercard>
					<IconsApplePay></IconsApplePay>
					<IconsGooglePay></IconsGooglePay>
					<IconsPaypal></IconsPaypal>
				</div>
			</div>
		</div>
	</footer>
</template>

<script setup>
	const socLinks = [
		{
			label: 'instagram',
			path: 'https://www.instagram.com/byvolk/',
		},
		{
			label: 'whatsapp',
			path: '',
		},
		{
			label: 'email',
			path: 'mailto:info@byvolk.com',
		},
	]

	const { data } = await useAsyncData('footer', async () => {
		return await useStoryblokApi().get(
			'cdn/datasource_entries?datasource=footer-links',
			{
				version: 'published',
			}
		)
	})
</script>
