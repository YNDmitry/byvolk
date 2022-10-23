<template>
	<div class="product-input">
		<div
			class="product-input__button"
			:disabled="isDisabled"
			@click="!isDisabled ? emit('decrement') : ''"
		>
			-
		</div>
		<div>{{ props.value }}</div>
		<div class="product-input__button" @click="emit('increment')">+</div>
	</div>
</template>

<script setup>
	const props = defineProps({
		value: {
			type: Number,
			default: 1,
		},
	})

	const emit = defineEmits(['increment', 'decrement'])

	const isDisabled = computed(() => (props.value > 1 ? false : true))
</script>
