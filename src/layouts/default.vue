<template>
	<main class="main">
		<NuxtLoadingIndicator></NuxtLoadingIndicator>
		<DefaultBanner></DefaultBanner>
		<DefaultHeader></DefaultHeader>
		<slot></slot>
		<DefaultFooter :data="footer.data"></DefaultFooter>
		<PopupCart></PopupCart>
		<!-- <PopupCookie></PopupCookie> -->
	</main>
</template>

<script setup>
	await preloadComponents(['DefaultHeader'])

	const { data: footer } = await useAsyncData('footer', () => {
		return useStoryblokApi().get(
			'cdn/datasource_entries?datasource=footer-links',
			{
				version: 'published',
			}
		)
	})

	useNuxtApp().hook('page:finish', () => {
		window.scrollTo(0, 0);
  })
</script>
