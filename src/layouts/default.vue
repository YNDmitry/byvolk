<template>
	<main class="main">
		<DefaultHeader></DefaultHeader>
		<slot></slot>
		<DefaultFooter></DefaultFooter>
		<PopupCart></PopupCart>
	</main>
</template>

<script setup>
	await preloadComponents(['DefaultHeader'])

	useNuxtApp().hook('page:transition:finish', () => {
		window.scrollTo(0, 0)
	})
</script>
