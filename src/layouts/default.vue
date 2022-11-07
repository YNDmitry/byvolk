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
	useState('locale', () => 'default')

	const { data: footer } = await useAsyncData('footer', () => {
		return useStoryblokApi().get(
			'cdn/datasource_entries?datasource=footer-links',
			{
				version: 'published',
			}
		)
	})
</script>
