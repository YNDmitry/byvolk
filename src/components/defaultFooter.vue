<template>
	<footer class="footer">
		<div class="container">
			<div class="footer__grid">
				<FormNewsletter title="Subscribe for the latest news, print releases and limited drops" class="up"></FormNewsletter>
				<img src="/footer-img.png" width="317" class="footer__img up">
				<div class="footer__soc up">
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
				<ul class="footer__links list-unstyled up">
					<li 
						v-for="link in data.data.datasource_entries.slice(0, (data.data.datasource_entries.length / 2))" 
						:key="link.id"
					>
						<NuxtLink :to="link.value" class="footer__link">
							{{ link.name }}
						</NuxtLink>
					</li>
					<div class="footer__link center">© 2022 VOLK | ALL RIGHTS RESERVED</div>
					<li 
						v-for="link in data.data.datasource_entries.slice((data.data.datasource_entries.length / 2), data.data.datasource_entries.length)" 
						:key="link.id"
					>
						<NuxtLink :to="link.value" class="footer__link">
							{{ link.name }}
						</NuxtLink>
					</li>
				</ul>
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
