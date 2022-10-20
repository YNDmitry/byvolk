<template>
	<div class="product-input">
		<div class="product-input__button">-</div>
		<div>{{ value }}</div>
		<div class="product-input__button">+</div>
	</div>
</template>

<script setup>
	const props = defineProps({
		value: {
			type: Number,
			default: 1,
		},
	})
</script>
