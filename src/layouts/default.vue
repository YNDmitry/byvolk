<template>
	<main class="main">
		<NuxtLoadingIndicator />
		<DefaultBanner></DefaultBanner>
		<DefaultHeader :data="menu.data"></DefaultHeader>
		<slot></slot>
		<DefaultFooter :data="footer.data"></DefaultFooter>
		<PopupCart></PopupCart>
		<!-- <PopupCookie></PopupCookie> -->
	</main>
</template>

<script setup>
	useState('locale', () => 'default')

	const { data: menu } = await useAsyncData('menu', async () => {
		return await useStoryblokApi().get(
			'cdn/datasource_entries?datasource=menu-links',
			{
				version: 'published',
			}
		)
	})

	const { data: footer } = await useAsyncData('footer', async () => {
		return await useStoryblokApi().get(
			'cdn/datasource_entries?datasource=footer-links',
			{
				version: 'published',
			}
		)
	})
</script>
