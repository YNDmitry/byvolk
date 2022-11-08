<template>
	<main class="main">
		<NuxtLoadingIndicator></NuxtLoadingIndicator>
		<AppPreloader></AppPreloader>
		<DefaultBanner></DefaultBanner>
		<DefaultHeader></DefaultHeader>
		<slot></slot>
		<DefaultFooter :data="footer.data"></DefaultFooter>
		<PopupCart></PopupCart>
		<!-- <PopupCookie></PopupCookie> -->
	</main>
</template>

<script setup>
	await preloadComponents('AppPreloader')

	const { data: footer } = await useAsyncData('footer', () => {
		return useStoryblokApi().get(
			'cdn/datasource_entries?datasource=footer-links',
			{
				version: 'published',
			}
		)
	})
</script>
