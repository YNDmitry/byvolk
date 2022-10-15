<template>
	<main class="main">
		<NuxtLoadingIndicator />
		<default-banner></default-banner>
		<default-header></default-header>
		<slot></slot>
		<default-footer></default-footer>
		<popup-cart></popup-cart>
	</main>
</template>

<script setup>
	useState('locale', () => 'default')
</script>
