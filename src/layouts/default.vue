<template>
	<main class="main">
		<LazyNuxtLoadingIndicator></LazyNuxtLoadingIndicator>
		<DefaultBanner></DefaultBanner>
		<DefaultHeader></DefaultHeader>
		<slot></slot>
		<DefaultFooter></DefaultFooter>
		<PopupCart></PopupCart>
	</main>
</template>

<script setup>
	await preloadComponents(['DefaultHeader'])

	useNuxtApp().hook('page:finish', () => {
		window.scrollTo(0, 0);
  })
</script>
