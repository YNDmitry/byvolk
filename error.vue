<template>
	<div>
		<h1>{{ error.message }}</h1>
		<h1>{{ error.statusCode }}</h1>
	</div>
</template>

<script setup>
	defineProps({
		error: Object,
	})
</script>
